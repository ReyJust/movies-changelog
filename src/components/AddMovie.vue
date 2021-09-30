<template>
  <div>
    <h1>Form</h1>
    <label for="title">Movie Title</label>
    <input v-model="title" type="text" id="title" name="Title" />
    <button v-if="!loading" @click="callImdb(title)">Search</button>
    <bounce-loader v-else>
      <!-- :loading="loading"
      :color="'gray'"
      :size="'50px'" -->
    </bounce-loader>
    <div v-if="getStatus">
      <h4>Select your film</h4>
      <div class="movie-list">
        <div v-for="(movie, index) in getSearchedMovie" :key="index">
          <SmallMovieCard
            :title="movie.title"
            :image="movie.image"
            :year="movie.year"
            @click="addMovie(movie)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import SmallMovieCard from "./SmallMovieCard.vue";

export default {
  name: "AddMovie",
  components: {
    BounceLoader,
    SmallMovieCard,
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
    ...mapActions(["searchMovie", "setMovie", "setMovieInDb"]),

    callImdb(title) {
      this.loading = true;
      this.searchMovie(title);
    },

    addMovie(movie) {
      this.setMovieInDb(movie);
      this.$router.push({ name: "Library" });
    },
  },
};
</script>

<style>
</style>