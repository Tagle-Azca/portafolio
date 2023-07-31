import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import backgroundImage from '../assets/IMG/IMG_1936.JPG';
import Graduate from '../assets/IMG/graduate.jpg';

export default function Cards() {

  const carta1Style = {
    width: '350px',
    height: '500px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease', // Agrega una transición suave de opacidad
  };
  
  const carta2Style = {
    width: '350px',
    height: '500px',
    backgroundImage: `url(${Graduate})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease', 
  };
  
  const carta3Style = {
    width: '350px',
    height: '500px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease', // Agrega una transición suave de opacidad
  };

  // Estado para manejar la opacidad al pasar el mouse
  const [isHoveringCard1, setIsHoveringCard1] = useState(false);
  const [isHoveringCard2, setIsHoveringCard2] = useState(false);
  const [isHoveringCard3, setIsHoveringCard3] = useState(false);

  return (

    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div
            style={{ ...carta1Style, opacity: isHoveringCard1 ? 0.4 : 1 }}
            onMouseEnter={() => setIsHoveringCard1(true)}
            onMouseLeave={() => setIsHoveringCard1(false)}
          />
        </Grid>
        <Grid item xs={4}>

          <div
            style={{ ...carta2Style, opacity: isHoveringCard2 ? 0.4 : 1 }}
            onMouseEnter={() => setIsHoveringCard2(true)}
            onMouseLeave={() => setIsHoveringCard2(false)}
          />
          
        </Grid>
        <Grid item xs={1}>
          <div
            style={{ ...carta3Style, opacity: isHoveringCard3 ? 0.4 : 1 }}
            onMouseEnter={() => setIsHoveringCard3(true)}
            onMouseLeave={() => setIsHoveringCard3(false)}
          />
        </Grid>
      </Grid>
    </div>
    
  );
}
