import React from "react";

function Search() {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Coffee</span>
          </div>

          <div className="singleBtn">
            <span>Tea</span>
          </div>

          <div className="singleBtn">
            <span>Milk</span>
          </div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="texts">
              <h4>What you would like to order?</h4>
              <input type="text" placeholder="Type here" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
