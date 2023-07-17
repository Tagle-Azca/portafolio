import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = ({ text }) => {
  const styles = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)', fontSize:'2rem'}, // El texto inicia 100px a la izquierda
    config: { tension: 200, friction: 200 }, // Configuración de la animación
  });

  return (
    <animated.div style={styles}>
      <h1 style={{color:"#fff"}}>{text}</h1>
    </animated.div>
  );
};

export default AnimatedText;
