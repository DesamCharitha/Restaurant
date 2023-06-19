import React from "react";
import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Pasta from "../images/pasta.jpg";

import { Button } from "@mui/material";

export const MenuList = [
  {
    name: "Dosa",
    description: "Price is Rs.200",
    image: Dosa,
    price: 200,
  },
  {
    name: "Chola",
    description: "Price is Rs.250",
    image: Chola,
    price: 250,
  },
  {
    name: "Idli Sambhar",
    description: "Price is Rs.300",
    image: Idli,
    price: 300,
  },
  {
    name: "Masala Curry",
    description: "Price is Rs.100",
    image: MasalaDosa,
    price: 100,
  },
  {
    name: "Paneer",
    description: "Price is Rs.400",
    image: Paneer,
    price: 400,
  },
  {
    name: "Pasta",
    description: "Price is Rs.500",
    image: Pasta,
    price: 500,
  },
];

function Menu() {
  return (
    <div>
      {MenuList.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>Price: Rs. {item.price}</p>
          <Button variant="contained" onClick={() => handleButtonClick()}>
            BUY NOW
          </Button>
        </div>
      ))}
    </div>
  );
}

function handleButtonClick() {
  // Code to handle button click
}

export default Menu;
