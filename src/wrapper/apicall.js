import axios from "axios";

export default async function apiCall(title) {
  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_API,
    params: { q: title },
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };
  let result = {}
  await axios.request(options).then((response) => {
    result = response.data;
  })
  return result
}