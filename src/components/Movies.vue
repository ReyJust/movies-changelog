<template>
  <div>
    <div class="title">
      <h2>Movies</h2>
    </div>
    <div v-if="!getStatus('movies')" class="movie-list">
      <div v-for="(movie, index) in getMovies" :key="index">
        {{ movie }}
        <MovieCard
          :id="movie.movie_id"
          :title="movie.title"
          :image="movie.image"
          :year="movie.year"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieCard from "./MovieCard.vue";
// import { dbCall } from "../wrapper/dbcall.js";

export default {
  name: "Movies",

  components: {
    MovieCard,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getMovies", "getStatus"]),
  },
  methods: {
    ...mapActions(["fetchMovies"]),
    // callImdb() {
    //   this.$store.dispatch("setMovies");
    // },
    fetchMovies() {
      this.$store.dispatch("fetchMovies");
    },
  },
  async mounted() {
    this.fetchMovies();
    //await this.dbCall();
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