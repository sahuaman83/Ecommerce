import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: "44px",

    border: "solid 2px #e5e5ea",
    borderRadius: "3px",
  },

  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "red",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchbar: {
    padding: theme.spacing(2),
  },
  searchtext: {
    padding: theme.spacing(2),
    fontFamily: "Source Sans Pro",
  },

  boxspacing: {
    padding: "20px",
  },
  wrapper: {
    marginRight: "140px" /* 1 */,
    marginLeft: "140px" /* 1 */,
    marginTop: "5%",

    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
      marginLeft: "0px",
    },
  },
  products: {
    padding: "0px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  stickybutton: {
    bottom: 0,

    position: "fixed",

    left: "50%",
    right: "50%",
    transform: "translate(-50%, -50%)",
  },

  mobilewrapper: {
    [theme.breakpoints.down("md")]: {
      marginRight: "20px" /* 1 */,
      marginLeft: "20px" /* 1 */,
    },
  },
}));

export default UseStyles;
