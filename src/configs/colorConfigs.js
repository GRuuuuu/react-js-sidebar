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
      color: "#491D8B",
      btn: {
        bg: "#ffffff",
        font: "#491D8B",
        border:"#491D8B",
        hover:"#F5F5F5"
      }
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
      bg: "#181A1F",
      color: "#a7aab8",
      btn: {
        bg: "#717CB480",
        font: "#eeffff",
        border:"#0F111A",
        hover:"#292D3E"
      }
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