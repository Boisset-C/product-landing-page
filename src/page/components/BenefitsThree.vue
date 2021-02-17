
<template>
<div class="benefits-label">
  <base-categories id="benefits">YOUR BENEFITS</base-categories>
</div>
<div class="container">
    <h2>Explore about our awesome features</h2>
  <div class="text">
    <base-text>An awesome and powerful JavaScript library for building user interfaces. Independent of any third-party libraries or frameworks.</base-text>
  </div>
    <div class="icon">
    <img :src="require(`@/assets/images/benefits-images/house-benefits.png`)"/>
  </div>
  <base-med-title>Easy customization</base-med-title>
  <div class="text">
    <base-text>No matter what kind of home you have to share, you can increase your earnings.</base-text>
  </div>
  <div class="icon">
      <img :src="require(`@/assets/images/benefits-images/shield-check-benefits.png`)"/>
  </div>
  <base-med-title>Secure and fast</base-med-title>
  <div class="text">
    <base-text>No matter what kind of home you have to share, you can increase your earnings.</base-text>
  </div>
  <div class="icon">
      <img :src="require(`@/assets/images/benefits-images/square-icons-benefits.png`)"/>
  </div>
  <base-med-title>Powerful dashboard</base-med-title>
  <div class="text">
    <base-text>No matter what kind of home you have to share you can increase your earnings.</base-text>
  </div>
    <div class="icon">
      <img :src="require(`@/assets/images/benefits-images/square-icons-benefits.png`)"/>
  </div>
    <base-med-title>Cloud upload</base-med-title>
  <div class="text">
    <base-text>No matter what kind of home you have to share you can increase your earnings.</base-text>
  </div>
  <div class="icon">
      <img :src="require(`@/assets/images/benefits-images/square-icons-benefits.png`)"/>
  </div>
    <base-med-title>Proven technology</base-med-title>
  <div class="text">
    <base-text>No matter what kind of home you have to share you can increase your earnings.</base-text>
  </div>
  <div class="icon">
      <img :src="require(`@/assets/images/benefits-images/square-icons-benefits.png`)"/>
  </div>
    <base-med-title>98.99 satisfaction</base-med-title>
    <div class="text">
    <base-text>No matter what kind of home you have to share you can increase your earnings.</base-text>
    </div>
</div>
          

</template>

<script>
import BaseCategories from '../ui/BaseCategories.vue';
import BaseText from '../ui/BaseText.vue';
import BaseMedTitle from '../ui/BaseMedTitle.vue';

export default {
  components: { 
    BaseCategories,
    BaseText,
    BaseMedTitle
    },
  
}
</script>

<style scoped>
h2 {
  font-family: HK Grotesk, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.2px;

  color: #183b56;
}

.icon {
 display: flex;
 justify-content: center;
}
.benefits-label {
  display: flex;
  justify-content: center;
  padding: 20px 5px 0px 5px;
}

.container {
 display: grid;
 justify-content: center;
 align-items: center;
}

.buttons {
display: flex;
justify-content: center;
padding: 0px 5px 20px 5px;
}
.text {
  display: flex;
  justify-content: center;
}




</style>
