import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import UseStyles from "../components/products/UseStyles";
import TabPanel from "../components/tabs/TabPanel";
import BannerCards from "../components/card/BannerCards";
const axios = require("axios").default;

const Guides = ({ tabs, productList, activeTab, value }) => {
  const classes = UseStyles();

  const [guides, setGuides] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    try {
      const res = await axios.get("http://34.219.97.5:8000/v1/moment/");
        // console.log(res.data);

      setGuides(res?.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.blogsContainer}>
      {tabs.map((item, index) => {
        return (
          <TabPanel value={value} index={index}>

            <Grid container>
              {guides &&
                guides.map((trending) => (
                  <Grid item lg={2} md={4} sx={6}>
                    <BannerCards
                      key={trending?.moment_id}
                      pid={trending?.moment_id}
                      imageLink={trending?.moment_image_url}
                      name={trending?.name}
                      shoppinglist={trending?.shoppinglist_count}
                    />
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
        );
      })}
    </div>
  );
};
export default Guides;
