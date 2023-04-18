import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";

function Home() {
  const [movies, setmovies] = useState([]);

  const fetch = async () => {
    try {
      const moviesDoc = await axios.get(
        "http://127.0.0.1:5000/moviesnetapi/v1/movies"
      );
      setmovies(moviesDoc.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.map((el) => (
        <a key={el._id} href={`http://localhost/3000/${el._id}`}>
          <h1>{el.name}</h1>
          <p>{el._id}</p>
        </a>
      ))}
    </div>
  );
}

export default Home;
