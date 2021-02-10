<template>
<section class="header">
  <div class="logo">
    <img :src="require(`@/assets/images/logo.png`)"/>
  </div>
  <div class="burger">
    <img :src="require(`@/assets/images/burger.png`)"/>
  </div>
</section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.header {
  position: absolute;
  width: 272px;
  height: 64px;
  left: 24px;
  top: 0px;
  background: transparent;
}

.burger {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 248px;
  top: 20px;
}

.logo {
  position: absolute;
  width: 77px;
  height: 24px;
  left: 0px;
  top: calc(50% - 24px/2);
}
</style>