<template>
  <q-page-container>
    <div class="fit row wrap justify-around items-center content-center" style="min-height: 100vh">
      <RulesCard/>
      <PlayersForm/>
    </div>
  </q-page-container>
</template>

<script>
import RulesCard from "./RulesCard";
import PlayersForm from "./PlayersForm";

export default {
  name: 'Home',
  components: {
    RulesCard,
    PlayersForm
  },
};
</script>
