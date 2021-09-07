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
              Help & Support
          </h1>
      </div>

      <div class="mt-6 pl-5 font-Poppins nav">
          <div class="flex justify-between">
          <h1>Chat with customer service</h1>
          <div 
          style="color: #CCCCCC"
          class="pr-5">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
          </div>
        <router-link :to="{name: 'ContactUs'}">
          <div class="flex justify-between mt-5">
                <h1>Contact Us</h1>
                <div 
                style="color: #CCCCCC"
                class="pr-5">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>