<template>
  <div id="app">
    <div id="nav" v-if="authenticated">
      <div
        class="nav-container-item"
        :class="{ itemActive: isActive === 'library' }"
      >
        <div class="nav-item">
          <router-link
            :class="{ active: isActive === 'library' }"
            @click="isActive = 'library'"
            to="/"
          >
            Library</router-link
          >
        </div>
      </div>

      <div
        class="nav-container-item"
        :class="{ itemActive: isActive === 'add' }"
      >
        <div class="nav-item">
          <router-link
            :class="{ active: isActive === 'add' }"
            @click="isActive = 'add'"
            to="/AddMovie"
            >Add Movie</router-link
          >
        </div>
      </div>

      <div class="divider"></div>

      <div class="nav-container-item item-red">
        <div class="nav-item">
          <router-link class="red" to="/login" v-on:click="logout()" replace
            >Logout</router-link
          >
        </div>
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
      isActive: true,
      authenticated: true,
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
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(31, 30, 30);
  background-color: #f0f0f3;
  margin: 0;
  padding: 0;
}
/*NAVIGATION BAR*/
#nav {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0;
  height: 80px;
  width: 99%;
}
.nav-container-item {
  /*Layout*/
  min-width: 175px;
  margin: 10px;
  margin-left: 15px;
  margin-right: 45px;
  padding: 2px;
  max-height: 30px;
  /*Style*/
  background: #eeeeee;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 5px;
}
.nav-item {
  /*Layout*/
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  background-color: #eeeeee;
}
.nav-item > * {
  /*Style*/
  color: #2b3951;
  text-decoration: none;
  font-size: 25px;
}
/*Active nav item*/
.active {
  margin-left: auto;
  color: #745ff2 !important;
}
.itemActive {
  background: #745ff2;
}
/*Logout*/
.red {
  margin-left: auto;
  color: #a33d3d !important;
}
.item-red {
  margin-left: auto;
  margin-right: 0px;
  background: #a33d3d;
}

.divider {
  position: absolute;
  width: 98.5%;
  height: 8px;
  left: 15px;
  top: 70%;
  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 12px;
}

/* .changelog {
  display: flex;
  float: right;
  width: 20%;
  height: 500px;
  border-radius: 10%;
  border: 2px solid #05386b;
} */
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
