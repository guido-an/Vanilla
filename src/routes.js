const path = require('path');
//add page route here
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/next-page',
    component: path.resolve(`src/pages/page-2.js`)
  },
  {
    path: '/pagina-successiva',
    component: path.resolve(`src/pages/page-2.js`)
  },
  //get-started
  {
    path: '/get-started',
    component: path.resolve(`src/pages/get-started.js`)
  },
  {
    path: '/get-started',
    component: path.resolve(`src/pages/get-started.js`)
  },
  {
    path: '/get-started',
    component: path.resolve(`src/pages/get-started.js`)
  },

  {
    path: '/page-suivante',
    component: path.resolve(`src/pages/page-2.js`)
  },
];