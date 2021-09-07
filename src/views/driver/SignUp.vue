<template>

      <!-- latitude Error -->
  <div class="relative font-Poppins">
  
    <div v-if="longitudeError" @click="longitudeError = false" class="h-screen flex items-center justify-center px-4"
    style="position: fixed; z-index: 1; background-color: rgba(0, 0, 0, 0.8);">
  
     <div 
        class="bg-white py-5"
        style="background-color: white; border-radius: 8px">
        <div>
            <div class="pl-3 text-sm">
            <span>oopppss.. ): please grant permission to access your location</span>
            </div>
            <h1
            class="px-2 py-1 text-sm mt-2"
            style="background-color: #2F455C; width: 70px; color: white">STEP 1</h1>
            <p class="mt-1 text-sm pl-4">Go to your settings and find the location Tab</p>
            <h1
            class="px-2 py-1 mt-2 text-sm"
            style="background-color: #2F455C; width: 70px; color: white">STEP 2</h1>
            <p class=" mt-1 text-sm pl-4">You will see the list of all your apps you have or haven't Granted location access</p>
            <h1
            class="px-2 py-1 mt-2 text-sm"
            style="background-color: #2F455C; width: 70px; color: white">STEP 3</h1>
            <p class=" mt-1 text-sm pl-4">Scroll down for ParcelBoy, And click on it</p>
            <h1
            class="px-2 py-1 mt-2 text-sm"
            style="background-color: #2F455C; width: 70px; color: white">STEP 1</h1>
            <p class=" mt-1 text-sm pl-4">
            Now Grant Parcelboy Access to your location, and thats it :)
            </p>
            
            
        </div>
    </div>
    
    
    </div>
    
    
    <div>
      <!-- Toast -->
      <transition
      name="toast">
      <div v-if="error" class="toast-wrapper flex justify-center" style="position: fixed;">
        <div class="toast bg-white text-center font-light text-sm" style="width: 300px; color: black">
        {{errorMsg}}
        </div>
        </div>
      </transition>   

    

    <!-- first section -->
    <div class="w-full image-header mb-8" style="position: fixed; z-index: 10;">
        <img :src="require('@/assets/images/register-header.png')" alt="parcelboy logo"  class="header"/>
        <div class="absolute bottom-28 text-white left-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <router-link :to="{name: 'WelcomeScreen'}">
        <div class="absolute bottom-16 w-full flex justify-center">
            <img :src="require('@/assets/images/register-logo.png')" alt="parcelboy logo"  width="60" height="60"/>
        </div>
        </router-link>

       
    </div>
    </div>
    <!-- second section -->
    <div class="flex h-auto items-center mt-6">
        <div class="section w-full">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="mt-14">
                            <h1 class="text-textColor text-lg font-semibold">Register,</h1>
                            <h1 class="text-sm font-light text-textColorTwo">Sign up to continue</h1>
                        </div>

                        <!-- form fields -->

                        <!-- name field -->
                        <div class="relative mt-4">
                            <input type="text" placeholder="Full Name" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light text-textColorTwo" v-model="user.fullName">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                        </div>

                        <!-- Email field -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="Email" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.email">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                        </div>

                        <!-- Phonenumber field -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="+234 Phone Number" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.phone">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                        </div>
                        
                        <!-- Gender field -->
                        <div class="relative mt-5">
                            <select name="" id="" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.gender">
                                <option value="" class="text-sm font-light" selected>Gender</option>
                                <option value="Male" class="text-sm font-light">Male</option>
                                <option value="Femal" class="text-sm font-light">Female</option>
                            </select>
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <img :src="require('@/assets/images/gender.png')" alt="parcelboy logo"/>
                            </div>
                        </div>

                        <!-- password field -->
                        <div class="relative mt-5">
                            <input :type="inputType" placeholder="Password" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.password">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                           <div @click="hidePassword" v-if="inputType !== 'password'" class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo" >
                               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                            </div>
                            <div @click="seePassword" v-if="inputType === 'password'" class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>

                        <!-- confirm  password -->
                        <!-- <div class="relative mt-5">
                            <input type="text" placeholder="Confirm Password" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <div class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                            <div class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                            </div>
                        </div> -->

                        <!-- Home Address field -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="Home Address" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.homeAddress">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </div>
                        </div>

                        <!-- Automobile Info -->
                        <div class="mt-14">
                            <h1 class="text-textColor text-lg font-semibold">Automobile Info</h1>
                        </div>

                        <!-- Automobile type field -->
                        <div class="relative mt-5">
                            <select name="" id="" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.automobileType">
                                <option value="" class="text-sm font-light" selected>Choose your ride</option>
                                <option value="bike" class="text-sm font-light">Bike</option>
                                <option value="car" class="text-sm font-light">Car</option>
                            </select>
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                            </div>
                        </div>
                        
                        <!-- Automobile Name field -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="Automobile Name" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.automobileName">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                            </div>
                        </div>
                        
                        <!-- Automobile Colour field -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="Automobile Colour" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.automobileColour">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                            </div>
                        </div>
                        
                        <!-- Licence Plate Number field -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="Licence Plate Number" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.liscensePlateNumber">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                            </div>
                        </div>

                        <!-- Driving Licence field -->
                        <div class="mt-6">
                          <h1>Driving Licence</h1>
                          <div class="flex justify-between items-center mt-2">
                            <div class="border-2 border-dashed border-gray-400 px-4 py-5 text-center rounded-xl">
                              <div class="flex justify-center">
                                <svg v-if="!userStore.state.licenceSuccess" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                              <div v-else>
                                <img class="object-cover inline-block w-10 h-10 border-2 border-white " :src="userStore.state.driver.drivingLicence"/>
                              </div>
                              </div>  
                              <div class="text-xs">Upload Photo</div>
                            </div>
                            <div>
                            <label>
                            <input :disabled="uploadLicenceStatus.includes('Uploading...')" type="file" style="display: none" @change="getFile($event, 'drivinglicence')">
                            <span 
                            class="rounded-full border-2 text-gray-400 border-gray-600 px-5 py-2"
                            v-bind:style="{
                                backgroundColor: licenceBgColor,
                                color: licenceColor,
                                transition: '0.2s ease-in',
                                pointerEvents: 'none'
                            }"
                            >
                                {{uploadLicenceStatus}}
                            </span>
                            </label>
                              
                            </div>
                          </div>
                          <div class="border-b-2 border-gray-400 mt-3"></div>
                        </div>
                        
                         <!-- Automobile Image field -->
                        <div class="mt-6">
                          <h1>Automobile Image</h1>
                          <div class="flex justify-between items-center mt-2">
                            <div class="border-2 border-dashed border-gray-400 px-4 py-5 text-center rounded-xl">
                              <div class="flex justify-center">
                                <svg v-if="!userStore.state.automobileSuccess"  class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                              <div v-else>
                                <img class="object-cover inline-block w-10 h-10 border-2 border-white " :src="userStore.state.driver.automobileImage"/>
                              </div>
                              </div>  
                              <div class="text-xs">Upload Photo</div>
                            </div>
                            <div>
                            <label>
                            <input :disabled="uploadAutomobileStatus.includes('Uploading...')" type="file" style="display: none" @change="getFile($event, 'automobileimage')">
                            <span 
                            class="rounded-full border-2 text-gray-400 border-gray-600 px-5 py-2" 
                            v-bind:style="{
                                backgroundColor: automobileBgColor,
                                color: automobileColor,
                                transition: '0.2s ease-in',
                                pointerEvents: 'none'
                            }"
                            >
                                {{uploadAutomobileStatus}}
                            </span>
                            </label>
                              
                            </div>
                          </div>
                          <div class="border-b-2 border-gray-400 mt-3"></div>
                        </div>
                        
                        
                        <!-- end of form fields -->
                        <div class="flex justify-center mt-6">
                            <button :disabled="isLoading" @click="submitForm" class="bg-textColor text-primary w-5/6 py-3 rounded-full flex justify-center items-center">
                            <div v-if="isLoading" class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                            <div class="px-3">Sign Up</div>
                            </button>
                        </div>
                        <div class="flex justify-center mt-3">
                            <h1 class="text-xs font-light text-textColorTwo">Already have Account? 
                            <router-link :to="{ name: 'SignIn' }">
                                <span class="text-primary font-bold">Sign In</span>
                            </router-link>
                            </h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { inject, onMounted, watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
 setup() {
     const userStore = inject('userStore')
     const user = ref({
        email: '', 
        fullName: '', 
        password: '', 
        phone: '', 
        gender: '', 
        homeAddress: '', 
        automobileColour: '', 
        automobileName: '', 
        automobileType: '', 
        liscensePlateNumber: '', 
        automobileImage: '', 
        drivingLiscenceFile: '',
        longitude: '',
        latitude: '',
        currentDriverLocation: ''
        // drivingLiscenceNumber: '', 
    })
    const isLoading = ref(false)

    const error = ref(false) 
    const errorMsg = ref('')
    const router = useRouter()
    const empty = ref(true)
    const longitudeError = ref(false)
    const uploadAutomobileStatus = ref('Choose File')
    const uploadLicenceStatus = ref('Choose File')
    const automobileBgColor = ref()              
    const automobileColor = ref()              
    const licenceBgColor = ref() 
    const licenceColor = ref() 
    const inputType = ref('password')


    const successCallback = (position) => {
        user.value.longitude = position.coords.latitude 
        user.value.latitude = position.coords.longitude
        console.log(user.value.latitude, user.value.longitude)
    }

    const errorCallback = (error) => {
        console.error(error.message)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)




    watchEffect(() => {
        if (userStore.state.driverSuccess) {
            router.push({name: 'Home'})
            setTimeout(() => {
                userStore.state.driverSuccess = false
                userStore.state.licenceSuccess = false
                userStore.state.automobileSuccess = false
                

            }, 3000);
        }
        
        if(userStore.state.automobileSuccess) {
            uploadAutomobileStatus.value = 'Choose File'
            automobileBgColor.value = ''
            automobileColor.value = ''
        }
        
        if(userStore.state.licenceSuccess) {
            uploadLicenceStatus.value = 'Choose File'
            licenceBgColor.value = ''
            licenceColor.value = ''
        }
        
        if(userStore.state.driverExist) {
            errorMsg.value = 'User already exist'
            error.value = true
            isLoading.value = false
            setTimeout(() => {
                error.value = false
                userStore.state.driverExist = ''
            }, 3000);
        }
    })


        

    const submitForm = () => {
        user.value.automobileImage = userStore.state.driver.automobileImage
        user.value.drivingLiscenceFile = userStore.state.driver.automobileImage
        user.value.currentDriverLocation = 'Abuja'
        console.log('talking', user.value.longitude, user.value.latitude)
        
        if (user.value.fullName &&
            user.value.email &&
            user.value.phone &&
            user.value.gender &&
            user.value.homeAddress &&
            user.value.automobileColour &&
            user.value.automobileName &&
            user.value.automobileType &&
            user.value.liscensePlateNumber &&
            user.value.automobileImage &&
            user.value.drivingLiscenceFile &&
            user.value.longitude &&
            user.value.latitude &&
            user.value.currentDriverLocation 
             ) {
                console.log('ye')
                userStore.actions.signUpDriver(user.value)
            } else {
                console.log('something is empty')
            }

        for (const u in user.value) {
            if (user.value[u].length === 0) {
                if(u.includes('drivingLiscenceFile')) errorMsg.value = 'upload a driving licence image'
                else if (u.includes('automobileImage')) errorMsg.value = 'upload an automobile image'
                else if(u.includes('automobileType')) errorMsg.value = 'choose an automobile type'
                else if(u.includes('automobileName')) errorMsg.value = 'whats the name of your automobile'
                else if(u.includes('automobileColour')) errorMsg.value = 'whats the colour of your automobile'
                else if(u.includes('liscensePlateNumber')) errorMsg.value = 'whats your licence plate number'
                else if(u.includes('longitude')) {
                    longitudeError.value = true
                    error.value = false
                    isLoading.value = false
                    break
                } 
                else errorMsg.value = `${u} is empty`
                isLoading.value = false
                error.value = true
                console.log(u)
    
                setTimeout(() => {
                    error.value = false
                }, 3000);
                break
            } else {
                isLoading.value = true
            }
        }

        
    }

    const getFile = (event, func) => {
        if(event.target.files[0].type.includes('image') && user.value.fullName) {
            console.log(func)
            const file = event.target.files[0]
            if (func === 'automobileimage') {
                console.log('automobile', func)
                uploadAutomobileStatus.value = 'Uploading...'
                automobileBgColor.value = '#2F455C'
                automobileColor.value = 'white'
                userStore.actions.uploadAutomobileImage(file, user.value.fullName)

            } else {
                console.log('licence', func)
                uploadLicenceStatus.value = 'Uploading...'
                licenceBgColor.value = '#2F455C'
                licenceColor.value = 'white'
                userStore.actions.uploadDrivingLicence(file, user.value.fullName)
            }
            console.log(file)
        } else {
            console.log('its not an image and name is empty, please enter a name')
        }
        console.log(event.target.files[0].type)
    }

    const seePassword = () => {
        inputType.value = 'text'
    }
    
    const hidePassword = () => {
        inputType.value = 'password'
    }

    // const uploadAutomobileImg = (event) => {
    //     if(event.target.files[0].type.includes('image') && user.value.fullName) {
    //         // make cloudinary post request to upload image
    //         const file = event.target.files[0]
    //         uploadStatus.value = 'Uploading Image.....'
    //         userStore.actions.uploadAutomobileImage(file, user.value.fullName)
    //         console.log('its an image 1')
    //     } else {
    //         console.log('its not an image and name is empty, please enter a name')
    //     }
    //     console.log(event.target.files[0].type)
    // }
    
    // const uploadDriverLicence = (event) => {
    //     if(event.target.files[0].type.includes('image') && user.value.fullName) {
    //         // make cloudinary post request to upload image
    //         const file2 = event.target.files[0]
    //         uploadStatus.value = 'Uploading...'
    //         userStore.actions.uploadDrivingLicence(file2, user.value.fullName)
    //         console.log('its an image 2')
    //     } else {
    //         console.log('its not an image and name is empty, please enter a name')
    //     }
    //     console.log(event.target.files[0].type)
    // }

    return { user, error, errorMsg, inputType, hidePassword, seePassword, longitudeError,
    userStore, isLoading, uploadAutomobileStatus, uploadLicenceStatus, getFile,
    submitForm, automobileBgColor, automobileColor, licenceBgColor, licenceColor  }
 }
}
</script>

<style>
</style>