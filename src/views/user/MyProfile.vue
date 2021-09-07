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
              My Profile
          </h1>
      </div>

      <!-- profile image/details -->
      <div style="height: 88vh; overflow-y: auto;">
          <div class="flex justify-center">
            <div 
            class="text-center pt-6 pb-5 rounded-2xl"
            style="
            width: 70%;
            box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.221);">
                <div class="relative inline-block mb-3">
                  <label>
                  <img 
                  class="inline-block object-cover rounded-full h-20 w-20 shadow-2xl border-4" 
                  style="border-color: #8B8B8B"
                  :src="userStore.state.userProfile.user_Img"/>
                  
                  </label>
                  <label
                  class="absolute bg-white top-0 right-0  w-6 h-6 rounded-full flex justify-center items-center">
                  <input type="file" style="display: none" @change="uploadImg($event)">
                  <span v-if="!userStore.state.loadingImg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  </span>
                  <div v-else class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                  </label>
                </div>
                <div class="font-Poppins">
                    <h1 class="font-bold">{{userStore.state.userProfile.fullName}}</h1>
                    <h1
                    class="text-xs" 
                    style="color: #8B8B8B">{{userStore.state.userProfile.fullAddress}}</h1>
                    <h1
                    class="text-sm"
                    style="color: #8B8B8B">Customer ID: <span style="color: black">{{userStore.state.userProfile.user_id === undefined ? '' : userStore.state.userProfile.user_id.toUpperCase()}}</span></h1>
                </div>
            </div>
          </div>

          <!-- profile data fields -->
          <div 
          class="mt-5 font-Poppins text-sm"
          style="color: #8B8B8B">
              <div class="px-5">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  type="text"
                  class="text-black text-sm font-Poppins mt-0 mb-4  block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  :placeholder="userStore.state.userProfile.fullName"
                  v-model="user.fullName"
                />
              </label>

              <!-- Email -->
              <label class="block relative">
                <span class="text-gray-700">E-mail</span>
                <input
                  type="text"
                  class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  :placeholder="userStore.state.userProfile.email" 
                  v-model="user.email"
                />
                <div class="absolute right-0 bottom-0 flex pointer-events-none text-textColorTwo">
                    <span style="color: #54E346">verified</span>
                </div>
              </label>
              
              <!-- Mobile No -->
              <label class="block relative">
                <span class="text-gray-700">Mobile No</span>
                <input
                  type="text"
                  class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  :placeholder="userStore.state.userProfile.phone" 
                  v-model="user.phone"
                />
                <div class="absolute right-0 bottom-0 flex pointer-events-none text-textColorTwo">
                    <span style="color: #54E346">verified</span>
                </div>
              </label>

              <!-- Gender -->
              <label class="block relative">
                <span class="text-gray-700">Gender (Optional)</span>
                <select v-model="user.gender" class="w-full border-0 border-b-2 mb-4 border-gray-200 focus:ring-0 focus:border-black px-0 text-sm font-Poppins text-black">
                    <option value="" class="text-sm font-light" disabled hidden selected>{{userStore.state.userProfile.gender}}</option>
                    <option value="Male" class="text-sm font-light">Male</option>
                    <option value="Female" class="text-sm font-light">Female</option>
                </select>
              </label>

              <!-- Birthday -->
              <label class="block relative">
                <span class="text-gray-700">Birthday (optional)</span>
                <input
                  type="text"
                  class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  :placeholder="`${userStore.state.userProfile.dateOfBirth === undefined ? 'Year-Month-Date' : userStore.state.userProfile.dateOfBirth.substring(0, 10)}`"
                  v-model="user.dateOfBirth"
                />
                <div class="absolute right-0 bottom-0 flex pointer-events-none text-textColorTwo">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
              </label>

              <!-- State -->
              <label class="block relative">
                <span class="text-gray-700">City</span>
                <select v-model="user.city" class="w-full border-0 border-b-2 mb-4 border-gray-200 focus:ring-0 focus:border-black px-0 text-sm font-Poppins text-black">
                    <option value="" class="text-sm font-light" disabled hidden selected>{{userStore.state.userProfile.city}}</option>
                    <option value="Rivers" class="text-sm font-light">Rivers</option>
                    <option value="Akwa Ibom" class="text-sm font-light">Akwa Ibom</option>
                    <option value="Delta" class="text-sm font-light">Delta</option>
                </select>
              </label>

              <!-- Country -->
              <label class="block relative">
                <span class="text-gray-700">Country</span>
                <select 
                v-model="user.country" 
                class="w-full border-0 border-b-2 mb-4 border-gray-200 focus:ring-0 focus:border-black px-0 text-sm font-Poppins text-black" placehole>
                    <option value="" class="text-sm font-light" disabled hidden selected>{{userStore.state.userProfile.country}}</option>
                    <option value="Nigeria" class="text-sm font-light">Nigeria</option>
                    <option value="Ghana" class="text-sm font-light">Ghana</option>
                    <option value="South Africa" class="text-sm font-light">South Africa</option>
                </select>
              </label>

              <!-- Address -->
              <label class="block relative">
                <span class="text-gray-700">Address</span>
                <input
                  type="text"
                  class="text-black text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  :placeholder="userStore.state.userProfile.fullAddress" 
                  v-model="user.fullAddress"
                />
              </label>

              <!-- save btn -->
              <div class="flex justify-center mt-6 pb-5">
                <button 
                @click="updateProfile"
                class="bg-textColor w-72 text-white py-3 rounded-full font-Poppins">
                SAVE
                </button>
                </div>
              </div>
          </div>
      </div>

      
  </div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core'

export default {
  setup() {
    const userStore = inject('userStore')
    const user = ref({
        fullName: '',
        dateOfBirth: '',
        email: '',
        gender: '',
        phone: '',
        city: '',
        country: '',
        fullAddress: '',
    })

    const updateProfile = () => {
      user.value.dateOfBirth = new Date(user.value.dateOfBirth)
      userStore.mutations.updateUserProfileImg()
      userStore.actions.updateUserProfile(user.value)
      user.value.dateOfBirth = user.value.dateOfBirth.toString().substr(4,12)
    }

    const uploadImg = (event) => {
      const file = event.target.files[0]
      console.log('uploads', file)
      userStore.actions.uploadUserImage(file)
    }

    return { userStore, user, updateProfile, uploadImg }
  }
}
</script>

<style>

</style>