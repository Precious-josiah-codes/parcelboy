import { onMounted, onUnmounted, ref } from "vue"


export function useGeolocation() {
    const coords = ref({ latitude: 0, longitude: 0 })

    let watcher = undefined

    onMounted(() => {
        const successCallback = (position) => {
            let lat = position.coords.latitude 
            let lng = position.coords.longitude
            coords.value.latitude = position.coords.latitude 
            coords.value.longitude = position.coords.longitude
            console.log(lat, lng)
        }
    
        const errorCallback = (error) => {
            console.error(error.message)
        }
    
        watcher = navigator.geolocation.watchPosition(successCallback, errorCallback, {
            enableHighAccuracy: true
        })
        console.log('hmmm gogle', watcher)
    })

    onUnmounted(() => {
        if(watcher) navigator.geolocation.clearWatch(watcher)
        console.log('hello', watcher)
    })

    return { coords }
}