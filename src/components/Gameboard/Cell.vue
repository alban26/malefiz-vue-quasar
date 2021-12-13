<template>
  <div :gameinput="gameinput" :class="classTest" @click="process()"></div>
</template>

<script>
import { WebSocketMixin } from '../../mixins/webSocketMixin';

export default {
  name: 'Home',
  mixins: [WebSocketMixin],
  props: {
    gameinput: String,
    classTest: String,
  },
  methods: {
    process() {
      console.log(this.gameinput);
      this.sendMessage({ data: this.gameinput });
    },
  },
};
</script>
