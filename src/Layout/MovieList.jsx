import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { star, timeOutline } from "ionicons/icons";

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul class="movies-list  has-scrollbar">
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
                <div class="movie-card">
                  <figure class="card-banner">
                    <img
                      src={movieImage}
                      alt={`${movieTitle} poster`}
                      loading="lazy"
                    />
                  </figure>

                  <div class="title-wrapper">
                    <h3 class="card-title">{movieTitle}</h3>

                    <time datetime={year}>{year}</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">{quality}</div>

                    <div class="duration">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <time dateTime={`PT${duration}M`}>{duration} min</time>
                    </div>

                    <div class="rating">
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
