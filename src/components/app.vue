<template>
<f7-app :params="f7params" >
  <!-- Status bar overlay for fullscreen mode-->
  <f7-statusbar></f7-statusbar>

  <!-- Left panel with cover effect-->

  <f7-panel left cover theme-dark>
    <f7-view id="left-panel-view">
      <f7-pages>
        <f7-view>
          <f7-page>
            <div class = "page-content">
              <div class = "item-content">
                <div class = "image">
                  <a href="/"><img src="../../assets-src/oaklandfirstfridays.png" height = "85" /></a>
                </div>
              </div>
              <f7-list>
                <f7-list-item v-for="(item, index) in items"
                    class: panel-close
                    view=".view-main"
                    :link="item.link"
                    :title="item.title"
                    :key="index"
                ></f7-list-item>
              </f7-list>

            </div>
          </f7-page>
        </f7-view>
      </f7-pages>
    </f7-view>
  </f7-panel>




  <!-- Your main view, should have "view-main" class -->
  <f7-views>
    <f7-view id="main-view" class="view-main" url="/" main></f7-view>
  </f7-views>


  <!-- Popup -->
  <f7-popup id="my-popup">
    <f7-view>
      <f7-page>
        <f7-navbar title="Popup">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Hello!</p>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>


</f7-app>
</template>
<script>
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        // Framework7 Parameters
        items: [
          {
            title: 'Home',
            link: '/'
          },
          {
            title: 'Vendors',
            link: '/vendors/'
          }, {
            title: 'Schedule',
            link: '/schedule/'
          }, {
            title: 'Map',
            link: '/map/'
          }, {
            title: 'Info',
            link: '/info/'
          }, {
            title: 'Report',
            link: '/report/'
          }, {
            title: 'Links',
            link: '/links/'
          }, {
            title: 'Sponsors',
            link: '/sponsors/'
          },
        ],

        f7params: {
          id: 'io.framework7.myapp', // App bundle ID
          name: 'Oakland First Friday', // App name
          theme: 'aurora', // Automatic theme detection
          // App root data
          data: function () {
            return {
              user: {
                firstName: 'John',
                lastName: 'Doe',
              },

            };
          },

          // App routes
          routes: routes,



          // Input settings
          input: {
            scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
            scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            overlay: this.$device.cordova && this.$device.ios || 'auto',
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },

        // Login screen data
        username: '',
        password: '',
      }
    },
    methods: {
      alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password);
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (f7.device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
</script>
