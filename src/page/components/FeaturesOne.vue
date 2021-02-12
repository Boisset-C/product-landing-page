<template>
<div class="features-label">
  <base-categories id="features">FEATURES</base-categories>
</div>
<div class="container">
    <h2>Our solution for your business</h2>
    <base-text>We are self-service data analytics software that lets you create visually appealling data visualizations and insightful dashboards in minutes.</base-text>
    <div class="icon">
    <img :src="require(`@/assets/images/features-images/pie-icon.png`)"/>
  </div>
  <base-med-title>Analyze your data</base-med-title>
    <base-text>Create reports with an easy to use drag-and-drop designer.</base-text>
      <div class="buttons">
        <button class="inquire">Learn more</button>
      </div>
  <div class="icon">
      <img :src="require(`@/assets/images/features-images/shield-icon.png`)"/>
  </div>

  <base-med-title>Collaborate securely</base-med-title>
    <base-text>Share/publish your reports with your colleagues</base-text>
       <div class="buttons">
        <button class="inquire">Learn more</button>
      </div>

    <div class="icon">
    <img :src="require(`@/assets/images/features-images/dot-icon.png`)"/>
  </div>
  <base-med-title>Embedded analytics</base-med-title>
    <base-text>Get a powerful analytics tool in your own brand name.</base-text>
         <div class="buttons">
        <button class="inquire">Learn more</button>
      </div>
      <div class="icon">
    <img :src="require(`@/assets/images/features-images/square-dot-icon.png`)"/>
  </div>

       <base-med-title>Easy and Intuitive</base-med-title>
    <base-text>Easily converse with your data using everyday language.</base-text>
         <div class="buttons">
        <button class="inquire">Learn more</button>
      </div>

  <div class="icon">
    <img :src="require(`@/assets/images/features-images/feature-end.png`)"/>
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
.features-label {
  display: flex;
  justify-content: center;
  padding: 20px 5px 0px 5px;
}
#features {
  display: flex;
  justify-content: center;
 
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

.inquire {
  width: 110px;
  height: 22px;
  border-radius: 585px;
  border-style: none;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #1565D8;
  background: white;
}
</style>
