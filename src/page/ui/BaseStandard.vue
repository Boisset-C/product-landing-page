<template>
  <section class="card-box">
    <p class="price">$39</p>
    <div class="price-text"><base-text>/month</base-text>
<base-med-title>Standard</base-med-title>
    </div>
<div class="card">
  <text>All the basics for business that are just getting started.</text>
  <ul class="list-style">
    <li>Single project use</li>
    <li>Basic dashboard</li>
    <li>All components included</li>
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
 padding: 5px 5px 5px 5px;
 margin: 5px 5px 5px 5px;
 font-family: Open sans, sans-serif;
 font-style: normal;
 line-height: 20px;
}

.button {
  padding: 5px 5px 20px 5px;
}
.price {
font-size: 40px;
font-weight: bold;
text-align: left;
}
.price-text {
  text-align: left;
}
</style>