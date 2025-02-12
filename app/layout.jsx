import React from 'react';
import Tumama from '@/components/Tumama'; {/*Importante llamar a */}
import {Fira_Code} from "next/font/google"; //Importacion del font

//datos externos
export const metadata = {
  title: "Ferreteria DINAV",
  Description: "Hola esta es la home de la pagina",
  keywords: "#Home , #Inicio, #paginaPrincipal"

}
//Fonts cambio de tipografia de toda la pagina
const Fira = Fira_Code({
  weight: ["300","400","500", "700"],
  style: ["normal"],
  subsets: ["latin-ext"]

})



/*Se ocupa esta madre para que se vea en la pagina lo que quieres pintar
pdt: borre la carpeta ya hecha y lo hice como en el video pero no se auto creo esta madre 
al hacer page .jsx estuve media hora con que no se veia TvT pero ya se arreglo jajaja */

/*aaaa yaaa se pa que sirves, muchas gracias :D parote */
const Layout = ({ children }) => {
  return (
    <html>
      <body className={Fira.className}>
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