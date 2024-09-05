const { generateTemplateFilesBatch } = require('generate-template-files');
const config = require('./config');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const { glob } = require('glob');
const kebabCase = require('just-kebab-case');

const watchFolders = [
  `${config.pathToStyles}1-atoms/`,
  `${config.pathToStyles}2-molecules/`,
  `${config.pathToStyles}3-organisms/`,
  `${config.pathToStyles}4-templates/`,
];

const createScssAll = (folderPath, imports) => {
  generateTemplateFilesBatch([
    {
      option: 'Create _all.scss',
      defaultCase: '(noCase)',
      entry: {
        folderPath: './node_scripts/scss-templates/templates/all',
      },
      dynamicReplacers: [{ slot: '__imports__', slotValue: imports }],
      output: {
        path: folderPath,
        pathAndFileNameDefaultCase: '(noCase)',
        overwrite: true,
      },
    },
  ]);
};

const createScss = (folderPath, name) => {
  generateTemplateFilesBatch([
    {
      option: 'Create _*.scss',
      defaultCase: '(kebabCase)',
      entry: {
        folderPath: './node_scripts/scss-templates/templates/default',
      },
      dynamicReplacers: [{ slot: '__name__', slotValue: name }],
      output: {
        path: folderPath,
        pathAndFileNameDefaultCase: '(kebabCase)',
        overwrite: true,
      },
    },
  ]);
};

//start watcher
const watcher = chokidar.watch(watchFolders, {
  persistent: true,
  ignoreInitial: true,
  depth: 0,
  ignored: /all/,
});

const updateAll = () => {
  watchFolders.forEach((folder) => {
    glob(folder + '**/*.scss', {}).then((files) => {
      let result = '';

      files.forEach((filePath) => {
        const compName = path
          .basename(filePath, path.extname(filePath))
          .replace('_', '');
        if (!compName.includes('all')) {
          result += `@import "./${compName}";\n`;
        }
      });

      createScssAll(folder, result);
    });
  });
};

watcher.on('add', (pathString) => {
  //get name
  const name = path.basename(pathString, path.extname(pathString));
  if (!name.includes('all')) {
    if (
      name &&
      !name.includes('_') &&
      !path.extname(pathString).includes('.scss')
    ) {
      fs.readFile(pathString, 'utf8', (err, data) => {
        if (data.length === 0) {
          //nothing here so remove and place template
          fs.unlink(pathString, (err, data) => {
            // add new template
            createScss(`${path.dirname(pathString)}/`, name);
          });
        } else {
          //something here so just rename
          fs.rename(
            pathString,
            pathString.replace(path.basename(pathString), `_${name}.scss`),
            (err, data) => {
              console.log(data);
            }
          );
        }
      });
    } else {
      //is new scss so add it to all
      updateAll();
    }
  }
});

watcher.on('unlink', (pathString) => {
  const name = path.basename(pathString, path.extname(pathString));
  if (name.includes('_') && path.extname(pathString).includes('.scss')) {
    //is a correct item that is deleted so update the imports
    updateAll();
  }
});

//init update
updateAll();
