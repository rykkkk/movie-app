import { searchMovies } from "../services/omdbService";

import React, { useState, useEffect } from "react";

function MovieList(movies) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    searchMovies().then((response) => {
      setMovie(response);
    });
  }, []);

  return (
    <div>
      
        <h2 key={movie.imdbID}>{movie.title}</h2>
    
    </div>
  );

}

export default MovieList;
