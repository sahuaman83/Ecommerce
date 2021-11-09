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
// import Link from "next/link";
// import PropTypes from "prop-types";
// import RenderProducts from "../shop/RenderProducts";
import UseStyles from "../components/products/UseStyles";
import TabPanel from "../components/tabs/TabPanel";
import GradiantCards from "../components/card/GradiantCards";
import Cards from "../components/card/Cards";
import BannerCards from "../components/card/BannerCards";
// import { amountDisplay } from "utils/utils";
import { products2 } from "../data/mockdata";
const axios = require('axios').default;

const Categories = ({ tabs, productList, activeTab, value }) => {
  const classes = UseStyles();
  const trending = products2?.data || [];

  const [categ, setCateg] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async() => {
    try {
      const res = await axios.get('http://34.219.97.5:8000/v1/category/list/');
      console.log(res.data.children);

      setCateg(res?.data?.children);

      

    } catch (err) {
      console.error(err);
    }
  }
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
                        // price={forYou?.price}
                        review={'product.attributes.review'}
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
