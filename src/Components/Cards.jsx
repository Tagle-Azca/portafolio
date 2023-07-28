import React from 'react';

// Importa la imagen con la ruta correcta
import backgroundImage from '../assets/IMG/IMG_1936.JPG';

export default function Cards() {
  const carta1Style = {
    width: '750px',
    height: '500px',
    clipPath: 'polygon(25% 0%, 68.1% 0%, 45.1% 100%, 0% 100%)',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen de fondo
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    backgroundPosition: 'center', // Ajusta la posición de la imagen
  };

  return (
    <div>
      <div style={carta1Style} />
      <h1>Checo</h1>
    </div>
  );
}
