<template>
  <div>
    <div class="title">
      <h2>Movies</h2>
    </div>
    <div class="movie-list">
      <div v-for="(movie, index) in getMovies" :key="index">
        <MovieCard
          :title="movie.title"
          :image="movie.image"
          :year="movie.year"
          :actors="movie.actors"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieCard from "./MovieCard.vue";
import { dbCall } from "../wrapper/dbcall.js";

export default {
  name: "Movies",

  components: {
    MovieCard,
  },

  computed: {
    ...mapGetters(["getMovies"]),
  },
  methods: {
    ...mapActions(["setMovies"]),
    callImdb() {
      this.$store.dispatch("setMovies");
    },
  },
  async mounted() {
    await this.dbCall();
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