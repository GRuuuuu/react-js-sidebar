import React, { useEffect } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Typography  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { setNavClick } from '../../lib/reducers/navReducer';


const SidebarItem = (item, index) => {
  const dispatch = useDispatch();
  const navClick = useSelector(state => state.navClick);
  const config = useSelector(state => state.config);

  const content = item.item;

  useEffect(() => {
    //Initial rendering
  }, []);

  return (
      <ListItemButton
        component={Link}
        to={content.to}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs(config).sidebar.hoverBg
          },
          //Change backgroundcolor when it is clicked
          backgroundColor: navClick.clicked === content.id ? colorConfigs(config).sidebar.activeBg : "unset",
          boxShadow: navClick.clicked === content.id ? `inset -1px 0 0 ${colorConfigs(config).sidebar.shadow}, inset 5px 0 0 ${colorConfigs(config).sidebar.border}`: "unset",
          paddingY: "12px",
          paddingX: "24px",
        }}
        onClick={()=>{dispatch(setNavClick(content.id));}}
      >
        <ListItemText
          disableTypography
          primary={
            <Typography>
              {content.display}
            </Typography>
          }
        />
      </ListItemButton>
  );
};

export default SidebarItem;