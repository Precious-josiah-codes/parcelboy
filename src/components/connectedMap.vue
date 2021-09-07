<template>
  <div class="image-map w-full">
      <!-- <img :src="require('@/assets/images/map.png')" alt="map icon" /> -->
      <div ref="mapDiv" style="width: 100vw; height: 100vh; position: absolute; z-index: 0"></div>
  </div>
</template>


<script>
import { computed, inject, onBeforeMount, onMounted, onUnmounted, ref, watchEffect } from '@vue/runtime-core'
import { useGeolocation } from '../composables/userGeolocation'


export default {
    props: ['setDivMap'],
    setup(props) {
        const mapDiv = ref(null)
        let map = ref(null)
        let watcher = undefined
        const userStore = inject('userStore')
        

        onBeforeMount(() => {
            console.log('on before mount')
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
        
            watcher = navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
                enableHighAccuracy: true
            })
            console.log('hmmm gogle', watcher)
        })

        onUnmounted(() => {
            if(watcher) navigator.geolocation.clearWatch(watcher)
            console.log('hello', watcher)
        })

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
                    } else {
                        console.log('the user has changed position')
                        const latLng = { lat: lat, lng: lng }
                        localStorage.setItem('latLng', JSON.stringify(latLng))
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
                 "https://maps.googleapis.com/maps/api/js?key=AIzaSyBd_OY71JcrTrPeTUmS22nW-LvqCjSd15s&callback=initMap&libraries=geometry&v=weekly",
                 
            );
            googleMapScript.setAttribute("defer", "");
            googleMapScript.setAttribute("async", "");
            document.head.appendChild(googleMapScript);

            const getLatLng = localStorage.getItem('latLng')
            const parseGetLatLng = JSON.parse(getLatLng)

            // calculating the distance
            function haversine_distance(mk1, mk2) {
                var R = 3958.8; // Radius of the Earth in miles
                var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
                var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
                var difflat = rlat2-rlat1; // Radian difference (latitudes)
                var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

                var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
                return d;
            }

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
                    
                const image = require('@/assets/images/rider.png')

                const driverMarker = new google.maps.Marker({
                    position: { lat: parseFloat(userStore.state.driverLat), lng: parseFloat(userStore.state.driverLng) },
                    map: map.value,
                    icon: image,
                });

                // drawing a straight line between the driver and consumer
                // var line = new google.maps.Polyline({path: [{ lat: parseGetLatLng.lat, lng: parseGetLatLng.lng}, { lat: 6.5337161, lng: 3.3744218 }], map: map.value})

                // calculating between the driver and consumer
                var distance = haversine_distance(marker, driverMarker);
                console.log(distance.toFixed(2), 'distance')

                let directionsService = new google.maps.DirectionsService();
                let directionsRenderer = new google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map.value); // Existing map object displays directions
                directionsRenderer.setOptions( { suppressMarkers: true } ); // remover markers
                // Create route from existing points used for markers
                const route = {
                    origin: { lat: parseGetLatLng.lat, lng: parseGetLatLng.lng},
                    destination: { lat: parseFloat(userStore.state.driverLat), lng: parseFloat(userStore.state.driverLng) },
                    travelMode: 'DRIVING'
                }

                directionsService.route(route,
                    function(response, status) { // anonymous function to capture directions
                        if (status !== 'OK') {
                            window.alert('Directions request failed due to ' + status);
                            return;
                        } else {
                            directionsRenderer.setDirections(response); // Add route to the map
                            var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                            if (!directionsData) {
                                window.alert('Directions request failed');
                                return;
                            }
                            else {
                                
                                console.log(" Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").");
                            }
                        }
                    });



                // am trying to add an event listener
                // google.maps.event.addListenerOnce(map, 'idle', function(){
                //     // do something only the first time the map is loaded
                // });
            }
        })

       




        return { mapDiv }
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