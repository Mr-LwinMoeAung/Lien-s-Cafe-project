import React from "react";
import Portfolio from "../Search/Search";
import Coffees from "../Coffees/Coffees";

function Home() {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>The Best Coffee Shop</h1>
      </div>

      <div className="HomeImages flex">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/coffee-room-8155999-6551453.png"
          className="main_img"
        />
      </div>
      <Portfolio />
      <Coffees />
    </div>
  );
}

export default Home;
