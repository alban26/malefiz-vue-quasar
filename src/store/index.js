import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    controller: {},
    websocket: Object,
    serverConnection: Boolean,
    signedIn: false,
  },
  getters: {
    GET_CONTROLLER(state) {
      return state.controller;
    },
    GET_WEBSOCKET(state) {
      return state.websocket;
    },
    GET_SERVERCONNECTION(state) {
      return state.serverConnection;
    },
    GET_SIGNEDIN(state) {
      return state.signedIn;
    }
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
    SET_SERVERCONNECTION(state, newServerConnection) {
      state.serverConnection = newServerConnection;
    },
    SET_SIGNEDIN(state, newSignedIn) {
      state.signedIn = newSignedIn;
    }
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
const server ="localhost:9000"
//const server = "malefiz-at-htwg.herokuapp.com"
const websocket = new WebSocket("ws://" + server + "/websocket");
store.commit('SET_WEBSOCKET', websocket);
websocket.onopen = (event) => {
  console.log(event);
  console.log('Successfully connected to WebSocket');
  store.commit('SET_SERVERCONNECTION', true);
  websocket.send('connect');
  store.commit('SET_CONTROLLER', event);
};

websocket.onclose = () => {
  console.log('Connection with Websocket Closed!');
};

websocket.onerror = (error) => {
  store.commit('SET_SERVERCONNECTION', false);
  console.log(error);
};

websocket.onmessage = (event) => {
  console.log(event);
  store.commit('SET_CONTROLLER', event);
};

export default store;
