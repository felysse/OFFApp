<template>
  <f7-page>
    <f7-navbar title="Test" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon icon-bars" open-panel="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-swiper pagination next-button prev-button :params="{ zoom: true, observer: true }" class="ks-zoom-slider">
      <f7-swiper-slide v-for="(entry, index) in entries" zoom :key="index">
        <img :src="entry.gsx$lounge.$t" alt="" />
      </f7-swiper-slide>
    </f7-swiper>
  </f7-page>
</template>

<script>
export default{
    data() {
      return {
        entries: null,
              }
    },
    watch: {
          currentPage: 'fetchData'
      },

    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        var xhr = new XMLHttpRequest()
        var self = this
        //insert own sheet ID here
        xhr.open('GET', 'https://spreadsheets.google.com/feeds/list/<Insert Sheet ID HERE>/1/public/values?alt=json' )
        xhr.onload = function () {
          self.entries = JSON.parse(xhr.responseText)
          self.entries = self.entries.feed.entry
          console.log(self.entry)
        }
        xhr.send()
      },
  //functions

    },
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
