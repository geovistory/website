const copyfiles = require('copyfiles');
//  array of paths, last one is the destination path
const paths = [
  './node_modules/@ionic/core/dist/ionic/svg/ellipsis-vertical.svg',
  './node_modules/@ionic/core/dist/ionic/svg/open-outline.svg',
  './node_modules/@ionic/core/dist/ionic/svg/open.svg',
  
  // ^ add path to needed ionic icon above this line ^ 

  './public/svg',
].map((p) => __dirname + '/../' + p);

paths.forEach((p) => console.log(p));
const flat = true;
copyfiles(paths, flat, () => console.log('> copied icons'));
