import React from 'react';
import { Link } from "react-router-dom";
import UpdateMovie from './UpdateMovie'
import DeleteMovie from './DeleteMovie'
const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  console.log('props in movie card',props)
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      
              {/* <div className="update-button"> */}
              {/* <Link to={`/update-movie/${props.movie.id}`}> */}
              <UpdateMovie state={props} />
              <DeleteMovie state={props} />
    {/* </Link> */}
{/* </div> */}

    </div>
  );
};

export default MovieCard;
