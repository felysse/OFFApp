<template id = "blog">
  <f7-page>
    <f7-navbar title="Test" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon icon-bars" open-panel="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-searchbar
      cancel-link="Cancel"
      placeholder="Search"
      search-list="#search-list"
      :clear-button="true"
    ></f7-searchbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list class="searchbar-found" id="search-list">
    <f7-list-item v-for="(item, index) in items"
      :title="item"
      :key="index"
    ></f7-list-item>

    </f7-list>




</f7-page>
</template>

<script>
export default{
    data() {
      return {
        entries: null,
        items: [
          'Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Ford', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Mazda', 'Mercedes-Benz', 'Mercury', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Peugeot', 'Pontiac', 'Porsche', 'Regal', 'Saab', 'Saturn', 'Subaru', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo'
        ]
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
        xhr.open('GET', 'https://spreadsheets.google.com/feeds/list/1rIgn0FB7_PW2tQp2OlCHp1O_PCMAAchWN6rcULQjyEk/1/public/values?alt=json' )
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

</style>
