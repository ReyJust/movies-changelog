<template>
  <div class="small-movie-card">
    <pulse-loader v-if="!imageloaded">
      <!-- :loading="loading"
      :color="'gray'"
      :size="'50px'" -->
    </pulse-loader>
    <img
      class="small-movie-card-image"
      :src="image"
      :alt="title"
      @load="imageLoad"
    />
    <h4>{{ title }} {{ year }}</h4>
    <!-- <h5>{{ actors }}</h5> -->
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "SmallMovieCard",
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
.small-movie-card {
  width: 150px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;

  background-color: #f1f1f1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  transition: 0.5s all ease;
  cursor: pointer;
}

.small-movie-card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.small-movie-card-image {
  object-fit: cover;
  height: 80%;
  width: 100%;
  border-radius: 3%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
}
</style>