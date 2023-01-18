import * as React from 'react';
import { Drawer, List, Stack, Toolbar, Typography, Box } from "@mui/material";
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';

import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

import { useDispatch, useSelector } from 'react-redux';

import './sidebar.scss';

const sidebarNavItems = [
  {
      id: 'Landing',
      display: 'Landing',
      icon: <i className='bx bx-home'></i>,
      to: '/'
  },
  {
      id: 'sample',
      display: 'Sample',
      icon: <i className='bx bx-star'></i>,
      to: '/sample1',
      child: [
        {
          id: 'sample1',
          display: 'sample1',
          to: '/sample1',
        },
        {
          id: 'sample2',
          display: 'sample2',
          to: "/sample2",
        },
        {
          id: 'sample3',
          display: 'sample3',
          to: "/sample3",
        }
      ]
  }
];

const Sidebar = () => {

  const colorConfig = useSelector(state => state.config);

    return (
      <Drawer
        variant="permanent"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "230px",
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: colorConfigs(colorConfig).sidebar.bg,
            boxShadow: `inset -1px 0 0 ${colorConfigs(colorConfig).sidebar.shadow}`,
            color: colorConfigs(colorConfig).sidebar.color
          }
        }}
      >
        <List disablePadding>
          <Toolbar >
              <Stack
                  sx={{ width: "100%" }}
                  direction="row"
                  justifyContent="center"
              >
                  <Typography component="div">
                    <Box sx={{ fontStyle: 'italic',  fontSize: 16 ,  fontWeight: 800 }}>
                      Simple Sidebar
                    </Box>
                  </Typography>
              </Stack>
          </Toolbar>
          <List>
              {sidebarNavItems.map((item, index) => (
                item.child? (
                  <SidebarItemCollapse item={item} key={index} />
                ) : (
                  <SidebarItem item={item} key={index} />
                )
              ))}
              
          </List>
        </List>
      </Drawer>
    );
  };
  

export default Sidebar;