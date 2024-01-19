import React, { useState } from "react";
import { SiConsul } from "react-icons/si";

function Navbar() {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">Support</li>
          <li className="flex">Language</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img
            src="https://www.freepnglogos.com/uploads/coffee-logo-png/deja-brew-cafe-logo-dejacafe-20.png"
            className="Logo"
          />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <a href="/" onClick={removeNavBar} className="listItem">
              Home
            </a>
            <a href="/portfolio" onClick={removeNavBar} className="listItem">
              Portfolio
            </a>
            <a href="/info" onClick={removeNavBar} className="listItem">
              info
            </a>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Main Menu</button>

        <div onClick={showNavBar} className="toggleIcon">
          <SiConsul className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
