// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from './framework7-custom.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.vue';

import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

//import welcomescreen
import welcomescreen from 'f7-welcomescreen';

var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<img src="static/offlogo.png" class ="logo">'
  },
  {
    id: 'slide1',
    // title: 'Slide 1', // optional
    picture: '<img src="static/dos:donts.jpg" class="dosdonts">',
    // text: 'This is slide 2'
  }
];
  Framework7.use(welcomescreen);

// Define options for welcomescreen plugin
var options = {
  'bgcolor': '#	#FFFFFF',
  'fontcolor': '#fdc35b'
}

var app = new Framework7({
  root: '#app', // or what ever your root is
  name: 'welcomescreen-demo', // choose a name
  welcomescreen: { // Setup welcomescreen plugin
    slides: welcomescreen_slides,
    options: options,
  },
});

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),

  // Register App Component
  components: {
    app: App
  },
});
