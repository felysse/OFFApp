<template> <!-- ACCORDIAN SHEET IF EVER NEEDED-->
  <f7-page name="info">
    <f7-navbar title="Info" back-link="Back"></f7-navbar>
    <f7-block-title>More Information</f7-block-title>
    <f7-list accordion>
      <f7-list-item accordion-item title="Restroom Locations">
        <f7-accordion-content>
          <f7-block>
            <p>
              Restroom Locations here
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Lost & Found">
        <f7-accordion-content>
          <f7-block>
            <p>
              Lost&Found Location here
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Security">
        <f7-accordion-content>
          <f7-block>
            <p>
              Security Location here
            </p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>

    </f7-list>
  </f7-page>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.custom-accordion{
  .accordion-item-toggle{
    padding: 0 15px;
    height: 44px;
    line-height: 44px;
    font-size: 17px;
    color: #000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    cursor: pointer;

    .icon{
      border: 1px solid #000;
      border-radius: 100%;
      width: 25px;
      height: 25px;
      font-size: 31px;
      line-height: 20px;
      text-align: center;
      font-weight: 100;
    }

    span{
      margin-left: 15px;
    }
  }
  .accordion-item-content{
    padding: 0 15px;

    p{
      color: #6d6d72;
    }
  }
}
.custom-accordion .accordion-item-expanded{
  .icon-plus{
    display: none;
  }
  .icon-minus{
    display: inline-block;
  }
}

.custom-accordion .icon-minus{
  display: none;
}
</style>
