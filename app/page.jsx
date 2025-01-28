import React from 'react';
 // Asegúrate de que la ruta sea correcta
import styles from './home.module.css';

const HomePage = () => {

  const egresado = true;

  return (
    <div>
      <h1
      className={`${styles['title']} ${!egresado ? styles['title--hidden'] : ''}`}
      >Bienvenido a la Página Principal</h1>
    </div>
  );
};

export default HomePage;
/*Sabemos que se va a ver reflejado lo que aqui se dibuje, pero si queremos que otra ruta del localhost
exista como LocalHost/about hacemos una carpeta llamada about dentro de la carpeta app y 
metemos una page que nos permitira modificar la ruta about*/

/*y asi con una tienda tattatatatata, otra cosa importante es que incluso dentro de otras rutas creadas 
tambien puedes meter otras, como dentro de tienda una ruta llamada categorias/laptops tatatatta*/