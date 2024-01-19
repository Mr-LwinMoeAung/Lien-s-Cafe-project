import React from "react";

function Info() {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Info & About of Our Coffee Shop</h2>
          <button className="btn">View all</button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <span className="cardTitle">Location</span>
            <p>
              Ladkrabang. 1 Chalong Krung 5 Alley, Lat Krabang, Bangkok 10520,
              Thailand.
            </p>
          </div>
          <div className="singleCard grid">
            <span className="cardTitle">Contact Number</span>
            <p>
              09772250486 <br /> 096857113123 <br /> 0629762718
            </p>
          </div>
          <div className="imgDiv">
            <img src="https://coffeekev.com/wp-content/uploads/2022/03/coffee-beans-915x1024.png?fbclid=IwAR0ozVGPNxszcSMDsylJ2lz5mAX9HHhfBG7YsFrHmAZy9gPPYPixBPhyyOo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
