<template>
  <div>
    <NewMovies />
    <Movies />
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";
import NewMovies from "../components/NewMovies.vue";

// import DeleteMovies from "../components/DeletedMovies.vue";

export default {
  components: {
    Movies,
    NewMovies,
    // DeleteMovies,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>