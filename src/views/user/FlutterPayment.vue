<template>

  <div>
      <button type="button" @click="placeOrder">Pay Now</button>

  </div>

</template>

<script>

export default {
    setup() {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[0].appendChild(script);
        
        const placeOrder = () => {
            window.FlutterwaveCheckout({
                public_key: "FLWPUBK_TEST-f9ffbb193cebd046e5b821dc412eb5ee-X",
                tx_ref: "delivery"+ new Date(),
                amount: 29.99,
                currency: "NGN",
                country: "NG",
                // payment_options: "card",
                customer: {
                email: "ekene@gmail.com",
                phone_number: "+234702909304",
                name: "Ekene Eze",
                },
                callback: function(data) {
                    console.log(data);
                },
                onclose: function() {},
                customizations: {
                    title: "ParcelBoy",
                    description: "Payment for Delivery",
                    logo: require('@/assets/images/parcelboy_log@1.png'),
                },
            });
        }
        return { placeOrder }
    }
//   methods: {
//     makePaymentCallback(response) {
//       console.log("Payment callback", response)
//     },
//     closedPaymentModal() {
//       console.log('payment modal is closed');
//     },
//     generateReference(){
//       let date = new Date()
//       return date.getTime().toString();
//     }
//   }
}

</script>