<template>
  <div>
    <div class="title">
      <h2>Search By Movie Title</h2>
    </div>
    <div class="search">
      <input
        v-model="title"
        type="text"
        placeholder="Title"
        id="title"
        name="Title"
      />
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
    <div v-if="getStatus">
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
.search {
  text-align: left;
}
input {
  margin: 3%;
  padding: 0;
  width: 30%;
  border: none;
  border-bottom: 2px solid #2c3e50c5;
  color: #2c3e50c5;
  font-size: 20px;
}

input:focus {
  outline: none;
}
.loader {
  margin-left: 50%;
}
button {
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
</style>