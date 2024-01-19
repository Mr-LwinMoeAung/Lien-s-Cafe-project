import React from "react";

function Portfolio() {
  return (
    <div className="portfolio container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <h2>Exploring Computer Engineering: Lwin Moe Aung's Biography</h2>
          <p>ID: 65011662</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number colorOne">01</span>
              <h4>Introduction</h4>
              <p>
                Mr.Lwin Moe Aung is a Computer Engineering student at King
                Mongkut's Institute of Technology Ladkrabang.
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">02</span>
              <h4>Academic Pursuit</h4>
              <p>
                He is currently enrolled in the international program, where he
                is delving into the intricacies of Computer Engineering.
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorThree">03</span>
              <h4>Web Programming Enthusiast</h4>
              <p>
                Lwin Moe Aung enjoys his Web Programming class and is currently
                designing a cafe website with React. He eagerly anticipates the
                feedback from his professor and teaching assistant, hoping they
                will appreciate his project.
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/418219688_2430785480442393_1783142172986652394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFxtT3fNKwH_jJV1YkWlyIDYMMEiNHxEiRgwwSI0fESJPcXREd5R47irVJRI7UZJnoZBbI9mMwrdYuqCk79-dAv&_nc_ohc=R_U4NNSNEbEAX_NpO0K&_nc_ht=scontent.fbkk5-6.fna&oh=03_AdTnxnnGZCxxYKXZsRWFS-ZuZ1T7sWb0ozF8SDZw-_45lA&oe=65D10721" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
