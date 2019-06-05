<template>
  <f7-page name="report">
    <f7-navbar title="Report" back-link="Back"></f7-navbar>
    <f7-block-title>Report</f7-block-title>
    <f7-block>
    <form id="report" action="" method="GET" class="form-ajax-submit">
    <f7-list no-hairlines-md>

      <f7-list-input
        type="textarea"
        placeholder="Your Report Here"
      ></f7-list-input>
      </f7-list>
      <f7-input type="submit" value="Submit" class="button" fill><f7-button class="col" fill>Submit</f7-button></f7-input>
      </form>
    </f7-block>


      <f7-block class = "margin-top" title>
      Or Else, Contact:<br>
      Name: # <br>
      Name: #

      </f7-block>




  </f7-page>
</template>

<script>
    export default {
       mounted(){
            const self = this;
            const app = self.$f7;
            app.on('formAjaxSuccess', function (formEl, data, xhr) {
                // do something with response data
                console.log('In formAjaxSuccess')
            });
            app.on('formAjaxComplete', function (formEl, data, xhr) {
                // do something with response data
                console.log('In formAjaxComplete')
            });
            app.on('formAjaxBeforeSend', function (formEl, data, xhr) {
                // do something with response data
                console.log('In formAjaxBeforeSend');
            });
            app.on('formAjaxError', function (formEl, data, xhr) {
                // do something with response data
                console.log('In formAjaxError');
            });
        },
    };
</script>
