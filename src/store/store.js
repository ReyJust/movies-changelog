import Vuex from 'vuex'
import getMovieId from '../wrapper/getMovieId';
import getMovieData from "../wrapper/getMovieData";

import getSerieId from '../wrapper/getSerieId';
import getSerieData from "../wrapper/getSerieData";

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
    setSearchMovie(state, results) {
      let movies = []
      let genresList = []

      for (let movie in results) {
        let movieData = results[movie].Data

        movies.push({
          id: movieData.imdb_id,
          image: movieData.image_url,
          // (movieData.image_url ? results[movie].image : 'placeholder'),
          title: movieData.title,
          year: movieData.year,
          synopsis: movieData.plot,
        })
        //Fill the genre
        let genres = movieData.gen
        for (let genre in genres) {
          genresList.push(genres[genre].genre)
        }
        movies[movies.length - 1]['genres'] = genresList
        genresList = []
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
    },
    async fetchLogin({ commit }, { username, password }) {
      let response

      const { data: name, error } = await supabase
        .from("users")
        .select("username")
        .match({ username: username })

      if (!name[0]) {
        response = "This User doesn't exist."
      } else if (name[0].username === username) {
        const { data: pass, error } = await supabase
          .from("users")
          .select("password")
          .match({ password: password })

        if (!pass[0]) {
          response = "The password is incorrect."
        } else if (pass[0].password === password) {
          response = true
        }
      }
      return response
    },
    //Add Movie 
    async searchMovie({ commit }, { title, type }) {
      commit('resetMovie')
      commit('setIsSearching', true)
      if (type === 'movie') {
        const ids = await getMovieId(title)
        const data = []
        for (let id in ids) {
          data.push(await getMovieData(ids[id]))
        }
        commit('setSearchMovie', data)

        commit('setStatus', { item: 'movies', status: false });
        commit('setIsSearching', false)
      } else if (type === 'serie') {
        const ids = await getSerieId(title)
        console.log(ids)
        const data = []
        for (let id in ids) {
          data.push(await getSerieData(ids[id]))
        }
        commit('setSearchMovie', data)

        commit('setStatus', { item: 'movies', status: false });
        commit('setIsSearching', false)
      }
    },
    async setMovieInDb({ commit }, movie) {
      const { data: movies, error } = await supabase
        .from("Movies")
        .insert(movie)

      commit('resetMovie')
      commit('setStatus', false)
    }
  },
});