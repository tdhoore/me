const config = require('./config');

const fs = require('fs');
const Fontmin = require('fontmin');
const ttfInfo = require('ttfinfo');

const fontmin = new Fontmin()
  .use(Fontmin.otf2ttf())
  .use(
    Fontmin.ttf2woff({
      deflate: true,
    })
  )
  .use(Fontmin.ttf2woff2())
  .src(`${config.pathToToUpdateFonts}*`)
  .dest(`${config.pathToFonts}`);

const getWeight = (style) => {
  let result = 'normal';

  config.weights.forEach((weight) => {
    if (style.toLowerCase().includes(weight.name)) {
      //set result
      result = weight.weight;
    }
  });

  return result;
};

const createFontCssFile = () => {
  let fontsCss = '';

  fs.readdir(config.pathToFonts, (err, files) => {
    if (files) {
      files.forEach((file) => {
        if (file.includes('woff2')) {
          const fileName = file.substring(0, file.indexOf('.'));

          ttfInfo(`${config.pathToFonts}/${fileName}.ttf`, (err, info) => {
            console.log(err, info);
            if (info) {
              const infoItems = info.tables.name;

              fontsCss += `
@font-face {
  font-family: '${infoItems['1']}';
  src: url('${config.sassFontPath}${fileName}.woff2') format('woff2'),
  url('${config.sassFontPath}${fileName}.woff') format('woff');
  font-weight: ${getWeight(infoItems['2'])};
  font-style: ${
    info.post ? (info.post.italicAngle !== 0 ? 'italic' : 'normal') : 'normal'
  };
}\n`;

              fs.writeFile(config.pathToFontsSass, fontsCss, (err) => {
                console.log(config.pathToFontsSass);
                if (err) {
                  console.error(err);
                  return;
                }
              });
            }
          });
        }
      });
    }
  });
};

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  }

  createFontCssFile(files);
});
