import React from 'react';
import { Data } from '../data';

export default function Header({setPlanet}){

    function handleOrangeClick(planet) {
        setPlanet(planet);
        console.log(planet.name);
      }

return(
    <header>
    <ul className="navlinks">
      {Data.map((card) => (
        <li
        onClick={() => handleOrangeClick(card)}
        key={card.name}>
          {card.name}
        </li>
      ))}
    </ul>
    </header>
)
}