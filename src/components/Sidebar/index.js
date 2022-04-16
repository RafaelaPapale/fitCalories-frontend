import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

const drawerWidth = 260;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      overflowX: "hidden",
      backgroundColor: "#d14600",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const styles = {
    boxPrincipal: {
      display: 'flex',
      m: 0,
      p: 0,
    },

    boxAvatar: {
      display: 'flex',
      justifyContent: 'center',
    },

    avatarAberto: {
      width: '150px',
      height: '150px',
    },

    avatarFechado: {
      width: '60px',
      height: '60px',
    },

    listItemButton: {
      backgroundColor: '#b03b00',
      height: '55px',
      '&:hover, &:selected, &:focused': {
        backgroundColor: '#de6021',
      }
    },

    color: {
      color: 'white',
    }
  };

  return (
    <Box sx={styles.boxPrincipal}>
      <Drawer variant="permanent" open={open} onClick={toggleDrawer}>
        <Box sx={styles.boxAvatar}>
          {open === true ?
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={styles.avatarAberto}
            />
            :
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={styles.avatarFechado}
            />
          }
        </Box>
        <List>
          <Link to="/dashboard">
            <ListItemButton disableRipple sx={styles.listItemButton}>
              <ListItemIcon>
                <DashboardIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
        <List>
          <Link to="/usuario">
            <ListItemButton disableRipple sx={styles.listItemButton}>
              <ListItemIcon>
                <PeopleIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Minha conta" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
    </Box>
  )
}