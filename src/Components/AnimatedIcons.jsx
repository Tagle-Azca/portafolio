import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useSpring, animated } from 'react-spring';

const AnimatedIcons = () => {
    const styles = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(50px)' },
        config: { tension: 200, friction: 200 },
    });

    return (
        <animated.div style={styles}>
        <div style={{ marginBottom: "1vw" }}>
            <a href="https://www.instagram.com/tagle.26/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <InstagramIcon fontSize="large" />
            </a>
        </div>
        <div style={{ marginBottom: "1vw" }}>
            <a href="https://github.com/Tagle-Azca" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <GitHubIcon fontSize="large" />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/andres-gomez-tagle-azcarraga-246274161/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <LinkedInIcon fontSize="large" />
            </a>
        </div>
        </animated.div>
    );
};

export default AnimatedIcons;
