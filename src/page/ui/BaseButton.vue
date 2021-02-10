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
  props: {
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
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: Open sans;
  background-color:#1565D8;
  border: 1px solid#1565D8;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  height: 48px;
  width: 200px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #1565D8;
  border-color: #1565D8;
}

.flat {
  background-color: transparent;
  color: #FFFFFF;
  border-color: #FFFFFF;
  border-style: solid;
}

.outline {
  background-color: #FFFFFF;
  border-color: #1565D8;
  color:  #1565D8;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>