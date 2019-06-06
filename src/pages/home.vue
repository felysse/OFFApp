<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <div class="block">
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
    </div>

    <div id="element_block">
        <div id="outer">
            <img id= 'mainimage' src="static/mainlogo.png"></div>
        </div>
    </div>

    <!-- Toolbar-->
    <!--<f7-toolbar bottom>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>-->
    <!-- Page content-->
    <!--<f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>-->

    <button id="food"class="responsive"><span style = "background-color:#000">Food</span></button>
    <button id="retail"class="responsive"><span style = "background-color:#000">Retail</span></button>
    <button id="music"class="responsive"><span style = "background-color:#000">Music</span></button>
    <button id="entertainment"class="responsive"><span style = "background-color:#000">Entertainment</span></button>
    <button id="others"class="responsive"><span style = "background-color:#000">Others</span></button>
    <button id="viewall"class="responsive"><span style = "background-color:#000">View All</span></button>





  </f7-page>
</template>
