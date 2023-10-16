import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { star, timeOutline } from "ionicons/icons";

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul className="movies-list  has-scrollbar">
        {movies &&
          movies.map(
            ({
              movieImage,
              movieTitle,
              year,
              quality,
              duration,
              rating,
              movieId,
            }) => (
              <Link to={`/movies/${movieId}`} key={movieImage}>
                <div className="movie-card">
                  <figure className="card-banner">
                    <img
                      src={movieImage}
                      alt={`${movieTitle} poster`}
                      loading="lazy"
                    />
                  </figure>

                  <div className="title-wrapper">
                    <h3 className="card-title">{movieTitle}</h3>

                    <time dateTime={year}>{year}</time>
                  </div>

                  <div className="card-meta">
                    <div className="badge badge-outline">{quality}</div>

                    <div className="duration">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <time dateTime={`PT${duration}M`}>{duration} min</time>
                    </div>

                    <div className="rating">
                      <IonIcon icon={star}></IonIcon>

                      <data>{rating}</data>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
      </ul>
    </>
  );
};

export default MoviesList;
