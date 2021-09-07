import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '../views/user/WelcomeScreen'
import SignInScreen from '../views/user/SignInScreen'
import SignUpScreen from '../views/user/SignUpScreen'
import DeliveryScreen from '../views/user/DeliveryScreen'
// import SideBar from '../views/user/SideBar'
import PickupDetails from '../components/PickupDetails'
import DriverDetails from '../views/user/DriverDetails'
import MyProfile from '../views/user/MyProfile'
import MyDelivery from '../views/user/MyDelivery'
import Settings from '../views/user/Settings'
import Notifications from '../views/user/Notifications'
import HelpSupport from '../views/user/HelpSupport'
import ContactUs from '../views/user/ContactUs'
import tryBottomBar from '../views/user/tryBottomBar'
import Rebuild from '../views/user/Rebuild'
import FlutterPayment from '../views/user/FlutterPayment'

// driver routes
import SignUp from '../views/driver/SignUp'
import SignIn from '../views/driver/SignIn'
import Home from '../views/driver/Home'
import MyDeliveries from '../views/driver/MyDeliveries'
import DriverProfile from '../views/driver/DriverProfile'
import Chats from '../views/driver/Chats'
import DriverNotifications from '../views/driver/DriverNotifications'
import DriverSettings from '../views/driver/DriverSettings'
import DriverHelpSupport from '../views/driver/DriverHelpSupport'
import DriverContactUs from '../views/driver/DriverContactUs'

const routes = [
  {
    path: '/',
    name: 'WelcomeScreen',
    component: WelcomeScreen
  },
  {
    path: '/sign_up',
    name: 'SignUpScreen',
    component: SignUpScreen
  },
  {
    path: '/sign_in',
    name: 'SignInScreen',
    component: SignInScreen
  },
  {
    path: '/delivery',
    name: 'DeliveryScreen',
    component: DeliveryScreen
  },
  {
    path: '/driver_details',
    name: 'DriverDetails',
    component: DriverDetails
  },
  {
    path: '/my_profile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/my_delivery',
    name: 'MyDelivery',
    component: MyDelivery
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/notification',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/help_support',
    name: 'HelpSupport',
    component: HelpSupport
  },
  {
    path: '/contact_us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/c',
    name: 'tryBottomBar',
    component: tryBottomBar
  },
  {
    path: '/cd',
    name: 'Rebuild',
    component: Rebuild
  },
  {
    path: '/driver_sign_up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/driver_sign_in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my_deliveries',
    name: 'MyDeliveries',
    component: MyDeliveries
  },
  {
    path: '/driver_profile',
    name: 'DriverProfile',
    component: DriverProfile
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/notifications',
    name: 'DriverNotifications',
    component: DriverNotifications
  },
  {
    path: '/settings',
    name: 'DriverSettings',
    component: DriverSettings
  },
  {
    path: '/help_support',
    name: 'DriverHelpSupport',
    component: DriverHelpSupport
  },
  {
    path: '/contact_us',
    name: 'DriverContactUs',
    component: DriverContactUs
  },
  {
    path: '/payment',
    name: 'FlutterPayment',
    component: FlutterPayment
  },
  



  

  // testing route
  // {
  //   path: '/',
  //   name: 'PickupDetails',
  //   component: PickupDetails
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
