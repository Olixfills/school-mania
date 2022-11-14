import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <h1>School Mania</h1>
      <Link to="/login" className="home-btn">Click to Log in</Link>
    </div>
  );
};

export default Home;
