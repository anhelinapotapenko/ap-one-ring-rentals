import React from "react";
/*link - used to move between pages */

import { Link } from "react-router-dom";

function HelpSection() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 className="section-title">Need Help?</h1>

      <p style={{ marginBottom: "20px" }}>Our team is here to help you</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/*link to contact page */}
        <Link to="/contact">
          <button
            style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Call us
          </button>
        </Link>

        <Link to="/contact">
          <button
            style={{
              padding: "10px 20px",
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Email us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HelpSection;
