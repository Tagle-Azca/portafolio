import React from "react";
import Login from '../assets/IMG/Login.jpg'; 
import AnimatedText from "../Components/AnimatedText";
import AnimatedIcons from "../Components/AnimatedIcons";
import TopAnimated from "../Components/TopAnimated";
import { useSpring, animated } from 'react-spring';

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

const bienvenidosStyle = {
    position: "absolute",
    top: "45%",
    left: "10%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    
};

const bienvenidos2Style = {
    position: "absolute",
    top: "46%",
    left: "24.5%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    
};

const bienvenidos3Style = {
    position: "absolute",
    top: "55%",
    left: "12%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    
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

                <div className="Nombre">

                    <div className="Bienvenidos" style={bienvenidosStyle}>
                        <AnimatedText text='Andrés' />
                    </div>
                    <div className="Bienvenidos2" style={bienvenidos2Style}>
                        <AnimatedTextWithDelay text='Gómez Tagle Azcárraga' delay={1000} />
                    </div>
                    <div className="Bienvenidos2" style={bienvenidos3Style}>
                        <AnimatedTextWithDelay text='Software Developer' delay={2300} />
                    </div> 

                    

            </div>
        </div>
        );
    }
}

export default Start;
