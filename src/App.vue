<template>
  <div>
    <Movies />
    <newMovies />
    <deleteMovies />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Movies } from "./components/Movies.vue";
import { newMovies } from "./components/NewMovies.vue";
import { deleteMovies } from "./components/DeletedMovies.vue";

export default {
  name: "App",
  components: {
    Movies,
    newMovies,
    deleteMovies,
  },
  computed: {
    ...mapGetters(["getMovies"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
