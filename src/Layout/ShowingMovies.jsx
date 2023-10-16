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
      <section class="upcoming" id="movies">
        <div class="container">
          <div class="flex-wrapper">
            <div class="title-wrapper">
              <p class="section-subtitle">In-Cinema Showings</p>

              <h2 class="h2 section-title">Showing Now</h2>
            </div>

            <ul class="filter-list">
              <li>
                <button class="filter-btn">Movies</button>
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
