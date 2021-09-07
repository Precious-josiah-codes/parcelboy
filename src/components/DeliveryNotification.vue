<template>
  <div v-if="notification !== 'null'" class="absolute bottom-menu bottom-0 w-full h-auto" 
  v-bind:style="{
      backgroundColor: notificationBgColor, 
      paddingBottom: notificationPadding,
      borderTopRightRadius: '50px',
      borderTopLeftRadius: '50px',
      boxShadow: '1px 5px 20px rgba(53, 52, 52, 0.2)'}"
  >
    <div class="absolute top-0 w-full flex justify-center items-center font-Poppins
    text-white h-10">
        <h1>{{notification}}</h1>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core'
export default {
    props: ['notification', 'notificationPadding'],
    setup(props) {
        const notificationBgColor = ref('#21D0B2')
        watchEffect(() => {
            console.log(props.notification, props.notificationPadding)
            if (props.notification === 'MATCHED') {
                notificationBgColor.value = '#21D0B2'
            } else if (props.notification === 'PENDING RESPONSE') {
                notificationBgColor.value = '#D0CA21'
            } else if (props.notification === 'DRIVER HAS CANCELLED DELIVERY') {
                notificationBgColor.value = 'red'

            } else if (props.notification === '1ST BARGAIN REJECTED') {
                notificationBgColor.value = '#FF0000'

            } else if (props.notification === '2ND BARGAIN REJECTED') {
                notificationBgColor.value = '#FF0000'

            }else if (props.notification === 'COMING...') {
                notificationBgColor.value = '#2F455C'

            } else if (props.notification === 'ARRIVED') {
                notificationBgColor.value = '#21D0B2'

            } else if (props.notification === 'ONGOING...') {
                notificationBgColor.value = '#2F455C'
            } else if (props.notification === 'DELIVERED') {
                notificationBgColor.value = '#21D0B2'

            }
            
        })

        return { notificationBgColor }
    }

}
</script>

<style>

</style>