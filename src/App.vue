<template>
<div id="#app">
<div class="the-hero">
  <the-hero></the-hero>
</div>
<div>
  <features-one></features-one>
</div>
<div>
  <analytics-two></analytics-two>
</div>
<div>
  <benefits-three></benefits-three>
</div>
<div>
  <collaborate-four></collaborate-four>
</div>
<div>
  <integration-five></integration-five>
</div>
<div>
  <pricing-six></pricing-six>
</div>
<div>
  <the-footer></the-footer>
</div>
</div>
</template>

<script>
import TheHero from './page/layout/TheHero.vue';
import FeaturesOne from './page/components/FeaturesOne.vue';
import AnalyticsTwo from './page/components/AnalyticsTwo.vue';
import BenefitsThree from './page/components/BenefitsThree.vue';
import CollaborateFour from './page/components/CollaborateFour.vue';
import IntegrationFive from './page/components/IntegrationFive.vue';
import PricingSix from './page/components/PricingSix.vue';
import TheFooter from './page/layout/TheFooter.vue';


export default {
  
  components: {
    TheHero,
    FeaturesOne,
    AnalyticsTwo,
    BenefitsThree,
    CollaborateFour,
    IntegrationFive,
    PricingSix,
    TheFooter,
    
  }
}
</script>

<style>
#app {
  position: relative;
  width: 320px;
  height:10102px;

  background: #FFFFFF;
}
</style>
