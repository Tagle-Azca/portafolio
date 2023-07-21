import React from "react";
import Login from '../assets/IMG/Login.jpg'; 
import AnimatedIcons from "../Components/AnimatedIcons";
import { useSpring, animated } from 'react-spring';
import Letras from "../Components/Letras";


const style = {
    backgroundImage: `url(${Login})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
};

// estilos textos e iconos

const iconContainerStyle = {
    position: "absolute",
    top: "50%",
    right: "1vw",
    fontSize: "2vw",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};


// estilos textos e iconos


const AnimatedTextWithDelay = ({ text, delay }) => {
    const styles = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'translateX(-100px)' }, // Iniciar desde fuera de la pantalla (izquierda)
        to: { opacity: 1, transform: 'translateX(0)' }, // Terminar en la posición actual (centro)
        config: { duration: 2000 }, // Ajustar la duración de la animación aquí (en milisegundos)
        delay,
        });
    
        return (
        <animated.div style={styles}>
            <h1 style={{ color: '#fff' }}>{text}</h1>
        </animated.div>
        );
    };

class Start extends React.Component {
    render() {
        return (
        <div className="Pagina" style={style}>

                <div className="Iconos" style={iconContainerStyle}>
                    <AnimatedIcons />
                </div>

                <div className="Nombre" style={{marginTop:'20%', marginRight:'60%'}}>
                    <Letras/>
                </div>
        </div>
        );
    }
}

export default Start;
