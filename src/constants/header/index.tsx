import * as React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/aboutus' },
  { name: 'Pages', path: '#' },
  { name: 'Blog', path: '/blog' },
  { name: 'Shop', path: '#' },
  { name: 'Contact', path: '/contact' }
];
const pagesMenuItems = {
  Pages: ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'],
  Shop: ['Shop 1', 'Shop 2', 'Shop 3', 'Shop 4', 'Shop 5']
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElPages, setAnchorElPages] = React.useState<null | HTMLElement>(null);
  const [anchorElShop, setAnchorElShop] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenPagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPages(event.currentTarget);
  };

  const handleOpenShopMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElShop(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClosePagesMenu = () => {
    setAnchorElPages(null);
  };

  const handleCloseShopMenu = () => {
    setAnchorElShop(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#41246D', color: 'white', minHeight: '20px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: '20px', px: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <PhoneIcon sx={{ mr: 1, fontSize: 18 }} />
                  <Typography variant="body2" sx={{ mr: 2 }}>+1 234 567 890</Typography>
                  <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
                  <Typography variant="body2" sx={{ mr: 2 }}>info@example.com</Typography>
                  <HomeIcon sx={{ mr: 1, fontSize: 18 }} />
                  <Typography variant="body2">123 Example St, City, Country</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                  <IconButton color="inherit" href="https://twitter.com" sx={{ p: 0.5 }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="inherit" href="https://facebook.com" sx={{ p: 0.5 }}>
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="inherit" href="https://youtube.com" sx={{ p: 0.5 }}>
                    <YouTubeIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="inherit" href="https://instagram.com" sx={{ p: 0.5 }}>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="inherit" href="https://linkedin.com" sx={{ p: 0.5 }}>
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.path}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => {
                if (page.name === 'Pages' || page.name === 'Shop') {
                  return (
                    <div key={page.name}>
                      <Button
                        onClick={page.name === 'Pages' ? handleOpenPagesMenu : handleOpenShopMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {page.name}
                      </Button>
                      <Menu
                        anchorEl={page.name === 'Pages' ? anchorElPages : anchorElShop}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        open={Boolean(page.name === 'Pages' ? anchorElPages : anchorElShop)}
                        onClose={page.name === 'Pages' ? handleClosePagesMenu : handleCloseShopMenu}
                      >
                        {pagesMenuItems[page.name].map((menuItem) => (
                          <MenuItem key={menuItem} onClick={page.name === 'Pages' ? handleClosePagesMenu : handleCloseShopMenu}>
                            <Typography textAlign="center">{menuItem}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  );
                }

                return (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.path}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
                component={Link}
                to="/auth/login"
              >
                Join Us Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
