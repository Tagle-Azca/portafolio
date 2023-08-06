import React from "react";
import AnimatedIcons from "../Components/AnimatedIcons";
import Letras from "../Components/Letras";
import Background from '../Components/AnimatedBack';
import ArrowDown from '../Components/ArrowDown'
import Cards from '../Components/Cards'
import SpeedDial from '../Components/SpeedDial'
import Fotos from '../Components/Fotos'
import Head from "../Components/Head";


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
const Dial = {
    position: "absolute",
    top: "1%",
    right: "1%",
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
            <main style={mainContainerStyle}>
                <Background />
                    <div className="Iconos" style={iconContainerStyle}>
                        <AnimatedIcons />
                    </div>
                    

                    <div className="Dial" style={Dial}>
                        <SpeedDial/>
                    </div>

                    <div className="Nombre" style={{ ...letrasContainerStyle, marginTop: '20%' }}>
                        <Letras />
                    </div>

                    <div className="Arrow" style={{ marginTop: '15%' }}>
                        <ArrowDown />
                    </div>

                    <div className="CardsSection" style={{ marginTop: '10vh', marginLeft: '0%', position: 'relative' }}>
                        <Head/>
                    </div>
                    
                
            </main>
        );
    }
}

export default Start;
