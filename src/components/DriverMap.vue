<template>
  <div class="image-map w-full">
      <!-- <img :src="require('@/assets/images/map.png')" alt="map icon" /> -->
      <div ref="mapDiv" style="width: 100%; height: 88vh; position: absolute; z-index: 0"></div>
      <!-- <div class="flex justify-center items-center" style="width: 100%; height: 88vh; position: absolute; z-index: 1; background-color: white"> {{mapWatch}} {{lt}}, {{lg}}</div> -->
  </div>
</template>


<script>
import { computed, inject, onBeforeMount, onMounted, onUnmounted, ref } from '@vue/runtime-core'
import { useGeolocation } from '../composables/userGeolocation'
import { Loader } from '@googlemaps/js-api-loader'

export default {
    setup() {
        const userStore = inject('userStore')
        const { coords } = useGeolocation()
        const mapDiv = ref(null)
        const currPos = computed(() => ({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))

        const lt = ref(0)
        const lg = ref(0)
        const mapWatch = ref('')

        let map = ref(null)
        let clickListener = null

        let watcher = undefined

        // get the latitude and longitude of the driver
        onBeforeMount(() => {
            const successCallback = (position) => {
                let lat = position.coords.latitude 
                let lng = position.coords.longitude
                
                
                if (lat !== 0 && lng !== 0) {
                    passLngLat(lat, lng)
                    console.log('success', lat, lng)
                }
                    console.log('not that success')
            }
        
            const errorCallback = (error) => {
                console.error(error.message)
            }
        
            watcher = navigator.geolocation.watchPosition(successCallback, errorCallback, {
                enableHighAccuracy: true
            })
            console.log('hmmm gogle', watcher)
        })

        // save the latitude and longitude of the driver to local storage
        const passLngLat = (lat, lng) => {
            if (lat !== 0 && lng !== 0) {
                const getLatLng = localStorage.getItem('latLng')
                const parseGetLatLng = JSON.parse(getLatLng)
            
                if(parseGetLatLng === null) {
                    // set the lat and lng
                    console.log('this ran 1')
                    const latLng = { lat: lat, lng: lng }
                    localStorage.setItem('latLng', JSON.stringify(latLng))
                    
                   
                } else {
                    console.log(parseGetLatLng, 'get lat')
                    // checking if user has changed position
                    if(lat === parseGetLatLng.lat && lng === parseGetLatLng.lng) {
                        console.log('the user is still in the same position')
                        const getLatLng = localStorage.getItem('latLng')
                        const parseGetLatLng = JSON.parse(getLatLng)

                    } else {
                        console.log('the user has changed position')
                        const latLng = { lat: lat, lng: lng }
                        localStorage.setItem('latLng', JSON.stringify(latLng))
                        userStore.actions.updateDriverLatLng(lat, lng)
                    }
                }
            } else {
                console.log('the coords are now 0')
            }
        }

        function removeGoogleMapScript() {
            console.debug('removing google script...');
            let keywords = ['maps.googleapis'];

            //Remove google from BOM (window object)
            window.google = undefined;

            //Remove google map scripts from DOM
            let scripts = document.head.getElementsByTagName("script");
            for (let i = scripts.length - 1; i >= 0; i--) {
                let scriptSource = scripts[i].getAttribute('src');
                if (scriptSource != null) {
                    if (keywords.filter(item => scriptSource.includes(item)).length) {
                        scripts[i].remove();
                        // scripts[i].parentNode.removeChild(scripts[i]);
                    }
                }
            }
        }
        

        onMounted(() => {
            removeGoogleMapScript()
            const googleMapScript = document.createElement("SCRIPT");
            googleMapScript.setAttribute(
                "src",
                `https://maps.googleapis.com/maps/api/js?key=AIzaSyBd_OY71JcrTrPeTUmS22nW-LvqCjSd15s&callback=initMap`
            );
            googleMapScript.setAttribute("defer", "");
            googleMapScript.setAttribute("async", "");
            document.head.appendChild(googleMapScript);

            const getLatLng = localStorage.getItem('latLng')
            const parseGetLatLng = JSON.parse(getLatLng)

            window.initMap = () => {
                map.value = new window.google.maps.Map(mapDiv.value, {
                    center: { lat: parseGetLatLng.lat, lng: parseGetLatLng.lng},
                    zoom: 17,
                    mapTypeId: 'roadmap',
                    disableDefaultUI: true,
                });
                const marker = new google.maps.Marker({
                    position: { lat: parseGetLatLng.lat, lng: parseGetLatLng.lng},
                    map: map.value,
                });
            }
            
        })

        // onMounted(async () => {
        //     await loader.load()
        //     map.value = new google.maps.Map(mapDiv.value, {
        //         center: currPos.value,
        //         zoom: 10,
        //         mapTypeId: 'roadmap',
                
        //     })
        //     clickListener = map.value.addListener('click', ({ latLng: {lat, lng}}) => (otherPos.value = {lat: lat(), lng: lng()}))
        //     const marker = new google.maps.Marker({
        //         position: currPos.value,
        //         map: map.value,
        //     });
        // })

        // onUnmounted(async () => {
        //     if(clickListener) clickListener.remove()
        // })


        return { mapDiv, userStore, currPos, lt, lg, mapWatch }
    }
}
</script>

<style>
.image-map {
    height: 100vh;
    top: -5%;
}
.image-map img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}
</style>