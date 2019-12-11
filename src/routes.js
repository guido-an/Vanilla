const path = require('path');
//add page route here
module.exports = [
  //HOME
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  //GET STARTED
  {
    path: '/richiedi-un-preventivo',
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
  //ABOUT
  {
    path: '/chi-siamo',
    component: path.resolve(`src/pages/about.js`)
  },
  {
    path: '/about',
    component: path.resolve(`src/pages/about.js`)
  },
  {
    path: '/about',
    component: path.resolve(`src/pages/about.js`)
  },
   //CONTACT
   {
    path: '/contatti',
    component: path.resolve(`src/pages/contact.js`)
  },
  {
    path: '/contact',
    component: path.resolve(`src/pages/contact.js`)
  },
  {
    path: '/contact',
    component: path.resolve(`src/pages/contact.js`)
  }
];