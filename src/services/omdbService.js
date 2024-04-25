import axios from "axios";
import React from "react";

const API_KEY = "72936f33";
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?t=${query}&apikey=${API_KEY}`);

    if (response.data.Response === "True") {
      const movie = response.data;
      return {
        imdbID: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        released: movie.Released,
        genre: movie.Genre,
        actors: movie.Actors,
        plot: movie.Plot,
      };
    }
  } catch (error) {
    console.error(error);
  }
};

export class MovieCard extends React.Component {
  render() {
    const { imdbID, title, year, released, genre, actors, plot } = this.props.movie;

    return (
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{released}</p>
        <p>{genre}</p>
        <p>{actors}</p>
        <p>{plot}</p>
      </div>
    );
  }
}