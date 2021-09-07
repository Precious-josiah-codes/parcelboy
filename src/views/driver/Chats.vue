<template>
  <div class="relative h-screen">
    <div 
    class="flex items-center px-4 h-20 font-Poppins shadow-xl">
        <div @click="$router.go(-1)">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <div class="w-full flex justify-start items-center ml-5">
            <div>
                <img class="object-cover inline-block w-11 h-11 border-2 border-white rounded-full" :src="require('@/assets/images/profile_pic2.jpeg')"/>
            </div>
            <div class="ml-3">
                <h1 class="font-bold">Marvelous Lorem</h1>
                <h1 class="text-xs" style="color: #C5C5C5">Customer ID: <span style="color: #2F455C">PCSKDJH</span></h1>
            </div>
        </div>
    </div>
    <!-- chat box section -->
    <div class="px-5 font-Poppins">
        <!-- light blue -->
        <div class="mt-5">
            <div 
            class="pl-3 pr-6 py-3 text-xs"
            style="
            background-color: #0e48b541; 
            color: black;
            width: 240px;
            border-radius: 12px 12px 12px 0px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint. </div>
            <span class="text-xs">3:10AM</span>
        </div>
        <div class="mt-5">
            <div 
            class="pl-3 pr-6 py-3 text-xs"
            style="
            background-color: #0e48b541; 
            color: black;
            width: 240px;
            border-radius: 12px 12px 12px 0px;">Lorem ipsum dolor sit amet </div>
            <span class="text-xs">3:10AM</span>
        </div>    
        
    </div>

    <div class="flex justify-end px-5">
        <div class="mt-5">
            <div 
            class="pl-6 pr-3 py-3 text-xs"
            style="
            background-color: #0E49B5; 
            color: white;
            width: 240px;
            border-radius: 12px 12px 0px 12px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint. </div>
            <span class="text-xs flex justify-end">3:10AM</span>
        </div>
    </div>

    <!-- chat text input -->
    <div class="absolute w-full px-5" style="bottom: 30px">
        <div class="relative">
        <input 
        type="text" 
        placeholder="Type Something"
        class="w-full rounded-full border-0 py-3 px-5"
        style="box-shadow: 1px 5px 40px rgba(53, 52, 52, 0.4);">
        <div class="absolute inset-y-0 right-0 top-0 flex items-center pointer-events-none px-5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
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