import axios from "axios";

const API_KEY = "72936f33";
const BASE_URL = "http://www.omdbapi.com/";

export const getMovie = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?t=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie: ${error.message}`);
    return null;
  }
};

