import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import UseStyles from "./UseStyles";

const Cards = ({ imageLink, pid, name, price, category, currency }) => {
  const classes = UseStyles();
  const [state, setState] = useState(false);

  const toggleRaised = () => setState({ raised: !state.raised });

  const truncate = (str) => {
    return str?.length > 18 ? str.substring(0, 18) + "..." : str;
  };

  return (
    <Box className={classes.head}>
      <Card
        className={classes.root}
        onMouseOver={toggleRaised}
        onMouseOut={toggleRaised}
        raised={state.raised}
      >
        <CardMedia className={classes.media} image={imageLink} />
        <CardContent>
          <Typography variant="p"> {truncate(name)} </Typography>

          <br />
          <Typography variant="p" style={{ color: "grey" }}>
            {" "}
            {category}{" "}
          </Typography>
          <br />

          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            className={classes.iconFilled}
            size="small"
          />

          <Typography variant="p" component="p">
            {currency} {price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Cards;
