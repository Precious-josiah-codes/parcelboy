<template>
  <div class="absolute bg-white overflow-hidden top-0 h-screen w-full" style="z-index: 10">
      <!-- eader -->
      <div class="pl-5 pt-6" @click="removeWallet">
          <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"></path></svg>
      </div>

      <!-- TOTal money -->
      <div class="px-5 py-4 font-Poppins mt-9" 
      style="
      background-color: rgba(225, 255, 225, 0.61);
      color: black ">
          <p class="font-bold mb-2">Total Money</p>
          <p class="font-medium mb-5">{{userStore.state.userProfile.wallet}} NGN</p>
          <p class="font-medium text-sm">Sum of ParcelBoy Wallet transfer</p>
      </div>
      
      <!-- TOTal money -->
      <div class="px-5 py-4 font-Poppins mt-9" 
      style="
      background-color: rgba(225, 255, 225, 0.61);
      color: black ">
          <p class="font-bold mb-2">Wallet Transfer</p>
          <p class="font-medium mb-5">{{userStore.state.userProfile.wallet}} NGN</p>
          <p class="font-bold flex justify-end" style="color: rgb(2, 105, 2)">
              WITHDRAW TO BANK
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </p>
      </div>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup(_, { emit }) {
        const userStore = inject('userStore')
        const removeWallet = () => {
            emit('removeWallet')
        }

        return { removeWallet, userStore }
    }

}
</script>

<style>

</style>