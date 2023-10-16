import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import MoviesList from "./MovieList";

const ShowingMovies = () => {
  const [movies, setMovies] = useState([]);
  const moviesCollection = collection(db, "Movies");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(moviesCollection);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, [moviesCollection]);

  return (
    <>
      <section className="upcoming" id="movies">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">In-Cinema Showings</p>

              <h2 className="h2 section-title">Showing Now</h2>
            </div>

            <ul className="filter-list">
              <li>
                <button className="filter-btn">Movies</button>
              </li>
            </ul>
          </div>

          <MoviesList movies={movies} />
        </div>
      </section>
    </>
  );
};

export default ShowingMovies;
