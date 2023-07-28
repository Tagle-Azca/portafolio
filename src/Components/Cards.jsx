import React from 'react';
import Grid from '@mui/material/Grid'; // Importa el componente Grid de Mui
import backgroundImage from '../assets/IMG/IMG_1936.JPG';

export default function Cards() {
  const carta1Style = {
    width: '750px',
    height: '500px',
    clipPath: 'polygon(25% 0%, 68.1% 0%, 45.1% 100%, 0% 100%)',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const carta2Style = {
    width: '750px',
    height: '500px',
    clipPath: 'polygon(25% 0%, 68.1% 0%, 45.1% 100%, 0% 100%)',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const carta3Style = {
    width: '750px',
    height: '500px',
    clipPath: 'polygon(25% 0%, 68.1% 0%, 45.1% 100%, 0% 100%)',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <Grid container spacing={2}> {/* Utilizamos el componente Grid y asignamos "container" */}
        <Grid item xs={3.2}>
          <div style={carta1Style} />
        </Grid>
        <Grid item xs={3.2}>
          <div style={carta2Style} />
        </Grid>
        <Grid item xs={1}>
          <div style={carta3Style} />
        </Grid>
      </Grid>
    </div>
  );
}
