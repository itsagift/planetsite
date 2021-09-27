import React, {useState} from 'react';
import { Data } from './data';
import Header from './components/Header';

export default function App() {
  const mercury = Data[0]
  const [testplanet, setPlanet] = useState(mercury);

  return (
  <div>
    <Header setPlanet={setPlanet}/>
    <div>{testplanet.name}</div>

  </div>
  );
}