import React from 'react';
import { useSpring, animated } from 'react-spring';

const TopAnimated = ({ text }) => {
    const styles = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translatey(-100px)', fontSize:'1vh'},
        config: { tension: 200, friction: 200 }, 
    });

    return (
        <animated.div style={styles}>
        <h1 style={{color:"#fff"}}>{text}</h1>
        </animated.div>
    );
};

export default TopAnimated;
