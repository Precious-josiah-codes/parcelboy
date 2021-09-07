for (const pickupDeliveryVal in pickupDelivery.value) {
    console.log(pickupDelivery.value[pickupDeliveryVal])
    firstFiveFields.value++
    if (pickupDelivery.value[pickupDeliveryVal].length !== 0 && firstFiveFields.value === 5){
        pickupDelivery.value.pickupWeight = weight.value + weightUnit.value
        // fix sending time to the backemd
        pickupDelivery.value.pickupTime = new Date()
        pickupDelivery.value.deliveryTime = new Date()
        userStore.actions.postPickupDelivery(pickupDelivery.value)
        console.log('sending')
        break
    } 
}