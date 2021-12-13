<template>
  <q-page-container class="fit row wrap justify-around items-center content-center">
      <div class="col-xs-12 col-md-6 col-lg-6">
        <Board/>
      </div>
      <div class="col-xs-12 col-md-3 col-lg-3">
        <Infobox/>
      </div>
  </q-page-container>
</template>

<script>
import Board from '../components/Gameboard/Board';
import Infobox from '../components/Gameboard/Infobox';

export default {
  name: 'Home',
  components: {
    Board, Infobox,
  },
  methods: {
  },
};
</script>
