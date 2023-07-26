import react from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../CSS/Arrow.css'

export default function Arrow() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <ExpandMoreIcon style={{ fontSize: '50px', color: 'white'}} className="bouncing-arrow" />
            </div>
            <div>
                <ExpandMoreIcon style={{ fontSize: '80px', color: 'white', marginTop:'-50px' }} className="bouncing-arrow" />
            </div>
        </div>
    );
}