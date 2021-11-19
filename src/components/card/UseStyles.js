import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",  
    // height: "100%",
    width: "220px",
    height: "268px",
    borderRadius: "10px",
    cursor: "pointer"
  },
  bannercard: {
    width: "100%",  
    height: "100%",
    borderRadius: "10px",
    cursor: "pointer"
  },
  head: {
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  media: {
    height: "150px",
    // width: "150px",
    objectFit: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  expand: {
    marginLeft: "auto",
  },

  iconFilled: {
    color: "#FFCE31",
  },
  leftshift: {
    marginLeft: "5px",
  },
}));

export default UseStyles;
