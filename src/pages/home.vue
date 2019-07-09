<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <div class="block">
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" icon-size="28" panel-open="left"></f7-link>
    </div>

    <div id="element_block">
        <div id="outer">
            <img id= 'mainimage' src="static/mainlogo.png"></div>
        </div>
    </div>

    <f7-button id="vendors" href="/Vendors/"><img src="static/vendors.jpg" style="position:absolute; z-index: -1; height: 100%; width: 100%; object-fit: cover;"><span style = "background-color:#000">Vendors</span></f7-button>
    <f7-button id="schedule"class="link" href="/schedule/"><img src="static/schedule.jpg" style="position:absolute; z-index: -1; height: 100%; width: 100%; object-fit: cover;"><span style = "background-color:#000">Performances</span></f7-button>
    <f7-button id="map"class="link" href="/map/"><img src="static/mapbutton.jpg" style="position:absolute; z-index: -1; height: 100%; width: 100%; object-fit: cover;"><span style = "background-color:#000">Map</span></f7-button>

    <!--<f7-swiper pagination :params="{ loop: true, loopedSlides: items, speed:500, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}">
    <f7-swiper-slide><img src="static/HomeSlides/slide1.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide2.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide3.jpg"></f7-swiper-slide>
    </f7-swiper>

    <f7-swiper pagination :params="{ loop: true, loopedSlides: items, speed:500, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}">
    <f7-swiper-slide><img src="static/HomeSlides/slide4.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide5.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/HomeSlides/slide6.jpg"></f7-swiper-slide>-->
    </f7-swiper>




  </f7-page>
</template>

<script>
  import { f7Navbar, f7Page, f7Popup, f7BlockTitle, f7Block, f7NavRight, f7Link, f7Button } from 'framework7-vue';
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
