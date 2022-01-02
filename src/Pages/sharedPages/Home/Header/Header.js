import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import Navigation from '../../../../components/Navigation';
import ProflieMenu from './ProfileMenu/ProfileMenu';

const navigate = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'About us',
    path: '/aboutus',
  },
  {
    name: 'Contact us',
    path: '/contactus',
  },
];

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [showNavBar, setShowNavBar] = useState(true);
  const [show, setShow] = useState(false);

  let navigateTo = useNavigate();
  const showNavIcon = useMediaQuery('(max-width:750px)');

  // get the user info (later)
  const handleClick = () => {
    setShow(!show);
  };

  // show or hide navbar based on scroll
  const handleNavbar = () => {
    window.scrollY > 100 ? setShowNavBar(false) : setShowNavBar(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbar);

    return () => {
      window.removeEventListener('scroll', handleNavbar);
    };
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        display: showNavBar ? 'flex' : 'none',
      }}
      elevation={2}
    >
      <Toolbar
        sx={
          showNavIcon
            ? { justifyContent: 'space-evenly' }
            : { justifyContent: 'space-evenly' }
        }
      >
        {/* navbar icon */}
        {showNavIcon && (
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: '#000' }}
            onClick={handleClick}
          >
            {show ? <ImCross /> : <AiOutlineMenu />}
          </IconButton>
        )}

        {/* logo */}
        <Link to="/">
          <img src={logo} width={155} height={45} alt="logo" />
        </Link>

        {/* anchors */}
        {!showNavIcon ? (
          <Box
            sx={{
              display: 'flex',
              color: '#000',
              mx: 'auto',
            }}
          >
            {navigate.map((nav, i) => (
              <Button
                key={i}
                sx={{ px: 0.75, py: 1.25, mx: 1.2, fontSize: 22 }}
              >
                <Navigation name={nav.name} path={nav.path} />
              </Button>
            ))}
          </Box>
        ) : null}
        {/* cart */}
        <IconButton sx={{ mr: 1 }}>
          <Badge badgeContent={4} color="primary">
            <BsCart4 />
          </Badge>
        </IconButton>

        {/* toggle based on login state */}
        {user?.email ? (
          <ProflieMenu />
        ) : (
          <Button
            variant="outlined"
            sx={{
              borderRadius: 44,
              px: { xs: 2, md: 3 },
              fontSize: { xs: 16, md: 22 },
              color: red[500],
            }}
            onClick={() => navigateTo('/login')}
          >
            login
          </Button>
        )}
      </Toolbar>
      {show && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {navigate.map((nav, i) => (
            <Button key={i} sx={{ py: 1.25, fontSize: 22 }}>
              <Navigation name={nav.name} path={nav.path} />
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
