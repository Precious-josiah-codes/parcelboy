<template>
  <div class="absolute bottom-menu bottom-0 bg-white w-full flex justify-center items-center h-auto py-12" 
  style="
  box-shadow: 1px -5px 20px rgba(53, 52, 52, 0.2);
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  z-index: 10">
    <div class="w-full px-5" > 
      <!-- Make a delivery btn -->
      <div v-if="showDeliveryOption" class="flex justify-center" >
        <button @click="showCourierOption" class="bg-textColor w-72 text-white py-3 rounded-full font-Poppins">MAKE A DELIVERY</button>
      </div>

      <!-- courier option -->
      <div v-if="courierOption" class="text-textColor">
        <!-- first delivery option -->
        <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter">
          <div class="bg-white rounded-2xl shadow-xl py-10">
            <div class="flex justify-center items-center">
              <img class="" :src="require('@/assets/images/rider.png')" alt="rider icon" />
            </div>
            <div @click='displayDelivery("bike")' class="flex justify-center items-center">
              <h1 class="font-bold mt-1">WITH A RIDER</h1>
            </div>
          </div>
        </transition>

        <!-- second delivery option -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo">
          <!-- <div @click="showDriverOptions = true" class="bg-white rounded-2xl shadow-xl flex justify-center items-center py-5 mt-4">
            <div>
              <div class="flex justify-center items-center">
                <img class="" :src="require('@/assets/images/driver.png')" alt="rider icon" />
              </div>
              <div class="flex justify-center items-center">
                <h1 class="font-bold mt-1">WITH A DRIVER</h1>
              </div>

              vehicle type
              <transition
              appear
              @before-enter="beforeEnterTwo"
              @enter="enterTwo">
              <div v-if="showDriverOptions" class="flex justify-between text-sm font-bold" >
                <div @click="displayDelivery('car')" class="bg-colorThree w-24 ml-2 mt-2 text-center py-2 rounded-xl">Cars</div>
                <div @click="displayDelivery('bus')" class="bg-colorThree w-24 ml-2 mt-2 text-center py-2 rounded-xl">Bus</div>
              </div> -->
          <div @click="displayDelivery('car')" class="bg-white rounded-2xl shadow-xl flex justify-center items-center py-5 mt-4">
            <div>
              <div class="flex justify-center items-center">
                <img class="" :src="require('@/assets/images/driver.png')" alt="rider icon" />
              </div>
              <div class="flex justify-center items-center">
                <h1 class="font-bold mt-1">WITH A CAR</h1>
              </div>
            </div>
          </div>
        </transition>
      </div>
      
      <!-- delivery  -->
      <transition-group
      tag="div"
      appear
      @before-enter="beforeEnterTwo"
      @enter="enterTwo">
      <div v-if="showDelivery">
        <div class="bg-colorThree text-textColor font-Poppins flex justify-start items-center mt-3 py-2 px-6 rounded-full w-full" v-for="(deliveryOption, index) in deliveryOptions" :key="index">
          <span class="w-10">
              <img :src="deliveryOption.icon" alt="pickup icon" />
          </span>
          <span class="pl-4 text-sm" @click="displayPickDetails(index)">{{ deliveryOption.title }}</span>
        </div>
      </div>
      </transition-group>

      <!-- continue btn -->
      <transition
      appear
      @before-enter="beforeEnterTwo"
      @enter="enterTwo">
      <div @click="displayDriverSearch" v-if="pickUpDetails" class="flex justify-center">
        <button class="bg-textColor w-72 text-white py-3 rounded-full font-Poppins">CONTINUE</button>
      </div>
      </transition>

      <!-- driver search -->
      <transition
      appear
      @before-enter="beforeEnterTwo"
      @enter="enterTwo">
      <div class="font-Poppins">
        <!-- main driver search -->
        <div v-if="driverSearch">
          <h1 class="w-full flex justify-center text-lg text-colorFour font-semibold">MATCHING A DRIVER</h1>
          <p class="flex justify-center text-center text-textColorTwo mt-2">The drivers are responding enthusiastically please wait a moment to get match</p>
          <div class="flex justify-center mt-2 mb-6 text-textColorTwo">wait for <span class="text-colorFive font-semibold pl-2">
            <!-- 00:{{timeDriverSearch}} -->
            00:{{timeDriverSearch <= 9 ? '0' + timeDriverSearch : timeDriverSearch}}
            </span></div>
        </div>

        <!-- bargain -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo"
        >
        <div v-if="bargain || hideBargainElement" :style="{paddingBottom: paddingOne}">
          <div class="flex items-center w-full">
            <div style="min-width: 27%">
              <div class="relative inline-block">                            
                <img class="inline-block object-cover rounded-full h-20 w-20 shadow-2xl" :src="!userStore.state.foundDriverProfile.user_Img ? userStore.state.profileImg : userStore.state.foundDriverProfile.user_Img"/>
                <img class="absolute bottom-0 right-0 object-cover inline-block w-11 h-11 border-2 border-white rounded-full" :src="!userStore.state.foundDriverProfile.user_Bg_Img ? userStore.state.profileImg : userStore.state.foundDriverProfile.user_Bg_Img"/>
              </div>
            </div>
            <div class="relative ml-2  w-full" >
              <h1 class="text-black font-bold text-base">
                {{!userStore.state.foundDriverProfile.fullName ? userStore.state.foundDriverProfile.fullName : userStore.state.foundDriverProfile.fullName.charAt(0).toUpperCase() + userStore.state.foundDriverProfile.fullName.slice(1)}}
              </h1>
              <h1 class="text-sm text-textColor"><span style="color: #8B8B8B">Driver ID:</span>  {{userStore.state.foundDriverProfile.user_id.toUpperCase()}}</h1>
              <img :src="require('@/assets/images/stars.png')"/>
              <div class="flex font-light">
                <div class=" mr-2 text-sm">
                  {{!userStore.state.foundDriverProfile.automobileName ? userStore.state.foundDriverProfile.automobileName : userStore.state.foundDriverProfile.automobileName.charAt(0).toUpperCase() + userStore.state.foundDriverProfile.automobileName.slice(1)}}
                </div>
                <div class="mr-1 rounded-full" style="background-color: #D1DADF; width: 0.99rem; height: 0.99rem"></div>
                <span class="mr-2 text-sm">
                  {{!userStore.state.foundDriverProfile.automobileColour ? userStore.state.foundDriverProfile.automobileColour : userStore.state.foundDriverProfile.automobileColour.charAt(0).toUpperCase() + userStore.state.foundDriverProfile.automobileColour.slice(1)}}
                </span>
                <div class="px-1 rounded-sm text-white text-xs flex items-center" style="background-color: #8B8B8B">
                  {{!userStore.state.foundDriverProfile.liscensePlateNumber ? userStore.state.foundDriverProfile.liscensePlateNumber : userStore.state.foundDriverProfile.liscensePlateNumber.toUpperCase()}}
                </div>
              </div>
              <div class="flex items-center absolute inset-y-0 right-0 pb-4">
                <div>
                  <!-- add driverss phone number here -->
                  <a href="tel:+234 705 668 3220">
                    <img style="width: 19px; height: 19px" :src="require('@/assets/images/Phone Icon2.png')"/>
                  </a>
                  </div>
                <!-- <div class="pl-3"><img style="width: 19px; height: 19px" :src="require('@/assets/images/chat.png')"/></div> -->
              </div>
            </div>
            
          </div>
        </div>
        </transition>

        <!-- accept btn -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo">
        <div v-if="bargain && !pendingTwo" class="flex justify-center mt-5">
          <button @click="bargainBtn(userStore.state.bargainCost)" class="bg-textColor w-72 text-white py-3 rounded-full font-Poppins text-sm">
            ACCEPT FOR N{{userStore.state.bargainCost}}</button>
        </div>
        </transition>

        <div  v-if="hideThis">
        <!-- agreed button -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo">
        <div class="flex justify-center mt-5" v-if="driverAgreed">
          <!-- Price is dynamic figure that out, change it -->
          <button disabled class="w-72 text-white py-3 rounded-full font-Poppins text-sm" style="background-color: #21D0B2">AGREED AT N{{userStore.state.bargainCost}}</button>
        </div>
        </transition>
        </div>

        <!-- bargain section -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo">
        <div v-if="bargain">
          <!-- bargain price -->

          <div v-if="!bargainPriceInput" class="flex justify-center mt-5">
            <div class="flex text-sm">
              <h1 class="pr-3">Bargain Price</h1>
              <span class="w-5 h-5 rounded-full flex items-center text-white justify-center" style="background-color: #FF0000">
                {{bargainTrial}}
              </span>
            </div>
          </div>

          <!-- price list section -->
          <div v-if="!pending" class="mt-4 mb-6">

            <!-- price list -->
            <div v-if="!priceInput" class="flex justify-center">
              <button :disabled="bargainTrial === 0" class="price-list-btn" style="background-color: #21D0B2" @click="bargainBtn(900)">N900</button>
              <button :disabled="bargainTrial === 0" class="price-list-btn ml-3" style="background-color: #21D0B2" @click="bargainBtn(800)">N800</button>
              <button :disabled="bargainTrial === 0" class="price-list-btn ml-3" style="background-color: #21D0B2" @click="bargainBtn(750)">N750</button>
              <button :disabled="bargainTrial === 0" @click="displayPriceInput" class="price-list-btn ml-3" style="background-color: #21D0B2">Others</button>
            </div>

            <!-- price input field -->
            <div v-else class="flex justify-center items-center my-5">
              <input type="text" placeholder="Enter Price" class="w-28 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-4 text-sm font-Poppins font-light" v-model="priceInputValue">
              <div @click="bargainBtn(priceInputValue)">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
            </div>
          </div>
        </div>
        </transition>


        <div v-if="hideThis">
        <!-- bargain price exhaust -->
        <div v-if="bargainTrial === 0 && !closeExhausted" class="text-center text-sm my-6">
          <h1>You've Exhausted</h1>
          <h1>Your Bargain</h1>
        </div>

        <!-- wait for time -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo">
        <div class="text-center text-sm mt-5" v-if="driverAgreed">
          <h1 v-if="!pickupDriverArrived">Wait for <span style="color: red; font-weight: bold">02:26</span></h1>
          <h1 v-else>Your driver has <br> Arrived</h1>
        </div>
        </transition>
        </div>

        <!-- PROCEED TO PAYMENT BTN -->
        <div v-if="hideThis" class=" text-center text-colorFive" v-bind:style="{paddingTop: addPaddingPaymentBtn}">
        <button v-if="pickupDriverArrived" @click='placeOrder' class="font-medium w-72 py-3 mb-2 rounded-full font-Poppins" style="background-color: #2F455C; color: white">PROCEED TO PAYMENT</button>

        </div>

        <!-- DELIVERY DETAILS -->
        <div
        class="font-Poppins mt-2 py-4" v-if="deliveryDetails">
            <div 
            style="
            border-bottom: 1px solid lightgray;
            "
            class="flex justify-start pb-2">
                <h1>{{userStore.state.pickupDelivery.pickupTime.substring(0, 10)}}</h1>
            </div>
            <div 
            class="text-sm"
            style="
            border-bottom: 1px solid lightgray;
            ">
                <div 
                class="flex justify-between pt-2"
                style="color: #8B8B8B">
                    <h1>Pickup</h1>
                    <h1>Delivery</h1>
                </div>
                <div 
                class="flex justify-between pb-2"
                style="color: #000000">
                    <h1 class="pt-1">{{userStore.state.pickupDelivery.pickupAddress}}</h1>
                    <h1 class="pt-1">{{userStore.state.pickupDelivery.deliveryAddress}}</h1>
                </div>
            </div>
            <div 
            class="text-sm"
            style="
            border-bottom: 1px solid lightgray;
            ">
                <div 
                style="color: #8B8B8B"
                class="flex justify-between pt-2">
                    <h1>Category</h1>
                    <h1>Courier Type</h1>
                </div>
                <div 
                style="color: #000000"
                class="flex justify-between pb-2 pt-1">
                    <h1>{{userStore.state.pickupDelivery.pickupCategory}}</h1>
                    <h1>{{userStore.state.pickupDelivery.courierType}}</h1>
                </div>
            </div>
        </div>
        <!-- cancel btn -->
        <transition
        appear
        @before-enter="beforeEnterTwo"
        @enter="enterTwo">
        <div v-if="!delivered">
        <div v-if="driverSearch || bargain || hideBargainElement" @click="goBackDelivery" class=" text-center text-colorFive" v-bind:style="{paddingTop: addPadding}">
          <button class="font-semibold w-72 py-3 rounded-full font-Poppins" style="background-color: #E4E4E4">CANCEL</button>
        </div>
        </div>
        </transition>

        <div v-if="delivered" class="text-white text-center" v-bind:style="{paddingTop: addPadding}">
          <button class="font-medium w-72 py-3 rounded-full font-Poppins" style="background-color: #2F455C">CONFIRM DELIVERY</button>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import loadAnimationOne from '../composables/gsapAnimations'
