import Vuex from 'vuex'
import apicall from '../wrapper/apicall'
import { supabase } from "../supabase";

export default new Vuex.Store({
  namespaced: true,
  state() {
    return {
      //Loaders
      isSearching: false,
      isLoading: true,

      //Data
      searchedMovie: [],
      movies: [],
      newMovies: [],
    }
  },
  getters: {
    //Data
    getMovies: (state) => state.movies,
    getNewMovies: (state) => state.newMovies,
    getSearchedMovie: (state) => state.searchedMovie,

    //Loaders
    getStatus: (state) => state.isLoading,
    getIsSearching: (state) => state.isSearching
  },
  mutations: {
    //reset
    resetMovie(state) {
      state.searchedMovie = []
      state.movies = []
      state.newMovies = []
    },

    //Loader
    setStatus(state, status) {
      state.isLoading = status
    },
    setIsSearching(state, status) {
      state.isSearching = status
    },

    //Mutations - Add Movie
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
              titleType: results[movie].titleType,
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
    //Mutation - Library
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
      commit('setStatus', false)
    },
    async deleteMovieDB({ commit }, id) {
      const { data, error } = await supabase
        .from("Movies")
        .delete()
        .match({ movie_id: parseInt(id) })

      commit('setStatus', true)
      commit('resetMovie')
      this.dispatch("fetchMovies")
      commit('setStatus', false)
    }
  },

  //Add Movie 
  async searchMovie({ commit }, title) {
    commit('resetMovie')
    commit('setIsSearching', true)

    const response = await apicall(title)
    commit('setSearchMovie', response)

    commit('setStatus', { item: 'movies', status: false });
    commit('setIsSearching', false)
  },
  async setMovieInDb({ commit }, movie) {
    const { data: movies, error } = await supabase
      .from("Movies")
      .insert(movie)

    commit('resetMovie')
    commit('setStatus', false)
  },
})
