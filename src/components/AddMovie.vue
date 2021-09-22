<template>
  <div>
    <h1>Form</h1>
    <!-- <label for="title">Movie Title</label>
    <input v-model="title" type="text" id="title" name="Title" /> -->
    <button @click="myMethod('vwecq')">Search</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddMovie",

  data() {
    return {
      title: "bgfdw",
    };
  },
  methods: {
    ...mapActions(["setMovies", "myAction"]),
    callImdb(param) {
      this.setMovies(param);
    },
    myMethod(param) {
      this.myAction({ param });
    },
  },
};
</script>

<style>
</style>