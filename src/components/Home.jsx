import React from "react";
import { BiSearch } from "react-icons/bi";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Browse Millions of Products for your Needs</h2>
          <div className="input-container">
            <input type="text" placeholder="Designer Hoodies" />
            <div className="icon">
              <BiSearch />
            </div>
          </div>
        </div>
        <div className="extra-images">
          <img src={home} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
