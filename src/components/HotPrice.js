import React from "react";

import { rents } from "../data/rents.js";
function HotPrice() {
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
