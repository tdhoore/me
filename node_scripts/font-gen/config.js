const pathToMain = './app/public/wp-content/themes/basetheme/src/';

const config = {
  pathToFontsSass: `${pathToMain}sass/defaults/_fonts.scss`,
  pathToToUpdateFonts: `${pathToMain}to_update_fonts/`,
  pathToFonts: `${pathToMain}fonts/`,
  sassFontPath: '../fonts/',
  weights: [
    {
      name: 'thin',
      weight: 100,
    },
    {
      name: 'extralight',
      weight: 200,
    },
    {
      name: 'light',
      weight: 300,
    },
    {
      name: 'semilight',
      weight: 350,
    },
    {
      name: 'normal',
      weight: 400,
    },
    {
      name: 'book',
      weight: 400,
    },
    {
      name: 'medium',
      weight: 500,
    },
    {
      name: 'semibold',
      weight: 600,
    },
    {
      name: 'bold',
      weight: 700,
    },
    {
      name: 'extrabold',
      weight: 800,
    },
    {
      name: 'black',
      weight: 900,
    },
    {
      name: 'extrablack',
      weight: 900,
    },
  ],
};

module.exports = config;
