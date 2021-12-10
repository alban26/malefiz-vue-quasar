<template>
  <div style="background: #3A3A3C">
    <ParallaxBanner/>
    <Body/>
  </div>
</template>

<script>
import ParallaxBanner from '../components/Home/ParallaxBanner.vue';
import Body from '../components/Home/Body.vue';

export default {
  name: 'Home',
  components: {
    ParallaxBanner,
    Body,
  },
};
</script>
