import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FolderIcon from '@mui/icons-material/Folder';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function NavBar() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        window.location.reload();
    };

    const items = [
        { text: 'Inicio', icon: <HomeIcon /> },
        { text: 'Nueva Solicitud', icon: <AddBoxIcon /> },
        { text: 'Solcitudes', icon: <CheckroomIcon /> },
        { text: 'PYMF', icon: <LocalShippingIcon /> },
        { text: 'Listas', icon: <ReceiptLongIcon /> },
        { text: 'Formato 7', icon: <FolderIcon /> },
        { text: 'Clientes', icon: <GroupIcon /> }
    ];

    const list = (anchor) => (
        <div
        style={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {items.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        </div>
    );

    const menuId = 'primary-search-account-menu';
    return (
        <div>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ position: 'fixed', top: 0, left: 0 }}
        >
            <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
            </div>
        </IconButton>

        <IconButton
            size="large"
            edge="end"
            aria-controls={menuId}
            onClick={handleLogout}
            color="inherit"
            sx={{}}
        >

        </IconButton>
        </div>
    );
}
