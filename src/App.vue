<template>
  <div>
    <NewMovies />
    <Movies />
    <DeleteMovies />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Movies from "./components/Movies.vue";
import NewMovies from "./components/NewMovies.vue";
import DeleteMovies from "./components/DeletedMovies.vue";

export default {
  name: "App",
  components: {
    Movies,
    NewMovies,
    DeleteMovies,
  },
  computed: {
    ...mapGetters(["getMovies"]),
  },
};
</script>

<style>
#app {
  font-family: nunitobold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  border-bottom: 2px solid #2c3e50c5;
  font-size: 22px;
  line-height: 5px;
  text-align: left;
  margin-right: 30%;
  margin-left: 2%;
  margin-top: 4%;
}

@font-face {
  font-family: "nunitobold";
  src: url("./assets/nunito-bold-webfont.woff2") format("woff2"),
    url("./assets/nunito-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
