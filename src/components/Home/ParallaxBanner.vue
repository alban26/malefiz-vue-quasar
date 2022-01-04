<template>
  <div class="parallax-image">
    <div class="malefizHeader">
      <h1>Malefiz</h1>
    </div>
  </div>
</template>

<script>
import {WebSocketMixin} from "../../mixins/webSocketMixin";
export default {
  name: 'Home',
  mixins: [WebSocketMixin],
};
</script>

<style>
.parallax-image {
  background-image: url('../../assets/images/malefiz-banner.png');
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.malefizHeader {
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  transform-style: inherit;
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  font-size: xxx-large;
}

.malefizHeader h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(2px);
  color: #E55A00;
  border: 3px solid #f1f1f1;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  padding: 20px 20px;
}

</style>
