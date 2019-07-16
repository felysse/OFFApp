<template>
  <f7-page name="vendors">
        <f7-navbar title="Vendors" back-link="Back"></f7-navbar>

    <f7-block-title>Vendors</f7-block-title>
    <f7-list>
      <f7-list-item v-for="(item, index) in items"
          class: panel-close
          view=".view-main"
          :name="item.name"
          :media="item.media"
          :link="item.link"
          :title="item.title"
          :external="item.external"
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
        {
          title: 'Become a Vendor',
          link: 'https://pinnaclesfestivals.knack.com/oakff#home/',
          media: 'persons_round_fill',
          name: 'icon',
          external: true,
        },
        /*{
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
