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
  };

  return (
    <div>
      <div className="ontario-row">
        <div className="ontario-columns">
          <h1>
            New Search
          </h1>
          <form
            onSubmit={handleSubmit}
            name="searchForm"
            className="ontario-search__container"
          >
            <label className="ontario-label " htmlFor="searchform">
              Search the directory for a movie
            </label>
            <div className="ontario-search__input-container">
              <input
                type="search"
                name="search"
                id="search"
                autoComplete="on"
                aria-autocomplete="none"
                className="ontario-input ontario-search__input"
                value={query}
                onChange={handleChange}
                placeholder="Search for a movie..."
              />
              <input
                className="ontario-search__reset"
                id="search"
                type="reset"
                value=""
                aria-label="Clear field"
              />
              <button
                className="ontario-search__submit"
                id="search"
                type="submit"
              >
                <span className="ontario-show-for-sr">Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0016 9.5a6.5 6.5 0 10-13 0A6.5 6.5 0 009.5 16a6.47 6.47 0 004.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
          <p>Showing results for: {submittedQuery}</p>

          <MovieCard movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
