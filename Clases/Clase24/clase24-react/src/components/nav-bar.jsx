import styles from '../styles/nav-bar.module.css'

function Navbar() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar 