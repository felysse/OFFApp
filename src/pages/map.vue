<template>
  <f7-page>

    <f7-navbar title="Event Map" back-link="Back" sliding>

      <f7-nav-right>
        <f7-link icon="icon icon-bars" open-panel="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>

      <f7-grid>
        <f7-col width="33">
          <f7-button @click="onStandalone">Standalone</f7-button>
        </f7-col>
        <f7-col width="33">
          <f7-button @click="onPopup">Popup</f7-button>
        </f7-col>
        <f7-col width="33">
          <f7-button @click="onPage">Page</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    <f7-block>
      <p>
        For Popup and Standalone types, Photo Browser suppots 2 default themes - default Light (like in previous examples) and Dark theme. Here is a Dark theme examples:
      </p>
      <f7-grid>
        <f7-col width="50">
          <f7-button @click="onDarkStandalone">Standalone</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button @click="onDarkPopup">Popup</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    <f7-block>
      <p>
        Photo Browser also supports lazy loading for passed images:
      </p>
      <p>
        <f7-button @click="onLazyLoading">Lazy Loading Images</f7-button>
      </p>
    </f7-block>

    <f7-photo-browser
      ref="page"

      :photos="photos"
      lazyLoading="true"
      type="page"
      theme="light"
    ></f7-photo-browser>

  </f7-page>
</template>

<script>
export default {
  data () {
    return {
      photos: [
        {
          url: '../../assets-src/pooh.jpg',
          caption: ''

        }
      ]
    }
  },
  methods: {
    onStandalone: function () {
      this.$refs.standalone.open()
    },
    onPopup: function () {
      this.$refs.popup.open()
    },
    onPage: function () {
      this.$refs.page.open()
    },

  }
}
</script>

<style lang="less">

</style>
