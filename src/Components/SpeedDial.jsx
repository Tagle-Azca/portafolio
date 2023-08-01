import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useCallback, useState } from 'react'; // Importa useCallback y useState

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff',
    },
  },
});

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  right: theme.spacing(2),
  transform:'scale(0.8)',
}));

export default function PlaygroundSpeedDial() {
  const [hidden] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Estado para controlar si el Snackbar está abierto o cerrado

  const handlePhoneClick = useCallback(() => {
    const phoneNumber = '3322610506';
    window.location.href = `tel:${phoneNumber}`;
  }, []);

  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:gtaglea@hotmail.com';
  }, []);

  const handleShareClick = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tables page',
          text: 'Portafolio de tagle',
          url: 'https://www.ejemplo.com',
        });
        console.log('Contenido compartido exitosamente.');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    } else {
      // Mostrar el Snackbar si la API Web Share no es compatible
      setSnackbarOpen(true);
    }
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ transform: 'translateZ(10px)', flexGrow: 1 }}>
        <Box sx={{ position: 'relative', mt: 1, height: 250 }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            direction="down"
          >
            <SpeedDialAction
              key="Contact"
              icon={<ContactPhoneIcon />}
              tooltipTitle="Contact"
              onClick={handlePhoneClick}
            />
            <SpeedDialAction
              key="Email Me"
              icon={<EmailIcon />}
              tooltipTitle="Email Me"
              onClick={handleEmailClick}
            />
            <SpeedDialAction
              key="Share"
              icon={<ShareIcon />}
              tooltipTitle="Share"
              onClick={handleShareClick}
            />
          </StyledSpeedDial>



          {/* Snackbar que se muestra si la API Web Share no es compatible */}
          <Snackbar
              open={snackbarOpen}
              autoHideDuration={5000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              style={{ marginTop: '250px' }}
            >
              <MuiAlert severity="info" onClose={handleSnackbarClose}>
                La función de compartir no es compatible con este navegador.
              </MuiAlert>
            </Snackbar>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
