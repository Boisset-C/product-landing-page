
<template>

<div class="container">
  <div class="integration-label">
  <base-categories class="integration">INTEGRATION</base-categories>
</div>
    <h2>Seamless integrations with other analytics tools</h2>
  <div class="text">
    <base-text>Polygon absolutely works great with tools in your other existing platform.</base-text>
  </div>
    <div class="icon">
    <img :src="require(`@/assets/images/integration-images/icon-swirl-integration.png`)"/>
  </div>
  <base-med-title>Trusted by the world's largest business</base-med-title>
  <div class="icon">
   <img :src="require(`@/assets/images/integration-images/companies-integration.png`)"/>
  </div>
  <div class="brand-icon">
   <img :src="require(`@/assets/images/integration-images/airbnb-original-integration.png`)"/>
  </div>
  <div class="text-review">
  <base-text>I received great customer service from specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality</base-text>
  </div>
   <div class="brand-icon">
   <img :src="require(`@/assets/images/integration-images/review-avatar-integration.png`)"/>
  </div>
    <h3>Bryan Arnoldy</h3>
    <ul>
      <li>Verified customer</li>
    </ul>
     <div class="brand-icon">
   <img :src="require(`@/assets/images/integration-images/amazon-integration.png`)"/>
  </div>
  <div class="text-review">
    <base-text>My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more.</base-text>
     <div class="headshot">
   <img :src="require(`@/assets/images/integration-images/second-review-avatar-integration.png`)"/>
  </div>
    <h4>Joshua William</h4>
     <ul>
      <li>Verified customer</li>
    </ul>
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

.integration-label {
  display: flex;
  justify-self: center;
  padding: 25px 5px 5px 5px;
}
</style>
