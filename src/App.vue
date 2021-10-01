<template>
  <div id="app">
    <div id="nav">
      <div v-if="authenticated">
        <router-link class="nav-item" to="/">Library</router-link>
        <router-link class="nav-item" to="/AddMovie">Add Movie</router-link>
        <router-link class="nav-item" to="/login" v-on:click="logout()" replace
          >Logout</router-link
        >
      </div>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {
      authenticated: false,
    };
  },
  computed: {
    ...mapGetters(["getMovies"]),
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>
.square {
  height: 25px;
  width: 25px;
  background: rgb(241, 29, 40);
  background: linear-gradient(
    124deg,
    rgba(241, 29, 40, 1) 0%,
    rgba(254, 97, 44, 1) 78%,
    rgba(255, 161, 44, 1) 100%
  );
  border-radius: 2px;
  margin: 5px;
  margin-left: 25px;
}
#nav {
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 50px;
  margin: 0;
  align-items: center;
}
.nav-item {
  text-decoration: none;
  margin-left: 30px;
  margin-right: 25px;
  font-size: 25px;
  color: #ffffff;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(31, 30, 30);
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}

.changelog {
  display: flex;
  float: right;
  width: 20%;
  height: 500px;
  border-radius: 10%;
  border: 2px solid #05386b;
}
body {
  margin: 0px;
}

.title {
  border-bottom: 2px solid #2c3e50c5;
  font-size: 22px;
  line-height: 5px;
  text-align: left;
  margin: 4%;
  margin-bottom: 1%;
  margin-right: 30%;
  margin-left: 2%;
}

@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
</style>
