import React from 'react';
import Tumama from '@/components/Tumama'; {/*Importante llamar a */}

/*Se ocupa esta madre para que se vea en la pagina lo que quieres pintar
pdt: borre la carpeta ya hecha y lo hice como en el video pero no se auto creo esta madre 
al hacer page .jsx estuve media hora con que no se veia TvT pero ya se arreglo jajaja */

/*aaaa yaaa se pa que sirves, muchas gracias :D parote */
const Layout = ({ children }) => {
  return (
    <html>
      <body>
        {/*Podemos utilizar el codigo de las navegaciones tambien como un componente 
        lo cual acabamos de mandar a llamar aqui */}
        <Tumama/>
        {children}
      </body>
    </html>
  );
};

export default Layout;

{/*esta e sotra forma de mandar a llamar un componente peeeeero tambien una forma mas organizada es hacer
  una carpeta Components */}