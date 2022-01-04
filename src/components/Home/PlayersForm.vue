<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <q-card dark>
      <div id="form">
        <h4>Bitte Spielername eintragen!</h4>
        <div class="input">
          <div class="inputBox">
            <label>Spielername</label>
            <input id="player_1" v-model="player_name" class="input" type="text" name="player_1"/>
          </div>
          <div class="inputBox">
            <input class="input text-center my-4" type="button" @click="postPlayers()" value="Spieler hinzufügen!">
          </div>
          <q-list bordered class="rounded-borders">
            <q-item-label header>Spieler</q-item-label>

            <q-item v-if="currentPlayers[0]" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>

                  <img src="../../assets/images/malefiz-1.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">{{ currentPlayers[0] }}</q-item-label>
              </q-item-section>

            </q-item>

            <q-separator inset="item" />

            <q-item v-if="currentPlayers[1]" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="../../assets/images/malefiz-2.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">{{ currentPlayers[1] }}</q-item-label>
              </q-item-section>

            </q-item>
            <q-item v-if="currentPlayers[2]" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="../../assets/images/malefiz-3.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">{{ currentPlayers[2] }}</q-item-label>
              </q-item-section>

            </q-item>
            <q-item v-if="currentPlayers[3]" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="../../assets/images/malefiz-4.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">{{ currentPlayers[3] }}</q-item-label>
              </q-item-section>

            </q-item>
          </q-list>
          <div class="inputBox">
          <router-link v-if="currentPlayers.length > 1" style="text-decoration: none; color: #E55A00" :to="{ name:'Gameboard' }">
            <input class="input text-center my-4" type="button" @click="startGame()" value="Spiel starten!">
          </router-link>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import {WebSocketMixin} from '../../mixins/webSocketMixin';

export default {
  data() {
    return {
      player_name: '',
    };
  },
  mixins: [WebSocketMixin],
  name: 'Home',
  methods: {
    postPlayers() {
      const formData = {
        player_name: this.player_name,
      };
      this.sendMessage(formData);
      this.player_name = ''
    },
    startGame() {
      const startGame = {
        start: 'start',
      };
      this.sendMessage(startGame)
    }
  },
  computed: {
    currentPlayers() {
      return this.GET_CONTROLLER.currentPlayers
    },
  }
};
</script>

<style>
#form {
  padding: 7rem 2vw;
}

h4 {
  color: #c7c7c7;
  align-content: center;
}

.input {
  text-align: left;
  margin-top: 1rem;

}

.input .inputBox {
  margin-top: 1rem;
}

.input .inputBox label {
  display: block;
  color: #c7c7c7;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.input .inputBox input {
  width: 100%;
  background: #3A3A3C;
  border: none;
  outline: none;
  border-radius: 2rem;
  padding: 0.1rem 0.1rem;
  color: #fff;
  font-size: 1rem;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
  inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}

.input .inputBox input[type="submit"] {
  color: #E55A00;
  margin-top: 10px;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.05),
  2px 2px 6px rgba(0, 0, 0, 0.05);
}

.input .inputBox input[type="submit"]:active {
  color: #E55A00;
  margin-top: 0.5rem;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.05),
  inset 2px 2px 6px rgba(0, 0, 0, 0.05);
}

</style>
