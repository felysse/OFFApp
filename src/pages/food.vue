<template>
<f7-page>
  <f7-navbar title="Food Vendors" back-link="Back" sliding>
    <f7-nav-right>
      <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
    </f7-nav-right>
    <f7-searchbar
      class="searchbar-demo"
      expandable
      search-container=".search-list"
      search-in=".item-title"
      :disable-button="!$theme.aurora"
    ></f7-searchbar>
  </f7-navbar>
  <f7-list class="searchbar-not-found">
    <f7-list-item title="Nothing found"></f7-list-item>
  </f7-list>
  <f7-list class="search-list searchbar-found">
    <f7-list-item v-for="(entry, index) in entries"
      :key="index"
      :title="entry.gsx$food.$t">
    </f7-list-item>
  </f7-list>
</f7-page>
</template>
<script>
import { VueOfflineStorage } from 'vue-offline';
export default{
    name: 'MyComponent',
    data() {
      return {
        entries: null,
              }
    },
    watch: {
          currentPage: 'fetchData',

      },

    created: function () {
      //this.fetchData()
      //this.getUserData()
    },
    methods: { //cache data 
      fetchData: function () {
        var xhr = new XMLHttpRequest()
        var self = this
          console.log("No cached data, making GET request");
          xhr.open('GET', 'https://spreadsheets.google.com/feeds/list/1rIgn0FB7_PW2tQp2OlCHp1O_PCMAAchWN6rcULQjyEk/1/public/values?alt=json' );
          //xhr.setRequestHeader('GData-Version','3.0');
          xhr.onload = function () {
          //  console.log(xhr.getResponseHeader("Etag"));
            self.entries = JSON.parse(xhr.responseText)
            self.entries = self.entries.feed.entry
            console.log(self.entry);
            let parsed = JSON.stringify(this.entries);
            localStorage.foodEntries = xhr.responseText;
          }
          xhr.send()

      },
      getUserData: function () {
            if (this.isOnline) {
                // make network request that returns 'userData' object
                this.appData = userData
                VueOfflineStorage.set('user', userData)
            } else {
                this.appData = VueOfflineStorage.get('user')
            }
          }
  //functions

    },
    mounted() {
     console.log("mounting");
     //check if foodEntries is defined in our local storage first
     if(typeof localStorage.foodEntries !== 'undefined') {
       try {
         console.log("Parsing cached data");
         this.entries = JSON.parse(localStorage.foodEntries);
         this.entries = this.entries.feed.entry
       } catch(e) {
         console.log("exception" + e);
         localStorage.removeItem('foodEntries');
       }
     }
     //otherwise, make a GET request for the spreadsheet
     else {
          this.fetchData()
       }
     },

}
</script>

<style lang="less">

</style>
