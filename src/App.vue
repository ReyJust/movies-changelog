<template>
  <div>
    <div id="nav">
      <router-link class="nav-item" to="/">Library</router-link> |
      <router-link class="nav-item" to="/AddMovie">Add Movie</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    // Auth,
  },

  computed: {
    ...mapGetters(["getMovies"]),
  },
};
</script>

<style>
.nav-item {
  text-decoration: none;
  color: #2c3e50;
}
#app {
  font-family: nunitobold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.changelog {
  display: flex;
  float: right;
  width: 20%;
  height: 500px;
  border-radius: 10%;
  border: 2px solid #2c3e50c5;
}

.title {
  border-bottom: 2px solid #2c3e50c5;
  font-size: 22px;
  line-height: 5px;
  text-align: left;
  margin: 5%;
  margin-right: 30%;
  margin-left: 2%;
}

@font-face {
  font-family: "nunitobold";
  src: url("./assets/nunito-bold-webfont.woff2") format("woff2"),
    url("./assets/nunito-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
