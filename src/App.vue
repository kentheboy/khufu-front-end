<template>
  <router-view></router-view>
</template>

<script>
import Ripple from 'primevue/ripple';
export default {
  name: 'App',
  directives: {
    Ripple
  },
  mounted() {
    this.$primevue.config.ripple = true;
  }
}
</script>

<style>
</style>
