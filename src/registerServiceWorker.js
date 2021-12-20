/* eslint-disable no-console */

import { register } from 'register-service-worker'
import store from "./store";

// if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      Notification.requestPermission(function () {
        const options = {
          body: "Du bist offline. Spielen geht erst wieder wenn du online bist.",
          icon: "./img/malefiz-1.53933058.png",
          image: "./img/malefiz-1.53933058.png"
        };
        new Notification('Hallo', options);
      })
      store.commit('SET_SERVERCONNECTION', false);
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }

  })



// }
