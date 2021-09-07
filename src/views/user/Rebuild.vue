<template>
<div class="relative h-screen">
  
  </div>

</template>

<script>
import { computed, inject, ref, watchEffect } from '@vue/runtime-core'
export default {
    setup() {
        const userStore = inject('userStore')
       
       const get = userStore.actions.getbar()
       console.log(get)

      

        return {userStore}
    }

}
</script>
