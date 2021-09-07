<template>
<div class="relative font-Poppins">
    <!-- Toast -->
        <transition
        name="toast">
        <div v-if="error" class="toast-wrapper flex justify-center" style="position: fixed">
            <div class="toast bg-white text-center font-light text-sm" style="width: 300px; color: black">
            {{errorMsg}}
            </div>
            </div>
        </transition>   
    <!-- first section -->
    <router-link :to="{name: 'WelcomeScreen'}">
    <div class="w-full image-header mb-8" style="position: fixed; z-index: 10">
        <img :src="require('@/assets/images/register-header.png')" alt="parcelboy logo"  class="header"/>
        <div class="absolute bottom-28 text-white z-1 left-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <div class="absolute bottom-16 w-full flex justify-center">
            <img :src="require('@/assets/images/register-logo.png')" alt="parcelboy logo"  width="60" height="60"/>
        </div>
    </div>
    </router-link>
    <!-- second section -->
    <div class="flex h-auto items-center">
        <div class="section w-full">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="mt-20">
                            <h1 class="text-textColor text-lg font-semibold">Register,</h1>
                            <h1 class="text-sm font-light text-textColorTwo">Sign up to continue</h1>
                        </div>

                        <!-- form fields -->

                        <!-- name field -->
                        <div class="relative mt-6">
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
                            
                            <div @click="seePassword" v-if="inputType === 'password'" class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                            <div @click="hidePassword" v-if="inputType !== 'password'"  class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo" >
                               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                            </div>
                        </div>

                        <!-- confirm  password -->
                        <!-- <div class="relative mt-4">
                            <input :type="confirmInputType" placeholder="Confirm Password" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.confirmPassword">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <div v-if="confirmInputType === 'password'"  @click="hideConfirmPassword" class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                            <div v-else @click="hideConfirmPassword" class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                            </div>
                        </div>
                        <div style="font-size: 13px; margin-top: 5px; color: red">
                            {{confirmPasswordMsg}}
                        </div> -->

                        <!-- end of form fields -->
                        <div class="flex justify-center mt-6">
                            <!-- <router-link  class="w-full flex justify-center"> -->
                                <button 
                                :disabled="disableBtn === true" 
                                @click="submitForm" 
                                class="bg-textColor text-primary w-5/6 py-3 rounded-full flex justify-center items-center">
                                <div v-if="isLoading" class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                                <div class="px-3">Sign up</div>
                                </button>
                            <!-- </router-link> -->
                        </div>
                        <div class="flex justify-center mt-3">
                            <h1 class="text-xs font-light text-textColorTwo">Already have Account? 
                            <router-link :to="{ name: 'SignInScreen' }">
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
import { computed, inject, ref, watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import axios from "axios";
import { useGeolocation } from '../../composables/userGeolocation'


export default {
setup() {
    const userStore = inject('userStore')
    const user = ref({
        fullName: '',
        password: '',
        email: '',
        gender: '',
        phone: '',
    })
    const inputType = ref('password')
    const errorMsg = ref('')
    const confirmPasswordMsg = ref('')
    const showMsg = ref(false)
    const confirmInputType = ref('password')
    const disableBtn = ref(false)
    const error = ref(false)
    const isLoading = ref(false)
    const router = useRouter()

    useGeolocation()


    watchEffect(() => {
        if (userStore.state.success) {
            router.push({name: 'DeliveryScreen'})
            setTimeout(() => {
                userStore.state.success = false
            }, 3000);
        }

        if (userStore.state.userExist.includes('User already exists')) {
            errorMsg.value = 'user already exist'
            isLoading.value = false
            error.value = true
            setTimeout(() => {
                error.value = false
                userStore.state.userExist = ''
            }, 3000);
        }
    })

    const seePassword = () => {
        inputType.value = 'text'
    }
    
    const hidePassword = () => {
        inputType.value = 'password'
    }


    const submitForm = () => {
        for (const u in user.value) {
            if (user.value[u].length === 0) {
                if(u.includes('fullName')) errorMsg.value = 'name is empty'
                else errorMsg.value =  `${u} is empty`
                isLoading.value = false
                error.value = true
                console.log(u)
    
                setTimeout(() => {
                    error.value = false
                }, 3000);
                break
            } else if(u.includes('password')) {
                if(user.value[u]) {
                    if (user.value[u].length < 8) {
                        errorMsg.value = 'password should be more than 7'
                        isLoading.value = false
                        error.value = true
                        setTimeout(() => {
                            error.value = false
                        }, 3000);
                        break

                    }
            }
            } 
        }

         if (user.value.fullName &&
            user.value.email &&
            user.value.phone &&
            user.value.gender &&
            user.value.password &&
            user.value.password.length > 7
             ) {
                isLoading.value = true
                userStore.actions.signUp(user.value)
             }
               
    
}
    
    return { 
        user,
        inputType,
        confirmInputType,
        errorMsg,
        error,
        showMsg,
        disableBtn,
        isLoading,
        hidePassword,
        seePassword,
        submitForm,
        
     }
}
}
</script>

<style>
.image-header {
    height: 195px;
    top: -5%;
}
.image-header .header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}

.image-footer {
    height: 190px;
    bottom: -17%;
}
.image-footer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}

</style>