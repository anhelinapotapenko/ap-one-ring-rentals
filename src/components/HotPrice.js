import React from "react";

import perth from "../images/building07.jpg";
import sydney from "../images/building06.jpg";
import melbourne from "../images/building05.jpg";

function HotPrice() {
  const rents = [
    {
      image: sydney,
      city: "Sydney",
      area: "CBD",
      price: "$750/week",
      newPrice: "$600/week",
      bedrooms: "2 bedrooms",
      description:
        "Modern 2-bedroom apartment located in Sydney CBD. Walking distance to public transport, shopping centres, restaurants, and offices.",
    },
    {
      image: melbourne,
      city: "Melbourne",
      area: "Southbank",
      price: "$650/week",
      newPrice: "$580/week",
      bedrooms: "1 bedroom",
      description:
        "Stylish apartment in Southbank with river views. Close to cafes, parks, and tram stops.",
    },
    {
      image: perth,
      city: "Perth",
      area: "Scarborough",
      price: "$500/week",
      newPrice: "$450/week",
      bedrooms: "2 bedrooms",
      description:
        "Cozy beachside apartment in Scarborough. Just minutes from the ocean and cafes.",
    },
  ];

  return (
    <div className="row">
      <h1
        className="section-title"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Hot Deals
      </h1>

      {rents.map((rent, index) => (
        <div
          key={index}
          style={{
            width: "900px",
            margin: "20px auto",
            border: "1px solid #ddd",
            borderRadius: "10px",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <div style={{ width: "40%" }}>
            <img
              src={rent.image}
              alt={rent.city}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              width: "60%",
              padding: "20px",
            }}
          >
            <h2>{rent.city}</h2>

            <p>
              <strong>Area:</strong> {rent.area}
            </p>

            <p>
              <strong>Price:</strong> {rent.price}
            </p>

            <p>
              <strong>Special Price:</strong> {rent.newPrice}
            </p>

            <p>
              <strong>Bedrooms:</strong> {rent.bedrooms}
            </p>

            <p>{rent.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotPrice;
