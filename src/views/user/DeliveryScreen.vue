<template>
  <div class="relative overflow-hidden">
      <div>
        <side-nav 
        @closeSidebar="closeSidebar"
        @loggingOut="loggingOut"
        :isDisplaySideBar='isDisplaySidebar'/>
      </div>
      <nav-bar @openSidebar="openSidebar" @goback="goBack" :backbtn='backBtn'/>
      <Map 
      :setDivMap="setDivMap" v-if="!userStore.state.driverUserDestinationMap"/>
      <connected-map v-if="userStore.state.driverUserDestinationMap && userStore.state.driverLat !== null"/>
      <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      >
      <div 
      class="absolute top-0 right-0 left-0" 
      v-if="deliveryPickupDetails" 
      style="z-index: 1">
        <pickup-details 
        @hidePickup='hidePickup'
        :openPickupFields='openPickupFields'
        :courierType='courierType'/>
      </div>
      </transition>

      <!-- Notification -->
      <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter">
      <delivery-notification 
      :notification='notification'
      :notificationPadding='notificationPadding'/>
      </transition>

      <bottom-menu 
      @displayBackBtn="displayBackBtn" 
      @displayPickUpDetails='displayPickUp'
      @changeContinueBtn2Open='changeContinueBtn2Open'
      @hidePickupDetails="hidePickupDetails"
      @removeDisplayPickup="removeDisplayPickup"
      @displayNotification='displayNotification'
      @bargainPrice='bargainPrice'
      @adjustPadding='adjustPadding'
      @displayNotificationRejected='displayNotificationRejected'
      @notifyUserBargain='displayNotification'
      @coming='displayNotification'
      @bargainRejected='displayNotification'
      :continueBtn='continueBtn'
      :goBackCourier="displayCourier"
      :key='reRenderKey'/>

    
      
  </div>
</template>

<script>
import BottomMenu from '../../components/BottomMenu.vue'
import Map from '../../components/Map.vue'
import NavBar from "../../components/NavBar.vue"
import { ref } from '@vue/reactivity'
import SideNav from '../../components/SideNav.vue'
import PickupDetails from '../../components/PickupDetails.vue'
import loadAnimationOne from '../../composables/gsapAnimations'
import DeliveryNotification from '../../components/DeliveryNotification.vue'
import { inject } from '@vue/runtime-core'
import ConnectedMap from '../../components/connectedMap.vue'


export default {
  components: { NavBar, Map, BottomMenu, SideNav, PickupDetails, DeliveryNotification, ConnectedMap },
  setup() {
    const userStore = inject('userStore')

    const isDisplaySidebar = ref(false) 
    const backBtn = ref(false)
    const displayCourier = ref(false)
    const deliveryPickupDetails = ref(false)
    const continueBtn = ref('open')
    const notification = ref('null')
    const notificationPadding = ref('130%')
    const openPickupFields = ref('')
    const courierType = ref('')
    const setDivMap = ref('')
    const reRenderKey = ref(0)


    userStore.actions.getUserDetails()

    // Animation
    const { beforeEnter, enter } = loadAnimationOne()


    const loggingOut = () => {
      setDivMap.value = 'logging out'
      console.log('emit logging out')
      // trying to force update component here
      // reRenderKey.value += 1
    }

    const openSidebar = (value) => {
      if (value === true ) {
        isDisplaySidebar.value = value
        
      }
    }

    const closeSidebar = (value) => {
      if (!value) {
        isDisplaySidebar.value = false
      }
    }

    // display back btn on the navbar
    const displayBackBtn = (value) => {
      backBtn.value = value[0]
      courierType.value = value[1]
    }

    // go back to the courier type option
    const goBack = () => {
      displayCourier.value = true
      backBtn.value = false
      setTimeout(() => {
        displayCourier.value = false
      }, 100);
    }

    // display pickup details screen
    const displayPickUp = (value) => {
      deliveryPickupDetails.value = value[0]
      openPickupFields.value = value[1]
    }

    // hide pickup details screen
    const hidePickup = (value) => {
      deliveryPickupDetails.value = value
      if (!value) {
        continueBtn.value = 'close'
      }
    }

    // change continue btn to open
    const changeContinueBtn2Open = (value) => {
      continueBtn.value = value
    }

    // hide/close delivery pickup details
    const hidePickupDetails = () => {
      if (deliveryPickupDetails.value) {
        deliveryPickupDetails.value = false
      }
      backBtn.value = true
      notification.value = 'null'
    }

    const removeDisplayPickup = () => {
      if (deliveryPickupDetails.value) {
        deliveryPickupDetails.value = false
        backBtn.value = false
      }
    }

    const displayNotification = (value) => {
        notification.value = value
        console.log(value, 'checking emit value')
        if (value === 'PENDING RESPONSE') notificationPadding.value = '80%'
        if (value === 'OOPS FOUND NO DRIVER') notificationPadding.value = '100%'
        if (value === 'MATCHED') notificationPadding.value = '130%'
        if (value === 'ARRIVED') notificationPadding.value = '130%'
        else if (value === 'COMING...') notificationPadding.value = '110%'
        else if (value === '1ST BARGAIN REJECTED') notificationPadding.value = '130%'
        else if (value === '2ND BARGAIN REJECTED') notificationPadding.value = '130%'
      
    }

    const bargainPrice = (value) => {
      notification.value = value
      notificationPadding.value = '130%'
    }

    const adjustPadding = () => {
      notificationPadding.value = '80%'
    }

    const displayNotificationRejected = (value) => {
      notification.value = value
      notificationPadding.value = '130%'
    }




    

    return { 
      isDisplaySidebar, backBtn, displayCourier, deliveryPickupDetails, courierType,
      continueBtn, notification, notificationPadding, openPickupFields, reRenderKey,
      openSidebar, closeSidebar, displayBackBtn, goBack, adjustPadding,
      displayPickUp, hidePickup, changeContinueBtn2Open, loggingOut, setDivMap,
      beforeEnter, enter, hidePickupDetails, bargainPrice, userStore,
      removeDisplayPickup, displayNotification, displayNotificationRejected}
  }

}
</script>

<style>

</style>