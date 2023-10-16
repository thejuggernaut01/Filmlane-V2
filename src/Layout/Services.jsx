import { IonIcon } from "@ionic/react";
import { tv, videocam } from "ionicons/icons";

import serviceBanner from "../assets/service-banner.jpg";

const Services = () => {
  return (
    <>
      <section className="service" id="services">
        <div className="container">
          <div className="service-banner">
            <figure>
              <img src={serviceBanner} alt="HD 4k resolution! only $3.99" />
            </figure>
          </div>

          <div className="service-content">
            <p className="service-subtitle">Our Services</p>

            <h2 className="h2 service-title">Get Your Ticket Online.</h2>

            <p className="service-text">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </p>

            <ul className="service-list">
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <IonIcon icon={tv}></IonIcon>
                  </div>

                  <div className="card-content">
                    <h3 className="h3 card-title">Movie Descriptions.</h3>

                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <IonIcon icon={videocam}></IonIcon>
                  </div>

                  <div className="card-content">
                    <h3 className="h3 card-title">
                      Movie Listing and Showtimes.
                    </h3>

                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
