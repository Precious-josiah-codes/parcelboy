import axios from "axios";
const { reactive } = require("@vue/runtime-dom");


const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/preciouscodes/upload'
const CLOUDINARY_UPLOAD_PRESET = 'devsojyw'

const state = reactive({
    try: false,
    sideNavDriver: false,
    username: '',
    success: false,
    loginErrorMsg: '',
    loginSuccess: false,
    userExist: '',
    lat: null,
    lng: null,
    userId: '',
    userProfile: {},
    token: '',
    bgProfileImg: 'https://res.cloudinary.com/preciouscodes/image/upload/v1626353401/parcelboy/default_profile_nedzpi.png',
    profileImg: 'https://res.cloudinary.com/preciouscodes/image/upload/v1626353401/parcelboy/default_profile_nedzpi.png',
    loadingImg: false,
    sendDelivery: '',
    userGetBargain: {},
    firstBargainReject: '',
    secondBargainReject: '',
    bargainCost: 1000,
    driverUserDestinationMap: false,
    driverFound: false,
    pickupDelivery: {},
    driverLat: null,
    driverLng: null,
    userNotification: [],
    
    // drivver fields objects data
    showImgIcon: true,
    driverLoadingImg: false,
    showImgIconOne: true,
    driverLoadingImgOne: false,
    driverSuccess: false,
    pickupId: '',
    driverId: '',
    sender: '',
    bargainSuccess: false,
    bargainDriverSuccess: false,
    driverArrivedPickup: false,
    automobileSuccess: false,
    driverArrivedDelivery: false,
    licenceSuccess: false,
    userBargain: {},
    deliveryCancel: false,
    userCostBargain: '',
    acceptBtnColor: '',
    disableBargainBtn: false,
    driverExist: '',
    driver: {
        automobileImage: '',
        drivingLicence: '',
    },
    bargain: {
        requestId: '',
        driverId: '',
        senderId: '',
        id: ''

    },
    getDeliveryPickup: {},
    foundDriverProfile: {},
    pickupUserProfile: {}
})

const mutations = {
    updateUserProfileImg() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.put(`https://parcelboy.herokuapp.com/api/users/profile/update-img/${state.userId}`, {user_Img: state.profileImg}, config)
        .then(response => {
            if (response.status === 200) {
                console.log(response)
            }
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something weird happened')
            }
        })
    },

    updateUserBgProfileImg() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.put(`https://parcelboy.herokuapp.com/api/users/profile/update-bg-img/${state.userId}`, {user_Bg_Img: state.bgProfileImg}, config)
        .then(response => {
            if (response.status === 200) {
                console.log(response)
            }
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something weird happened')
            }
        })
    },

    updateDriverProfile(value) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.put(
            `https://parcelboy.herokuapp.com/api/users/profile/driver/${state.userId}`, 
            value, config )
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                } else {
                    console.log(response)
                }
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('Something weird happened')
                }
            })
    },
}

