import { AppBar, Toolbar, Typography, Link, Avatar, Box, Button} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../lib/reducers/configReducer';
import {Search, SearchIconWrapper, StyledInputBase} from '../searchBar/searchBar'

const Topbar = () => {

  const colorConfig = useSelector(state => state.config);
  const dispatch = useDispatch();
  console.log(colorConfig.theme);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs(colorConfig).topbar.bg,
        color: colorConfigs(colorConfig).topbar.color
      }}
    >
      <Toolbar>
        <Box display='flex' flexGrow={1}/>

        <Search sx={{ marginRight: '30px'}} >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Button variant="outlined" 
          href="/"  
          target="_blank" 
          color="inherit"
          size="small"
          sx={{ marginRight: '30px' }}
          >
          Btn1
        </Button>
        <Button variant="outlined" 
          href="/"  
          target="_blank" 
          color="inherit"
          size="small"
          sx={{ marginRight: '20px' }}
          >
          Btn2
        </Button>
    

        <IconButton 
          sx={{ marginRight: '30px' }} 
          onClick={()=>{dispatch(setTheme(colorConfig.theme === 'light' ? 'dark':'light'))}} 
          color="inherit"
        >
          {colorConfig.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Avatar 
          sx={{ width: 32, height: 32 }} 
          alt="profile" 
          src={ require('../../assets/img/hololy.jpg')}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;