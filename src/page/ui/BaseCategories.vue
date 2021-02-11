<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
</script>

<style scoped>
button,
a {
  text-decoration: none;
  font: Open sans;
  background-color: rgba(54, 179, 126, 0.2);
  border: none;
  color:  #36B37E;
  cursor: pointer;
  border-radius: 15px;
  height: 24px;
  width: 92px;
  margin-right: 0.5rem;
  display: inline-block;
}
</style>