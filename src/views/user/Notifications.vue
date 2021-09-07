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
              Notification
          </h1>
          <span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </span>
      </div>
 <!-- <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> -->
      <!-- notification list -->
      <div>
          <div class="flex items-center font-Poppins mt-6 px-3" v-for="notification in userStore.state.userNotification" :key="notification"> 
              <div 
              style="
              color: #54E346;
              width: 15%">
                <span v-if="notification.title === 'Confirmation'">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                  <span style="color: red" v-if="notification.title === 'Cancelled'">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </span>
              </div>
              <div 
              style="
              padding-right: 5px;
              width: 70%;
              "
              class="text-sm">{{notification.msg}}</div>
              <div 
              style="color: #A2A2A2"
              class="text-sm" >{{!notification.date ? notification.date : notification.date.slice(11,16)}}</div>
          </div>
      </div>

  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup() {
        const userStore = inject('userStore')
      

        return { userStore }
    }
}

</script>

<style>

</style>