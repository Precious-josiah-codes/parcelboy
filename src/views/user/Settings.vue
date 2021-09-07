<template>
  <div>
       <!-- header nav -->
      <div 
      class="flex items-center px-4 h-20 font-Poppins">
          <div @click="$router.go(-1)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </div>
          <h1 
          class="w-full flex justify-center items-center">
              Settings
          </h1>
      </div>

      <!-- settings  -->
      <div>
          <div class="flex items-center px-5 justify-between font-Poppins text-base">
              <div>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              </div>
              <div 
              class="w-full">
                  <h1 class="font-bold pl-4">Notifications</h1></div>
              <div>
                  <div class="px-4">
                      <input type="checkbox" name="" id="">
                  </div>
              </div>
          </div>
      </div>
      <!-- location -->
      <div class="mt-5">
          <div class="flex items-center px-5 justify-between font-Poppins text-base">
              <div>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div 
              class="w-full">
                  <h1 class="font-bold pl-4">Location Permission</h1></div>
              <div>
                  <div class="px-4">
                      <input type="checkbox" name="" id="">
                  </div>
              </div>
          </div>
      </div>

      <!-- legal -->
      <div class="mt-5">
          <div class="flex items-center px-5 justify-between font-Poppins text-base">
              <div>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div 
              class="w-full">
                  <h1 class="font-bold pl-4">Legal & About</h1></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
input[type='checkbox'] {
    position: relative;
    width: 45px;
    height: 20px;
    appearance: none;
    -webkit-appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    transition: .5s; 
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
}

input:checked[type='checkbox'] {
    background: rgb(137, 250, 137);
}

input[type='checkbox']:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.4);
    transform: translate(3px, -0px); 
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    transition: .5s;
} 

input:checked[type="checkbox"]:before {
    left: 27px;
}
</style>