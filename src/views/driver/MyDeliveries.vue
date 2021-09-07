<template>
  <div>
      <!-- header nav -->
      <div 
      class="flex items-center px-4 h-20 font-Poppins shadow-xl">
          <div @click="$router.go(-1)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </div>
          <h1 
          class="w-full flex justify-center items-center">
              My Deliveries
          </h1>
      </div>

      <div style="height: 88vh; overflow-y: auto;">
        <!-- ongoing map -->
        <div class="w-full">
            <img :src="require('@/assets/images/ongoing_map.png')" alt="parcelboy logo"/>
        </div>

        <!-- pending confirmation -->
        <div 
        style="background-color: #FAFAFA"
        class="font-Poppins px-4 py-4 mt-4 rounded-2xl" >
            <div 
            style="
            border-bottom: 1px solid lightgray;
            "
            class="flex justify-between pb-2">
                <h1 style="color: #D0CA21">Pending Payment</h1>
                <h1>22 March, 2021</h1>
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
                    <h1 class="pt-1">Eugene Oba Street</h1>
                    <h1>22 Harold Wilson Drive</h1>
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
                    <h1>Clothes</h1>
                    <h1>Driver</h1>
                </div>
            </div>
        </div>

        <!-- cancelled -->
        <div 
        style="background-color: #FAFAFA"
        class="font-Poppins px-4 py-4 mt-5 rounded-2xl" >
            <div 
            style="
            border-bottom: 1px solid lightgray;
            "
            class="flex justify-between pb-2">
                <h1 style="color: #FF0000">Cancelled</h1>
                <h1>22 March, 2021</h1>
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
                    <h1 class="pt-1">Eugene Oba Street</h1>
                    <h1>22 Harold Wilson Drive</h1>
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
                    <h1>Clothes</h1>
                    <h1>Driver</h1>
                </div>
            </div>
        </div>
        
        <!-- Delivered -->
        <div 
        style="background-color: #FAFAFA"
        class="font-Poppins px-4 py-4 mt-4 mb-4 rounded-2xl" >
            <div 
            style="
            border-bottom: 1px solid lightgray;
            "
            class="flex justify-between pb-2">
                <h1 style="color: #21D0B2">Paid</h1>
                <h1>22 March, 2021</h1>
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
                    <h1 class="pt-1">Eugene Oba Street</h1>
                    <h1>22 Harold Wilson Drive</h1>
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
                    <h1>Clothes</h1>
                    <h1>Driver</h1>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>