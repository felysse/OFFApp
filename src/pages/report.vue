<template>
  <f7-page name="report">
    <f7-navbar title="Report An Issue" back-link="Back"></f7-navbar>
    <f7-block-title>Report An Issue</f7-block-title>
    <f7-block>
    See any accidents or suspicious activities? <br>
    Click the button below to send a report via sms to our staff immediately
    <br>
    <br>
    <b>
      *Do remember to include the location of incident
    </b>
    <br>
    <br>
      <f7-button fill href="sms:+14157481630;" class="external" target="_blank">Send an SMS</f7-button>
    <br>

    </f7-block>


      <f7-block class = "margin-top" title>
      Or Else, Approach any Staff/Security Officer near you.
      <br>
      <br>
      Thank you for making Oakland First Fridays a safer and better experience for all.




      </f7-block>




  </f7-page>
</template>

<script>
  import cordovaApp from '../js/cordova-app.js';
  export default{
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (f7.device.cordova) {
          cordovaApp.init(f7);
          }
      // Call F7 APIs here
          cordovaApp.sendSms();
          cordovaApp.checkSMSPermission();
          cordovaApp.requestSMSPermission();

          });
        }
      }
</script>
