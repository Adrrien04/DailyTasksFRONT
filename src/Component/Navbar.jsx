import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import DrawerItem from './DrawerItem';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
        text: "Quêtes",
        to: "/quetes"
    },
    {
        text: "Utilisateurs",
        to: "/users"
    },
    { 
        text: "Connexion",
        to: "/login"
    },
    {
      text: "À propos",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];

const Navbar = () => {
    
    return (
        <AppBar component="nav" position="sticky" sx={{ backgroundColor: 'orange' }} elevation={0}>
            <StyledToolbar>
                <Typography variant="h6" component="h2">
                    Daily Quests
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;