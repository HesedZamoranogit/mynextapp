import React from 'react';
import Link from 'next/link';
{/*Manera en la que hacemos una lista de rutas como botones que
        al clickear te mandan a otra ruta dentro de la misma pagina
        
        Simplemente que solo es un ejemplo las rutas se seguiran viedo en
        tu pagina si no quisiseras seria d eotr amanera o depende de tu diseño
        
        Aun asi no es lo mas optimo es mejor usar la etiqueta link*/}


      
        
        const Tumama = () => {
          return (
            <nav>
              <h1>Navegación</h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/tienda">Tienda</Link>
                </li>
              </ul>
            </nav>
          );
        };
        
        export default Tumama;