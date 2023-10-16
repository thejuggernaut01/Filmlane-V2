import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../store/AuthContext";
import AuthLoader from "../Layout/UI/AuthLoader";

import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  playCircle,
  ticketOutline,
  timeOutline,
  calendarNumberOutline,
} from "ionicons/icons";

const MovieDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movieQty, setMovieQty] = useState(1);
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  const moviesRef = collection(db, "Movies");
  const cartCollection = collection(db, "cart");

  const buyTicket = async () => {
    if (currentUser) {
      setLoading(true);
      try {
        await addDoc(cartCollection, {
          movieTitle: movie.movieTitle,
          movieDate: movie.movieDate,
          movieCost: movie.cost,
          movieQty,
          pg: movie.pg,
          movieDuration: movie.duration,

          user: currentUser.email,
        });
        setLoading(false);
        navigate("cart");
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    } else {
      setLoading(false);
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const movieQuery = query(moviesRef, where("movieId", "==", movieId));
        const querySnapshot = await getDocs(movieQuery);

        if (!querySnapshot.empty) {
          const movieData = querySnapshot.docs[0].data();

          setMovie(movieData);
        } else {
          console.log("No matching documents found");
        }
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchEvent();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <AuthLoader />
        </div>
      ) : (
        <section class="movie-detail">
          <div class="container">
            <figure class="movie-detail-banner">
              <img src={movie.movieImage} alt={`${movie.movieTitle}poster`} />

              <button class="play-btn">
                <IonIcon icon={playCircle}></IonIcon>
              </button>
            </figure>

            <div class="movie-detail-content">
              <h1 class="h1 detail-title">
                <strong>{movie.movieTitle}</strong>
              </h1>

              <div class="meta-wrapper">
                <div class="badge-wrapper">
                  <div class="badge badge-fill">PG {movie.PG}</div>

                  <div class="badge badge-outline">{movie.quality}</div>
                </div>

                <div class="ganre-wrapper text-white">
                  <p>{movie.genre}</p>
                </div>

                <div class="date-time">
                  <div>
                    <IonIcon icon={calendarOutline}></IonIcon>

                    <time datetime={movie.year}>{movie.year}</time>
                  </div>

                  <div>
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time datetime={`PT${movie.duration}M`}>
                      {movie.duration} min
                    </time>
                  </div>
                  <div>
                    <IonIcon icon={calendarNumberOutline}></IonIcon>
                    <p>{movie.movieDate}</p>
                  </div>
                </div>
              </div>

              <p class="storyline">{movie.movieDesc}</p>

              <div className="text-white">
                <h3 className="text-2xl font-bold opacity-90 text-center">
                  Ticket
                </h3>
              </div>

              <div className="px-4 text-white mb-5">
                <table className="w-[90%] mx-auto">
                  <thead>
                    <tr className="flex justify-between border-b-white border-b-2">
                      <th className="text-xl font-semibold">Product</th>
                      <th className="py-2 text-xl font-semibold">Price</th>
                      <th className="py-2 text-xl font-semibold">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex justify-between border-b-white border-b-2 w-[100%]">
                      <td className="py-2 text-lg w-[33%]">
                        {movie.movieTitle}
                      </td>
                      <td className="py-2 text-lg font-semibold w-[33%]">
                        ₦ {movie.cost}
                      </td>
                      <td className="py-2 text-lg font-semibold ">
                        <input
                          value={movieQty}
                          onChange={(e) => setMovieQty(e.target.value)}
                          type="number"
                          className="outline-white rounded-lg w-12 text-black pl-2"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="details-actions">
                <div class="title-wrapper">
                  <p class="title">Filmlane</p>

                  <p class="text">Streaming Channels</p>
                </div>

                <button class="btn btn-primary" onClick={buyTicket}>
                  <IonIcon icon={ticketOutline}></IonIcon>

                  <span>{loading ? <AuthLoader /> : "Buy Ticket"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
