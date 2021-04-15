import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero";
import "./Hero.css";
import videoHero from '../assets/videos/video-1.mp4';
import guitar from "../assets/images/guitar-01.jpg";

function Hero() {
  // const handleScrollHero = e => {
  //   const video = document.querySelector('.vid');
  //   const offset = window.scrollY;
  //   console.log(`offset: ${offset}`, `offset * 0.5: ${offset * 0.5}`)
  //   video.style.top = `${offset * 0.75}px`;
  // }

  // window.addEventListener('scroll', handleScrollHero);


  return (
    <div className="hero-container">
      {/* <div className="overlay"></div> */}
      <img src={guitar} alt="Guitar Hero" className="hero-img" />
      {/* <video src={videoHero} className="vid" autoPlay loop muted /> */}
      <h1>ADVENTURE TIME</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
