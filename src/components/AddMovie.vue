<template>
  <div>
    <div class="title">
      <h2>Search By Movie Title</h2>
    </div>
    <div class="search">
      <div class="search-content">
        <input
          class="search-input"
          v-model="title"
          type="text"
          placeholder="Title"
          id="title"
          name="Title"
        />
        <input type="radio" value="Movie" v-model="type" name="movie" /> Movie
        <input type="radio" value="TvShow" v-model="type" name="movie" /> TvShow
        <button :disabled="getIsSearching" @click="callImdb(title)">
          Search
        </button>

        <bounce-loader
          class="loader"
          v-if="getIsSearching"
          :color="'gray'"
          :size="'100px'"
        >
        </bounce-loader>
      </div>
    </div>
    <div v-if="getStatus" class="movie-list-border">
      <div class="movie-list-content">
        <div v-for="(movie, index) in getSearchedMovie" :key="index">
          <SmallMovieCard
            :title="movie.title"
            :image="movie.image"
            :year="movie.year"
            @click="addMovie(movie)"
          />
        </div>
      </div>
      {{ getSearchedMovie }}
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
      type: "",
    };
  },
  computed: {
    ...mapGetters(["getSearchedMovie", "getStatus", "getIsSearching"]),
  },
  methods: {
    ...mapActions(["searchMovie", "setMovie", "setMovieInDb"]),

    callImdb(title) {
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
.search-input {
  margin: 3%;
  padding: 0;
  width: 30%;
  border: none;
  border-bottom: 2px solid #2b3951;
  color: #2b3951;
  font-size: 20px;
  background-color: #eeeeee;
}

input:focus {
  outline: none;
}
.loader {
  margin-left: 50%;
}
button {
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5%;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  background: rgb(241, 29, 40);
  background: linear-gradient(
    124deg,
    rgba(241, 29, 40, 1) 0%,
    rgba(254, 97, 44, 1) 78%,
    rgba(255, 161, 44, 1) 100%
  );
}
.search {
  text-align: left;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  background: #dde3ed;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 12px;
}
.search-content {
  background: #eeeeee;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
    inset 1px 1px 2px rgba(174, 174, 192, 0.2);
  border-radius: 12px;
}
</style>