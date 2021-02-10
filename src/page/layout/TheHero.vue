<template>
<section class="hero">
  <div class="header">
  <base-header></base-header>
  </div>
  <div class="title">
    <p>Powerful 
      <br />analytics tools for your business</p>
  </div>
  <div class="text">
    <p>An awesome and powerful tool for your business, increase business revenue with enterprise-grade links built to acquire and engage customers</p>
  </div>
   <div class="get-started-btn">
    <base-button mode="outline">Get started</base-button>
  </div> 
  <div class="watch-demo-btn">
    <base-button mode="flat">Watch Demo</base-button>
  </div>
  <div class="macbook">
    <img :src="require(`@/assets/images/macbook.png`)"/>
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
.hero {
  display: grid;
  grid-template-columns: 320px;
 
  background: #1565d8;
  
}
.macbook {
  display: flex;
  background: url('../../assets/images/macbook.png');
}
.title {
display: flex;
justify-content: center;

font-family: Hk Grotesk, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 40px;
text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;
}
.text {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 320px;
  height: 140px;
 
  font-family: Open-sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;
}
.watch-demo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 48px;
  padding: 5px 5px 20px 0px;

}
.get-started-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320x;
  height: 48px;
  padding: 5px 5px 5px 5px;
}
</style>