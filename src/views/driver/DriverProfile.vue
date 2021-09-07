<template>
<div class="h-screen overflow-hidden">
  <!-- profile Image -->
  <div class="relative">
    <!-- profile header -->
    <div class="slide-img">
      <img :src="userStore.state.userProfile.user_Bg_Img" alt="profile" />
    </div>
      


    <div 
    class="absolute top-0 text-white flex justify-between w-full px-4"
    style="transform: translate(0%, 60%);">
      <span @click="$router.go(-1)">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </span>
      <span class="text-black">
        <label>
        <input type="file" style="display: none" @change="uploadBg">
        <span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>

        </span>
        </label>
      </span>
    </div>
    <!-- profile Image section details -->
    <div 
    class="absolute bottom-0 flex flex-col justify-center w-full" 
    style="transform: translate(0%, 74%);">
      <div class="flex justify-center w-auto text-center">
        <div class="font-Poppins font-medium">
          <label>
            <img class="inline-block object-cover w-20 h-20 border-4 border-white rounded-full" 
            :src="userStore.state.userProfile.user_Img"/>
            <input type="file" class="absolute" style="display: none" @change="uploadImg($event)">
            <span class="absolute w-6 h-6 rounded-full bg-white" style="left: 200px">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </span>
          </label>
        <h1 class="text-black font-bold text-base">{{userStore.state.userProfile.fullName}}</h1>
        <div class="flex">
          <div class=" mr-2 text-sm">{{userStore.state.userProfile.automobileName}}</div>
          <div class="mr-1 rounded-full" style="background-color: #D1DADF; width: 0.99rem; height: 0.99rem"></div>
          <span class="mr-2 text-sm">{{userStore.state.userProfile.automobileColour}}</span>
        </div>
        <h1 class="text-sm text-textColor"><span style="color: #8B8B8B">Driver ID:</span>  {{userStore.state.userProfile.user_id}}</h1>
        <img :src="require('@/assets/images/stars.png')" style="margin: 0 auto" class="mt-1"/>
        </div>
      </div>
    </div>
  </div>

  <div 
  class="flex justify-center px-4 font-Poppins" 
  style="
  transform: translate(0%, 255%);
  ">
    <div 
    class="flex justify-between w-full h-auto px-5 py-2 rounded-2xl"
    style="
    box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.116);">
    <div>
      <h1 class="font-medium text-sm" style="color: #8B8B8B">Registered</h1>
      <h2 class="text-textColor font-bold text-xs">{{userStore.state.userProfile.registered_date.substring(0,10)}}</h2>
    </div>
    <div>
      <h1 class="font-medium text-sm" style="color: #8B8B8B">Delivery</h1>
      <h2 class="text-textColor font-bold text-xs">{{userStore.state.userProfile.driverNumberOfDelivery}}</h2>
    </div>
    <div>
      <h1 class="font-medium text-sm" style="color: #8B8B8B">Reports</h1>
      <h2 class="text-textColor font-bold text-xs">{{userStore.state.userProfile.driverNumberOfReports}}</h2>
    </div>
  </div>


  </div>

  <div
  class="px-4 font-Poppins"
  style="
  transform: translate(0%, 60%); height: 40vh; overflow-y: auto;
  ">
    <div>
      <h1 style="color: #8B8B8B" class="text-base">Bio</h1>
      <input
          type="text"
          class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          :placeholder="userStore.state.userProfile.bio"
          v-model="userProfile.bio"
      />
      <!-- <span style="color: #0E49B5" class="font-bold">...more</span> -->
    </div>
    <div class="flex justify-between mt-5">
        <div>
            <h1 style="color: #8B8B8B" class="text-base">Plate Licence Number</h1>
            <h1 class="mt-1 text-sm">{{userStore.state.userProfile.liscensePlateNumber}}</h1>
        </div>
        <div>
            <h1 style="color: #8B8B8B" class="text-base">Driving Licence</h1>
            <h1 class="mt-1 text-sm">{{userStore.state.userProfile.drivingLiscenceNumber}}</h1>
        </div>
    </div>

    
    <div class="mt-5">
      <div>
        <div>
            <h1 style="color: #8B8B8B" class="text-base">Mobile No</h1>
            <input
                type="text"
                class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                :placeholder="userStore.state.userProfile.phone"
                v-model="userProfile.phone"
            />
      </div>
      <label class="block relative mt-5">
        <span style="color: #8B8B8B">Gender</span>
        <select class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-0 text-sm font-Poppins text-black" v-model="userProfile.gender">
            <option value="" class="text-sm font-light" disabled hidden selected>{{userStore.state.userProfile.gender}}</option>
            <option value="Male" class="text-sm font-light">Male</option>
            <option value="Female" class="text-sm font-light">Female</option>
        </select>
        </label>

        <label class="block relative mt-5">
        <span class="text-gray-700">Address</span>
        <input
            type="text"
            class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            :placeholder="userStore.state.userProfile.fullAddress"
            v-model="userProfile.fullAddress"
        />
        </label>
      </div>
    </div>
    <div class="mt-5 mb-16 flex justify-center">
      <button class="font-semibold w-72 py-3 rounded-full font-Poppins" style="background-color: #2F455C; color: white" @click="updateProfile">Save</button>
    </div>
  </div>
</div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core'
export default {
  setup() {
    const userStore = inject('userStore')

    const userProfile = ref({
      bio: "",
      phone: "",
      gender: "",
      fullAddress: ""
    })

    const updateProfile = () => {
      console.log(userProfile.value)
      userStore.mutations.updateUserProfileImg()
      userStore.mutations.updateUserBgProfileImg()
      userStore.mutations.updateDriverProfile(userProfile.value)
    }

    const uploadImg = (event) => {
      const file = event.target.files[0]
      console.log('uploads', file)
      userStore.actions.uploadUserImage(file)
    } 
    
    const uploadBg = (event) => {
      const file = event.target.files[0]
      console.log('uploads', file)
      userStore.actions.uploadBgUserImage(file)
    } 

    return { userStore, userProfile, updateProfile, uploadImg, uploadBg }
  }
}
</script>

<style>
.slide-img {
  height: 140px;
  position: relative;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.322);
  overflow: hidden;
  background-color: red;
}

.slide-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
}
</style>