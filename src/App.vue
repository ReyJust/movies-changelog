<template>
  <div id="app">
    <div id="nav" v-if="authenticated">
      <router-link
        class="nav-container-item"
        :class="{ active: isActive === 'library' }"
        @click="isActive = 'library'"
        to="/"
      >
        <div class="nav-item">
          <div>Library</div>
        </div>
      </router-link>

      <router-link
        class="nav-container-item"
        :class="{ active: isActive === 'add' }"
        @click="isActive = 'add'"
        to="/AddMovie"
      >
        <div class="nav-item">
          <div>Add Movie</div>
        </div>
      </router-link>

      <router-link
        class="nav-container-item item-red"
        to="/login"
        v-on:click="logout()"
        replace
      >
        <div class="nav-item">
          <div class="red">Logout</div>
        </div>
      </router-link>
      <div class="divider"></div>
    </div>
    <div id="nav" v-else></div>
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
      isActive: "library",
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
  height: 100px;
  width: 99%;
}
.nav-container-item {
  text-decoration: none;
  font-size: 25px;
  color: #2b3951;

  /*Layout*/
  min-width: 175px;
  margin: 10px;
  margin-left: 15px;
  margin-right: 45px;
  padding: 3px;
  max-height: 45px;
  /*Style*/
  background: #eeeeee;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 5px;
}
.nav-item {
  padding-top: 7px;
  padding-bottom: 7px;
  /*Layout*/
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  background-color: #eeeeee;
}

/*Active nav item*/
.active {
  color: #745ff2 !important;
  background: #745ff2;
}
/*Logout*/
.red {
  color: #a33d3d !important;
}
.item-red {
  margin-right: 10px;
  margin-left: auto;
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
  color: #2b3951;
  justify-content: center;
  flex-direction: column;
  display: flex;
  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 5px;
  margin: 15px;
}

@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
</style>
