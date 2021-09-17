<template>
  <div class="relative">
      <div>
          <side-nav-driver @signout="signout"/>
      </div>
     <div>
         <driver-navbar @displayWallet="displayWallet"/>
     </div>
     <div>
         <wallet v-if="wallet" @removeWallet="removeWallet"/>
     </div>
      <div class="image-map w-full">
        <!-- <img :src="require('@/assets/images/map.png')" alt="map icon" />
        <div 
        class="absolute"
        style="
        left: 50%; 
        top: 30%"
        >
            <img 
            :src="require('@/assets/images/car-placeholder.png')" 
            alt="parcelboy logo" 
            style="height: 70%; width: 70%"/>
        </div>
        <div
        class="absolute bg-white p-1 w-8 h-8 rounded-full flex justify-center items-center"
        style="left: 86%; 
        top: 68%;
        box-shadow: 1px -3px 20px rgba(53, 52, 52, 0.4);">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg>
        </div> -->
        <driver-map/>
      </div>

      <!-- bottom menu -->
      <div 
      class="absolute bottom-0 w-full h-auto"
      >
          <div 
          v-if="showNotificationBar"
          class="absolute w-full bottom-0 flex justify-center pt-2 font-semibold"
          v-bind:style="{
            height: notificationHeight,
            backgroundColor: driverNotificationColor,
            boxShadow: '1px -5px 20px rgba(53, 52, 52, 0.2)',
            borderTopRightRadius: '50px',
            borderTopLeftRadius: '50px',
            zIndex: '0',
            color: 'white'
          }"
          >{{driverNotification}}</div>

          <!-- front section -->
          <!-- 1: 130px -->
          <div
          class="absolute w-full bottom-0"
          style="
          height: auto; 
          background-color: white;
          box-shadow: 1px -5px 20px rgba(53, 52, 52, 0.2);
          border-top-right-radius: 50px;
          border-top-left-radius: 50px;
          z-index: 1">
          <div class="font-Poppins h-full">
                <div class="h-full flex items-center justify-center pt-6 pb-6" v-if="!showBargainUser">
                <h1 
                class="font-bold text-sm"
                style="color: #2F455C">You'll be matched to a customer soon...</h1>
                </div>

              <!-- bargain -->
                <div class="w-full h-full px-5 py-5" v-else> 
                    <!-- section 1 -->
                   <div class="flex items-center w-full h-full">
                    <div style="width: 50%">                                      
                    <img class="object-cover rounded-full h-20 w-20 shadow-2xl" :src="userStore.state.pickupUserProfile.user_Img"/>             
                    </div>
                    <div class="w-full">
                    <h1 class="text-black font-bold text-base">
                        {{!userStore.state.pickupUserProfile.fullName ? userStore.state.pickupUserProfile.fullName : userStore.state.pickupUserProfile.fullName.charAt(0).toUpperCase() + userStore.state.pickupUserProfile.fullName.slice(1)}}
                    </h1>
                    <h1 class="text-sm text-textColor"><span style="color: #8B8B8B">Customer ID:</span>  
                    {{!userStore.state.pickupUserProfile.user_id ? userStore.state.pickupUserProfile.user_id : userStore.state.pickupUserProfile.user_id.toUpperCase()}}
                    </h1>
                    <div class="flex items-center pb-4 mt-1">
                        <div>
                            <!-- add user phone number here -->
                            <a href="tel:+234 705 668 3220">
                                <img :src="require('@/assets/images/Phone Icon2.png')" style="height: 50%; width: 80%"/>
                            </a>
                        </div>
                        <!-- <div class="pl-4">
                            <img :src="require('@/assets/images/chat.png')" style="height: 50%; width: 80%"/>
                        </div> -->
                    </div>
                    </div>
                   </div>

                   <!-- section 2 -->
                   <div class="flex mt-2">
                       <div class="w-full">
                           <h1 class="text-sm font-medium" style="color: #8B8B8B">Pickup</h1>
                           <h1 class="text-xs font-semibold mt-1" style="color: #2F455C">
                               {{!userStore.state.getDeliveryPickup.pickupAddress ? userStore.state.getDeliveryPickup.pickupAddress : userStore.state.getDeliveryPickup.pickupAddress.charAt(0).toUpperCase() + userStore.state.getDeliveryPickup.pickupAddress.slice(1) }}
                            </h1>
                       </div>
                       <div class="w-full">
                           <h1 class="text-sm font-medium" style="color: #8B8B8B">Delivery</h1>
                           <h1 class="text-xs font-semibold mt-1" style="color: #2F455C">
                               {{!userStore.state.getDeliveryPickup.deliveryAddress ? userStore.state.getDeliveryPickup.deliveryAddress : userStore.state.getDeliveryPickup.deliveryAddress.charAt(0).toUpperCase() + userStore.state.getDeliveryPickup.deliveryAddress.slice(1) }}
                           </h1>
                       </div>
                   </div>

                   <!-- section 3 -->
                   <div v-if="!deliveryStarted">
                   <div class="text-sm font-semibold flex justify-center mt-3" @click="showDeliveryDetails = true">
                       DELIVERY DETAILS
                       <span>
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                       </span>
                    </div>

                    <!-- section 6 -->
                    <div class="text-sm flex justify-center mt-1" v-if="!userStore.state.driverArrivedPickup">
                        <div>
                        <div>
                            <span style="color: #8B8B8B">Custumer is bargaining:</span>
                            <span style="color: #2F455C" class="font-semibold">
                                {{' N' + userStore.state.userCostBargain}}
                            </span>
                        </div>
                        </div>
                    </div>

                    <!-- section 7 -->
                    <div class="flex justify-center mt-4" v-if="!userStore.state.driverArrivedPickup">
                        <button :disabled="btnDisable === true" v-bind:style="{backgroundColor: btnColor}" class="w-72 text-white py-3 rounded-full font-Poppins text-sm" @click="acceptBargain">ACCEPT FOR {{' N' + userStore.state.userCostBargain}}</button>
                    </div>
                    <div class="flex justify-center mt-4" v-if="userStore.state.driverArrivedPickup">
                        <button :disabled="btnDisable === true" v-bind:style="{backgroundColor: '#21D0B2'}" class="w-72 text-white py-3 rounded-full font-Poppins text-sm" @click="acceptBargain">AGREED AT {{' N' + userStore.state.userCostBargain}}</button>
                    </div>
                    <div class="text-center mt-2 text-sm" v-if="userStore.state.driverArrivedPickup">Contact Customer</div>
                    <div class="flex justify-center mt-3" v-if="userStore.state.driverArrivedPickup &&!userStore.state.driverArrivedDelivery">
                    <button class="bg-textColor w-72 text-white py-3 rounded-full font-Poppins text-sm" @click="startDelivery">START DELIVERY</button>
                    </div>
                    <div class="flex justify-center mt-3" v-if="userStore.state.driverArrivedDelivery ">
                    <button class="bg-textColor w-72 text-white py-3 rounded-full font-Poppins text-sm" @click="confirmDelivery">CONFIRM DELIVERY</button>
                    </div>

                    <!-- section 8 -->
                    <div class="text-center text-sm mt-4 mb-3" v-if="!userStore.state.driverArrivedPickup">OR REBARGAIN</div>
                    <div v-if="!priceInput && !userStore.state.driverArrivedPickup" class="flex justify-center">
                        <button :disabled="userStore.state.disableBargainBtn === true" class="price-list-btn" style="background-color: #21D0B2" @click="reBargain(700)">N700</button>
                        <button :disabled="userStore.state.disableBargainBtn === true" class="price-list-btn ml-3" style="background-color: #21D0B2" @click="reBargain(600)">N600</button>
                        <button :disabled="userStore.state.disableBargainBtn === true" class="price-list-btn ml-3" style="background-color: #21D0B2" @click="reBargain(500)">N500</button>
                        <button :disabled="userStore.state.disableBargainBtn === true" class="price-list-btn ml-3" style="background-color: #21D0B2" @click="displayPriceInput">Others</button>
                    </div>

                    <!-- price input field -->
                    <div v-if="priceInput && helpBool" class="flex justify-center items-center">
                    <input type="text" placeholder="Enter Price" class="w-28 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-4 text-sm font-Poppins font-light" v-model="priceInputValue">
                    <div @click="reBargain(priceInputValue)">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    </div>
                   </div>
                    <div @click="cancelBtn" class="text-center text-sm mt-4 font-bold" style="color: #FF0000">CANCEL</div>                    
                </div>
              </div>
          </div>
      </div>

      <div class="w-full h-full absolute bottom-0 top-0 z-20" v-if="showDeliveryDetails">
          <delivery-details @closeDeliveryDetails="closeDeliveryDetails"/>
      </div>
      
  </div>