const actions = {
    signUp(value) {
        axios.post('https://parcelboy.herokuapp.com/api/users/signup/consumer', value)
        .then(response => {
            if (response.status === 201){
                console.log(response, response.status)
                console.log('user created')
                state.userId = response.data._id
                state.email = response.data.email
                state.token = response.data.token
                state.success = true
            } else {
                console.log(response)
            }
        
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    if(error.response.data.includes('User already exists')) state.userExist = error.response.data
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    signIn(value) {
        axios({
            url: 'https://parcelboy.herokuapp.com/api/users/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
            data: value
        })
        .then(response => {
            if(response.status === 200) {
                console.log(response, response.status)
                console.log('user logged in')
                state.userId = response.data._id
                state.token = response.data.token
                state.loginSuccess = true
            } else {
                console.log(response)
            }
        })
        .catch(error => {
            if(error.response) {
                if(error.response.data = 'Invalid email or password') {
                    state.loginErrorMsg = 'Email or Password is incorrect'
                    console.log('Invalid email or password', error.response)
                }
            } else if (error.request) {
                console.log(error.request, 'error from the browser')
            } else {
                console.log('something weird happend')
            }
        })
    },

    getUserDetails() {
        axios.get(`https://parcelboy.herokuapp.com/api/users/profile/${state.userId}`)
        .then(response => {
            if (response.status === 200) {
                state.userProfile = response.data
                if (!response.data.user_Img.length) {
                    state.userProfile.user_Img = 'https://res.cloudinary.com/preciouscodes/image/upload/v1626353401/parcelboy/default_profile_nedzpi.png'
                    state.userProfile.user_Bg_Img = 'https://res.cloudinary.com/preciouscodes/image/upload/v1626353401/parcelboy/default_profile_nedzpi.png'
                }
                console.log('user profile', state.userProfile)
            } else {
                console.log(response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('someting weird just happend')
            }
        })
    },

    updateUserProfile(value) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.put(
            `https://parcelboy.herokuapp.com/api/users/profile/consumer/${state.userId}`, 
            value, config )
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                } else {
                    console.log(response)
                }
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('Something weird happened')
                }
            })
    },

    uploadUserImage(file) {
        state.loadingImg = true
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('folder', 'parcelboy')

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            state.profileImg = response.data.secure_url
            state.loadingImg = false
            console.log(response)
        }).catch(error => {
            if(error.response) {
                console.log(error.response, 'from cloudianry')
            } else if (error.request) {
                console.log(error.request, 'error from the browser')
            } else {
                console.log('err err uploading profile image')
            }
        })
    },
    
    uploadBgUserImage(file) {
        state.loadingImg = true
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('folder', 'parcelboy')

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            state.bgProfileImg = response.data.secure_url
            state.loadingImg = false
            console.log(response)
        }).catch(error => {
            if(error.response) {
                console.log(error.response, 'from cloudianry')
            } else if (error.request) {
                console.log(error.request, 'error from the browser')
            } else {
                console.log('err err uploading profile image')
            }
        })
    },

    getDriverDetails(id) {
        axios.get(`https://parcelboy.herokuapp.com/api/users/profile/${id}`)
        .then(response => {
            if (response.status === 200) {
                state.foundDriverProfile = response.data
                console.log('driver profile', state.foundDriverProfile)
                state.driverLat = response.data.latitude
                state.driverLng = response.data.longitude
                
            } else {
                console.log(response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('someting weird just happend')
            }
        })
    },
    
    
    searchDriver(){
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        axios.get('https://parcelboy.herokuapp.com/api/pickupdelivery/searchdriver/' + state.pickupId, config)
        .then(response => {
            if(response.status === 200) {
                console.log('search driver', response)
                state.driverId = response.data.driver_id
                if(response.data === 'No driver with the vehicle type is currently in this location'){
                    console.log(response.data)
                } else {
                    this.getDriverDetails(response.data.driver_id)
                    
                    state.driverUserDestinationMap = true
                    state.driverFound = true
                }
            } else {
                console.log(response, response.data.message, 'not found driver')
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something f**king weird happened')
            }
        })
    },
    
   
    postPickupDelivery(value) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        
        axios.post('https://parcelboy.herokuapp.com/api/pickupdelivery/create', value, config)
        .then(response => {
            if(response.status === 201) {
                console.log(response, {id: response.data._id})
                state.pickupDelivery = response.data
                state.pickupId = response.data._id,
                state.sender = response.data.sender
            } else {
                console.log(response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something f**king weird happened')
            }
        })
    },

    bargainPrice(price) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        
        const bargain = {
            driver: state.driverId, 
            sender: state.sender, 
            requestId: state.pickupId,  
            agreed: false, 
            cost: price, 
            postedBy: state.userId
        }

        axios.post('https://parcelboy.herokuapp.com/api/bargain', bargain, config)
        .then(response => {
            if (response.status === 201) {
                console.log('here1', response)
                state.bargain.requestId = response.data.requestId
                state.bargain.senderId = response.data.sender
                state.bargain.driverId = response.data.driver
                state.bargain.id = response.data._id
                state.bargainSuccess = true
            } else {
                console.log('here2', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something f**king weird happened')
            }
        })
    },

    driverSendNotification(notification) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
     
        axios.put(
            `https://handle-cors.herokuapp.com/https://parcelboy.herokuapp.com/api/users/${state.getDeliveryPickup.sender}`, notification, config)
        .then(response => {
            if (response.status === 200) {
                console.log('sending notification', response, state.userId)
            } else {
                console.log('sending notification', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    userSendNotification(notification) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
     
        axios.put(
            `https://parcelboy.herokuapp.com/api/users/${state.driverId}`, notification, config)
        .then(response => {
            if (response.status === 200) {
                console.log('sending notification', response, state.userId)
            } else {
                console.log('sending notification', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    userRecieveNotification() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        axios.get(`https://parcelboy.herokuapp.com/api/users/profile/notifications/${state.userId}`, config)
        .then(response => {
            if (response.status === 200) {
               console.log('recieving notifications', response)
               state.userNotification = response.data
                
            } else {
                console.log(response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('someting weird just happend')
            }
        })
    },



    // new api endpoints
    cancelDeliveryNegotiation() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('cancelling.....')
        

        axios.put(`https://parcelboy.herokuapp.com/api/bargain/cancel/${state.pickupId }/${state.driverId}/${state.bargain.id}`, 'cancelling request', config)
        .then(response => {
            if (response.status === 200) {
                console.log('driver id cancelled', state.driverId)
                console.log('cancelling', response)
            } else {
                console.log('cancelling 2', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something f**king weird happened')
            }
        })
    },
    
    // driver request endpoints
    driverCancelDeliveryNegotiation() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        

        axios.put(`https://parcelboy.herokuapp.com/api/bargain/cancel/${state.getDeliveryPickup._id }/${state.userId}/${state.userBargain._id}`, 'cancelling request', config)
        .then(response => {
            if (response.status === 200) {
                console.log('driver id cancelled', state.driverId)
                console.log('cancelling', response)
            } else {
                console.log('cancelling 2', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something f**king weird happened')
            }
        })
    },

    uploadAutomobileImage(file, fullName) {
        state.showImgIcon = false
        state.driverLoadingImg = true
        console.log(fullName)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('folder', `parcelboy/driver/${fullName}`)

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            state.driver.automobileImage = response.data.secure_url
            state.automobileSuccess = true
            console.log(response)
        }).catch(error => {
            if(error.response) {
                console.log(error.response, 'from cloudianry')
            } else if (error.request) {
                console.log(error.request, 'error from the browser')
            } else {
                console.log('err err uploading profile image')
            }
        })
    },

    uploadDrivingLicence(file, fullName) {
        state.showImgIconOne = false
        state.driverLoadingImgOne = true
        console.log(fullName)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('folder', `parcelboy/driver/${fullName}`)

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            state.driver.drivingLicence = response.data.secure_url
            state.licenceSuccess = true
            console.log(response)
        }).catch(error => {
            if(error.response) {
                console.log(error.response, 'from cloudianry')
            } else if (error.request) {
                console.log(error.request, 'error from the browser')
            } else {
                console.log('err err uploading profile image')
            }
        })
    },

    signUpDriver(value) {
        axios.post('https://parcelboy.herokuapp.com/api/users/signup/driver', value)
        .then(response => {
            if (response.status === 201){
                console.log(response, response.status)
                console.log('user created')
                state.userId = response.data._id
                state.email = response.data.email
                state.token = response.data.token
                state.driverSuccess = true
            } else {
                console.log(response, 'driverSuccess', state.driverSuccess)
            }
        
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    if (error.response.data === 'User already exists') state.driverExist = error.response.data
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    }, 

    getDelivery() {
        console.log('getting delivery')

        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        axios.get(`https://parcelboy.herokuapp.com/api/users/driver/deliveries/bargain/${state.userId}`, config)
        .then(response => {
            if(response.status === 200) {
                console.log('pickup delivery request', response)
                if(response.data[0].driverCurrentBargain === state.userId) {
                    state.getDeliveryPickup = response.data[response.data.length - 1]
                    console.log('pickup request main request', response.data[response.data.length - 1])
                    console.log('pickup request all request', response.data)
                    this.getUserProfile()
                    this.getBargainCost()
                }
            } else {
                console.log(response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
        
    },

    getBargainCost () {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.get(`https://parcelboy.herokuapp.com/api/bargain/${state.getDeliveryPickup._id}/${state.userId}/${state.getDeliveryPickup.sender}`, config)
        .then(response => {
            if (response.status === 200) {
                console.log('response bargain cost', response)
                state.userBargain = response.data[response.data.length - 1]
                state.bargainDriverSuccess = true

                response.data.forEach(bargain => {
                    if(bargain.agreed === false && bargain.sender === bargain.postedBy) {
                        state.deliveryCancel = true
                        console.log('user has cancelled your delivery')
                    }
                });


                if(response.data[response.data.length - 1].driver === response.data[response.data.length - 1].postedBy) {
                    console.log('its the driver that posted this')
                } else {
                    state.userCostBargain = response.data[response.data.length - 1].cost
                    state.acceptBtnColor = 'newBargain'

                }

                if (response.data.length === 5) state.disableBargainBtn = true
                console.log('current response bargain cost', state.userBargain)
                console.log('all response bargain cost', response)
                
            } else {
                console.log('else response bargain cost ', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },


    getUserProfile () {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.get(`https://parcelboy.herokuapp.com/api/users/profile/${state.getDeliveryPickup.sender}`, config)
        .then(response => {
            if (response.status === 200) {
                state.pickupUserProfile = response.data
                console.log('pickup up user profile', state.pickupUserProfile)
            } else {
                console.log('else pickup up user profile ', state.pickupUserProfile)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    acceptBargain () {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('acceptbargain token', state.token)

        axios.put(
            `https://parcelboy.herokuapp.com/api/bargain/accept/${state.userBargain._id}/${state.getDeliveryPickup._id}`, 'hello', config)
        .then(response => {
            if (response.status === 200) {
                console.log('accepting bargain', response)
            } else {
                console.log('else accepting bargain ', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    userGetBargainCost() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        axios.get(`https://parcelboy.herokuapp.com/api/bargain/${state.pickupId}/${state.driverId}/${state.sender}`, config)
        .then(response => {
            if (response.status === 200) {
                state.userGetBargain = response.data[response.data.length - 1]
                state.bargainCost = response.data[response.data.length - 1].cost
                console.log('response bargain cost', response)

                response.data.forEach(bargain => {
                    if(bargain.agreed === false) {
                        state.deliveryCancel = true
                        console.log('user has cancelled your delivery')
                    }
                });
                
                if (response.data.length === 2) {
                    state.firstBargainReject = true
                    console.log('driver rejected the first bargain, you now have a 2nd bargain')
                } else if (response.data.length === 4) {
                    state.firstBargainReject = false
                    state.secondBargainReject = true

                }
            } else {
                console.log('else response bargain cost ', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },
  
    driverRebargainPrice(price) {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        
        const bargain = {
            driver: state.userBargain.driver, 
            sender: state.userBargain.sender, 
            requestId: state.userBargain.requestId,  
            agreed: false, 
            cost: price, 
            postedBy: state.userBargain.driver
        }

        axios.post('https://parcelboy.herokuapp.com/api/bargain', bargain, config)
        .then(response => {
            if (response.status === 201) {
                console.log('driver re-bargaining', response)
                // state.bargain.requestId = response.data.requestId
                // state.bargain.senderId = response.data.sender
                // state.bargain.driverId = response.data.driver
                // state.bargainSuccess = true
            } else {
                console.log('driver re-bargaining', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('something f**king weird happened')
            }
        })
    },

    checkUserCancelBargain() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('checking if user has cancel bargain', state.userId)
        axios.get(`https://parcelboy.herokuapp.com/api/users/profile/notifications/${state.userId}`, config)
        .then(response => {
            if (response.status === 200) {
                console.log('checking cancelled bargain ', response)
                console.log('checking cancelled bargain ', response.data[response.data.length - 1],  'delivery pickup id', state.getDeliveryPickup)
            } else {
                console.log(' else response checking cancelled bargain ', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },
    
    updateDriverLatLng(lat, lng) {
        console.log('updating the driver lng and lat', lat, lng)
        
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }

        const location = { 
            driverCurrentLocation: '', 
            longitude: lng, 
            latitude: lat 
        }

        axios.put(
            `https://parcelboy.herokuapp.com/api/users/driver/${state.userId}/update-location`, location, config)
        .then(response => {
            if (response.status === 200) {
                console.log('updaating drivers location', response)
            } else {
                console.log('updaating drivers location', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    pickupProximityNotification() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('checking if user has reached pickup location', state.driverId)
        axios.get(`https://parcelboy.herokuapp.com/api/track/from-pickup/${state.pickupId}`, config)
        .then(response => {
            if (response.status === 200 ) {
                console.log('checking if user has reached pickup location', response)
                if (response.data.numberDistance > 600 || response.data.numberDistance < 600) {
                    state.driverArrivedPickup = true
                    console.log('driver has arrived')
                }
            } else {
                console.log('checking if user has reached pickup location', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    deliveryProximityNotification() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('checking if user has reached delivery location', state.driverId)
        axios.get(`https://parcelboy.herokuapp.com/api/track/to-delivery/${state.pickupId}`, config)
        .then(response => {
            if (response.status === 200) {
                console.log('checking if user has reached pickup location', response)
                if (response.data.numberDistance > 600 || response.data.numberDistance < 600) {
                    state.driverArrivedDelivery = true
                    console.log('driver has arrived')
                }
            } else {
                console.log('checking if user has reached pickup location', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },
    
    driverPickupProximityNotification() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('checking if user has reached pickup location', state.driverId)
        axios.get(`https://parcelboy.herokuapp.com/api/track/from-pickup/${state.getDeliveryPickup._id}`, config)
        .then(response => {
            if (response.status === 200) {
                console.log('checking if user has reached pickup location', response)
                if (response.data.numberDistance > 600 || response.data.numberDistance < 600) {
                    state.driverArrivedPickup = true
                    console.log('driver has arrived')
                }
            } else {
                console.log('checking if user has reached pickup location', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },

    driverDeliveryProximityNotification() {
        const config = {
            headers: { Authorization: `Bearer ${state.token}`}
        }
        console.log('checking if driver has reached delivery location')
        axios.get(`https://parcelboy.herokuapp.com/api/track/to-delivery/${state.getDeliveryPickup._id}`, config)
        .then(response => {
            if (response.status === 200) {
                console.log('checking if user has reached delivery location', response)
                if (response.data.numberDistance > 600 || response.data.numberDistance < 600) {
                    state.driverArrivedDelivery = true
                    console.log('driver has arrived delivery')
                }
            } else {
                console.log('checking if user has reached pickup location', response)
            }
        })
        .catch(error => {
            if(error.response) {
                console.log(error.response, error.response.data)
                if(error.response.data) {
                    console.log('data', error.response.data)
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('something weird just happened')
                }
            }
        })
    },



    
    

    
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}