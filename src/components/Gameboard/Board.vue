<template>
    <div class="square">
      <!--17-->
      <div v-for="n in 8" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="131" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(131)"></component>
      </div>
      <div v-for="n in 8" :key="n"
           class="empty items-center content-center justify-center flex"></div>

      <!--16-->
      <div v-for="n in range(114, 131)" :key="n" :id=n
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>

      <!-- 15 -->
      <div id="112" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(112)"></component>
      </div>
      <div v-for="n in 15" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="113" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(113)"></component>
      </div>

      <!-- 14 -->
      <div v-for="n in range (95,112)" :key="n" :id=n
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>

      <!-- 13 -->
      <div v-for="n in 8" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="94" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(94)"></component>
      </div>
      <div v-for="n in 8" :key="n"
           class="empty items-center content-center justify-center flex"></div>

      <!-- 12 -->
      <div v-for="n in 6" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div v-for="n in range (89, 94)" :key="n" :id=n
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>
      <div v-for="n in 6" :key="n"
           class="empty items-center content-center justify-center flex"></div>

      <!-- 11 -->
      <div v-for="n in 6" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="87" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(87)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="88" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(88)"></component>
      </div>
      <div v-for="n in 6" :key="n"
           class="empty items-center content-center justify-center flex"></div>

      <!-- 10 -->
      <div v-for="n in 4" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div v-for="n in range(78, 87)" :key="n" :id=n
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>
      <div v-for="n in 4" :key="n"
           class="empty items-center content-center justify-center flex"></div>

      <!-- 9 -->
      <div v-for="n in 4" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="76"
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(76)"></component>
      </div>
      <div v-for="n in 7" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="77"
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(77)"></component>
      </div>
      <div v-for="n in 4" :key="n"
           class="empty items-center content-center justify-center flex"></div>

      <!-- 8 -->
      <div class="empty items-center content-center justify-center flex"></div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div v-for="n in range(63, 76)" :key="n" :id=n
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div class="empty items-center content-center justify-center flex"></div>

      <!-- 11 -->
      <div class="empty items-center content-center justify-center flex"></div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="59" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(59)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="60" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(60)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="61" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(61)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="62" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(62)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div class="empty items-center content-center justify-center flex"></div>

      <!-- 6 -->
      <div v-for="n in range(42, 59)" :key="n" :id="n"
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>

      <!-- 5 -->
      <div id="37" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(37)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="38" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(38)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="39" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(39)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="40" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(40)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="41" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(41)"></component>
      </div>

      <!-- 4 -->
      <div v-for="n in range(20, 37)" :id=n :key="n"
           class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(n)"></component>
      </div>

      <!-- 3 -->
      <div class="empty items-center content-center justify-center flex"></div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="4" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(4)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="9" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(9)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="14" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(14)"></component>
      </div>
      <div v-for="n in 3" :key="n"
           class="empty items-center content-center justify-center flex"></div>
      <div id="19" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(19)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div class="empty items-center content-center justify-center flex"></div>

      <!-- 2 -->

      <div class="empty items-center content-center justify-center flex"></div>
      <div id="2" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(2)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="3" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(3)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="7" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(7)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="8" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(8)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="12" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(12)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="13" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(13)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="17" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(17)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="18" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(18)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>

      <!-- 1 -->
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="0" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(0)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="1" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(1)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="5" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(5)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="6" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(6)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="10" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(10)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="11" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(11)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="15" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(15)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
      <div id="16" class="field items-center content-center justify-center flex">
        <component :is="component" v-bind="properties(16)"></component>
      </div>
      <div class="empty items-center content-center justify-center flex"></div>
    </div>
</template>

<script>
import { WebSocketMixin } from '../../mixins/webSocketMixin';
import Cell from './Cell.vue';

export default {
  data() {
    return {
      controller: {},
      component: Cell,
    };
  },
  components: {
    Cell,
  },
  mixins: [WebSocketMixin],
  methods: {
    range(start, stop) {
      return new Array(stop - start).fill(start)
          .map((n, i) => n + i);
    },
  },
  computed: {
    properties() {
      return (k) => {
        const { playerNumber } = this.GET_CONTROLLER.cells[k];
        const { figureNumber } = this.GET_CONTROLLER.cells[k];
        const { hasWall } = this.GET_CONTROLLER.cells[k];
        const { possibleCell } = this.GET_CONTROLLER.cells[k];
        const { gameState } = this.GET_CONTROLLER;
        const { cellNumber } = this.GET_CONTROLLER.cells[k];

        if (playerNumber !== 0 && !hasWall) {
          if (possibleCell) {
            return {
              gameinput: `"${cellNumber}"`,
              class: `figure-${playerNumber}-circle`,
            };
          }
          return {
            gameinput: `${playerNumber} ${figureNumber}`,
            class: `figure-${playerNumber}`,
          };
        }
        if (hasWall) {
          if (possibleCell) {
            return {
              gameinput: `${cellNumber}`,
              class: 'wall-circle',
            };
          }
          return {
            gameinput: `${cellNumber}`,
            class: 'wall',
          };
        }
        if (possibleCell) {
          return {
            gameinput: `${cellNumber}`,
            class: 'possible-cell',
          };
        }
        if (gameState === '5') {
          return {
            gameinput: `${cellNumber}`,
            class: 'possible-wall',
          };
        }
        return {
          gameinput: '',
          class: '',
        };
      };
    },
  },
  mounted() {
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

.square {
  border: 10px solid black;
  background: url('../../assets/images/malefiz-end.png') no-repeat;
  background-size: 100% 100%;
  margin: auto;
  aspect-ratio: 1/1;
}


.empty {
  background-size: 100%;
  height: 5.8824%;
  width: 5.8824%;
  max-height: 100vw;
  max-width: 100vw;
  float: left;
  padding: 0;
  margin: auto;
}

input {
  max-width: 100%;
  max-height: 100%;
  text-align: center;
}

.field {
  background: url('../../assets/images/cells/field.png') no-repeat;
  background-size: 100%;
  height: 5.8824%;
  width: 5.8824%;
  max-height: 100vw;
  max-width: 100vw;
  float: left;
  padding: 0;
  margin: auto;
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

.figure-1 {
  background: red;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
  box-shadow: inset 0 0 0.25em #000000;
}

.figure-2 {
  background: forestgreen;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
  box-shadow: inset 0 0 0.25em #000000;
}

.figure-3 {
  background: yellow;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
  box-shadow: inset 0 0 0.25em #000000;
}

.figure-4 {
  background: blue;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
  box-shadow: inset 0 0 0.25em #000000;
}

.possible-cell {
  border: solid #00dde5;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;

}

.possible-cell:hover {
  background: #00dde5;
}

.wall {
  background: white;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
}

.possible-wall {
  border: solid white;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
}

.possible-wall:hover {
  background: white;
}

.wall-circle {
  background-color: white;
  border: solid #00dde5;
  max-width: 80%;
  max-height: 80%;
  min-width: 80%;
  min-height: 80%;
  border-radius: 50%;
  text-align: center;
}

.wall-circle:hover {
  background-color: #00dde5;
}

.dice {
  max-width: 100%;
  max-height: 100%;
  /*min-width: 100%;*/
  /*min-height: 100%;*/
  width: 50px;
  height: 52px;
}

.block {
  display: flex;
  position: relative;
  justify-content: center;
}

.dice-count, .dice-count input {
  font-size: 20px;
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
