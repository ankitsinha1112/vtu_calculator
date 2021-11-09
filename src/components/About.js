import React from "react";
import "./About.css";
import dhomya from "../Images/dhomya.jpeg";
import ankit from "../Images/ankit.png";

export const About = () => {
  return (
    <div>
      <div id="top">
        <h1>Our Team</h1>
        <p>
          Client-focused, customer-centric, creating website solutions that
          deliver tangible business results, Appnovation's web developers helps
          brands the ever-changing digital landscape.
        </p>
      </div>
      <div id="employee">
        <div id="dhomya">
          <img src={dhomya} alt="image" />
          <p>
            A growing full stack web developer, who specializes in building web
            applications for the best digital experiences. I am keenly focused
            on building impactful products which can create value in people's
            lives. Skilled in HTML, CSS, JavaScript , Express , Postman,
            ReactJS, MongoDB, MySQL and node.js. I'm looking forward to
            opportunities that will help me grow so that I keep contributing my
            part in this beautiful field of technology.
          </p>
        </div>
        <div id="ankit">
          <img src={ankit} alt="image" />
          <p>
            A growing full stack web developer, who specializes in building web
            applications for the best digital experiences. I am keenly focused
            on building impactful products which can create value in people's
            lives. Skilled in HTML, CSS, JavaScript, Express, Wordpress,
            Postman, ReactJS, MongoDB, MySQL and node.js. I'm looking forward to
            opportunities that will help me grow so that I keep contributing my
            part in this beautiful field of technology.
          </p>
        </div>
      </div>
    </div>
  );
};
