<template>
  <div class="absolute w-full" style="z-index: 1">
    <div class="section py-5">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="flex justify-between items-center">
              <div>
                  <span v-if="!backbtn" @click="openSideBar">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                  </span>
                  <span v-else @click="goBack">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                  </span>
              </div>
              <div class="flex w-1/3 justify-between items-center">
              <router-link :to="{name : 'Notifications'}" style="color: gray">
                <div @click="loadNotification" class="inline-flex items-center justify-center w-11 h-11 p-1 rounded-full " style="box-shadow: 1px 1px 8px rgba(53, 52, 52, 0.4); background-color: white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </div>
                </router-link>
                <router-link :to="{name : 'MyProfile'}">
                <div class="border-4 rounded-full border-white shadow-inner" style="box-shadow: 1px 1px 8px rgba(53, 52, 52, 0.4);">
                  <img :src="userStore.state.userProfile.user_Img" alt="parcelboy logo" class="inline object-cover w-10 h-10 rounded-full shadow-2xl "/>
                </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
  props: ['backbtn'],
  setup(props, { emit }) {
    const userStore = inject('userStore')

    const openSideBar = () => {
      emit('openSidebar', true)
      userStore.state.sideNavDriver = true
      console.log(userStore.state.sideNavDriver)
    }

    const goBack = () => {
      emit('goback', true)
    }

    const loadNotification = () => {
      console.log('fetching notification')
      userStore.actions.userRecieveNotification()
    }

    return { openSideBar, goBack, userStore, loadNotification }
  }
}
</script>

<style>


</style>