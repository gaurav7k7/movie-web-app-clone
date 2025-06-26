import React, { useState } from "react";
import { movies } from "./data";

const Movie = () => {
  const [movieList, setMovieList] = useState(movies);

  const filtered = (cat) => {
    console.log(cat);
    setMovieList(movies.filter((data) => data.category == cat));
  };

  return (
    <>
      <div className="my-3 mx-auto " style={{ textAlign: "center" }}>
        <button
          onClick={() => setMovieList(movies)}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          All
        </button>
        <button
          onClick={() => filtered("Action")}
          type="button"
          className="btn btn-outline-secondary mx-3"
        >
          Action
        </button>
        <button
          onClick={() => filtered("Thriller")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          Thriller
        </button>
        <button
          onClick={() => filtered("Animation")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Animation
        </button>
        <button
          onClick={() => filtered("Horror")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Horror
        </button>
        <button
          onClick={() => filtered("Drama")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          Drama
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: " 1300px",
          // backgroundColor: "rebeccapurple",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "350px" }}>
            <div className="hover_effect">
              <img
                style={{
                  width: "200px",
                  border: " 1px solid yellow",
                  borderRadius: "10px",
                }}
                src={data.poster_path}
                alt="movie"
              />
            </div>
            <h3>{data.title}</h3>
            <h4>{data.release_date}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movie;
