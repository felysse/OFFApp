<template>
<f7-page name="sponsors">
  <f7-navbar title="Sponsors" back-link="Back"></f7-navbar>

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
      'static/Sponsors/sponsors1.jpg',
      'static/Sponsors/sponsors2.jpg',
      'static/Sponsors/sponsors3.jpg',
      'static/Sponsors/sponsors4.jpg',
      'static/Sponsors/sponsors4.jpg',
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
