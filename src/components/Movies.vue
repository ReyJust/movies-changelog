<template>
  <div>
    <div class="title">
      <h2>Movies</h2>
    </div>
    <div v-if="!getStatus" class="movie-list">
      <div v-for="(movie, index) in getMovies" :key="index">
        <MovieCard
          :title="movie.title"
          :image="movie.image"
          :year="movie.year"
          :actors="movie.actors"
          :synopsis="movie.synopsis"
          :titleType="movie.titleType"
          @click="deleteMovie(movie.movie_id)"
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
    ...mapActions(["fetchMovies", "deleteMovie"]),
    // callImdb() {
    //   this.$store.dispatch("setMovies");
    // },
    fetchMovies() {
      this.$store.dispatch("fetchMovies");
    },
    deleteMovie(id) {
      var confirmation = confirm("Do you want to delete this film?");
      if (confirmation) {
        this.deleteMovieDB(id);
        alert("Deleted!");
      } else {
        alert("Not deleted!");
      }
    },
  },
  async mounted() {
    this.fetchMovies();
  },
};
</script>

<style>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  float: left;
  margin-bottom: 75px;
}
</style>