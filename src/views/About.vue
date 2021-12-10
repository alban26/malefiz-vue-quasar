<template>
    <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="100vh"
    >
      <q-carousel-slide name="1" img-src="../assets/images/malefiz-1.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" img-src="../assets/images/malefiz-2.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="../assets/images/malefiz-3.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" img-src="../assets/images/malefiz-4.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="5" img-src="../assets/images/malefiz-5.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="6" img-src="../assets/images/malefiz-6.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="7" img-src="../assets/images/malefiz-7.png">
        <div class="absolute-right custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    return {
      slide: ref('1'),
      autoplay: ref(true)
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: right
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

</style>
