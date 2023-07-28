import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../CSS/Arrow.css';

const Arrow = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div onClick={handleScrollToBottom} style={{ cursor: 'pointer' }}> {/* Agrega el estilo aquí */}
        <ExpandMoreIcon style={{ fontSize: '50px', color: 'white'}} className="bouncing-arrow" />
      </div>
      <div onClick={handleScrollToBottom} style={{ cursor: 'pointer' }}> {/* Agrega el estilo aquí */}
        <ExpandMoreIcon style={{ fontSize: '80px', color: 'white', marginTop:'-50px' }} className="bouncing-arrow" />
      </div>
    </div>
  );
};

export default Arrow;

