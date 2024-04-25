import React, { useState } from "react";
import { searchMovies } from "../services/omdbService";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const fetchedResults = await searchMovies(query);
      const filteredResults = fetchedResults.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (error) {
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
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h2>{result.title}</h2>
            <p>{result.year}</p>
            <img src={result.poster} alt={result.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
