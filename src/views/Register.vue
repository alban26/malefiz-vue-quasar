<template>
  <div style="background: #3A3A3C">
    <RegisterComponent/>
  </div>
</template>

<script>
import RegisterComponent from '../components/Auth/RegisterComponent.vue';
import {WebSocketMixin} from "../mixins/webSocketMixin";

export default {
  name: 'Register',
  mixins: [WebSocketMixin],
  components: {
    RegisterComponent,
  },
};
</script>
