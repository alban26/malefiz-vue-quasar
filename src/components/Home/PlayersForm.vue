<template>
    <div class="col-xs-12 col-sm-6 col-md-4">
      <q-card dark>
        <div id="form">
          <h2>Bitte Spieler eintragen!</h2>
          <div class="input">
            <div class="inputBox">
              <label>Spieler 1</label>
              <input id="player_1" v-model="player_1" class="input" type="text" name="player_1"/>
            </div>
            <div class="inputBox">
              <label>Spieler 2</label>
              <input id="player_2" v-model="player_2" class="input" type="text" name="player_2"/>
            </div>
            <div class="inputBox">
              <label>Spieler 3</label>
              <input id="player_3" v-model="player_3" class="input" type="text" name="player_3"/>
            </div>
            <div class="inputBox">
              <label>Spieler 4</label>
              <input id="player_4" v-model="player_4" class="input" type="text" name="player_4"/>
            </div>
            <div class="inputBox">
              <router-link style="text-decoration: none; color: #E55A00" :to="{name:'Gameboard'}">
                <input class="input text-center my-4" type="button"
                       @click="postPlayers()" value="Spiel starten!"></router-link>
            </div>
          </div>
        </div>
      </q-card>
    </div>
</template>

<script>
import { WebSocketMixin } from '../../mixins/webSocketMixin';

export default {
  data() {
    return {
      player_1: '',
      player_2: '',
      player_3: '',
      player_4: '',
    };
  },
  mixins: [WebSocketMixin],
  name: 'Home',
  methods: {
    postPlayers() {
      const formData = {
        player_1: this.player_1,
        player_2: this.player_2,
        player_3: this.player_3,
        player_4: this.player_4,
      };
      this.sendMessage(formData);
      this.updateStatement();
    },
  },
};
</script>

<style>
#form {
  padding: 5vh 2vw;
}

h2 {
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
