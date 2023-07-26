import React from "react";
import AnimatedIcons from "../Components/AnimatedIcons";
import Letras from "../Components/Letras";
import Background from '../Components/AnimatedBack';

const iconContainerStyle = {
    position: "absolute",
    top: "1%",
    right: "41%",
    fontSize: "2vw",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
};

// Estilos para el contenedor del componente Letras
const letrasContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    height: "100%", 
};

class Start extends React.Component {
    render() {
        return (
            <div>
                <Background />
                <div className="Iconos" style={iconContainerStyle}>
                    <AnimatedIcons />
                </div>

                    <div className="Nombre" style={{ marginTop: '20%', ...letrasContainerStyle }}>
                        <Letras />
                    </div>
            </div>
        );
    }
}

export default Start;
