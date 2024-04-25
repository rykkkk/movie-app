import axios from "axios";

const API_KEY = "72936f33";
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const searchbytitle = `${BASE_URL}?t=${query}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(searchbytitle);

    return response.data.Search; // Array of movie results
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
