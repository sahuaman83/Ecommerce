import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import Link from "next/link";
// import router from "next/router";
// import i18next from "i18next";
// import { useTranslation } from "react-i18next";
import { styled } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RenderMenu from "./RenderMenu";
import UseStyles from "./useStyles";
// import { slugName, deleteCookie } from "utils/utils";
// import { setUserDetails } from "actions/globalAction";
// import { menuApi } from "api/classification";
import styles from "./NavBar.module.scss";

const NavBar = ({
  userDetails,
  setUserDetails,
  setActiveTab,
  tabs,
  value,
  handleChange,
}) => {
//   const { t } = useTranslation();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const classes = UseStyles();
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("En");
  const [anchorEl, setAnchorEl] = useState(null);
  const [opens, setOpens] = useState(false);
  const [classification, setClassification] = useState([]);
  const anchorRef = React.useRef(null);

  useEffect(() => {}, []);

  const handleToggle = () => {
    setOpens((prevOpen) => !prevOpen);
  };

  const handleCloses = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpens(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpens(false);
    }
  };
  const brandLogo = (
    <Typography variant="h6" component="h1" className={classes.logo}>
      <img src="/logo.png" />
    </Typography>
  );

  useEffect(() => {
    // i18next.changeLanguage("en");
    //Manually setting responsiveness for Navbar since material UI navbar is not responsive
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLang = (lang, name) => {
    // i18next.changeLanguage(lang);
    setText(name);
    setAnchorEl(null);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: "4px",
    },
    "& .MuiTabs-indicatorSpan": {
      marginTop: "0px",
      maxWidth: "129px",
      borderRadius: "20px 20px 0px 0px",
      width: "100%",
      backgroundColor: "#FB2727",
    },
  });

  const StyledTab = styled((props) => <Tab {...props} />)({
    "& .MuiTab-textColorInherit": {
      opacity: "0.5",
    },
  });

  const displayDesktop = () => {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={classes.toolbar}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingTop: "30px",
                paddingLeft: "400px",
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
              >
                {tabs.map((item, index) => {
                  return (
                    <Tab
                      style={{ fontSize: "18px", color: "black", fontWeight: 500 }}
                      label={item.title}
                      onClick={() => setActiveTab(item.key)}
                      {...a11yProps(index)}
                    />
                  );
                })}
              </StyledTabs>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/lovesvg.svg"
                height="22px"
                style={{ marginRight: "15px" }}
              />
              <img src="/cartsvg.svg" height="22px" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar elevation={0} className={classes.header}>
          {displayDesktop()}
        </AppBar>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   userDetails: state.globalState.userDetails,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setUserDetails: (data) => dispatch(setUserDetails(data)),
// });

export default NavBar;
