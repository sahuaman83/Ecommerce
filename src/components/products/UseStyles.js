import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
   
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "80%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
  },
  tabs: {
    marginLeft: "50px",
  },
  middle: {
    paddingTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
}));

export default UseStyles;
