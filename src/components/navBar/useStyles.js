import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  root: {
    padding: "25px",
  },
  header: {
    border: "0.5px solid rgba(0, 0, 0, 0.15)",
    backgroundColor: "white",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "center",
    marginTop: "10px",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "90px",
  },
  toolBarMenu: {
    display: "flex",
    justifyContent: "center",
    padding: "0px",
  },

  drawerContainer: {
    padding: "20px 30px",
  },

  content: {
    flexGrow: 1,
    marginLeft: "100px",
  },
  rectangle: {
    width: "100%",
    fontFamily: "Source Sans Pro",
    color: "#1d1d1d",
    paddingLeft: "20px",

    opacity: 0.6,
  },
  shiftright: {
    marginLeft: "10px",
  },
}));

export default UseStyles;
