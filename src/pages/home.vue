<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-nav-right>
      <f7-link icon="icon icon-bars"></f7-link>
    </f7-nav-right>
  </f7-navbar>
      <f7-fab-action>
        <f7-link class ="fixednav" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" icon-size="28" panel-open="left"></f7-link>
      </f7-fab-action>


    <div id="element_block">
        <div id="outer">
            <img id= 'mainimage' src="static/mainlogo.png"></div>
        </div>
    </div>


    <f7-button id="vendors" href="/Vendors/" sheet-open=".demo-sheet-swipe-to-step"><img src="static/vendors.jpg" style="position:absolute; z-index: -1; height: 100%; width: 100%; object-fit: cover;"><span style = "background-color:#000">Vendors</span></f7-button>
    <f7-button id="schedule"class="link" href="/schedule/" sheet-open=".demo-sheet-swipe-to-step"><img src="static/schedule.jpg" style="position:absolute; z-index: -1; height: 100%; width: 100%; object-fit: cover;"><span style = "background-color:#000">Performances</span></f7-button>
    <f7-button id="map"class="link" href="/map/" sheet-open=".demo-sheet-swipe-to-step"><img src="static/mapbutton.jpg" style="position:absolute; z-index: -1; height: 100%; width: 100%; object-fit: cover;"><span style = "background-color:#000">Map</span></f7-button>

    <!--<f7-swiper pagination :params="{ loop: true, loopedSlides: items, speed:500, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}">
    <f7-swiper-slide><img src="static/HomeSlides/slide1.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide2.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide3.jpg"></f7-swiper-slide>
    </f7-swiper>

    <f7-swiper pagination :params="{ loop: true, loopedSlides: items, speed:500, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}">
    <f7-swiper-slide><img src="static/HomeSlides/slide4.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide5.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide6.jpg"></f7-swiper-slide>
    </f7-swiper>-->

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



  </f7-page>
</template>

<script>
  import { f7Navbar, f7Page, f7Popup, f7BlockTitle, f7Block, f7NavRight, f7Link, f7Button } from 'framework7-vue';
  import VueStatus from 'vue-status'
  export default {
    components: {
      f7Navbar,
      f7Page,
      f7Popup,
      f7BlockTitle,
      f7Block,
      f7NavRight,
      f7Link,
      f7Button,
      VueStatus,
    },
    data() {
      return {
        popupOpened: false,
        items: 3
      };
    },
    /*methods: {    //Popup if required
      createPopup() {
        const self = this;
        // Create popup
        if (!self.popup) {
          self.popup = self.$f7.popup.create({
            content: `
              <div class="popup">
                <div class="page">
                  <div class="popbar">
                  <div class="navbar" id = "popbar">
                    <div class="navbar-inner">
                      <div class="right"><a href="#" class="link popup-close"><font color ="#fdc35b">Close</font></a></div>
                    </div>
                    </div>
                  </div>
                  <div class="page-content" id="popbg">
                    <div class="dosdonts">

                        <img src="static/dosdonts.jpg"
                        width="100%"
                        height="auto"
                        />

                    </div>
                  </div>

                </div>
              </div>
            `.trim(),
          });
        }
        // Open it
        self.popup.open();
      },
      onPageBeforeRemove() {
        const self = this;
        // Destroy popup when page removed
        if (self.popup) self.popup.destroy();

      },
    },*/
  };
</script>
