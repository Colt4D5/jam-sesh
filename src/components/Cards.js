import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-5.jpg";
import img9 from "../assets/images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these amazing Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle."
              label="Adventure"
              Path="./services"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of Bali in a private Cruise."
              label="Luxury"
              Path="./services"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src={img3}
              text="Explore the hidden waterfall deep inside the Amazon Jungle."
              label="Adventure"
              Path="./services"
            />
            <CardItem
              src={img4}
              text="Travel through the Islands of Bali in a private Cruise."
              label="Luxury"
              Path="./services"
            />
            <CardItem
              src={img5}
              text="Travel through the Islands of Bali in a private Cruise."
              label="Luxury"
              Path="./services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
