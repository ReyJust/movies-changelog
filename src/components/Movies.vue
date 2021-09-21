<template>
  <div>
    <div class="title">
      <h2>Movies</h2>
    </div>
    <div class="movie-list">
      <div v-for="(movie, index) in getMovies" :key="index">
        <MovieCard :title="movie.title" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCard from "./MovieCard.vue";

export default {
  name: "Movies",

  components: {
    MovieCard,
  },

  computed: {
    ...mapGetters(["getMovies"]),
  },
};
</script>

<style>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  float: left;
}
</style>