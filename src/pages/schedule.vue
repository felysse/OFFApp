<template>
  <f7-page>
    <f7-navbar title="Performers & Activities" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon icon-bars" open-panel="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-swiper pagination next-button prev-button :params="{ zoom: true }" class="ks-zoom-slider">
      <f7-swiper-slide v-for="(item, index) in items" zoom :key="index">
        <img :src="item" alt="" />
      </f7-swiper-slide>
    </f7-swiper>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'static/Performances/performance1.jpg',
        'static/Performances/performance2.jpg',
        'static/Performances/performance3.jpg',
        'static/Performances/performance4.jpg',
        'static/Performances/performance5.jpg',
        'static/Performances/performance6.jpg',
        'static/Performances/performance7.jpg',
        'static/Performances/performance8.jpg',
        'static/Performances/performance9.jpg',
        'static/Performances/performance10.jpg',
      ]
    }
  }
}
</script>

<style lang="less">
.ks-zoom-slider{
  height: 100%;

  .swiper-slide{
    background-color: #fff;

    img{
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

}
</style>
