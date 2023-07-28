import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

// Define tu propio tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff', // Cambia el color principal aquí
    },
  },
});

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function PlaygroundSpeedDial() {
  const [hidden, setHidden] = React.useState(false);

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Box sx={{ position: 'relative', mt: 1, height: 305 }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            direction="down"
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </StyledSpeedDial>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
