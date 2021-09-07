<template>
<div style="height: 100vh">
  <router-view/>
</div>
</template>


<script>
import { provide } from '@vue/runtime-core'
import SideNav from './components/SideNav.vue'
import userStore from './storeone/userStore'

export default {
  components: { SideNav },
  setup() {
    provide('userStore', userStore)
  }
  
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

</style>
