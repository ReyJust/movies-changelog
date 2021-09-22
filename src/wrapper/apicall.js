import axios from "axios";
import store from '../store/store.js'

export default async function apiCall() {
  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_API,
    params: { q: 'Hunger Games' },
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };

  axios.request(options).then((response) => {
    let result = response.data;
    console.log(result)
    store.commit('setMovie', result)
  })
}