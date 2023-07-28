import React from "react";
import AnimatedIcons from "../Components/AnimatedIcons";
import Letras from "../Components/Letras";
import Background from '../Components/AnimatedBack';
import ArrowDown from '../Components/ArrowDown'
import Cards from '../Components/Cards'

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

const letrasContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    height: "100%", 
};

const mainContainerStyle = {
    minHeight: "180vh", // Altura mínima del 100% del viewport
};


class Start extends React.Component {
    render() {
        return (
            <div style={mainContainerStyle}>
                <Background />
                <div className="Iconos" style={iconContainerStyle}>
                    <AnimatedIcons />
                </div>

                <div className="Nombre" style={{ ...letrasContainerStyle, marginTop: '20%' }}>
                    <Letras />
                </div>

                <div className="Arrow" style={{ marginTop: '15%' }}>
                    <ArrowDown />
                </div>

                <div className="CardsSection" style={{ marginTop: '45vh', marginLeft: '10%', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, margin: '0 auto' }}>
                        <Cards />
                    </div>
                </div>

                {/* Aquí puedes agregar más secciones con contenido e importaciones */}
            </div>
        );
    }
}

export default Start;
