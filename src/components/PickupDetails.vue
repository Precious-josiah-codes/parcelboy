<template>
    <div class="section h-screen" style="background-color: white">
        <div class="pb-3">
            <svg @click="hidePickupDetails" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
        <div class="container" style="height: 500px; overflow-y: auto;">
            <div class="px-4">
                <!-- pickup section main -->
                <div @click="displayPickupFields" class="bg-colorThree text-textColor font-Poppins flex justify-start items-center mt-3 mb-4 py-2 px-5 rounded-full">
                    <span class="w-10">
                        <img class="" :src="require('@/assets/images/pickup.png')" alt="rider icon" />
                    </span>
                    <span class="pl-5">Pick Up Location</span>
                    
                </div>

                <!-- pickup section fields -->
                <div v-if="pickupFields">
                    <!-- pickupAddress -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupAddress" type="text" placeholder="Address" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/Address.png')" />
                        </div>
                    </div>
                    <!-- pickupFullName -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupFullName" type="text" placeholder="Full Name" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/User Icon.png')" />
                        </div>
                    </div>
                    <!-- pickupPhoneNumber -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupPhoneNumber" type="text" placeholder="+234 Phone Number" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/Phone Icon.png')" />
                        </div>
                    </div>
                    <!-- pickupEmail -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupEmail" type="text" placeholder="E-mail" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/envelope.png')" />
                        </div>
                    </div>
                    <!-- pickupTime -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupTime" type="text" placeholder="Pick Up TIme" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/fast-time.png')" />
                        </div>
                    </div>
                    <!-- pickupHouseNumber -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupHouseNumber" type="text" placeholder="Apartment/House Number" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/Address.png')" />
                        </div>
                    </div>
                    <!-- pickupStreetName -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupStreetName" type="text" placeholder="Street Name" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/direction.png')" />
                        </div>
                    </div>
                    <!-- pickupLandMark -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.pickupLandMark" type="text" placeholder="Landmark" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/landmark.png')" />
                        </div>
                    </div>
                    <div class="relative mt-5">
                        <select v-model="pickupDelivery.pickupCategory" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                            <option value="" class="text-sm font-light">Select Cateogry</option>
                            <option value="category 1" class="text-sm font-light">Category 1</option>
                            <option value="category 2" class="text-sm font-light">Category 2</option>
                        </select>
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none">
                            <img :src="require('@/assets/images/list.png')" alt="parcelboy logo"/>
                        </div>
                    </div>
                    <div class="relative mt-5 mb-6">
                        <input v-model="weight" type="text" placeholder="Weight" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center pointer-events-none">
                            <img :src="require('@/assets/images/list.png')" alt="parcelboy logo"/>
                        </div>
                        <div class="absolute inset-y-0 right-0 top-0 flex items-center text-textColorTwo">
                            <select v-model="weightUnit" class="bg-colorThree border-0 focus:ring-0 focus:border-black text-sm font-Poppins font-light">
                            <option value="" class="text-sm font-light" selected>Kg1</option>
                            <option value="Kg2" class="text-sm font-light">Kg2</option>
                            <option value="kg3" class="text-sm font-light">Kg3</option>
                        </select>
                        </div>
                    </div>

                </div>

                <!-- delivery details section main -->
                <div @click="displayDeliveryFields" class="bg-colorThree text-textColor font-Poppins flex justify-start items-center mt-3 py-2 px-5 rounded-full">
                    <span class="w-10">
                        <img class="" :src="require('@/assets/images/delivery.png')" alt="rider icon" />
                    </span>
                    <span class="pl-5">Delivery Details</span>
                </div>

                <!-- delivery section fields -->
                <div v-if="deliveryFields" class="mb-6">
                    <!-- deliveryAddress -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryAddress" type="text" placeholder="Address" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/Address.png')" />
                        </div>
                    </div>
                    <!-- deliveryFullName -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryFullName" type="text" placeholder="Full Name" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/User Icon.png')" />
                        </div>
                    </div>
                    <!-- deliveryPhoneNumber -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryPhoneNumber" type="text" placeholder="+234 Phone Number" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/Phone Icon.png')" />
                        </div>
                    </div>
                    <!-- deliveryEmail -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryEmail" type="text" placeholder="E-mail" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/envelope.png')" />
                        </div>
                    </div>
                    <!-- deliveryTime -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryTime" type="text" placeholder="Pick Up TIme" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/fast-time.png')" />
                        </div>
                    </div>
                    <!-- deliveryHouseNumber -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryHouseNumber" type="text" placeholder="Apartment/House Number" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/Address.png')" />
                        </div>
                    </div>
                    <!-- deliveryStreetName -->
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryStreetName" type="text" placeholder="Street Name" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/direction.png')" />
                        </div>
                    </div>
                    <div class="relative mt-5">
                        <input v-model="pickupDelivery.deliveryLandMark" type="text" placeholder="Landmark" class="w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black px-5 text-sm font-Poppins font-light">
                        <div class="absolute inset-y-0 left-0 top-0 flex items-center justify-start pointer-events-none w-10 pr-5">
                            <img :src="require('@/assets/images/landmark.png')" />
                        </div>
                    </div>
                </div>

                <!-- Add delivery section main -->
                <!-- <div class="bg-colorThree text-textColor font-Poppins flex justify-start items-center mt-3 mb-4 py-2 px-5 rounded-full" @click="addDelivery">
                    <span class="w-10">
                        <img class="" :src="require('@/assets/images/delivery.png')" alt="rider icon" />
                    </span>
                    <span class="pl-5">Add Delivery</span>
                </div>
                 -->
                <!-- Add Note section main -->
                <div @click="displayAddNote" class="bg-colorThree text-textColor font-Poppins flex justify-start items-center mt-3 py-2 px-5 rounded-full">
                    <span class="w-10">
                        <img class="" :src="require('@/assets/images/delivery.png')" alt="rider icon" />
                    </span>
                    <span class="pl-5">Add Note</span>
                </div>

                <div v-if="note">
                    <textarea name="" id="" cols="30" rows="10" v-model="pickupDelivery.deliveryNotes"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { inject, watchEffect } from '@vue/runtime-core'

