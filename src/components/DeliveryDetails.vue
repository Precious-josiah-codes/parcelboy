<template>
  <div class="h-full relative bg-white">
    <!-- header nav -->
    <div 
    class="bg-white flex items-center px-4 h-20 font-Poppins shadow-xl w-full" style="position: fixed; z-index: 1">
        <div @click="closeDeliveryDetails">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <h1 
        class="w-full flex justify-center items-center">
            Delivery Details
        </h1>
    </div>

    <!-- profile sectoin -->
     
    <div class="px-5 pb-6 font-Poppins bg-white" style="transform: translate(0px, 95px);">
        <!-- Customer Namel -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Customer Name</span>
        <input
        disabled
        type="text"
        class="text-black font-bold text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupFullName" 
        />
        </label>

        <!-- Mobile No -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Mobile No</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupPhoneNumber" 
        />
        <div class="absolute right-0 bottom-0 flex pointer-events-none text-textColorTwo mb-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </div>
        </label>
        
        <!-- Pick Up Email -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Email</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupEmail" 
        />
        </label>
        
        <!-- Pick Up TIme -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Time</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupTime" 
        />
        </label>

        <!-- Pick Up Address -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Address</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupAddress" 
        />
        </label>
        
        <!-- Pick Up closest landmark -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up closest landmark</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupLandMark" 
 
        />
        </label>
        
        <!-- Apartment/House Number -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Apartment/House Number</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupHouseNumber" 
 
        />
        </label>
        
        <!-- Street Name -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Street Name</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupStreetName" 

        />
        </label>
       
        <!-- Pick Up Category -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Pick Up Category</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.pickupCategory" 
        />
        </label>

        <!-- delivery details -->
        
        <!-- Customer Namel -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Customer Name</span>
        <input
        disabled
        type="text"
        class="text-black font-bold text-sm font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryFullName" 
        />
        </label>

        <!-- Mobile No -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Mobile No</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryPhoneNumber" 
        />
        <div class="absolute right-0 bottom-0 flex pointer-events-none text-textColorTwo mb-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </div>
        </label>
        
        <!-- Pick Up Email -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Email</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryEmail" 
        />
        </label>
        
        <!-- Pick Up TIme -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Time</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryTime" 
        />
        </label>

        <!-- Pick Up Address -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Address</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryAddress" 
        />
        </label>
        
        <!-- Pick Up closest landmark -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery closest landmark</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryLandMark" 
 
        />
        </label>
        
        <!-- Apartment/House Number -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Apartment/House Number</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryHouseNumber" 
 
        />
        </label>
        
        <!-- Street Name -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Street Name</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryStreetName" 

        />
        </label>
       
        <!-- Pick Up closest landmark -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery closest landmark</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryLandMark" 
        />
        </label>
        
        <!-- Pick Up Category -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Delivery Category</span>
        <input
        disabled
        type="text"
        class="text-black text-sm font-bold font-Poppins mt-0 block w-full px-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        :placeholder="userStore.state.getDeliveryPickup.deliveryCategory" 
        />
        </label>
        
        
        <!-- Customer Message -->
        <label class="block relative">
        <span class="text-textColorTwo font-semibold text-xs">Customer Message</span>
        <h2 class="text-sm font-bold">{{userStore.state.getDeliveryPickup.deliveryNotes}}</h2>
        </label>
    </div>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
    setup(_, {emit}) {
        const userStore = inject('userStore')

        const closeDeliveryDetails = () => {
            emit('closeDeliveryDetails')
        }
        return { userStore, closeDeliveryDetails }
    }
}
</script>

<style>

</style>

{
    "courierType": "car",
    "pickupAddress": "lagos",
    "pickupFullName": "",
    "pickupPhoneNumber": "",
    "pickupEmail": "",
    "pickupHouseNumber": "",
    "pickupStreetName": "",
    "pickupLandMark": "",
    "pickupCategory": "",
    "pickupWeight": "",
    "deliveryAddress": "",
    "deliveryFullName": "",
    "deliveryPhoneNumber": "",
    "deliveryEmail": "",
    "deliveryHouseNumber": "",
    "deliveryStreetName": "",
    "deliveryLandMark": "",
    "deliveryCategory": "",
    "deliveryNotes": "",
    "costOfPickupNDelivery": 999,
    "driverSearchStatus": "",
    "costBargainStatus": "",
    "paymentStatus": "",
    "ResponseStatus": "",
    "rejectedDrivers": [],
    "_id": "610a9e6ed67e310004d34ed6",
    "pickupTime": "2021-08-04T14:04:50.374Z",
    "sender": "60ee001aedfb930004919687",
    "deliveryTime": "2021-08-04T14:04:50.375Z",
    "__v": 0,
    "driverCurrentBargain": "6106816ddcbf73000496d58b",
    "driver": "6106816ddcbf73000496d58b"
}