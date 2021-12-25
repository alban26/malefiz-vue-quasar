import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'
import gAuthPlugin from 'vue3-google-oauth2';

let gauthClientId = "374353486318-s144ka4017iu66j1dsveb1kgpp5dsa7c.apps.googleusercontent.com";

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .use(gAuthPlugin,
        {
            clientId: gauthClientId,
            scope: 'email',
            prompt: 'consent',
            fetch_basic_profile: false })
    .mount('#app')
