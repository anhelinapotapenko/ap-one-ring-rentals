// CityCard.js - uses array of city data. map() to loop
// through the array and create cards, this avoids repeating
//  the same HTML many times.

import React from "react";
import perth from "../images/perth.jpg";
import sydney from "../images/sydney.jpg";
import melbourne from "../images/melbourne.png";
import brisbane from "../images/brisbane.png";
import adelaide from "../images/adelaide.png";
import hobart from "../images/hobart.png";
import canberra from "../images/canberra.png";
import darwin from "../images/darwin.png";

function CityCard() {
  {
    /*creating arrays  with images and des*/
  }
  const regions = [
    {
      image: perth,
      name: "Perth",
      description:
        "Perth is a beautiful coastal city with sunny weather and relaxed lifestyle.",
      weather: "Weather: Avg 25°C, sunny",
      rent: "Rent: $450/week",
    },
    {
      image: sydney,
      name: "Sydney",
      description:
        "Sydney is Australia's largest city with famous landmarks and busy lifestyle.",
      weather: "Weather: Avg 22°C, mild",
      rent: "Rent: $750/week",
    },
    {
      image: melbourne,
      name: "Melbourne",
      description:
        "Melbourne is known for its coffee culture and changing weather.",
      weather: "Weather: Avg 18°C, cool",
      rent: "Rent: $600/week",
    },
    {
      image: brisbane,
      name: "Brisbane",
      description: "Brisbane is warm with outdoor lifestyle and river views.",
      weather: "Weather: Avg 27°C, warm",
      rent: " Rent: $550/week",
    },
    {
      image: adelaide,
      name: "Adelaide",
      description:
        "Weather: Adelaide is known for wine regions, festivals, and peaceful city living.",
      weather: "Avg 22°C, dry",
      rent: " Rent: $480/week",
    },
    {
      image: canberra,
      name: "Canberra",
      description:
        "Canberra is the capital city with museums, parks, and calm surroundings.",
      weather: "Weather: Avg 16°C, cool",
      rent: " Rent: $520/week",
    },
    {
      image: hobart,
      name: "Hobart",
      description:
        "Hobart is a smaller city with mountains, cool weather, and natural beauty.",
      weather: " Weather:Avg 14°C, cool",
      rent: " Rent: $460/week",
    },
    {
      image: darwin,
      name: "Darwin",
      description:
        "Darwin has a tropical climate, outdoor lifestyle, and unique northern culture.",
      weather: "Weather: Avg 30°C, hot",
      rent: " Rent: $500/week",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <div className="row">
        {/*section title */}
        <h1 className="section-title" style={{ textAlign: "center" }}>
          Regions
        </h1>
        {/*loop to show regions array and create cards */}
        <div style={{ display: "flex", gap: "20px" }}>
          {regions.map((item, index) => (
            <div
              key={index}
              style={{
                width: "500px",
                textAlign: "center",
              }}
            >
              {/*to show images */}
              <img
                src={item.image}
                alt=""
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              {/*to show item's name */}
              <div style={{ padding: "12px 0" }}>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "6px",
                  }}
                >
                  {item.name}
                </h4>
                {/*to show item's des, weather and price */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777",
                    lineHeight: "1.5",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {item.description}
                  <br></br>
                  {item.weather}
                  <br></br>
                  {item.rent}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CityCard;
