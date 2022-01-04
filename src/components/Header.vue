<template>
  <div class="q-pa-md">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-grey-9 text-white shadow-2">
        <q-btn flat label="Malefiz"/>
        <q-space/>
        <q-tabs v-model="tab" shrink>
          <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'Home'}">
            <q-tab name="home" label="Home"/>
          </router-link>
          <router-link style="text-decoration: none; color: #c7c7c7" :to="{name:'About'}">
            <q-tab name="about" label="About"/>
          </router-link>
          <router-link v-if="!this.GET_SIGNEDIN" style="text-decoration: none; color: #E55A00" :to="{name:'Login'}">
            <q-tab name="login" label="Login"/>
          </router-link>
          <router-link v-else style="text-decoration: none; color: #E55A00" :to="{name:'Login'}">
            <q-tab @click="logout" name="logout" label="Logout"/>
          </router-link>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
import {WebSocketMixin} from "../mixins/webSocketMixin";
import { getAuth, signOut } from "firebase/auth";

export default {
  mixins:[WebSocketMixin],
  methods:{
    async logout() {
      const auth = getAuth();
        signOut(auth).then(() => {
          console.log(auth);
          this.SET_SIGNEDIN(false);
          this.$router.push('Login');
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    // async logout() {
    //   const result = await this.$gAuth.signOut();
    //   this.SET_SIGNEDIN(false);
    //   await this.$router.push('Login')
    //   console.log(`result`, result);
    // },
}
</script>
