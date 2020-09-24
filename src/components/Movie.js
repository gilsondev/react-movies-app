import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return <div className="movie">
    {poster_path ? (
      <img src={IMAGE_API + poster_path} alt={title} />
    ) : (
      <img src="no-cover.png" alt={title} />
    )}
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>

    <div className="movie-overview">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>;
};

export default Movie;
