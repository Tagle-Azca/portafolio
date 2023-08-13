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
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
        { text: 'HOME', icon: <HomeIcon /> },
        { text: 'SKILLS', icon: <CodeIcon /> },
        { text: 'ABOUT ME', icon: <EmojiPeopleIcon /> },
        { text: 'SCHOOL INFO', icon: <SchoolIcon /> },
        { text: 'HOOBBIES', icon: <SportsEsportsIcon /> },
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
                        <ListItemButton
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)'; 
                                e.target.style.color = '#3498DB'; 
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)'; 
                                e.target.style.color = 'grey'; 
                            }}
                            style={{ transition: 'transform 0.1s, color 0.1s', color: 'grey' }}
                        >
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
            sx={{ position: 'fixed', top: 0, left: 30 }}
        >
            <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)} >{anchor}</MenuIcon>
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