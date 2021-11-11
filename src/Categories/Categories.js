import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import UseStyles from "../components/products/UseStyles";
import TabPanel from "../components/tabs/TabPanel";
import BannerCards from "../components/card/BannerCards";
const axios = require("axios").default;

const Categories = ({ tabs, productList, activeTab, value }) => {
  const classes = UseStyles();

  const [categ, setCateg] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    try {
      const res = await axios.get("http://34.219.97.5:8000/v1/category/list/");
      console.log(res.data.children);

      setCateg(res?.data?.children);
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
              {categ &&
                categ.map((categ) => (
                  <Grid item lg={2} md={4} sx={6}>
                    <BannerCards
                      key={categ?.id}
                      pid={categ?.id}
                      category={categ?.category}
                      imageLink={"https://picsum.photos/200/300/?blur=10"}
                      name={categ?.title}
                      review={"product.attributes.review"}
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
export default Categories;
