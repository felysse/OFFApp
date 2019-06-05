<template>
  <f7-page @page:mounted="onPage">

    <f7-navbar title="Event Map" back-link="Back" sliding>

      <f7-nav-right>
        <f7-link icon="icon icon-bars" open-panel="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>




    <f7-photo-browser
      ref="page"
      :photos="photos"
      lazyLoading="true"
      type="page"
      :toolbar="false"
      back-link-text="back"
      navbar-of-text="Event Map"


    ></f7-photo-browser>

  </f7-page>
</template>

<script>
export default {
  data () {
    return {
      photos: [
        {
          url: 'static/pooh.jpg',
          caption: ''

        }
      ]
    }
  },
  methods: {
    onPage: function () {
      this.$refs.page.open()
    }
  },


}
</script>

<style lang="less">

</style>
