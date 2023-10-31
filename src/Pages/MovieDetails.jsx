import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import AuthLoader from "../Layout/UI/AuthLoader";

import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  playCircle,
  ticketOutline,
  timeOutline,
  calendarNumberOutline,
} from "ionicons/icons";
import { Context } from "../store/context";

const MovieDetails = () => {
  const { email } = useContext(Context);
  const userID = email && email.userID;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movieQty, setMovieQty] = useState(1);
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  const moviesRef = collection(db, "Movies");
  const cartCollection = collection(db, "cart");

  const buyTicket = async () => {
    if (userID) {
      setLoading(true);
      try {
        await addDoc(cartCollection, {
          movieTitle: movie.movieTitle,
          movieDate: movie.movieDate,
          movieCost: movie.cost,
          movieQty,
          pg: movie.pg,
          movieDuration: movie.duration,

          user: userID,
        });
        setLoading(false);
        navigate("cart");
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    } else {
      setLoading(false);
      navigate("/auth");
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
        <section className="movie-detail">
          <div className="container">
            <figure className="movie-detail-banner">
              <img src={movie.movieImage} alt={`${movie.movieTitle}poster`} />

              <button className="play-btn">
                <IonIcon icon={playCircle}></IonIcon>
              </button>
            </figure>

            <div className="movie-detail-content">
              <h1 className="h1 detail-title">
                <strong>{movie.movieTitle}</strong>
              </h1>

              <div className="meta-wrapper">
                <div className="badge-wrapper">
                  <div className="badge badge-fill">PG {movie.PG}</div>

                  <div className="badge badge-outline">{movie.quality}</div>
                </div>

                <div className="text-white ganre-wrapper">
                  <p>{movie.genre}</p>
                </div>

                <div className="date-time">
                  <div>
                    <IonIcon icon={calendarOutline}></IonIcon>

                    <time dateTime={movie.year}>{movie.year}</time>
                  </div>

                  <div>
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time dateTime={`PT${movie.duration}M`}>
                      {movie.duration} min
                    </time>
                  </div>
                  <div>
                    <IonIcon icon={calendarNumberOutline}></IonIcon>
                    <p>{movie.movieDate}</p>
                  </div>
                </div>
              </div>

              <p className="storyline">{movie.movieDesc}</p>

              <div className="text-white">
                <h3 className="text-2xl font-bold text-center opacity-90">
                  Ticket
                </h3>
              </div>

              <div className="px-4 mb-5 text-white">
                <table className="w-[90%] mx-auto">
                  <thead>
                    <tr className="flex justify-between border-b-2 border-b-white">
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
                          className="w-12 pl-2 text-black rounded-lg outline-white"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="details-actions">
                <div className="title-wrapper">
                  <p className="title">Filmlane</p>

                  <p className="text">Streaming Channels</p>
                </div>

                <button className="btn btn-primary" onClick={buyTicket}>
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
