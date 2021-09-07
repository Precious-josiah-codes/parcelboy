<template>
<div class="h-screen overflow-hidden">
  <!-- profile Image -->
  <div class="relative">
    <!-- profile header -->
    <div class="slide-img">
      <img :src="require('@/assets/images/profile_pic2.jpeg')" alt="profile" />
    </div>

    <div 
    class="absolute top-0 text-white"
    style="transform: translate(60%, 60%);">
      <span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </span>
    </div>
    <!-- profile Image section details -->
    <div 
    class="absolute bottom-0 flex flex-col justify-center w-full" 
    style="transform: translate(0%, 74%);">
      <div class="flex justify-center w-auto text-center">
        <div class="font-Poppins font-medium">
        <img class="inline-block object-cover w-20 h-20 border-4 border-white rounded-full" 
        :src="require('@/assets/images/profile_pic2.jpeg')"/>
        <h1 class="text-black font-bold text-base">Shalom Matthew</h1>
        <div class="flex">
          <div class=" mr-2 text-sm">Lexus 330</div>
          <div class="mr-1 rounded-full" style="background-color: #D1DADF; width: 0.99rem; height: 0.99rem"></div>
          <span class="mr-2 text-sm">Grey</span>
        </div>
        <h1 class="text-sm text-textColor"><span style="color: #8B8B8B">Driver ID:</span>  PBDR1245</h1>
        <img :src="require('@/assets/images/stars.png')" style="margin: 0 auto" class="mt-1"/>
        </div>
      </div>
    </div>
  </div>

  <div 
  class="flex justify-center px-4 font-Poppins" 
  style="
  transform: translate(0%, 210%);
  ">
    <div 
    class="flex justify-between w-full h-auto px-5 py-2 rounded-2xl"
    style="
    box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.116);">
    <div>
      <h1 class="font-medium" style="color: #8B8B8B">Registered</h1>
      <h2 class="text-textColor font-bold">24-03-2021</h2>
    </div>
    <div>
      <h1 class="font-medium" style="color: #8B8B8B">Delivery</h1>
      <h2 class="text-textColor font-bold">50</h2>
    </div>
    <div>
      <h1 class="font-medium" style="color: #8B8B8B">Reports</h1>
      <h2 class="text-textColor font-bold">0</h2>
    </div>
  </div>


  </div>

  <div
  class="px-4 font-Poppins"
  style="
  transform: translate(0%, 45%);
  ">
    <div>
      <h1 style="color: #8B8B8B">Bio</h1>
      <p class="mt-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum magni corporis voluptatem provident quos amet similique illum commodi qui. 
      <span style="color: #0E49B5" class="font-bold">...more</span></p>
    </div>
    <div class="mt-2">
      <h1 style="color: #8B8B8B">Mobile No</h1>
      <div>
        <div class="flex justify-between items-center">
        <h1 class="text-sm">+234 0909489389</h1>
        <div>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </div>
      </div>
      <div class="mt-3">
        <h1 style="color: #8B8B8B">Gender</h1>
        <h2 class="text-sm">Male</h2>
      </div>
      </div>
    </div>
    <div class="mt-5 pb-6 flex justify-center">
      <button class="text-colorFive font-semibold w-72 py-3 rounded-full font-Poppins" style="background-color: #E4E4E4">Report Driver</button>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.slide-img {
  height: 140px;
  position: relative;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.322);
  overflow: hidden;
  background-color: red;
}

.slide-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
}
</style>