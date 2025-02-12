"use client"
import React from "react";
// Asegúrate de que la ruta sea correcta
import styles from "./home.module.css";


const HomePage = () => {
  const egresado = true;
  return (
    <section>

      
      <div>
        <h1
          className={`${styles["title"]} ${
            !egresado ? styles["title--hidden"] : ""
          }`}>
          Bienvenido a la Página Principal
        </h1>
        <button onClick={() => {alert("CUIDADO TE VAN A PETATEAR")}}>Clickeame we</button>
      </div>
      
    </section>//Invocamos la funcion OnClick, lo que hace que nos permita hacer que el boton al clickear haga algo,
              //en este momento esta regresando una funcion vasia. 
  );
};


export default HomePage;
/*Sabemos que se va a ver reflejado lo que aqui se dibuje, pero si queremos que otra ruta del localhost
exista como LocalHost/about hacemos una carpeta llamada about dentro de la carpeta app y 
metemos una page que nos permitira modificar la ruta about*/

/*y asi con una tienda tattatatatata, otra cosa importante es que incluso dentro de otras rutas creadas 
tambien puedes meter otras, como dentro de tienda una ruta llamada categorias/laptops tatatatta*/
