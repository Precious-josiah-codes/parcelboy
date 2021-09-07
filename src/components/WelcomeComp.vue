<template>
  <div class="section absolute w-full">
      <div class="container">
          <div class="columns">
              <div class="column">
                  <div class="flex justify-center">
                      <img :src="require('@/assets/images/parcelboy_log@1.png')" alt="parcelboy logo"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="flex h-screen items-center font-Poppins">
    <div class="section w-full">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-12">
                    <h1 class="text-lg font-semibold text-textColor pt-10">Welcome,</h1>
                    <h3 class="text-sm font-light" style="color: #707070">Please select user type</h3>
                </div>
                
                <div class="column is-12">
                    <div class="bg-white shadow-md flex items-center rounded-lg justify-center h-28 p-4 mt-4">
                        <router-link :to="{name: 'SignUp'}" class="w-full ">
                        <div>
                            <div class="flex justify-center">
                                <img :src="require('@/assets/images/express-delivery.png')" alt="express-delivery icon"/>
                            </div>
                            <div class="text-xs text-center text-textColor mt-2">Courier Driver</div>
                        </div>
                    </router-link>
                    </div>
                </div>
                <div class="column is-12">
                    <router-link :to="{name: 'SignUpScreen'}" class="w-full ">
                    <div class="bg-white shadow-md flex items-center rounded-lg justify-center h-28 p-4 mt-3">
                        <div>
                            <div class="flex justify-center">
                                <img :src="require('@/assets/images/consumer-behavior.png')" alt="consumer-behaviour icon"/>
                            </div>
                            <div class="text-xs text-textColor mt-2">Consumer</div>
                        </div>
                    </div>
                    </router-link>
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