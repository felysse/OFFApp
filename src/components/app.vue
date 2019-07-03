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
              <f7-list-item
                  class= "panel-close"
                  view=".view-main"
                  title="Home"
                  link="/"


              ></f7-list-item>
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
        Support Us and <font color="fdc35b"> Swipe Up </font>to<b> Donate Now!</b>
      </div>
      <div class="padding-horizontal padding-bottom"></div>
    </div>

    <!-- Rest of the sheet content that will opened with swipe -->
    <f7-block>
  <!--KIV
    <div>
    <form>
                        <div class="form-group">
                            <label for="amount">Amount</label>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                                <input type="number" id="amount" v-model="amount" class="form-control" placeholder="Enter Amount">
                            </div>
                        </div>
                         <hr />
                        <div class="form-group">
                            <label>Credit Card Number</label>
                            <div id="creditCardNumber" class="form-control"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Expire Date</label>
                                    <div id="expireDate" class="form-control"></div>
                                </div>
                                <div class="col-6">
                                    <label>CVV</label>
                                    <div id="cvv" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block" style="background-color:#fdc35b;color:white;border:#fdc35b"@click.prevent="payWithCreditCard">Donate with Credit Card</button>
                        <hr />
                        <div id="paypalButton"></div>

                    </form>
                  </div>-->
                  <f7-button fill href="https://secure.squarespace.com/checkout/donate?donatePageId=5a8c9d92085229336036f459&ss_cid=e702a449-31b0-403d-a6c6-28ae11b45a66&ss_cvisit=1562175421959&ss_cvr=c0b21430-e79b-4aa6-8cd6-1ffce4f129f4%7C1554711350733%7C1560970771181%7C1562175423460%7C24" class="external" target="_blank">Donate</f7-button>


    </f7-block>
    <div class="alert alert-danger" v-if="error">
   {{ error }}
</div>
    <br>
    </f7-sheet>



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
  import braintree from 'braintree-web';
  import paypal from 'paypal-checkout';

  export default {
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
            title: 'KONO Lounge',
            link: '/lounge/'
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

    payWithCreditCard() {
     if(this.hostedFieldInstance)
     {
          this.error = "";
          this.nonce = "";

         this.hostedFieldInstance.tokenize().then(payload => {
             console.log(payload);
         })
         .catch(err => {
             console.error(err);
             this.error = err.message;

         })
     }
     },
     onDeviceReady() {
        console.log('ready');
        document.addEventListener("backbutton", this.onBackKeyDown, false);
      },
      onBackKeyDown(e) {
        e.preventDefault()
        this.$f7router.back();
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
  /*  braintree.client.create({
            authorization: "sandbox_93smtrz3_bbgx4xf7h8bx24xg"
        })
        .then(clientInstance => {
            let options = {
                client: clientInstance,
                styles: {
                    input: {
                        'font-size': '14px',
                        'font-family': 'Open Sans'
                    }
                },
                fields: {
                    number: {
                        selector: '#creditCardNumber',
                        placeholder: 'Enter Credit Card'
                    },
                    cvv: {
                        selector: '#cvv',
                        placeholder: 'Enter CVV'
                    },
                    expirationDate: {
                        selector: '#expireDate',
                        placeholder: 'MM / YYYY'
                    }
                }
            }
            return Promise.all([
                braintree.hostedFields.create(options),
                braintree.paypalCheckout.create({ client: clientInstance })
            ])
        })
        .then(instances => {
            const hostedFieldInstance    = instances[0];
            const paypalCheckoutInstance = instances[1];
            // Use hostedFieldInstance to send data to Braintree
            this.hostedFieldInstance = hostedFieldInstance;
            // Setup PayPal Button
                return paypal.Button.render({
                    env: 'sandbox',
                    style: {
                        label: 'paypal',
                        size: 'responsive',
                        shape: 'rect'
                    },
                    payment: () => {
                        return paypalCheckoutInstance.createPayment({
                                flow: 'checkout',
                                intent: 'sale',
                                amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                                displayName: 'Braintree Testing',
                                currency: 'USD'
                        })
                    },
                    onAuthorize: (data, options) => {
                        return paypalCheckoutInstance.tokenizePayment(data).then(payload => {
                            console.log(payload);
                            this.error = "";
                            this.nonce = payload.nonce;
                        })
                    },
                    onCancel: (data) => {
                        console.log(data);
                        console.log("Payment Cancelled");
                    },
                    onError: (err) => {
                        console.error(err);
                        this.error = "An error occurred while processing the paypal payment.";
                    }
                }, '#paypalButton')
        })
        .catch(err => {
        });

    document.addEventListener('backbutton', () => {
       alert('back');
        // on device back button go back
        this.$f7.views.main.router.back();
        // if in home page exit app?? navigator.app.exitApp();
  }, false)*/

      this.$f7ready((f7) => {
        var app = this.$f7;
        var $$ = this.$$;

        // Listen to Cordova's backbutton event
        document.addEventListener('backbutton', function navigateBack() {
                // Use Framework7's router to navigate back
                    var mainView = app.views.main;

                    var leftp = app.panel.left && app.panel.left.opened;
                    var rightp = app.panel.right && app.panel.right.opened;

                    if (leftp || rightp) {

                        app.panel.close();
                        return false;
                    } else if ($$('.modal-in').length > 0) {

                        app.dialog.close();
                        app.popup.close();
                        return false;
                    } else if (app.views.main.router.url == '/') {
                        navigator.app.exitApp();
                      }
                      else if (app.views.main.router.url == '/lounge/') {
                          app.views.main.router.url = '/';
                      }
                     else {
                          app.views.main.router.back();
                    }

            }
            , false)
        //f7.dialog.alert('Component mounted');
        //document.addEventListener("deviceready", console.log('test'), false);
        /*var app = this.$f7;
        var $$ = this.$$;

        // Listen to Cordova's backbutton event
        document.addEventListener('backbutton', function navigateBack() {
                // Use Framework7's router to navigate back

                    var mainView = app.views.main;

                    var leftp = app.panel.left && app.panel.left.opened;
                    var rightp = app.panel.right && app.panel.right.opened;

                    if (leftp || rightp) {

                        app.panel.close();
                        return false;
                    } else if ($$('.modal-in').length > 0) {

                        app.dialog.close();
                        app.popup.close();
                        return false;
                    } else if (app.views.main.router.url == '/') {
                        alert('Component mounted');
                        navigator.app.exitApp();

                    } else {
                        alert('Component mounted');
                        mainView.router.go(-1);

                    }

            }
            , false)*/

        // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
          cordovaApp.init(f7);

       }
      });


    }
  }
</script>
