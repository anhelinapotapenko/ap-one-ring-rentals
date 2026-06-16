import React from "react";
import perth from "../images/perth.jpg";
import HelpSection from "../components/HelpSection.js";

import CityCard from "../components/CityCard.js";

export default function AboutPage() {
  return (
    <main>
      <section className="subheader">
        <div className="container text-center">
          <h1>About One Ring Rentals</h1>

          <p>
            Learn more about our rental service and how we help users find
            properties across Australia.
          </p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          {/* Hero Image */}
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <img
              src={perth}
              alt="Perth city skyline"
              className="img-responsive"
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>

          {/* Information */}
          <div className="row">
            <div className="col-md-6">
              <h2>Who We Are</h2>

              <p>
                One Ring Rentals is a React web application designed to help
                users discover rental opportunities and explore different
                regions across Australia.
              </p>

              <p>
                The platform allows visitors to browse locations, explore
                featured regions, and access useful information about the rental
                market.
              </p>
            </div>

            <div className="col-md-6">
              <h2>Our Mission</h2>

              <p>
                Our mission is to make searching for rental properties simple,
                accessible, and user-friendly for everyone.
              </p>

              <p>
                This page was created as part of the assessment requirements to
                demonstrate React page development, image imports, and
                component-based design using modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CityCard />
      <HelpSection />
    </main>
  );
}
