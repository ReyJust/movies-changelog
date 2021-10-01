<template>
  <div id="login">
    <h1>Login</h1>
    <br />
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username"
      @click="resetError"
    /><br />
    <input
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
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
        const response = await this.$store.dispatch("fetchLogin", {
          username: this.input.username,
          password: this.input.password,
        });
        if (response === true) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "Library" });
        } else {
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
  text-align: center;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 15px;
  min-height: 500px;

  border: 5px solid gray;
  width: 45%;
}
#login > input {
  margin-top: 5%;
  width: 60%;
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