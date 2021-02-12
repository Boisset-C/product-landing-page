
<template>
<div class="collaborate-label">
  <base-categories id="collaborate">COLLABORATE</base-categories>
</div>
<div class="container">
    <h2>Collaborate with your team anytime, anywhere.</h2>
    <base-text>See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.</base-text>
    <ul>
      <li>Organize your data</li>
      <li>Work with any team</li>
      <li>Business analytics</li>
      <li>Always in sync</li>
      <li>Embedded analytics</li>
    </ul>
  <div class="icon">
      <img :src="require(`@/assets/images/collaborate-images/cred-image-collaborate.png`)"/>
  </div>
</div>
          

</template>

<script>
import BaseCategories from '../ui/BaseCategories.vue';
import BaseText from '../ui/BaseText.vue';

export default {
  components: { 
    BaseCategories,
    BaseText,
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
.collaborate-label {
  display: flex;
  justify-content: center;
  padding: 20px 5px 0px 5px;
}
#collaborate {
  display: flex;
  justify-content: center;
 
}
.container {
 display: grid;
 justify-content: center;
 align-items: center;
}
ul {
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;

  color: #183B56;
}

</style>
