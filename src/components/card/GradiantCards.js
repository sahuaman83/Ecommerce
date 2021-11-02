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

const GradiantCards = ({ imageLink, pid, name, price, category }) => {
  const classes = UseStyles();
  const [state, setState] = useState(false);

  const toggleRaised = () => setState({ raised: !state.raised });
  return (
    <Box className={classes.head}>
      <Card
        className={classes.root}
        onMouseOver={toggleRaised}
        onMouseOut={toggleRaised}
        raised={state.raised}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(" +
            imageLink +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <CardMedia className={classes.media} image={imageLink} /> */}
        {/* <CardMedia className={classes.media} image="/lap.png" /> */}

        {/* <Typography variant="h6">{name}</Typography> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            height: "248px",
          }}
        >
          <div style={{ textAlign: "right", padding: "10px" }}>
            <img src="insta.svg" />
          </div>

          <Typography
            variant="p"
            style={{
              padding: "10px",
              fontWeight: "500",
              color: "white",
              fontSize: "14px",
            }}
          >
            {" "}
            Apple {" "}
          </Typography>
        </div>
      </Card>
    </Box>
  );
};
export default GradiantCards;
