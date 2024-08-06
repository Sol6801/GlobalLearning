import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import styles from './styles/clocks.module.css'

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

function App() {
  return (
    <div>
      <section className={styles.mainClock}>
      <h1>Zona local actual:</h1>
      <RelojInternacional zonaHoraria="America/Buenos_Aires" nombre="Buenos Aires" />
      </section>
      <section className={styles.clocks}>
      <RelojInternacional zonaHoraria="Europe/Madrid" nombre="Madrid" />
      <RelojInternacional zonaHoraria="America/New_York" nombre="Nueva York" />
      <RelojInternacional zonaHoraria="Asia/Tokyo" nombre="Tokio" />
      <RelojInternacional zonaHoraria="Australia/Sydney" nombre="Sídney" />
      </section>
    </div>
  );
}


export default App