import { inject, watchEffect } from '@vue/runtime-core'
import DeliveryNotification from './DeliveryNotification.vue'


export default {
  props: ['goBackCourier', 'continueBtn'],
  components: { DeliveryNotification },
  setup(props, { emit }) {
    const userStore = inject('userStore')
    const showDeliveryOption = ref(true)
    const showDriverOptions = ref(false)
    const showDelivery = ref(false)
    const courierOption = ref(false)
    const pickUpDetails = ref(false)
    const driverSearch = ref(false)
    const timeDriverSearch = ref(10)
    const bargain = ref(false)
    const priceInput = ref(false)
    const pending = ref(false)
    const paddingOne = ref('0px')
    const showBargainRejected = ref(false)
    const bargainTrial = ref(2)
    const hideBargainElement = ref(false)
    const addPadding = ref('0%')
    const driverAgreed = ref(false) 
    const pendingTwo = ref(false) 
    const bargainPriceInput = ref(false) 
    const closeExhausted = ref(false) 
    const priceInputValue = ref(undefined)
    const clearIntervalBargain = ref(false)
    const pickupDriverArrived = ref(false)
    const deliveryDetails = ref(false)
    const hideThis = ref(true)
    const ongoingDelivery = ref(false)
    const delivered = ref(false)
    const addPaddingPaymentBtn = ref('0%')
    const bargainCost = ref(0)


    // adding flutter wave payment api
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    // payment function
    const placeOrder = () => {
        window.FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-f9ffbb193cebd046e5b821dc412eb5ee-X",
            tx_ref: "delivery"+ new Date(),
            amount: bargainCost.value,
            currency: "NGN",
            country: "NG",
            // payment_options: "card",
            customer: {
              email: userStore.state.userProfile.email,
              phone_number: userStore.state.userProfile.phone,
              name: userStore.state.userProfile.fullName,
            },
            callback: function(data) {
                console.log(data);
                if (data.status === 'successful') {
                  console.log('payment is successfull')
                  
                }
            },
            onclose: function() {
              console.log('modal closed')
              setTimeout(() => {
                  driverAgreed.value = false
                  hideThis.value = false
                  pickupDriverArrived.value = false
                  deliveryDetails.value = true
                  addPadding.value = '8%' 
                  ongoingDelivery.value = true
                  console.log('timeout flutter call back')
              }, 3000);
            },
            customizations: {
                title: "ParcelBoy",
                description: "Payment for Delivery",
                logo: require('@/assets/images/parcelboy_log@1.png'),
            },
        });
    }      

    watchEffect(() => {
      if(props.goBackCourier) {
        courierOption.value = true
        showDelivery.value = false
        showDeliveryOption.value = false
        console.log('this ran')
      }

      if(props.continueBtn === 'close') {
        pickUpDetails.value = false
        showDelivery.value = true
        emit('changeContinueBtn2Open', 'open')
        console.log('this ran 2', props.continueBtn, showDelivery.value, showDeliveryOption.value)

      }

      if(driverSearch.value) {
        addPadding.value = '0%'
        function myTimer() {
          timeDriverSearch.value--
          if(timeDriverSearch.value === 0) {
            clearInterval(countDown)
            if (!bargain.value && driverSearch.value && userStore.state.driverFound) {
              timeDriverSearch.value = 10
              bargain.value = true
              emit('displayNotification', 'MATCHED')
              driverSearch.value = false
            } 
            if (!userStore.state.driverFound) {
              emit('displayNotification', 'OOPS FOUND NO DRIVER')
            } 
          }

          if (showDelivery.value) {
            console.log('clear timer')
            clearInterval(countDown)
            timeDriverSearch.value = 10
          }
        }
        let countDown = setInterval(myTimer, 1000);

        }

        if(showBargainRejected.value) {
          console.log('bargain rejected')
          setTimeout(() => {
            emit('displayNotificationRejected', '1ST BARGAIN REJECTED')
            pending.value = false
            priceInput.value = false
            paddingOne.value = '0px'
          }, 5000);
            bargainTrial.value = bargainTrial.value - 1
        }

        // check if user has agreed
        if(userStore.state.userGetBargain.agreed){
          console.log('driver has agrreed')
          driverAgreed.value =  true
          emit('coming', 'COMING...')

          // checking drivers location
          function monitorDriverLocation() {
            userStore.actions.pickupProximityNotification()
          }
          
          const intervalProximity = setInterval(monitorDriverLocation, 9000)
          watchEffect(() => {
            if(userStore.state.driverArrivedPickup === true) {
              clearInterval(intervalProximity)
              console.log('he fucking arrived')
              emit('displayNotification', 'ARRIVED')
              pickupDriverArrived.value = true
              addPaddingPaymentBtn.value = '8%'
              addPadding.value = '1%'
              // this is where the magic happens
              // NOTE: SHE SAID REMOVE CANCEL BTN, THAT CONSUMER CANT CANCEL DELIVERY
            } else if(!delivered.value && !userStore.state.userGetBargain.agreed){
              console.log('remove proximity')
              clearInterval(intervalProximity)
            }
          })
        }

        if(userStore.state.firstBargainReject === true) {
          console.log('first bargain rejected')
          emit('bargainRejected', '1ST BARGAIN REJECTED')
          addPadding.value = '0%'
          bargain.value = true
          console.log('this rena debug', userStore.state.firstBargainReject)
          bargainTrial.value = 1
          userStore.state.firstBargainReject = false
        }

        if(userStore.state.secondBargainReject === true) {
          console.log('second bargain rejected')
          emit('bargainRejected', '2ND BARGAIN REJECTED')
          addPadding.value = '0%'
          bargain.value = true
          pending.value = true
          bargainPriceInput.value = true
          bargainTrial.value = 0
          userStore.state.secondBargainReject = false
        }

        if (userStore.state.userGetBargain.agreed === true) {
          console.log('this is the agreed price', userStore.state.userGetBargain.cost)
          bargainCost.value = userStore.state.userGetBargain.cost
        }

        if (ongoingDelivery.value) {
          emit('displayNotification', 'ONGOING...')

          function deliveryProximity() {
            userStore.actions.deliveryProximityNotification()
          }

          setTimeout(() => {
            const ongoingDelivery = setInterval(deliveryProximity, 6000)

            watchEffect(() => {
              if(userStore.state.driverArrivedDelivery) {
                emit('displayNotification', 'DELIVERED')
                delivered.value = true
                clearInterval(ongoingDelivery)
              }
            })
            
          }, 9000);
        }


        // if(showBargainRejected.value) {
        //   console.log('bargain price now 1')
        //   setTimeout(() => {
        //     emit('displayNotificationRejected', '2ND BARGAIN REJECTED')
        //     pending.value = false
        //     priceInput.value = false
        //     paddingOne.value = '0px'
        //   }, 9000);
        // }

        
      

        
      })

      


    const deliveryOptions = ref([
      {icon: require('@/assets/images/pickup.png'), title: 'Pick Up Location'},
      {icon: require('@/assets/images/delivery.png'), title: 'Delivery Location'},
      {icon: require('@/assets/images/note.png'), title: 'Add Note'},
      ])

    const { beforeEnter, enter, beforeEnterTwo, enterTwo } = loadAnimationOne()

    const displayDelivery = (vehicle) => {
      showDelivery.value = true
      courierOption.value = false
      emit('displayBackBtn', [true, vehicle])
    }

    const showCourierOption = () => {
      courierOption.value = true
      showDeliveryOption.value = false
    }

    const displayPickDetails = (index) => {
      pickUpDetails.value = true
      showDelivery.value = false
      emit('displayPickUpDetails', [true, index])
    }

    const displayDriverSearch = () => {
      driverSearch.value = true
      if (pickUpDetails.value) {
        pickUpDetails.value = false
      }
      emit('removeDisplayPickup')
      userStore.state.sendDelivery = 'send'
      setTimeout(() => {
        userStore.state.sendDelivery = ''
      }, 5000);
    }

    const goBackDelivery = () => {
      if (!showDelivery.value && driverSearch.value) {
        timeDriverSearch.value = 10
        driverSearch.value = false
        showDelivery.value = true
        emit('hidePickupDetails')
        console.log('na me run 1')
      }

      if (!showDelivery.value && bargain.value) {
        bargain.value = false
        hideBargainElement.value = false
        showDelivery.value = true
        priceInput.value = false
        driverAgreed.value = false
        closeExhausted.value = true
        userStore.state.userGetBargain.agreed = false
        userStore.state.firstBargainReject = false
        userStore.state.secondBargainReject = false
        clearIntervalBargain.value = true
        addPadding.value = '0%'
        emit('hidePickupDetails')
        console.log('na me run 2', userStore.state.firstBargainReject)
        // userStore.actions.cancelDeliveryNegotiation()

      }
      // this what was you changed
      if (!showDelivery.value && !bargain.value) {
        bargain.value = false
        showDelivery.value = true
        priceInput.value = false
        hideBargainElement.value = false
        driverAgreed.value = false
        userStore.state.userGetBargain.agreed = false
        clearIntervalBargain.value = true
        addPadding.value = '0%'
        delivered.value = false
        emit('hidePickupDetails')
        console.log('na me run 3')
        userStore.actions.cancelDeliveryNegotiation()
      }

      // if (!bargain.value) {
      //   priceInput.value = true
      // }

        console.log('hello', showDelivery.value, bargain.value)
    }
    
    const displayPriceInput = () => {
      console.log('price input 1', priceInput.value)
      if (!priceInput.value) {
        priceInput.value = true
        console.log('price input 2')
      }
    }

    const bargainPrice = () => {
      emit('bargainPrice', 'PENDING RESPONSE')
      console.log('pending')
      if (!pending.value) {
        pending.value = true
        paddingOne.value = '1.9rem'
        emit('adjustPadding')
        showBargainRejected.value = true
        console.log('hello here')
      }
    }

    const userGetBargainCost = () => {
      userStore.actions.userGetBargainCost()
    }

      
        

    const bargainBtn = (price) => {
      clearIntervalBargain.value === false
      console.log(price)
      addPadding.value = '8%'
      userStore.actions.bargainPrice(price)
      bargain.value = false
      hideBargainElement.value = true
      emit('notifyUserBargain', 'PENDING RESPONSE')
      const checkBargainCost = setInterval(userGetBargainCost, 9000);
      const stopWatch = watchEffect(() => {
        if(userStore.state.userGetBargain.agreed) {
          console.log('clearing the interval, the driver just agreed or just rejected a bargain')
          clearInterval(checkBargainCost)
        } else if (userStore.state.deliveryCancel === true) {
          console.log('driver has cancelled bargain')
          emit('displayNotification', 'DRIVER HAS CANCELLED DELIVERY')
          clearInterval(checkBargainCost)
        } else if (clearIntervalBargain.value === true){
          clearInterval(checkBargainCost)
          console.log('clearing interval')
        } else {
          console.log('not cleard the interval for getting bargain cost', userStore.state.userGetBargain.agreed)

        }
      })
      if(clearIntervalBargain.value === true) {
        stopWatch()
      }

      

      if(bargainTrial.value === 0 && !closeExhausted.value) closeExhausted.value = true
      if (priceInput.value) {
        priceInput.value = false
        priceInputValue.value = ''

      }

    }

    const payment = () => {
      driverAgreed.value = false
      pickupDriverArrived.value = false
      addPadding.value = '8%' 
      deliveryDetails.value = true            
      emit('displayNotification', 'ONGOING...')

      // track the delivery/driver location

      // function trackDriver() {
      //   userStore.actions.trackDeliveryDriver()

      // }
      // const driverInterval = setInterval(trackDriver, 9000)

      // watchEffect(() => {

      // })


    }


    return { 
      showDeliveryOption, showDriverOptions, courierOption, priceInput, bargainTrial, priceInputValue,
      pickUpDetails, driverSearch, timeDriverSearch, bargain, pending, paddingOne, userStore, deliveryDetails, hideThis,
      beforeEnter, enter, displayDelivery, showCourierOption, bargainBtn, driverAgreed, closeExhausted,
      beforeEnterTwo, enterTwo, displayPickDetails, goBackDelivery, addPadding, pendingTwo, bargainPriceInput, pickupDriverArrived, payment, addPaddingPaymentBtn,
      displayDriverSearch, displayPriceInput, bargainPrice, deliveryOptions, showDelivery, hideBargainElement, placeOrder, delivered }
  }
}
</script>

<style>
.bottom-menu {
    height: 190px;
}

.boxmenu-enter-from {
  opacity: 0;
}
.boxmenu {
  transition: transform 10s ease;

}
</style>