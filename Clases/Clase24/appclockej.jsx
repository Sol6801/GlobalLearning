import './App.css'
import Clocks from './components/clocks';
import { useState, useEffect } from 'react';


function RelojInternacional({ zonaHoraria, nombre }) {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const opciones = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const horaLocal = hora.toLocaleTimeString('es-ES', { timeZone: zonaHoraria, ...opciones });

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{horaLocal}</p>
    </div>
  );
}


function SelectorZonaHoraria({ zonas, onZonaChange }) {
  return (
    <select onChange={(e) => onZonaChange(e.target.value)}>
      {zonas.map((zona, index) => (
        <option key={index} value={zona}>
          {zona}
        </option>
      ))}
    </select>
  );
}

function App() {
  const zonas = ["Europe/Madrid", "America/New_York", "Asia/Tokyo", "Australia/Sydney"];
  const [zonaActual, setZonaActual] = useState(zonas[0]);

  return (
    <div>
      <SelectorZonaHoraria zonas={zonas} onZonaChange={setZonaActual} />
      <RelojInternacional zonaHoraria={zonaActual} nombre={zonaActual} />

      <Clocks/>
    </div>
  );
}


export default App
