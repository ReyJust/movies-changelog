<template>
  <div id="login">
    <h1 class="title">Logging In</h1>
    <div id="login-container">
      <div v-if="loading">
        <pulse-loader :color="'#2b3951'" :size="'50px'"></pulse-loader>
        <p>Logging you in...</p>
      </div>
      <div v-else>
        <input
          class="login-input"
          type="text"
          name="username"
          v-model="input.username"
          placeholder="Username"
          @click="resetError"
        />
        <input
          class="login-input"
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
          @click="resetError"
        />
        <br />
        <p v-if="error != ''" class="error">{{ error }}</p>
        <br />
        <button type="button" v-on:click="login()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "Login",

  components: {
    PulseLoader,
  },
  data() {
    return {
      loading: false,
      error: "",
      input: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["fetchLogin"]),
    resetError() {
      this.error = "";
    },
    async login() {
      if (this.input.username != "" && this.input.password != "") {
        this.loading = true;
        const response = await this.$store.dispatch("fetchLogin", {
          username: this.input.username,
          password: this.input.password,
        });
        if (response === true) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Library" });
        } else {
          this.loading = false;
          this.error = response;
        }
      } else {
        this.error = "A username and password must be present";
      }
    },
  },
};
</script>

<style>
#login {
  width: 45%;
  text-align: center;
  margin: 0 auto;
  min-height: 500px;
}
#login-container {
  border-radius: 15px;

  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
}
.login-input {
  margin: 5%;
  margin-top: 8%;
  width: 60%;
  padding: 0;
  border: none;
  border-bottom: 2px solid #2b3951;
  color: #2b3951;
  font-size: 20px;
  background-color: #eeeeee;
}

.login-input:focus {
  outline: none;
}

.error {
  width: 20%;
  margin: 0 auto;
  padding: 10px;
  padding-left: 55px;
  padding-right: 55px;
  border: 1px solid #e53935;
  background-color: #ffcdd2;
  color: #e53935;
}
</style>