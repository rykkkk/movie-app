import React, { useState } from "react";
import { getMovie } from "../services/omdbService";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
    const movieData = await getMovie(query);
    setMovie(movieData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <p>Showing results for: {submittedQuery}</p>

      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
