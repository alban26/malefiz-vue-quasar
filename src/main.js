import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'
import gAuthPlugin from 'vue3-google-oauth2';
import firebase from "firebase/compat";


let gauthClientId = "886182434882-7i8mtc8cekkdogr23ee5c15vp51tdf76.apps.googleusercontent.com";
const gAuthOptions = { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: true }

const firebaseConfig = {
    apiKey: "AIzaSyBCXb1_n8FRUoiM2vlvI2mm4L0cuwU56Ug",
    authDomain: "malefiz-336214.firebaseapp.com",
    projectId: "malefiz-336214",
    storageBucket: "malefiz-336214.appspot.com",
    messagingSenderId: "886182434882",
    appId: "1:886182434882:web:82e02b7c3b28281ad735db"
};

firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .use(gAuthPlugin, gAuthOptions)
    .mount('#app')
