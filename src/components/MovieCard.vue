<template>
  <div>
    <div class="movie-card">
      <div class="overlay">
        <p>Synopsis</p>
        <p>{{ synopsis }}</p>
      </div>
      <pulse-loader
        v-if="!imageloaded"
        :loading="loading"
        :color="'gray'"
        :size="'50px'"
      ></pulse-loader>
      <img
        class="movie-card-image"
        :src="image"
        :alt="title"
        @load="imageLoad"
      />
      <h3>{{ title }}</h3>
      <p>{{ year }}</p>
      <p>{{ titleType }}</p>
      <h5>{{ actors.join(" | ") }}</h5>
    </div>
    <!-- <div v-for="actor in actors" :key="actor">
      <p>{{ actor }}</p>
    </div> -->
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "MovieCard",
  props: {
    image: String,
    title: String,
    year: Number,
    actors: Object,
    synopsis: String,
    titleType: String,
  },
  components: {
    PulseLoader,
  },
  data() {
    return {
      imageloaded: false,
    };
  },
  computed: {},
  methods: {
    imageLoad() {
      this.imageloaded = true;
    },
  },
};
</script>

<style>
.overlay {
  display: flex;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  opacity: 0;
  background-color: #070707;
  color: white;
  position: absolute;
  justify-content: center;
  align-content: center;
}

.movie-card:hover .overlay {
  transition: 0.3s all ease;
  opacity: 0.7;
}

.movie-card:hover .overlay-text {
  color: white;
  opacity: 1;
}
.movie-card {
  line-height: 1;
  width: 300px;
  height: 550px;
  margin-top: 30px;
  margin: 20px;
  border-radius: 10px;

  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  cursor: pointer;
}

.movie-card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: black;
}

.movie-card-image {
  z-index: 0;
  object-fit: cover;
  height: 70%;
  width: 100%;
  border-radius: 3%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
}
</style>