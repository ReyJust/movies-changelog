import Vuex from 'vuex'
import apicall from '../wrapper/apicall'
import { supabase } from "../supabase";

export default new Vuex.Store({
  namespaced: true,
  state() {
    return {
      status: {
        searchedMovie: {
          isLoading: false,
        },
        movies: {
          isLoading: true,
        }
      },
      searchedMovie: [],
      movies: [],
      newMovies: [{}],
      deletedMovies: [{}],
    }
  },
  getters: {
    getMovies: (state) => state.movies,

    getSearchedMovie: (state) => state.searchedMovie,
    getStatus: (state) => state.status.movies.isLoading,
  },
  mutations: {
    //global
    setStatus(state, status) {
      state.status.movies.isLoading = status
    },

    setMovie(state, movie) {
      state.searchedMovie = []
      state.movies = []
    },
    resetMovie(state) {
      state.searchedMovie = []
      state.movies = []
    },
    setSearchMovie(state, response) {
      let movies = []
      let results = response.results
      let actors = []

      for (let movie in results) {
        //Keep results which have a title
        if (results[movie].titleType) {
          //Keep results which are a movie or a serie
          if ((results[movie].titleType === "tvSeries") || (results[movie].titleType === "movie")) {
            movies.push({
              image: (results[movie].image ? results[movie].image.url : 'placeholder'),
              title: results[movie].title,
              year: results[movie].year,
            })
            //Fill the casting
            let casting = results[movie].principals
            for (let actor in casting) {
              actors.push(casting[actor].name)
            }
            movies[movies.length - 1]['actors'] = actors
            actors = []
          }
        }
      }
      state.searchedMovie = movies
    },
    //Library
    setMovieList(state, movies) {
      for (let movie in movies) {
        state.movies.push(movies[movie])
      }
    },
  },
  actions: {
    //Library
    async fetchMovies({ commit }) {
      const { data: movies, error } = await supabase
        .from("Movies")
        .select("*")
        .limit(20);
      commit('setMovieList', movies)
      commit('setStatus', false)
    },

    async searchMovie({ commit }, title) {
      const response = await apicall(title)
      commit('setSearchMovie', response)
      commit("setStatus", true);
    },
    async setMovieInDb({ commit }, movie) {
      console.log(movie)
      const { data: movies, error } = await supabase
        .from("Movies")
        .insert(movie)

      commit('resetMovie')
      commit('setStatus', false)
    },
  }
})
