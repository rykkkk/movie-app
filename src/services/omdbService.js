import axios from "axios";
import React from "react";

const API_KEY = "72936f33";
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const searchbytitle = `${BASE_URL}?t=${query}&apikey=${API_KEY}`;
try {
    const response = await axios.get(searchbytitle);
    if (response.data.Response === "True") {
      return response.data.Search.map((movie) => ({
        imdbID: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        released: movie.Released,
        genre: movie.Genre,
        actors: movie.Actors,
        plot: movie.Plot,
        language: movie.Language,
        country: movie.Country,
        awards: movie.Awards,
        poster: movie.Poster,
        type: movie.Type,
      }));
    } else {
  
    }
  } catch (error) {
    console.error(error);
  }

};

export class MovieCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.poster} alt={this.props.title} />
        <div className="card-content">
          <h2>{this.props.title}</h2>
          <p>{this.props.year}</p>
        </div>
      </div>
    );
  }
}

// parseMovie(response) {
//     return response.Search.map((movie) => ({
//       iimdbID: movie.imdbID,
//       title: movie.Title,
//       year: movie.Year,
//       released: movie.Released,
//       genre: movie.Genre,
//       actors: movie.Actors,
//       plot: movie.Plot,
//       language: movie.Language,
//       country: movie.Country,
//       awards: movie.Awards,
//       poster: movie.Poster,
//       imdbID: movie.imdbID,
//       type: movie.Type,
//     }));
//   }
