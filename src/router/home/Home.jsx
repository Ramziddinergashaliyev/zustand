import React from "react";
import "./Home.css";
import img from "../../assets/img.png";

function Home() {
  return (
    <div className="home">
      <img src={img} alt="" />
      <h2>Zustand</h2>
    </div>
  );
}

export default Home;
