<template>
  <f7-page @page:init="createPopup" name="home">
    <!-- Top Navbar -->
    <div class="block">
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
    </div>

    <div id="element_block">
        <div id="outer">
            <img id= 'mainimage' src="static/mainlogo.png"></div>
        </div>
    </div>

    <!-- Toolbar-->
    <!--<f7-toolbar bottom>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>-->
    <!-- Page content-->
    <!--<f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>-->


    <!--<f7-button id="food" class="link" href="/food/"><span style = "background-color:#000">Food</span></f7-button>
    <f7-button id="retail"class="responsive"><span style = "background-color:#000">Retail</span></f7-button>
    <f7-button id="music"class="responsive"><span style = "background-color:#000">Music</span></f7-button>
    <button id="entertainment"class="responsive"><span style = "background-color:#000">Entertainment</span></button>
    <button id="others"class="responsive"><span style = "background-color:#000">Others</span></button>
    <button id="viewall"class="responsive"><span style = "background-color:#000">View All</span></button>-->

    <f7-swiper pagination :params="{ loop: true, loopedSlides: items, speed:500, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}">
    <f7-swiper-slide><img src="static/food.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/entertainment.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/music.png"></f7-swiper-slide>
    </f7-swiper>

    <f7-swiper pagination :params="{ loop: true, loopedSlides: items, speed:500, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}">
    <f7-swiper-slide><img src="static/retail.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/others.jpg"></f7-swiper-slide>
    <f7-swiper-slide><img src="static/viewall.jpg"></f7-swiper-slide>
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
    methods: {
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

                        <img src="../static/dosdonts.jpg"
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
    },
  };
</script>

<style lang="less" scoped>
.swiper-container{
  height: 35%;
}
.swiper-slide{
  display: contain;
  justify-content: center;
  align-items: center;
  background:#fff;
  font-size: 25px;
}

.swiper-container img {
width:100%;
height:100%;
overflow:hidden;
}
</style>
