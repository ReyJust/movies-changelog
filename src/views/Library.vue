<template>
  <div class="content">
    <div class="library-container">
      <NewMovies />
      <Movies />
    </div>
    <div class="changelog-container">
      <Changelog />
    </div>
  </div>
</template>

<script>
import Movies from "../components/Movies.vue";
import NewMovies from "../components/NewMovies.vue";
import Changelog from "../components/Changelog.vue";

export default {
  components: {
    Movies,
    NewMovies,
    Changelog,
  },
  data() {
    return {};
  },
};
</script>

<style>
.content {
  display: flex;
  flex-wrap: wrap;
}
.library-container {
  width: 75%;
}
.changelog-container {
  margin-left: auto;
  width: 24%;
  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 5px;
}
</style>