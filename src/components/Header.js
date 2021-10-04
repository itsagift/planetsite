import React, {useState} from 'react';
import { Data } from '../data';

export default function Header({setPlanet}){
  const [open, setOpen] = useState(false);

    function handleLinkClick(planet) {
        setPlanet(planet);
        console.log(planet.name);
        if (open){
          setOpen(false);
        }
      }
      function handleHamburgerClick() {
        if (!open){
          setOpen(true);
        }
        else {
          setOpen(false);
        }
      }

return(
    <header>
    <div className="header__title">The Planets</div>
    <ul className={open ? "header__links active" : "header__links"}>
      {Data.map((card) => (
        <li
        className="header__link"
        onClick={() => handleLinkClick(card)}
        key={card.name}>
          {card.name}
        </li>
      ))}
    </ul>
    <div className={open ? "header__hamburger active" : "header__hamburger"} onClick={() => handleHamburgerClick()}>
      <img src= {require("assets/icon-hamburger.svg")} alt="icon hamburger"/>
    </div>
    </header>
)
}