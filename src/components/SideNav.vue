<template>
    <div class="absolute backdrop flex items-center font-Poppins z-20" v-if="sideBar">
        <!-- image and close btn -->
        <transition
        name="fade"
        appear
        @before-enter="beforeEnterSidebar"
        @enter="enterSidebar"
        >
        <div
        class="absolute side-bar bg-white text-black rounded-tr-3xl rounded-br-3xl pr-5 pt-4 shadow-2xl drop-shadow-2xl" v-if="sideBar">
            <div class="flex justify-between pl-5">
                <div class="rounded-full">
                <img :src="userStore.state.userProfile.user_Img" alt="parcelboy logo" class="inline object-cover w-20 h-20 rounded-full "/>
                </div>
                <div @click="closeSideBar">
                    <svg class="w-6 h-6 text-textColorTwo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>

            <!-- name -->
            <div class="pl-5 mt-7">
                <h1 class="font-bold text-textColor text-base">
                    {{ userStore.state.userProfile.fullName }}
                </h1>
                <h1 class="font-light text-xs text-textColorTwo">
                    {{ userStore.state.userProfile.email }}
                </h1>
            </div>

            <!-- Menus -->
            <div class="mt-4">
                <div @click="isActive = menuItem.title" :class="`flex pl-5 py-1 mt-3 items-center justify-start ${ isActive === menuItem.title ? 'bg-gray-100' : 'bg-none' } w-48 rounded-br-full rounded-tr-full`" v-for="( menuItem,  index ) in menuItems" :key="index">
                    <div class="w-10">
                    <img :src="menuItem.icon" alt="parcelboy logo" class="inline object-cover rounded-full"/>
                    </div>
                    <div class="font-normal text-xs nav">
                        <router-link :to="{name: menuItem.routes}">
                            <span @click="loadNotification(index)">{{menuItem.title}}</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- sign out -->
            <div class="mt-20">
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
import { inject, watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    props: ['isDisplaySideBar'],
    setup(props, { emit }) {
        const sideBar = ref(false)
        const menuItems = ref([
            {icon: require('@/assets/images/home.png'), title: 'Home', isActive: true, routes: 'DeliveryScreen'},
            {icon: require('@/assets/images/delivery.png'), title: 'My Deliveries', isActive: false, routes: 'MyDelivery'},
            {icon: require('@/assets/images/profile.png'), title: 'My Profile', isActive: false, routes: 'MyProfile'},
            {icon: require('@/assets/images/bell.png'), title: 'Notifications', isActive: false, routes: 'Notifications'},
            {icon: require('@/assets/images/settings.png'), title: 'Settings', isActive: false, routes: 'Settings'},
            {icon: require('@/assets/images/help and support.png'), title: 'Help & Support', isActive: false, routes: 'HelpSupport'},
        ])
        
        const userStore = inject('userStore')
        const router = useRouter()


        watchEffect(() => {
            if (props.isDisplaySideBar) {
                sideBar.value = true
            } else {
                sideBar.value = false
            }
        })
        const isActive = ref('Home')

        const closeSideBar = () => {
            emit('closeSidebar', false)
        }

        const exitApp = () => {
            console.log('user profile', userStore.state.loginSuccess)
            console.log('login sucess state ',userStore.state.loginSuccess)
            router.push({name : 'SignInScreen'})
            emit('loggingOut')
        
        }

        const loadNotification = (value) => {
            if(value === 3) {
                console.log('fetching notification')
                userStore.actions.userRecieveNotification()

            }
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
            menuItems, isActive, sideBar, userStore,
            closeSideBar, beforeEnterSidebar, exitApp,
            enterSidebar, loadNotification }
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