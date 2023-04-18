import React from "react";

function MovieList(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default MovieList;
