<template>
  <f7-page name="vendors">
    <div class="block">
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-size="28" icon-md="material:menu" panel-open="left"></f7-link>
    </div>
    <f7-block-title>Vendors</f7-block-title>
    <f7-list>
      <f7-list-item v-for="(item, index) in items"
          class: panel-close
          view=".view-main"
          :name="item.name"
          :media="item.media"
          :link="item.link"
          :title="item.title"
          :key="index"
      ></f7-list-item>
    </f7-list>


  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      // Framework7 Parameters
      items: [
        {
          title: 'Food',
          link: '/food/',
          media: 'local_dining',
          name: 'mat',
        },
        {
          title: 'Art & Craft',
          link: '/craft/',
          media: 'palette',
          name: 'mat'
        },
        /*{
          title: 'Music',
          link: '/vendors/',
          media: 'music_note',
          name: 'mat'
        },
        {
          title: 'Entertainment',
          link: '/vendors/',
          media: 'local_activity',
          name: 'mat'
        },
        {
          title: 'Others',
          link: '/vendors/',
          media: 'more_fill',
          name: 'icon'
        },
        {
          title: 'View All',
          link: '/vendors/',
          media: ''
        },*/
      ]
    }
  }
}
</script>
