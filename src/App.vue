<template>
  <div>
    <NewMovies />
    <Movies />
    <DeleteMovies />
    <div class="changelog">
      <div class="title">
        <h3>ChangeLog</h3>
      </div>
    </div>
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
