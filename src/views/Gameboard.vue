<template>
  <q-page-container v-if="this.GET_SERVERCONNECTION" class="fit row wrap justify-around items-center content-center">
      <div class="col-xs-12 col-md-6 col-lg-6">
        <Board/>
      </div>
      <div class="col-xs-12 col-md-3 col-lg-3">
        <Infobox/>
      </div>
  </q-page-container>
  <q-page-container v-else class="fit row wrap justify-around items-center content-center">
    <div>
      <h2>Dieser Dienst steht aktuell nicht zur Verfügung</h2>
    </div>
  </q-page-container>
</template>

<script>
import Board from '../components/Gameboard/Board';
import Infobox from '../components/Gameboard/Infobox';
import {WebSocketMixin} from "../mixins/webSocketMixin";

export default {
  name: 'Home',
  mixins: [WebSocketMixin],
  components: {
    Board, Infobox,
  },
  methods: {
  },
};
</script>
