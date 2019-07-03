// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from './framework7-custom.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import CordovaApp from './cordova-app.js'

// Import Framework7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.vue';

import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

import Routes from './routes.js'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);
Framework7.use(CordovaApp);
// import 'viewerjs/dist/viewer.css';
// import Viewer from 'v-viewer';
// Vue.use(Viewer);
import welcomescreen from 'f7-welcomescreen'

/*Framework7.use(welcomescreen);


var Welcomescreen_slides = [
{
id: 'slide0',
title: 'Slide 0', // optional
picture: '<div class="tutorialicon">♥</div>',
text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
},
{
id: 'slide1',
title: 'Slide 1', // optional
picture: '<div class="tutorialicon">✲</div>',
text: 'This is slide 2'
},
{
id: 'slide2',
title: 'Slide 2', // optional
picture: '<div class="tutorialicon">♫</div>',
text: 'This is slide 3'
},
{
id: 'slide3',
//title: 'NO TITLE',
picture: '<div class="tutorialicon">☆</div>',
text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
}
];



// Define options for welcomescreen plugin
var Options = {
'bgcolor': '#0da6ec',
'fontcolor': '#fff'
}*/

/*var app = new Framework7({
root: '#app', // or what ever your root is
name: 'welcomescreen-demo', // choose a name
welcomescreen: { // Setup welcomescreen plugin
slides: welcomescreen_slides,
options: options,
},
});*/


// Init App
new Vue({
  el: '#app',
  //render: (h) => h(App),
  template: '<app/>',

  /*framework7: {
    root: '#app',
    welcomescreen: { // Setup welcomescreen plugin
    slides: Welcomescreen_slides,
    options: Options,
    },
  },*/
  // Register App Component
  framework7: {
    root: '#app',
    dynamicNavbar: true,
    animateNavBackIcon: true,

    view: {
      main: true,
      pushState: true,
      pushStateSeparator: '#',
    },

    //Uncomment to enable Material theme:
    // material: true,
    routes: Routes
  },
  components: {
    app: App,

  },


});
