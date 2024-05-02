import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { getMovie } from "../services/omdbService";
import SearchForm from "./SearchForm";
const Page1 = () => {
  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    const movieData = await getMovie("The Matrix");
    setMovie(movieData);
  };
  const [showSearchForm, setShowSearchForm] = useState(false);
  return (
    <div className="ontario-row">
      <div className="ontario-columns">
        {showSearchForm ? (
          <SearchForm />
        ) : (
          <div>
            <h1>Movie App</h1>
            <h2 className="ontario-lead-statement">
              Search for a movie to get started
            </h2>
            <br />
            <button
              className="ontario-button ontario-button--primary"
              onClick={() => setShowSearchForm(true)}
            >
              Start a new search
            </button>
            <button className="ontario-button ontario-button--secondary">
              Go to Faves page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page1;
