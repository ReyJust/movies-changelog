import axios from "axios";
import store from '../store/store.js'

export default async function apiCall() {
  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_API,
    params: { q: 'Deadpool' },
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };

  axios.request(options).then((response) => {
    let result = response.data;
    store.commit('setMovie', result)
  })
}