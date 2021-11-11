import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
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
        <CardContent>
          <Typography variant="p"> {name} </Typography>
          <br />
        </CardContent>
      </Card>
    </Box>
  );
};
export default BannerCards;
