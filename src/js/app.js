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

// import 'viewerjs/dist/viewer.css';
// import Viewer from 'v-viewer';
// Vue.use(Viewer);
//import welcomescreen from 'f7-welcomescreen'

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
//  template: '<app/>',

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
