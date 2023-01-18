// Dark mode color palette : 
//Deep Ocean (https://material-theme.com/docs/reference/color-palette/)

const colorConfigs = (config)=>(config.theme === 'light'
  ? { // LIGHT MODE
    sidebar: {
      bg: "#F5F5F5",
      color: "#491D8B",
      shadow: "#00000040",
      hoverBg: "#d0c3da",
      activeBg: "#E6DFEB",
      border: "#491D8B"
    },
    topbar: {
      bg: "#ffffff",
      color: "#491D8B"
    },
    tab:{
      font: "#0F111A",
      indicater : "#45009C"
    },
    card:{
      font: "#0F111A",
      bg: "#FAFAFA"
    },
    mainBg: "#ffffff",
    mainFont: "#0F111A"
  } : { //DARK MODE 
    sidebar: {
      bg: "#181A1F",
      color: "#eeeeee",
      shadow: "#00000040",
      hoverBg: "#1F2233",
      activeBg: "#717CB480",
      border: "#CDB6EF"
    },
    topbar: {
      bg: "#0F111A",
      color: "#a7aab8"
    },
    tab:{
      font: "#eeffff",
      indicater : "#717CB480"
    },
    card:{
      font: "#eeffff",
      bg: "#717CB480"
    },
    mainBg: "#0F111A",
    mainFont: "#eeffff"
  }
);

export default colorConfigs;