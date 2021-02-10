<template>
<section class="container">
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

.container {
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 320px;
}

.logo {
  padding: 10px 10px 10px 10px;
  width: 77px;
  height: 24px;
}
.burger {
  padding: 10px 10px 10px 10px;
  width: 24px;
  height: 24px;
}

</style>