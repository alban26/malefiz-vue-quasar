import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    controller: {},
    websocket: Object,
  },
  getters: {
    GET_CONTROLLER(state) {
      return state.controller;
    },
    GET_WEBSOCKET(state) {
      return state.websocket;
    },
  },
  mutations: {
    SET_CONTROLLER(state, newController) {
      if (typeof newController.data === 'string') {
        state.controller = JSON.parse(newController.data);
      }
    },
    SET_WEBSOCKET(state, newWebsocket) {
      state.websocket = newWebsocket;
    },
  },
  actions: {
    SET_CONTROLLER_ASYNC(context, newController) {
      context.commit('SET_CONTROLLER', newController);
    },
    SET_WEBSOCKET_ASYNC(context, newWebsocket) {
      context.commit('SET_WEBSOCKET', newWebsocket);
    },
  },
  modules: {},

});

console.log('Starting Connection to WebSocket Server');
const websocket = new WebSocket('ws://localhost:9000/websocket');
store.commit('SET_WEBSOCKET', websocket);
websocket.onopen = (event) => {
  console.log(event);
  console.log('Successfully connected to WebSocket');
  websocket.send('connect');
  store.commit('SET_CONTROLLER', event);
};

websocket.onclose = () => {
  console.log('Connection with Websocket Closed!');
};

websocket.onerror = (error) => {
  console.log(error);
};

websocket.onmessage = (event) => {
  console.log(event);
  store.commit('SET_CONTROLLER', event);
};

export default store;