export default {
    props: ['openPickupFields', 'courierType'],
    setup(props, { emit }) {
        const userStore = inject('userStore')
        const deliveryFields = ref(false)
        const pickupFields = ref(false)
        const weight = ref('')
        const weightUnit = ref('')
        const note = ref(false)
        const firstFiveFields = ref(0)
        const pickupDelivery = ref({
            courierType: '',
            pickupAddress: '', 
            pickupFullName: '', 
            pickupPhoneNumber: '', 
            pickupEmail: '', 
            pickupTime: '', 
            pickupHouseNumber: '', 
            pickupStreetName: '', 
            pickupLandMark: '', 
            pickupCategory: '', 
            pickupWeight: '',
            deliveryAddress: '', 
            deliveryFullName: '', 
            deliveryPhoneNumber: '', 
            deliveryEmail: '', 
            deliveryTime: '', 
            deliveryHouseNumber: '', 
            deliveryStreetName: '', 
            deliveryLandMark: '', 
            deliveryCategory: '', 
            deliveryNotes: '',
        })

        // NOTE:  remember to fix the post api using the logic samuel recommended
        watchEffect(() => {

            if(props.courierType) {
                pickupDelivery.value.courierType = props.courierType
            } else {
                pickupDelivery.value.courierType = 'rider'
            }


            if (userStore.state.sendDelivery === 'send') {
                pickupDelivery.value.pickupWeight = weight.value + weightUnit.value
                // fix sending time to the backemd
                pickupDelivery.value.pickupTime = new Date()
                pickupDelivery.value.deliveryTime = new Date()
                userStore.actions.postPickupDelivery(pickupDelivery.value)

                setTimeout(() => {
                    console.log('am runnig search')
                    userStore.actions.searchDriver()
                }, 5000);
                console.log('sending')
               
            }


            if (props.openPickupFields === 0) {
                pickupFields.value = true
            } else if (props.openPickupFields === 1) {
                deliveryFields.value = true
            } else {
                note.value = true
            }
        })
        
        const hidePickupDetails = () => {
            emit('hidePickup', false)
        }

        const displayDeliveryFields = () => {
            console.log('hello delivery fields')
            deliveryFields.value = !deliveryFields.value
            if (pickupFields.value || note.value) {
                pickupFields.value = false
                note.value = false
            }
        }
        
        const displayPickupFields = () => {
            pickupFields.value = !pickupFields.value
            if (deliveryFields.value || note.value) {
                deliveryFields.value = false
                note.value = false
            }
        }

        const displayAddNote = () => {
            note.value = !note.value
            if (deliveryFields.value || pickupFields.value) {
                pickupFields.value = false
                deliveryFields.value = false
            }
        }

        // const addDelivery = () => {
        //     // STOPPED HERE
        //     // NOTE: create a second clone/copy of the object instead of push
        //     pickupDelivery.value.pickupWeight = weight.value + weightUnit.value
        //     let copiedPerson = Object.assign({}, pickupDelivery.value)
        //     userStore.actions.postPickupDelivery(copiedPerson)

        //     pickupDelivery.value.pickupAddress = '', 
        //     pickupDelivery.value.pickupFullName = '', 
        //     pickupDelivery.value.pickupPhoneNumber = '', 
        //     pickupDelivery.value.pickupEmail = '', 
        //     pickupDelivery.value.pickupTime = '', 
        //     pickupDelivery.value.pickupHouseNumber = '', 
        //     pickupDelivery.value.pickupStreetName = '', 
        //     pickupDelivery.value.pickupLandMark = '', 
        //     pickupDelivery.value.pickupCategory = '', 
        //     pickupDelivery.value.pickupWeight = '',
        //     pickupDelivery.value.deliveryAddress = '', 
        //     pickupDelivery.value.deliveryFullName = '', 
        //     pickupDelivery.value.deliveryPhoneNumber = '', 
        //     pickupDelivery.value.deliveryEmail = '', 
        //     pickupDelivery.value.deliveryTime = '', 
        //     pickupDelivery.value.deliveryHouseNumber = '', 
        //     pickupDelivery.value.deliveryStreetName = '', 
        //     pickupDelivery.value.deliveryLandMark = '', 
        //     pickupDelivery.value.deliveryCategory = '', 
        //     pickupDelivery.value.deliveryNotes = ''
        //     weight.value = ''
        //     weightUnit.value = ''
        // }

        return { 
            deliveryFields, pickupFields, pickupDelivery, weight, weightUnit, note,
            hidePickupDetails, displayDeliveryFields, displayPickupFields,
            displayAddNote }
    }
}
</script>

<style>

</style>