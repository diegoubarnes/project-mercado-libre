import React from 'react';

import './styles/Welcome.sass';
import LogoWelcome from '../assets/images/meli.jpg';

function Welcome () {
  return (
    <div className="Welcome">
      <img
        className="Welcome__img"
        src={LogoWelcome}
        alt="imagen de su articulo"
      />
      <br />
      <h2>Bienvenido a <strong>Mercado Libre</strong> </h2>
      <p>
        La comunidad de compra y venta online más grande de América Latina.
      </p>
      <strong>Nunca pares de buscar</strong>
    </div>
  );
}

export default Welcome;
