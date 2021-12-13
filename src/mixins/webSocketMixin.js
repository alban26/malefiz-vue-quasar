import { mapActions, mapGetters, mapMutations } from 'vuex';

export const WebSocketMixin = {
  methods: {
    sendMessage(message) {
      this.GET_WEBSOCKET.send(JSON.stringify(message));
    },
    ...mapMutations(['SET_CONTROLLER']),
    ...mapMutations(['SET_WEBSOCKET']),
    ...mapActions(['SET_CONTROLLER_ASYNC']),
    ...mapActions(['SET_WEBSOCKET_ASYNC']),

  },
  computed: {
    ...mapGetters(['GET_CONTROLLER']),
    ...mapGetters(['GET_WEBSOCKET']),
  },
};
