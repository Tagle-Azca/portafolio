import React from "react";
import AnimatedIcons from "../Components/AnimatedIcons";
import Letras from "../Components/Letras";
import Background from '../Components/AnimatedBack';
import ArrowDown from '../Components/ArrowDown';
import SpeedDial from '../Components/SpeedDial'
import Head from "../Components/Head";
import SideBar from '../Components/SideBar';

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
    minHeight: "100vh", //min height of container
};

class Start extends React.Component {
    render() {
        return (
            <div>
                <div className="Sidebar" style={{ position: 'fixed', zIndex: 1, color:'#fff', top:'10' }}>
                    <SideBar/>
                </div>
                <main style={mainContainerStyle}>
                <Background style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
                    
                        <div1 id="inicio" style={{ ...mainContainerStyle, position: 'relative' }}>
                            <div style={{ position: 'fixed', top: 10, right: '41%', transform: 'translateX(-50%)', zIndex: 1 }}>
                                <div className="Iconos" style={iconContainerStyle}>
                                    <AnimatedIcons />   
                                </div>
                            </div>
                            <div className="DialDIV" style={{ position: 'fixed', top: 0, right: '1%', transform: 'translateX(-50%)', zIndex: 1 }}>
                                <div className="Dial" style={Dial}>
                                    <SpeedDial/>
                                </div>
                            </div>
                                    
                <Background />
                        

                        <div className="Nombre" style={{  ...letrasContainerStyle, marginTop: '20%' }}>
                            <Letras />
                        </div>
                        <div className="Arrow" style={{ marginTop: '15%' }}>
                            <ArrowDown />
                        </div>
                    </div1>
                    <div className="head" style={{ position: 'absolute' }}>
                        <Head />
                    </div>
                </main>
            </div>
        );
    }
}

export default Start;
