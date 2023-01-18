import React, { useEffect, useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import colorConfigs from "../../configs/colorConfigs";

import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import SidebarItem from './SidebarItem'
import SidebarChildItem from './SidebarChildItem';

const SidebarItemCollapse  = (item) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const navClick = useSelector(state => state.navClick);
  const config = useSelector(state => state.config);

  const content = item.item;

  useEffect(() => {
    //Initial rendering
  }, []);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs(config).sidebar.hoverBg
          },
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        <ListItemText
            disableTypography
            primary={
              <Typography>
                {content.display}
              </Typography>
            }
          />
          {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {content.child?.map((route, index) => (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarChildItem item={route} key={index} />
            )
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarItemCollapse;