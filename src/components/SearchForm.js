import React, { useState } from 'react';
import { searchMovies } from '../services/omdbService';

const SearchForm = () => {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        const results = await searchMovies(query);
        console.log(results);
    }

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for a movie..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;