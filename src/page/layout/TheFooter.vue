<template>
<diV class="container">
<div class="list-container">
  <ul class="top-list">
<base-med-title>Product</base-med-title>
    <li>Landing page</li>
    <li>Features</li>
    <li>Documentation</li>
    <li>Referral Program</li>
    <li>Pricing</li>
  </ul>

  <ul class="top-list">
  <base-med-title>Company</base-med-title>
    <li>About</li>
    <li>Terms</li>
    <li>Privacy Policy</li>
    <li>Careers</li>
  </ul>

  <ul class="services">
  <base-med-title>Services</base-med-title>
    <li>Documentation</li>
    <li>Design</li>
    <li>Themes</li>
    <li>Illustrations</li>
    <li>UI Kit</li>
  </ul>

  <ul class="more">
  <base-med-title>More</base-med-title>
    <li>Documentation</li>
    <li>License</li>
    <li>ChangeLog</li>
  </ul>
</div>

<div class="icon">
   <img :src="require(`@/assets/images/our-pricing-images/logo-pricing.png`)"/>
  </div>

<div class="text">
  <base-text>Build a modern and creative website with crealand</base-text>
</div>
  <div class="icon">
   <img :src="require(`@/assets/images/our-pricing-images/social-icon-pricing.png`)"/>
  </div>
</diV>

</template>
<style scoped>
.list-container {
 
}


.more {
  display: flex;
  justify-content: right;
}
.icon {
  display: flex;
  justify-content: center;
}

.text {
  display: flex;
  justify-content: center;
}
</style>