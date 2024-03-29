import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Search from './Search';
import { Link } from 'react-router-dom';

const pages = [
  'international',
  'sports',
  'business',
  'entertainment',
  'politics',
  'gadgets',
];

let logo = process.env.PUBLIC_URL + '/logo.png';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="warning">
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense">
          <Link to="/">
            <Box
              component="img"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              alt=""
              src={logo}
            />
          </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ pl: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  to={`/${page}`}
                  key={index}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    marginRight: '10px',
                    display: 'block',
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link
            to="/"
            style={{
              margin: 'auto',
              display: 'flex',
              marginRight: '10px',
            }}
          >
            <Box
              component="img"
              alt=""
              src={logo}
              sx={{ display: { xs: 'inline-block', md: 'none' } }}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link
                to={`/${page}`}
                key={index}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'white',
                    display: 'block',
                    textTransform: 'capitalize',
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
