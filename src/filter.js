import React, { useState, createContext } from "react";
import "./filter.css";
import { data } from "./data";
import Card from "./Card";
import Button from "./Button";
import NavBar from "./Navbar";
import LoginProvider from "./LoginProvider";




function Cards() {
  const [cards, setCards] = useState(data);
  const cats = ["all", ...new Set(data.map((card) => card.category))];

  const filter = (cat) => {
    if (cat === "all") {
      setCards(data);
      return;
    }
    setCards(data.filter((item) => item.category === cat));
  };

  return (
    <div className="App">

        <LoginProvider>
        <NavBar/>
        </LoginProvider>
      <h1>ACHIEVEMENTS</h1>
      <Button categories={cats} handleClick={filter} />
      <Card allcards={cards} />
    </div>
  );
}

export default Cards;