import React, { useState } from "react";
import { searchMovies } from "../services/omdbService";
import MovieList from "./MovieList";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const response = await searchMovies(query);
        setResults(response);
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
<MovieList movies={results} />
    </div>
  );
};

export default SearchForm;
