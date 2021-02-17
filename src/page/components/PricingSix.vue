
<template>
<div class="pricing-label">
  <base-categories id="pricing">OUR PRICING</base-categories>
</div>
<div class="container">
    <h2>Choose the plan that's right for your business</h2>
      <base-text>Start with the Free plan to try out our platform for an unlimited period of time.</base-text>
</div>
<text>Bill Monthly</text>
<ul>
  <li>Bill Annually</li>
  <li>Save 15%</li>
</ul>

  <base-standard></base-standard>
  <base-essentials></base-essentials>
  <base-premium></base-premium>


</template>

<script>
import BaseStandard from '../ui/BaseStandard.vue';
import BaseCategories from '../ui/BaseCategories.vue';
import BaseText from '../ui/BaseText.vue';
import BaseEssentials from '../ui/BaseEssentials.vue';
import BasePremium from '../ui/BasePremium.vue';

export default {
  components: { 
    BaseCategories,
    BaseText,
    BaseStandard,
    BaseEssentials,
    BasePremium,

    },
  
}
</script>

<style scoped>
.pricing-label {
  width: 300px;
}
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
.pricing-label {
  display: flex;
  justify-content: center;
  padding: 20px 5px 0px 5px;
}
#pricing {
  display: flex;
  justify-content: center;
 
}
.container {
 display: grid;
 justify-content: center;
 align-items: center;
}



</style>
