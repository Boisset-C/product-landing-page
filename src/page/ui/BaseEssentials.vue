<template>
  <section class="card-box">
    <p class="price">$99</p><base-text>/month</base-text>
<base-med-title>Essentials</base-med-title>
<div class="card">
  <text>Better for growing business that want more customers.</text>
  <ul class="list-style">
    <li>Unlimited project use</li>
    <li>Advanced dashboard</li>
    <li>All components included</li>
    <li>Advanced insight</li>
  </ul>
  <div class="button">
  <base-button mode="outline">Get Started</base-button>
</div>
</div>
  </section>
</template>

<script>

</script>

<style scoped>

.card-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.list-style {
  list-style: inside url("../../assets/images/base-images/list-style.png");
 
}
li {
 text-align: left;
}
.button {
  padding: 5px 5px 20px 5px;
}
.price {
font-size: 40px;
font-weight: bold;
text-align: left;
color: #36B37E;
}
</style>