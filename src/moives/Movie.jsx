import React, { useState } from "react";
import { movies } from "./data"; // Assuming your data file is in the same directory
import "./Movie.css"; // Import the CSS file

const Movie = () => {
  const [movieList, setMovieList] = useState(movies);

  // An array of categories to generate buttons dynamically
  const categories = [
    "All",
    "Action",
    "Thriller",
    "Animation",
    "Horror",
    "Drama",
  ];

  const filterMovies = (category) => {
    if (category === "All") {
      setMovieList(movies);
    } else {
      setMovieList(movies.filter((movie) => movie.category === category));
    }
  };

  return (
    <div className="movie-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterMovies(category)}
            className="filter-btn"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="movie-grid">
        {movieList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              className="movie-poster"
              src={movie.poster_path}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-release-date">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
