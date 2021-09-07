<template>
  <div class="relative font-Poppins overflow-hidden">
      <!-- Toast -->
      <transition
      name="toast">
      <div v-if="error" class="toast-wrapper flex justify-center">
        <div class="toast bg-white text-center font-light text-sm" style="width: 300px; color: black">
        {{errorMsg}}
        </div>
        </div>
      </transition>
    <!-- first section -->
    
    <div class="w-full image-header mb-8" style="position: fixed; z-index: 10">
        <img :src="require('@/assets/images/signin-header.png')" alt="parcelboy logo"  class="header"/>
        <div class="absolute bottom-28 text-white z-1 left-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
      
        <div @click="go" class="absolute bottom-16 w-full flex justify-center">
            <img :src="require('@/assets/images/register-logo.png')" alt="parcelboy logo"  width="60" height="60"/>
        </div>
 
    </div>

    <!-- second section -->
    <div class="flex h-auto px-4" style="margin-top: 30%">
        <div class="section w-full">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="">
                            <h1 class="text-textColor text-lg font-semibold">Welcome,</h1>
                            <h1 class="text-sm font-light text-textColorTwo">Sign In to continue</h1>
                        </div>

                        <!-- form fields -->
                        <div class="relative mt-5">
                            <input type="text" placeholder="E-Mail" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" style="color: '#A2A2A2" v-model="user.email">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                        </div>
                        <div class="relative mt-5">
                            <input :type="inputField" placeholder="Password" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light" v-model="user.password">
                            <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none" >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <div @click="showPassword" v-if="inputField === 'password'" class="absolute inset-y-0 right-0 top-0 flex items-center">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                            <div v-else @click="hidePassword" class="absolute inset-y-0 right-0 top-0 flex items-center">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            </div>
                        </div>

                        <!-- end of form fields -->

                        <div class="flex justify-end mt-3">
                            <h1 class="text-xs text-primary">Forgot Password?</h1>
                        </div>
                        <div class="flex justify-center mt-6">
                            <button @click="submitForm" class="bg-textColor text-primary w-5/6 py-3 rounded-full flex justify-center items-center">
                            <div v-if="isLoading" class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                            <div class="px-3">Sign In</div>
                            </button>
                        </div>
                        <div class="flex justify-center mt-4">
                            <h1 class="text-xs font-light text-textColorTwo">New member? 
                                <span @click="go" class="text-primary font-bold">Sign Up</span>
                            </h1>
                        </div>
                        <div class="flex justify-center font-light text-sm mt-5">Or</div>
                        <div class="flex justify-center items-center text-xs font-light text-textColorTwo mt-1">
                            <div>
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 12H4"></path></svg>
                            </div>
                            <div class="px-2">Sign in with</div>
                            <div>
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 12H4"></path></svg>
                            </div>
                        </div>

                        <!-- third party sign in authentication icon -->
                        <div class="flex justify-center mt-2">
                            <div class="mr-4">
                                <img :src="require('@/assets/images/Facebook Icon.png')" alt="parcelboy logo"/>
                            </div>
                            <div class="ml-4">
                                <img :src="require('@/assets/images/Google Icon.png')" alt="parcelboy logo"/>
                            </div>
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
import { inject, watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { useGeolocation } from '../../composables/userGeolocation'


export default {
    setup() {
        const user = ref({
            email: "",
            password: ""
        })

        const router = useRouter()

        const userStore = inject('userStore')
        const inputField = ref('password') 
        const isLoading = ref(false) 
        const error = ref(false) 
        const errorMsg = ref('')

        useGeolocation()


        watchEffect(() => {
            if (userStore.state.loginSuccess) {
                router.push({name: 'Home'})
                setTimeout(() => {
                    userStore.state.loginSuccess = false
                }, 4000);
            }
            
            if (userStore.state.loginErrorMsg) {
                errorMsg.value = 'Email or Password is incorrect'
                isLoading.value = false
                error.value = true
                setTimeout(() => {
                    error.value = false
                    userStore.state.loginErrorMsg = ''
                }, 3000);
            }
        })

       

        
        const go = () => {
            console.log('go sign up screen edit')
            router.push({name : 'SignUp'})
        }
       

        const submitForm = () => {
            if (
            user.value.email &&
            user.value.password ) {
                console.log('submitting')
                userStore.actions.signIn(user.value)
            } else {
                console.log('something is empty')
            }

            for (const u in user.value) {
                if (user.value[u].length === 0) {
                    errorMsg.value = `${u} is empty`
                    isLoading.value = false
                    error.value = true
                    setTimeout(() => {
                        error.value = false
                    }, 3000);
                    break;
                } else {
                    errorMsg.value = ''
                    isLoading.value = true
                    console.log(user.value)
                }
            }
            

            
        }
        
        const showPassword = () => {
            inputField.value = 'text'
        }
        
        const hidePassword = () => {
            inputField.value = 'password'
        }

        return { user, isLoading, inputField, error, errorMsg, submitForm, showPassword, hidePassword, go }
    }
}
</script>

<style>
 .toast-wrapper {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: 20px;
  }
  .toast {
    padding: 20px;
    color: white;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    
  }

/* toast animation */
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-enter-active {
  transition: all 0.3s ease;
  animation: wobble 0.5s ease;
}

.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% { transform: translateY(-60px); opacity: 0; }
  50% { transform: translateY(0px);  opacity: 1;}
  60% { transform: translateX(8px);  }
  70% { transform: translateX(-8px); }
  80% { transform: translateX(4px);  }
  90% { transform: translateX(-4px);  }
  100% { transform: translateX(0);  }
  0% { transform: translateX(-60px);  }
}
</style>