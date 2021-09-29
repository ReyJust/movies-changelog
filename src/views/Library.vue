<template>
  <div>
    <!--<NewMovies /> -->
    <Movies />
    <!-- <DeleteMovies /> -->
  </div>
</template>

<script>
import { supabase } from "../supabase";

import Movies from "../components/Movies.vue";
// import NewMovies from "../components/NewMovies.vue";
// import DeleteMovies from "../components/DeletedMovies.vue";

export default {
  components: {
    Movies,
    // NewMovies,
    // DeleteMovies,
  },
  data() {
    return {
      film: {},
    };
  },
  async mounted() {
    let { data: movies, error } = await supabase.from("Movies").select("*");
    console.log(movies);
  },
};
</script>

<style>
</style>