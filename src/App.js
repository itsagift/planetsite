import React, {useState} from 'react';
import { Data } from './data';
import Header from './components/Header';
import Planet from './components/Planet';
import Footer from './components/Footer';

export default function App() {
  const earth = Data[2]
  const [planet, setPlanet] = useState(earth);

  return (
  <div className="content">
    <Header setPlanet={setPlanet}/>
    <Planet planet={planet}/>
    <Footer planet={planet}/>
    <div className="test"></div>
  </div>
  );
}