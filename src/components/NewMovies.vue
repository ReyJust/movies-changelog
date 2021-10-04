<template>
  <div>
    <div class="title">
      <h2>Recently Added</h2>
    </div>
    <div v-if="!getStatus" class="movie-list-border">
      <div class="movie-list-content">
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
.movie-list-border {
  justify-content: center;
  margin: 10px;
  padding: 10px;
  background: #dde3ed;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 12px;
}
.movie-list-content {
  padding: 30px;
  justify-content: flex-start;
  background: #eeeeee;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
    inset 1px 1px 2px rgba(174, 174, 192, 0.2);
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
}
</style>