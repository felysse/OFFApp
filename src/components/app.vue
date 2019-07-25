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
                  <img src="../../assets-src/oaklandfirstfridays.png"
                  width="100%"
                  height="auto"
                  /></a>
                </div>
              </div>

              <f7-list class="theme-light">
            <!--  <f7-list-item
                  class= "panel-close"
                  view=".view-main"
                  title="Home"
                  link="/"


              ></f7-list-item>-->
                <f7-list-item v-for="(item, index) in items"
                    class= "panel-close"
                    view=".view-main"
                    :link="item.link"
                    :title="item.title"
                    :key="index"
                    sheet-open=".demo-sheet-swipe-to-step"

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
            <!--PHOTO BROWSER
            <f7-photo-browser

              ref="pageSchedule"
              :photos="photosSchedule"
              lazyLoading="true"
              type="page"
              :toolbar="false"
              back-link-text="back"
              navbar-of-text="Schedule"
              @photobrowser:opened ="showToastBottom"
            ></f7-photo-browser>

            <f7-photo-browser
              ref="pageMap"
              :photos="photosMap"
              lazyLoading="true"
              type="page"
              :toolbar="false"
              back-link-text="back"
              navbar-of-text="Event Map"
              @photobrowser:opened ="showToastBottom"
            ></f7-photo-browser>-->

          </f7-page>
        </f7-view>
      </f7-pages>
    </f7-view>

  </f7-panel>



  <f7-sheet
    class="demo-sheet-swipe-to-step"
    style="height:auto; --f7-sheet-bg-color: #fff;"
    swipe-to-close
    swipe-to-step
    :backdrop="false"
    :closeByOutsideClick="true"
  >
    <!-- Initial swipe step sheet content -->
    <div class="sheet-modal-swipe-step">
      <div class="margin-top text-align-center">
        Support Us and <font color="fdc35b"> Swipe Up </font>to<b> Donate Now! </b>
        <f7-link icon-f7="close_round_fill" icon-size="20px" sheet-close style="margin-left:2.2em;"></f7-link>
      </div>

      <div class="padding-horizontal padding-bottom"></div>
    </div>

    <!-- Rest of the sheet content that will opened with swipe -->
    <f7-block>

                  <f7-button fill href="https://secure.squarespace.com/checkout/donate?donatePageId=5a8c9d92085229336036f459&ss_cid=e702a449-31b0-403d-a6c6-28ae11b45a66&ss_cvisit=1562175421959&ss_cvr=c0b21430-e79b-4aa6-8cd6-1ffce4f129f4%7C1554711350733%7C1560970771181%7C1562175423460%7C24" class="external" target="_blank">Donate</f7-button>


    </f7-block>
    
    <br>
    </f7-sheet>



  <!-- Your main view, should have "view-main" class -->
  <f7-views>
    <f7-view id="main-view" class="view-main" url="/" main></f7-view>
  </f7-views>


  <!-- Popup Template if required -->
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
  import { VueOfflineMixin } from 'vue-offline';
  import { VueOfflineStorage } from 'vue-offline';


  export default {
    name: 'MyComponent',
    data() {

      return {
        hostedFieldInstance: false,
        nonce: "",
        error: "",
        amount: 10,
        // Framework7 Parameters
        items: [
          {
            title: 'Vendors',
            link: '/vendors/'
          },

          {
            title: 'Performances',
            link: '/schedule/'
          },
          {
            title: 'Event Map',
            link: '/map/'
          },
          {
            title: 'KONO Lounge',
            link: '/lounge/'
          },
          {
            title: 'Insta Feed',
            link: '/feed/'
          },
          {
           title: 'Report An Issue',
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
         {
           title: 'Test',
           link: '/test2/'
         },
         {
           title: 'Test2',
           link: '/test/'
         },
        ],
        /*
        photosMap: [
          {
            url: '../static/Map/pooh.jpg',
            caption: ''
          }
        ],
        photosSchedule: [
          {
              url: '../www/static/Performances/24thStage_1.jpg',

          },
          {
              url: '../www/static/Performances/24thStage_2.jpg',

          },
          {
              url: '../www/static/Performances/24thStage_3.jpg',

          },
          {
              url: '../www/static/Performances/24thStage_4.jpg',

          },

        ],*/


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

    getUserData () {
          if (this.isOnline) {
              // make network request that returns 'userData' object
              this.appData = userData
              VueOfflineStorage.set('user', userData)
          } else {
              this.appData = VueOfflineStorage.get('user')
          }
      },

      alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password);
      },
      onMapPage: function () {
        this.$refs.pageMap.open()
      },
      onSchedulePage: function () {
        this.$refs.pageSchedule.open()
      },
      showToastBottom() {
        const self = this;
        // Create toast
        if (!self.toastBottom) {
          self.toastBottom = self.$f7.toast.create({
            text: 'Go to <font color="fdc35b">Support Us > Donate </font>to Donate Now!',
            closeTimeout: 3000,
          });
        }
        // Open it
        self.toastBottom.open();
      },
    },

    mounted() {
      this.$f7ready((f7) => {
      if (this.isOffline){
        alert('Please connect to the Internet');
      }
      if (this.isOnline){
        alert('Online!');
      }

      //Handles Android Back Button
      var app = this.$f7;
      var $$ = this.$$;
      document.addEventListener('backbutton', function navigateBack() {
              // Use Framework7's router to navigate back
                  var mainView = app.views.main;

                  var leftp = app.panel.left && app.panel.left.opened;
                  var rightp = app.panel.right && app.panel.right.opened;

                  if (leftp || rightp) {
                      app.panel.close();
                      return false;
                  }
                  /*else if ($$('.modal-in').length > 0) {
                      app.dialog.close();
                      app.popup.close();
                      return false;
                  }*/
                   else if (app.views.main.router.url == '/') {
                      navigator.app.exitApp();
                  } else {
                     mainView.router.back();
                  }

          }
          , false)



        // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
          cordovaApp.init(f7);

       }

      });



    }
  }
</script>
