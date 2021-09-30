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
        },
        newMovies: {
          isLoading: true,
        }

      },
      searchedMovie: [],
      movies: [],
      newMovies: [],
      deletedMovies: [{}],
    }
  },
  getters: {
    getMovies: (state) => state.movies,
    getNewMovies: (state) => state.newMovies,

    getSearchedMovie: (state) => state.searchedMovie,

    getStatus: (state) => (item) => {
      return state.status[item].isLoading
    }
  },
  mutations: {
    //global
    setStatus(state, { item, status }) {
      state.status[item].isLoading = status
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
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      for (let movie in movies) {
        movies[movie].added_dt = new Date(movies[movie].added_dt)

        if (movies[movie].added_dt > oneMonthAgo) {
          state.newMovies.push(movies[movie])
        } else {
          state.movies.push(movies[movie])
        }
      }
    },
  },
  actions: {
    //Library
    async fetchMovies({ commit }) {
      const { data: movies, error } = await supabase
        .from("Movies")
        .select("*")
        .order('added_dt', { ascending: true })
        .limit(20);
      commit('setMovieList', movies)
      commit('setStatus', { item: 'movies', status: false })
      commit('setStatus', { item: 'newMovies', status: false })
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
