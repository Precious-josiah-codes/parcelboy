<template>
  <div>
       <!-- header nav -->
      <div 
      class="flex items-center px-4 h-20 font-Poppins shadow-xl">
          <div @click="$router.go(-1)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </div>
          <h1 
          class="w-full flex justify-center items-center">
              Contact Us
          </h1>
      </div>

    <div class="pl-5 font-Poppins mt-6">
    <div>
        <img :src="require('@/assets/images/signin-logo.png')" alt="parcelboy logo"/>
      </div>
      <h1 
      class="mt-4" s
      style="font-size: 1.19rem">Parcel Boy</h1>

      <div style="color: #8B8B8B">
      <h1 class="mt-3">54 GRA Transamadi</h1>
      <h1>Port Harcourt, rivers State, Nigeria</h1>
      <h1>+234-809-354-6694</h1>
      </div>
      <p 
      style="color: #A2A2A2"
      class="mt-3 pr-6 font-light text-sm">Have any question? we'd love to hear from you.</p>
  </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>