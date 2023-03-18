import * as React from 'react';
import { Component, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import SearchBar from '../Atoms/SearchBar';
import { NavLink } from 'react-router-dom';

const HeaderLinks = [
  { id: 1, title: 'Main', path: '/' },
  { id: 2, title: 'About', path: '/about' },
];

class Header extends Component {
  render(): ReactNode {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            {HeaderLinks.map((item) => (
              <NavLink to={item.path}>
                <Link color="inherit" underline="none" key={item.id}>
                  {item.title}
                </Link>
              </NavLink>
            ))}
            <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Header;
