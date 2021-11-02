import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
// import Link from "next/link";
// import { slugName } from "utils/utils";
import UseStyles from "./UseStyles";

const BannerCards = ({ imageLink, pid, name, price, category }) => {
  const classes = UseStyles();
  const [state, setState] = useState(false);

  const toggleRaised = () => setState({ raised: !state.raised });
  return (
    <Box className={classes.head}>
      <Card
        className={classes.bannercard}
        onMouseOver={toggleRaised}
        onMouseOut={toggleRaised}
        raised={state.raised}
      >
        <CardMedia className={classes.media} image={imageLink} />
        {/* <CardMedia className={classes.media} image="/lap.png" /> */}
        <CardContent>
          {/* <Typography variant="h6">{name}</Typography> */}
          <Typography variant="p"> {name} </Typography>
          <br/>
        </CardContent>
      </Card>
    </Box>
  );
};
export default BannerCards;
