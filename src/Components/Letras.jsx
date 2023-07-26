import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import styles from '../CSS/styles.module.css';

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 4000, friction: 2000 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div>
        {trail.map(({ height, ...style }, index) => (
            <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
        ))}
        </div>
    );
    };

    export default function App() {
    const [open, set] = useState(true);

    return (
        <div className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
            <span style={{ fontSize: '3rem', marginLeft:'33%'}}>Andrés</span>
            <span style={{ fontSize: '2.5rem' }}>Gómez  Tagle  Azcárraga</span>
            <span style={{ fontSize: '2rem', marginLeft:'19%',}}>Software Developer</span>
        </Trail>
        </div>
    );
}
