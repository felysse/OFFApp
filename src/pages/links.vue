<template>
<f7-page name="links">
  <f7-navbar title="Links" back-link="Back"></f7-navbar>
    <f7-block title>
      {{user.about}}
    </f7-block>
    <f7-list>
      <f7-list-item
        v-for="(link, index) in user.links"
        name = "icon"
        :media="link.media"
        :key="index"
        :link="link.url"
        :title="link.title"


        external
        target="_blank"

      ></f7-list-item>

    </f7-list>
    <f7-block title>
      {{user.more}}
    </f7-block>
    <f7-list>
      <f7-list-item
        v-for="(link, index) in user.links2"
        name ="icon"
        :media="link.media"
        :key="index"
        :link="link.url"
        :title="link.title"


        external
        target="_blank"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        user: this.$f7route.context.user,
      }
    }
  }
</script>
