import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useSpring, animated } from 'react-spring';

const AnimatedIcons = () => {
    const styles = useSpring({
        opacity: 1,
        transform: 'translateY(0)', // Animación vertical hacia abajo
        from: { opacity: 0, transform: 'translateY(-50px)' }, // Animación desde arriba (-50px)
        config: { tension: 200, friction: 200 },
    });

    return (
        <animated.div style={styles}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <a href="https://www.instagram.com/tagle.26/" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
                    <InstagramIcon fontSize="large" />
                </a>
                <a href="https://github.com/Tagle-Azca" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
                    <GitHubIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/andres-gomez-tagle-azcarraga-246274161/" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
                    <LinkedInIcon fontSize="large" />
                </a>
            </div>
        </animated.div>
    );
};

export default AnimatedIcons;
