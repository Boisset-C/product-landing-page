
<template>
<div class="analytics-label">
  <base-categories id="analytics">ANALYTICS</base-categories>
</div>
<div class="container">
    <h2>Analyze your data with our analyze tools</h2>
    <base-text>Self-service data analytics software that lets you create visually appealling data visualizations and insightful dashboards in minutes.</base-text>
    <div class="icon">
    <img :src="require(`@/assets/images/analytics-images/square-icon-analytics.png`)"/>
  </div>
  <base-med-title>Powerful dashboard</base-med-title>
    <base-text>Create reports with an easy to use drag-and-drop designer.</base-text>
      <div class="buttons">
        <button class="inquire">Learn more</button>
      </div>
  <div class="icon">
      <img :src="require(`@/assets/images/analytics-images/circle-arrows-analytics.png`)"/>
  </div>

  <base-med-title>Always in Sync</base-med-title>
    <base-text>Don't worry about the data, always be synchronized</base-text>
       <div class="buttons">
        <button class="inquire">Learn more</button>
      </div>
         <div class="buttons">
         <base-button mode="flat" class="try-free-btn">Try it out free</base-button>
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
.analytics-label {
  display: flex;
  justify-content: center;
  padding: 20px 5px 0px 5px;
}
#analytics {
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

.try-free-btn {
  width: 200px;
  height: 48px;
  border-radius: 5px;
  border-style: none;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: white;
  background:  #1565D8;
}
</style>
