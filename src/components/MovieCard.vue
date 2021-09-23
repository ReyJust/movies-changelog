<template>
  <div class="movie-card">
    <pulse-loader
      v-if="!imageloaded"
      :loading="loading"
      :color="color"
      :size="size"
    ></pulse-loader>
    <img class="movie-card-image" :src="image" :alt="title" @load="imageLoad" />
    <h3>{{ title }}</h3>
    <h4>{{ year }}</h4>
    <!-- <h5>{{ actors }}</h5> -->
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
  },
  components: {
    PulseLoader,
  },
  data() {
    return {
      imageloaded: false,
    };
  },
  methods: {
    imageLoad() {
      this.imageloaded = true;
    },
  },
};
</script>

<style>
.movie-card {
  width: 300px;
  height: 500px;
  margin: 10px;
  border-radius: 10px;

  background-color: #f1f1f1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  transition: 0.5s all ease;
  cursor: pointer;
}

.movie-card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.movie-card-image {
  object-fit: cover;
  height: 80%;
  width: 100%;
  border-radius: 3%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
}
</style>