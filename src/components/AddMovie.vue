<template>
  <div>
    <h1>Form</h1>
    <label for="title">Movie Title</label>
    <input v-model="title" type="text" id="title" name="Title" />
    <button v-if="!loading" @click="callImdb(title)">Search</button>
    <bounce-loader
      v-else
      :loading="loading"
      :color="color"
      :size="size"
    ></bounce-loader>
    <div v-if="getStatus" class="result">
      <h4>Is this the film you want to add?</h4>
      <MovieCard
        :title="getSearchedMovie.title"
        :image="getSearchedMovie.image"
        :year="getSearchedMovie.year"
        :actors="getSearchedMovie.actors"
      />
      <button @click="addMovie">Add Movie</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import MovieCard from "./MovieCard.vue";

export default {
  name: "AddMovie",
  components: {
    BounceLoader,
    MovieCard,
  },

  data() {
    return {
      title: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getSearchedMovie", "getStatus"]),
  },
  methods: {
    ...mapActions(["searchMovie", "setMovie"]),

    callImdb(title) {
      this.loading = true;
      this.searchMovie(title);
    },

    addMovie() {
      this.setMovie();
      this.$router.push({ name: "Library" });
    },
  },
};
</script>

<style>
</style>