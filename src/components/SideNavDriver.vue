<template>
    <div class="absolute backdrop flex items-center font-Poppins z-20" v-if="userStore.state.sideNavDriver">
        <!-- image and close btn -->
        <transition
        name="fade"
        appear
        @before-enter="beforeEnterSidebar"
        @enter="enterSidebar"
        >
        <div
        class="absolute side-bar bg-white text-black rounded-tr-3xl rounded-br-3xl pr-5 pt-4 shadow-2xl drop-shadow-2xl" >
            <div class="flex justify-end pl-5" @click="close">
             
                <div >
                    <svg class="w-6 h-6 text-textColorTwo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>

            <!-- name -->
            <div class="absolute top-0 mt-4 pl-5">
                <!-- <h1 class="font-bold text-textColor text-base">
                    {{ userStore.state.userProfile.fullName }}
                </h1>
                <h1 class="font-light text-xs text-textColorTwo">
                    {{ userStore.state.userProfile.email }}
                </h1> -->
                <div 
                class="flex flex-col justify-center w-full">
                <div class="flex justify-center w-auto text-center">
                    <div class="font-Poppins font-medium">
                    <img class="inline-block object-cover w-20 h-20 border-4 border-white rounded-full" 
                    :src="userStore.state.userProfile.user_Img"/>
                    <h1 class="text-black font-bold text-sm">{{userStore.state.userProfile.fullName}}</h1>
                    <div class="flex justify-center">
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

            <!-- Menus -->
            <div style="transform: translate(0%, 60%);">
                <div @click="isActive = menuItem.title" :class="`flex pl-5 py-1 mt-3 items-center justify-start ${ isActive === menuItem.title ? 'bg-gray-100' : 'bg-none' } w-48 rounded-br-full rounded-tr-full`" v-for="( menuItem,  index ) in menuItems" :key="index">
                    <div class="w-10">
                    <img :src="menuItem.icon" alt="parcelboy logo" class="inline object-cover rounded-full"/>
                    </div>
                    <div class="font-normal text-xs nav" @click="userStore.state.sideNavDriver = false">
                        <router-link :to="{name: menuItem.routes}">
                            <span>{{menuItem.title}}</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- sign out -->
            <div class="" style="transform: translate(0%, 500%);">
                <div class="border-b-2"></div>
                <div class="flex items-center mt-2 pl-5">
                    <div class="">
                        <img :src="require('@/assets/images/switch.png')" alt="parcelboy logo" class="inline object-cover rounded-full "/>
                    </div>
                        <div @click="exitApp" class="pl-4 text-textColorTwo text-sm">Sign Out</div>
                </div>
            </div>
        </div>
        </transition>
    </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import gsap from 'gsap'
import { inject } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    setup(_, { emit }) {
        const sideBar = ref(false)
        

        const menuItems = ref([
            {icon: require('@/assets/images/home.png'), title: 'Home', isActive: true, routes: 'Home'},
            {icon: require('@/assets/images/delivery.png'), title: 'My Deliveries', isActive: false, routes: 'MyDeliveries'},
            {icon: require('@/assets/images/profile.png'), title: 'My Profile', isActive: false, routes: 'DriverProfile'},
            {icon: require('@/assets/images/bell.png'), title: 'Notifications', isActive: false, routes: 'DriverNotifications'},
            {icon: require('@/assets/images/settings.png'), title: 'Settings', isActive: false, routes: 'DriverSettings'},
            {icon: require('@/assets/images/help and support.png'), title: 'Help & Support', isActive: false, routes: 'DriverHelpSupport'},
        ])
        
        const userStore = inject('userStore')

        const isActive = ref('Home')

        const close = () => {
            userStore.state.sideNavDriver = false
            console.log('hello', userStore.state.sideNavDriver)
        }

        const router = useRouter()
        const exitApp = () => {
            console.log('login sucess state ',userStore.state.loginSuccess)
            router.push({name : 'SignIn'})
            emit('signout')
            userStore.state.sideNavDriver = false
            console.log(userStore.state.profileImg)
        }


        
        const beforeEnterSidebar = (el) => {
            el.style.transform = 'translateX(-400px)'
            el.style.opacity = 0
        }
        // Animations

        const enterSidebar = (el) => {
            gsap.to(el, {
                duration: 0.6,
                x: 0,
                opacity: 1,
                ease: 'ease.in'
            })
          
        }
        

        return { 
            menuItems, isActive, sideBar, userStore, close,
            beforeEnterSidebar, exitApp,
            enterSidebar, }
    }
}
</script>

<style>
.backdrop {
    /* top: 0; */
    /* position: fixed; */
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
}

.side-bar {
    height: 90%;
    width: 65%;
}

.nav a {
    color: #2F455C
}
</style>