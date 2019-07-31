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
import Blog from '../pages/map1.vue';

import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

import Routes from './routes.js'
import VueInstagram from 'vue-instagram'
import VueOffline from 'vue-offline'



// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);
Vue.use(VueInstagram);
Vue.use(VueOffline);



// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
//  template: '<app/>',

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
