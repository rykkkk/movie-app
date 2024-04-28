import React, { useState } from "react";
import { getMovie } from "../services/omdbService";
import MovieCard from "./MovieCard";

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

<MovieCard movie={movie} />
    </div>
  );
}

export default SearchForm;
