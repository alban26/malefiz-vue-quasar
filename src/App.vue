<template>
  <q-layout view="hhh lpr lff">
    <Header/>
    <q-page-container class="no-padding no-margin">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Header
  },
  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

