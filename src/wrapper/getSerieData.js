import axios from "axios";

export default async function getSerieId(id) {
  let result = {}

  const options = {
    method: 'GET',
    url: process.env.VUE_APP_IMDB_SERIE_DATA + String(id) + '/',
    headers: {
      'x-rapidapi-host': process.env.VUE_APP_RAPID_API_HOST,
      'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY
    }
  };
  await axios.request(options).then((response) => {
    result = response.data;
  })

  return result
}
