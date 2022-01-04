<template>
  <div class="parallax-image">
    <div class="malefizHeader">
      <div class="login">
        <div class="column q-pa-lg">
          <div class="row">
            <q-card square class="shadow-24" style="aspect-ratio: 4/5;">
              <q-card-section class="bg-yellow-10">
                <h4 class="text-h5 text-white q-my-md">Registrierung</h4>
              </q-card-section>
              <q-card-section>
                <q-form @submit.prevent="register" class="q-px-sm q-pt-xl q-pb-lg">
                  <q-input square clearable v-model="email" type="email" label="Email" model-value="">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input square clearable v-model="password" type="password" label="Password" model-value="">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-lg">
                <q-btn @click="register" unelevated size="lg" color="grey-7" class="full-width text-white" label="Sign Up" />
              </q-card-actions>
              <q-card-section class="text-center q-pa-sm">
                <p class="smallText text-grey-6">Zurück zum
                  <router-link style="text-decoration: none; color: #E55A00" :to="{name:'Login'}">
                    Login
                  </router-link>
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    register() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("here");
            this.$router.replace('Login');
          })
          .catch(error => (this.error = error));
    }
  },
  name: 'RegisterComponent',
}
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
.login {
  /*font-family: "Comic Sans MS", serif;*/
  font-family: "Roboto", "-apple-system", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  #filter: blur(2px);
  color: #E55A00;
  border: 3px solid #f1f1f1;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.8); /* Black w/opacity/see-through */
  padding: 20px 20px;
}
.login .smallText {
  font-size: 1rem;
  color: #3A3A3C;
  padding: 0;

}
</style>



