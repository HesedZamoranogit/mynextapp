import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <h2>Sección Tienda</h2>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorías</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/herramientas">Herramientas</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Layout;