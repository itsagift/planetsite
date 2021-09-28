import React, {useState} from 'react';

export default function Footer({planet}){
  return(
    <footer>
      <ul className="footer__links">
        <li className="footer__link">
          <div className="link__title">Rotation Time</div>
          <div className="link__stat">{planet.rotation}</div>
          </li>
        <li className="footer__link">
          <div className="link__title">Revolution Time</div>
          <div className="link__stat"> {planet.revolution}
          </div>
        </li>
        <li className="footer__link">
          <div className="link__title">Radius</div>
          <div className="link__stat">{planet.radius}</div>
        </li>
        <li className="footer__link">
          <div className="link__title">Average Temp</div>
          <div className="link__stat">{planet.temperature}</div>
        </li>
      </ul>
    </footer>
  )
}