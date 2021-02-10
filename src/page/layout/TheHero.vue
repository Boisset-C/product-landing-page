<template>
<section class="hero">
 <div class="audience">
   
  </div><div class="engagement">
    <img :src="require(`@/assets/images/engagement.png`)"/>
  </div><div class="macbook">
    <img :src="require(`@/assets/images/macbook.png`)"/>
  </div>
  <div class="header">
    <base-header></base-header>
  </div>
  <div class="title">
    <p>Powerfull analytics tools for your business</p>
  </div>
  <div class="text">
    <p>An awesome and powerfull tool for your business, increase business revenue with enterprise-grade links built to acquire and engage customers</p>
  </div>
   <div class="get-started-btn">
    <base-button mode="outline">Get started</base-button>
  </div> 
  <div class="watch-demo-btn">
    <base-button>Watch Demo</base-button>
  </div>
</section>
</template>


<script>
  import BaseButton from '../ui/BaseButton.vue';
  import BaseHeader from '../ui/BaseHeader.vue';


export default {
 components: {
 BaseHeader,
  BaseButton,
  },
};
</script>

<style scoped>
.get-started-btn {
  position: absolute;
  left: 52.52%;
  right: 35.9%;
  top: 74.51;
}
.watch-demo-btn {
position: absolute;
left: 52.52%;
right: inherit;
top: 77.98%;
bottom: 19.25%;
}

.text {
  position: absolute;
  height: 140px;
  left: 50.43%;
  right: 33.82;
  top: cacl(50% - 140px/2 + 314px);

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  text-align: center;

  color: #FAFAFB
}
.title {
  position: absolute;
  height: 120px;
  left: 50.43%;
  right: 33.82%;
  top: calc(50% - 120px/2 + 168px);

  font-family: HK Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;
}
.hero {
background: #1565D8;
position: absolute;
width: 320px;
height: 850px;
}

.audience {
  position: absolute;
  left: 63.46%;
  right: 32.08%;
  top: 91.79%;
  bottom: 4.16;

  background: url('../../assets/images/audience.png');
}
</style>