</template>

<script>
import { inject, ref, watchEffect } from '@vue/runtime-core'
import BottomMenu from '../../components/BottomMenu.vue'
import SideNavDriver from '../../components/SideNavDriver.vue'
import DeliveryDetails from '../../components/DeliveryDetails.vue'
import DriverMap from '../../components/DriverMap.vue'
import DriverNavbar from '../../components/DriverNavbar.vue'
import Wallet from '../../components/Wallet.vue'

export default {
  components: { BottomMenu, SideNavDriver, DeliveryDetails, DriverMap, DriverNavbar, Wallet },
  setup() {
      const userStore = inject('userStore')
      const showBargainUser = ref(false)
      const btnColor = ref(null)
      const btnDisable = ref(false)
      const showNotificationBar = ref(false)
      const priceInput = ref(false)
      const showDeliveryDetails = ref(false)
      const driverCancelDelivery = ref(false)
      const helpBool = ref(false)
      const deliveryStarted = ref(false)
      const priceInputValue = ref(undefined)
      const driverNotification = ref('')
      const notificationHeight = ref('450px')
      const driverNotificationColor = ref('#21D0B2')
      const wallet = ref(false)

      
     

      const displayWallet = () => {
          wallet.value = !wallet.value
      }
      
      const removeWallet = () => {
          wallet.value = !wallet.value
      }

      const openSideBar = () => {
          console.log('val')
      }


      const getDelivery = () => {
          console.log('checking bargain')
          userStore.actions.getDelivery()
      }  

      const bargainCost = () => {
          console.log('checking bargain cost')
          userStore.actions.getBargainCost()
      }

      const cancelBtn = () => {
          userStore.actions.driverCancelDeliveryNegotiation()
          showNotificationBar.value = false
          showBargainUser.value = false
          driverCancelDelivery.value = true      
          const notifications = {
                "title": "Cancelled",
                "status": true,
                "msg": "Driver has cancelled your delivery", 
                "date": new Date()
            }
            console.log(notifications)
            userStore.actions.driverSendNotification(notifications)   
      }
      
      const displayPriceInput = () => {
          priceInput.value = true
          helpBool.value = true   
      }
      
      const checkBargain = setInterval(getDelivery, 9000)
      const checkBargainCost = setInterval(bargainCost, 9000)
      
      watchEffect(() => {
          console.log('bargainsuccess', userStore.state.bargainSuccess)
          if (userStore.state.bargainDriverSuccess) {
              console.log('show user')
              clearInterval(checkBargain)
              driverNotification.value = "YOU'VE BEEN MATCHED"
              showBargainUser.value = true
              showNotificationBar.value = true

          }
          
          if (userStore.state.acceptBtnColor === 'newBargain') {
             btnColor.value = 'rgba(47, 69, 92, 0.92)'
             btnDisable.value = false
          }
          
          if (userStore.state.deliveryCancel === true && !driverCancelDelivery.value) {
              driverNotification.value = "YOUR DELIVERY HAS BEEN CANCELLED"
              driverNotificationColor.value = 'red'
              userStore.state.disableBargainBtn = true
              btnDisable.value = true
              clearInterval(checkBargainCost)
          }
        
      })
      
      const signout = () => {
          console.log('signing out')
          clearInterval(checkBargain)
          watchEffect(() => {
              if (userStore.state.bargainDriverSuccess) {
              console.log('chcecking with another watcheffect')
          }
          })
      }

    // this is where i stopped
      const acceptBargain = () => {
          console.log('accept')
          userStore.actions.acceptBargain()
          
        //   i was trying to notify the driver that he has reached the pickup location
          function driverProximity() {
              userStore.actions.driverPickupProximityNotification()
          }
          
          const proximityInterval = setInterval(driverProximity, 9000)

          watchEffect(() => {
              if(userStore.state.driverArrivedPickup === true) {
                clearInterval(proximityInterval)
                driverNotification.value = "YOU'VE ARRIVED AT PICK-UP"
            }
          })
          

      }

      

      const reBargain = (price) => {
          userStore.state.acceptBtnColor = 'teal'
          btnColor.value  = 'rgba(47, 69, 92, 0.507)'
          btnDisable.value = true
          userStore.actions.driverRebargainPrice(price)
          if(priceInput.value) {
              priceInput.value = false
              priceInputValue.value = ''

          }
      }

      const closeDeliveryDetails = () => {
          showDeliveryDetails.value = false
      }
      
      const startDelivery = () => {
            deliveryStarted.value = true
            notificationHeight.value = '250px'
            driverNotification.value = 'ONGOING...'
            driverNotificationColor.value = '#2F455C'
            console.log('driver start delivery')
            const notifications = {
                "title": "Confirmation",
                "status": true,
                "msg": "Your delivery has been delivered to destination, please confirm", 
                "date": new Date()
            }
            console.log(notifications)
            userStore.actions.driverSendNotification(notifications)

            function driverProximity() {
                userStore.actions.driverDeliveryProximityNotification()
            }
            
            const proximityInterval = setInterval(driverProximity, 9000)

            watchEffect(() => {
                if(userStore.state.driverArrivedDelivery === true) {
                    clearInterval(proximityInterval)
                    console.log('driver has reached the delivery location')
                    setTimeout(() => {
                        deliveryStarted.value = false
                        driverNotification.value = "YOU'VE ARRIVED AT DELIVERY"
                        driverNotificationColor.value = '#21D0B2'
                        notificationHeight.value = '450px'
                    }, 9000);
                }
                
            })
        }

        const confirmDelivery = () => {
            console.log('confirming delivery')
        }

      




     
      userStore.actions.getUserDetails()

      return { 
          openSideBar, userStore, signout, showBargainUser, showNotificationBar, priceInput, showDeliveryDetails, closeDeliveryDetails, driverNotificationColor, cancelBtn, startDelivery, wallet, removeWallet,
          btnColor, acceptBargain, reBargain, btnDisable, driverNotification, priceInputValue, displayWallet,
          helpBool, deliveryStarted, notificationHeight, confirmDelivery, displayPriceInput }
  }

}
</script>

<style>
.h {
    background-color: rgb(47, 69, 92);
    background-color: '#2F455C'
}
</style>