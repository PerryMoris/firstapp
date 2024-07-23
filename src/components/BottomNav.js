import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import Home from '@mui/icons-material/Home';


export default function BottomNav() {
  const [value, setValue] = React.useState('home');
  const navigate = useNavigate()

  const openLog = () =>{
    navigate('/log')
  }
  const openHome = () =>{
    navigate('/')
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className='bottomnav' value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<Home />}
        onClick={openHome}
      />
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
        onClick={openLog}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
