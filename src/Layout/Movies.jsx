import { IonIcon } from "@ionic/react";
import { star, timeOutline } from "ionicons/icons";
import upcoming1 from "../assets/upcoming-1.png";
import upcoming2 from "../assets/upcoming-2.png";
import upcoming3 from "../assets/upcoming-3.png";
import upcoming4 from "../assets/upcoming-4.png";

const Movies = () => {
  return (
    <>
      <section className="upcoming" id="movies">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">In-Cinema Showings</p>

              <h2 className="h2 section-title">Previously Screened Films</h2>
            </div>

            <ul className="filter-list">
              <li>
                <button className="filter-btn">Movies</button>
              </li>
            </ul>
          </div>

          <ul className="movies-list  has-scrollbar">
            <li>
              <div className="movie-card">
                <a href="/">
                  <figure className="card-banner">
                    <img src={upcoming1} alt="The Northman movie poster" />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="/">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time dateTime="PT137M">137 min</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>8.5</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="movie-card">
                <a href="/">
                  <figure className="card-banner">
                    <img
                      src={upcoming2}
                      alt="Doctor Strange in the Multiverse of Madness movie poster"
                    />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="/">
                    <h3 className="card-title">
                      Doctor Strange in the Multiverse of Madness
                    </h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">4K</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time dateTime="PT126M">126 min</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src={upcoming3} alt="Memory movie poster" />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Memory</h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time dateTime="">N/A</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src={upcoming4}
                      alt="The Unbearable Weight of Massive Talent movie poster"
                    />
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      The Unbearable Weight of Massive Talent
                    </h3>
                  </a>

                  <time dateTime="2022">2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    <IonIcon icon={timeOutline}></IonIcon>

                    <time dateTime="PT107M">107 min</time>
                  </div>

                  <div className="rating">
                    <IonIcon icon={star}></IonIcon>

                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Movies;
