import axios from "axios";

const API_KEY = "72936f33";
const BASE_URL = "http://www.omdbapi.com/";

export const getMovie = async (query) => {
  const response = await axios.get(`${BASE_URL}?t=${query}&apikey=${API_KEY}`);
  return response.data;
};


