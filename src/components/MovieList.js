import React from "react";
import "./MovieList.css"; // Assuming you have a CSS file for styling
import { searchMovies } from "../services/omdbService";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    searchMovies().then((response) => {
      this.setState({ movie: this.parseMovie(response) });
    });
  }


  render() {
    return (
      <div className="masonry">
        {this.state.movie.map((movie, index) => (
          <div key={index} className="card">
            <img
              src={`${BASE_URL}?i=${movie.imdbID}&apikey=${API_KEY}`}
              alt={movie.title}
            />
            <div className="card-content">
              <h2>{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
