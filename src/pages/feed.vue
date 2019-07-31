<template>
  <f7-page>
    <f7-navbar title="Feed" back-link="Back" sliding></f7-navbar>

    <div class="section container">
       <vue-instagram token="<Insert Token Here>" :count="100"  class="columns is-multiline is-mobile">
         <template slot="feeds" slot-scope="props">
           <div class="column is-4-desktop is-6-tablet is-6-mobile">
             <div class="card">
               <div class="card-image">
                 <figure class="image is-square">
                   <img :src="props.feed.images.low_resolution.url" alt="Image">
                 </figure>
               </div>

               <div class="card-content">
                 <div class="media">
                   <div class="media-left">

                   </div>

                 </div>

                 <div class="content" style="height: 100px; overflow: auto;">
                 <f7-block>
                   {{ props.feed.caption.text }}
                   </f7-block>
                 </div>
               </div>
               <footer class="card-footer">
                 <p class="card-footer-item"><i class="f7-icons">heart_fill</i> &nbsp; {{ props.feed.likes.count }}</p>
                 <p class="card-footer-item"><i class="f7-icons">chat_bubble</i> &nbsp; {{ props.feed.comments.count }}</p>

               </footer>
             </div>
           </div>
         </template>
       </vue-instagram>
     </div>

  </f7-page>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'App',

  components: {
    VueInstagram
  }
}
</script>
