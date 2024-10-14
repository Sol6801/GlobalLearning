import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../styles/clocks.module.css'

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


function Clocks() {
    const [showComponent, setShowComponent] = useState(false)

    const handleClick = () => {
      //!showComponent = true
      setShowComponent((prev)=>{
        return !prev
    })
    //* shrot ver: setShowComponent((prev)=> !prev) */
    } 

    useEffect(()=>{
    console.log('se montó el componente')
    //* limpieza de componentes cuando se desmontan*/
   return ()=>{
    console.log('se desmontó el componente')
   }
  },[showComponent])

    return (
      <div>
        <h1>Zona local actual:</h1>
        <section className={styles.mainClock}>
        <RelojInternacional zonaHoraria="America/Buenos_Aires" nombre="Buenos Aires" />
        </section>
        <button onClick={handleClick}>{showComponent ? 'Ocultar Horarios Internacionales' : 'Mostrar Horarios Internacionales'}</button> {/*setShowComponent(!showComponent) intercambia estado, niega negado*/}
        {showComponent ?  
        <section className={styles.clocks}>
        <RelojInternacional zonaHoraria="Europe/Madrid" nombre="Madrid" />
        <RelojInternacional zonaHoraria="America/New_York" nombre="Nueva York" />
        <RelojInternacional zonaHoraria="Asia/Tokyo" nombre="Tokio" />
        <RelojInternacional zonaHoraria="Australia/Sydney" nombre="Sídney" />
        </section>
        :null}
      </div>
    );
  }

export default Clocks