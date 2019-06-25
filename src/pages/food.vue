<template>
  <f7-page>
    <f7-navbar title="Food" back-link="Back" sliding>
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
        'static/Food/sample.jpg',

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
