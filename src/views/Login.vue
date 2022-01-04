<template>
  <div style="background: #3A3A3C">
    <LoginComponent/>
  </div>
</template>

<script>
import LoginComponent from '../components/Auth/LoginComponent.vue';
import {WebSocketMixin} from "../mixins/webSocketMixin";

export default {
  name: 'Login',
  mixins: [WebSocketMixin],
  components: {
    LoginComponent,
  },
};
</script>
