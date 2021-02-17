import { createApp } from 'vue'

import App from './App.vue'
import TheHero from './page/layout/TheHero.vue';
import FeaturesOne from './page/components/FeaturesOne.vue';
import AnalyticsTwo from './page/components/AnalyticsTwo.vue';
import BenefitsThree from './page/components/BenefitsThree.vue';
import CollaborateFour from './page/components/CollaborateFour.vue';
import IntegrationFive from './page/components/IntegrationFive.vue';
import PricingSix from './page/components/PricingSix.vue';
import TheFooter from './page/layout/TheFooter.vue';
import BaseButton from './page/ui/BaseButton.vue';
import BaseCategories from './page/ui/BaseCategories.vue';
import BaseText from './page/ui/BaseText.vue';
import BaseMedTitle from './page/ui/BaseMedTitle.vue';
import BaseStandard from './page/ui/BaseStandard.vue';
import BasePremium from './page/ui/BasePremium.vue';
import BaseEssentials from './page/ui/BaseEssentials.vue';

const app = createApp(App);

app.component('base-essential', BaseEssentials)
app.component('base-premium', BasePremium)
app.component('base-standard', BaseStandard)
app.component('base-med-title', BaseMedTitle)
app.component('base-text', BaseText);
app.component('base-categories', BaseCategories)
app.component('base-button', BaseButton);
app.component('the-hero', TheHero);
app.component('features-one', FeaturesOne);
app.component('analytics-two', AnalyticsTwo);
app.component('benefits-three', BenefitsThree);
app.component('collaborate-four', CollaborateFour);
app.component('integration-five', IntegrationFive);
app.component('pricing-six', PricingSix);
app.component('the-footer', TheFooter);

app.mount('#app');
