<template>
  <div class="square4Info">
    <div class="col">
      <p id="statement" class="statementText">{{ updateStatement }}</p>
    </div>
    <div class="col">
      <div class="box justify-center items-center">
        <button gameInput="200" class="button-5" @click="process">
          ROLL!
        </button>
        <div id="dice-box1"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
import { WebSocketMixin } from '../../mixins/webSocketMixin';

export default {
  data() {
    return {
      controller: {},
    };
  },
  mixins: [WebSocketMixin],
  name: 'Home',
  methods: {
    rollDiceWithoutValues() {
      const element = document.getElementById('dice-box1');
      const numberOfDice = 4;
      const options = {
        element, // element to display the animated dice in.
        numberOfDice, // number of dice to use
        callback: this.response,
      };
      // eslint-disable-next-line no-undef
      rollADie(options);
    },
    response(res) {
      // returns an array of the values from the dice
      console.log(res);
    },
    process() {
      this.rollDiceWithoutValues();
      this.sendMessage({ data: '200' });
    },
  },
  computed: {
    updateStatement() {
      return this.GET_CONTROLLER.statement;
    },
  },
  created() {
    // this.updateStatement();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #3A3A3C;
}

canvas {
  background: #E55A00;
  width: 10px;
  height: 10px;
}

.square4Info {
  /*width: 33vw;*/
  /*height: 33vw;*/
  aspect-ratio: 3/3;
  margin: auto;

}

input {
  max-width: 100%;
  max-height: 100%;
  text-align: center;
}

.statementText {
  font-size: 2vw;
  font-family: "Comic Sans MS", serif;
  color: #E55A00;
}

h1 {
  text-align: center;
  font-size: 3vw;
  font-family: "Comic Sans MS", serif;
  color: #E55A00;
}

.box {
  width: 500px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin: 5px;
  max-width: 100%;
  max-height: 100%;
  /*min-width: 100%;*/
  /*min-height: 100%;*/

}

#dice-box1 {
  height: 200px;
  max-width: 100%;
  max-height: 100%;
  /*min-width: 100%;*/
  /*min-height: 100%;*/
  width: 50px;
}

#dice-box2 {
  height: 200px;
}

.roll {
  height: 80px;
  width: 200px;
  border-radius: 10px;
  background-color: green;
  color: white;
  font-size: 20px;
  margin: 10px 0px;
  max-width: 100%;
  max-height: 100%;
  /*min-width: 100%;*/
  /*min-height: 100%;*/
}

/* CSS */
.button-5 {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;

  max-width: 100%;
  max-height: 100%;
  /*min-width: 100%;*/
  /*min-height: 100%;*/
  height: 52px;
}

.button-5:hover,
.button-5:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5:hover {
  transform: translateY(-1px);
}

.button-5:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}

.modified-cell {
  background: transparent;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
}
</style>
