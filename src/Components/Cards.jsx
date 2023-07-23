import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import Cards from '../Components/Cards'; // Asegúrate de importar correctamente el componente Cards

const cardStyles = {
  position: 'absolute',
  maxWidth: '500px',
  maxHeight: '500px',
  width: '350px',
  height: '200px',
  cursor: 'pointer',
  willChange: 'transform, opacity',
  backgroundSize: 'cover',
};

export default function App() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}
      onClick={() => set(state => !state)}
    >
      {/* Renderizar el componente Cards aquí */}
      <Cards />
      {/* Fin de componente Cards */}
      <a.div
        className="card back"
        style={{
          ...cardStyles,
          backgroundImage: 'url(src/assets/IMG/929202.jpg)', // Ruta a tu imagen
          opacity: opacity.to(o => 1 - o),
          transform,
        }}
      />
      <a.div
        className="card front"
        style={{
          ...cardStyles,
          backgroundImage: 'url(src/assets/IMG/car_sports_car_neon_145748_3840x2160.jpg)', // Ruta a tu imagen
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  );
}
