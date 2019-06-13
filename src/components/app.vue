<template>
<f7-app :params="f7params" >
  <!-- Status bar overlay for fullscreen mode-->
  <f7-statusbar></f7-statusbar>

  <!-- Left panel with cover effect-->

  <f7-panel left cover theme-light>
    <f7-view id="left-panel-view">
      <f7-pages>
        <f7-view>
          <f7-page>
            <div class = "page-content">
              <div class = "item-content">
                <div class = "image1">
                  <a href="/"><img src="../../assets-src/oaklandfirstfridays.png"
                  width="100%"
                  height="auto"
                  /></a>
                </div>
              </div>
              <f7-list class="theme-light">
                <f7-list-item v-for="(item, index) in items"
                    class: panel-close
                    view=".view-main"
                    :link="item.link"
                    :title="item.title"
                    :key="index"
                ></f7-list-item>
                <f7-list-item
                    class= "panel-close"
                    view=".view-main"
                    title="Schedule"
                    link=""
                    @click="onSchedulePage"
                ></f7-list-item>
                <f7-list-item
                    class= "panel-close"
                    view=".view-main"
                    title="Event Map"
                    link=""
                    @click="onMapPage"
                ></f7-list-item>

                <f7-list-item v-for="(item, index) in items2"
                    class: panel-close
                    view=".view-main"
                    :link="item.link"
                    :title="item.title"
                    :key="index"
                ></f7-list-item>
              </f7-list>
              <!--More Info-->
              <!--<f7-block>
              <div class = "text">
              <p>
                <font color="#fdc35b">
                  Lost & Found @ KONO Lounge (27th St)
                </font>
              </p>
              </div>
            </f7-block>-->
            </div>
            <f7-photo-browser

              ref="pageSchedule"
              :photos="photosSchedule"
              lazyLoading="true"
              type="page"
              :toolbar="false"
              back-link-text="back"
              navbar-of-text="Schedule"
            ></f7-photo-browser>

            <f7-photo-browser
              ref="pageMap"
              :photos="photosMap"
              lazyLoading="true"
              type="page"
              :toolbar="false"
              back-link-text="back"
              navbar-of-text="Event Map"
            ></f7-photo-browser>

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

        ],
        photosMap: [
          {
            url: 'static/pooh.jpg',
            caption: ''
          }
        ],
        photosSchedule: [
          {
              url: 'static/24thStage_1.jpg',
              caption: '24th ST Stage'
          },
          {
              url: 'static/24thStage_2.jpg',
              caption: '24th ST Stage'
          },
          {
              url: 'static/24thStage_3.jpg',
              caption: '24th ST Stage'
          },
          {
              url: 'static/24thStage_4.jpg',
              caption: '24th ST Stage'
          },
          {
              url: 'static/24thStage_5.jpg',
              caption: '24th ST Stage'
          },
          {
              url: 'static/25thStage.jpg',
              caption: '25th ST Stage'
          },
          {
              url: 'static/25thStage_2.jpg',
              caption: '25th ST Stage'
          },
          {
              url: 'static/27thStage.jpg',
              caption: '27th ST Stage'
          },
        ],
        items2: [
           {
            title: 'Report',
            link: '/report/'
          }, {
            title: 'Support Us',
            link: '/support/'
          },{
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
      },
      onMapPage: function () {
        this.$refs.pageMap.open()
      },
      onSchedulePage: function () {
        this.$refs.pageSchedule.open()
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
