<template>
  <div>
    <div class="title">
      <h2>New Movies</h2>
    </div>
    <div v-if="!getStatus" class="movie-list">
      <div v-for="(movie, index) in getNewMovies" :key="index">
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

export default {
  name: "New Movies",

  components: {
    MovieCard,
  },

  computed: {
    ...mapGetters(["getNewMovies", "getStatus"]),
  },
  methods: {
    ...mapActions(["deleteMovieDB"]),

    deleteMovie(id) {
      //Delete Movie from the Database
      var confirmation = confirm("Do you want to delete this film?");
      if (confirmation) {
        //Action
        this.deleteMovieDB(id);
        alert("Deleted!");
      } else {
        alert("Not deleted!");
      }
    },
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