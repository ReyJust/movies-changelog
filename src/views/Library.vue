<template>
  <div>
    <NewMovies />
    <Movies />
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";
import NewMovies from "../components/NewMovies.vue";

export default {
  components: {
    Movies,
    NewMovies,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>