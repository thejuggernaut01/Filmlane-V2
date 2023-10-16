import { IonIcon } from "@ionic/react";
import { calendarOutline, timeOutline, play } from "ionicons/icons";

import Movies from "./Movies";
import Services from "./Services";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Filmlane</p>

            <h1 className="h1 hero-title">
              Unlimited <strong>Movie</strong>, TVs Shows, & More.
            </h1>

            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 18</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                <a href="/">Romance,</a>

                <a href="/">Drama</a>
              </div>

              <div className="date-time">
                <div>
                  <IonIcon icon={calendarOutline}></IonIcon>

                  <time dateTime="2022">2022</time>
                </div>

                <div>
                  <IonIcon icon={timeOutline}></IonIcon>

                  <time dateTime="PT128M">128 min</time>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">
              <IonIcon icon={play}></IonIcon>

              <span>Watch now</span>
            </button>
          </div>
        </div>
      </section>

      <Movies />

      <Services />

      <Footer />
    </>
  );
};

export default Header;
