 import React from "react";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <div>
    <ul className="ontario-card__container ontario-card--cards-per-row-3">
      <li className="ontario-card ontario-card--default  ontario-card--position-vertical">
        <div className="ontario-card__image-container">
          <img className="ontario-card__image" src={movie.Poster} alt={movie.Title +" movie poster"} />
        </div>
        <div className="ontario-card__text-container ontario-card--image-true">
          <h2 className="ontario-card__heading">
            <a href="#">
              {movie.Title}
            </a>
          </h2>
          <div className="ontario-card__description">
            <p>{movie.Plot}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  
)
};
 
export default MovieCard;