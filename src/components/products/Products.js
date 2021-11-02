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
import UseStyles from "./UseStyles";
import TabPanel from "../tabs/TabPanel";
import GradiantCards from "../card/GradiantCards";
import Cards from "../card/Cards";
import BannerCards from "../card/BannerCards";
// import { amountDisplay } from "utils/utils";
import { products2 } from "../../data/mockdata";
const axios = require('axios').default;

const Products = ({ tabs, productList, activeTab, value }) => {
  const classes = UseStyles();
  const trending = products2?.data || [];

  const [forYou, setForYou] = useState([]);
  const [featBrand, setFeatBrand] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [featCateg, setFeatCateg] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async() => {
    try {
      const res = await axios.get('http://34.219.97.5:8000/feedListing');
      // console.log(res.data[0].children);

      setForYou(res?.data[0]?.children);
      setFeatBrand(res?.data[1]?.children);
      setFeatured(res?.data[2]?.children);
      setFeatCateg(res?.data[3]?.children);

      

    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={classes.blogsContainer}>
      {tabs.map((item, index) => {
        return (
          <TabPanel value={value} index={index}>
            <Typography variant="h6" style={{ paddingLeft: "18px" }}>
              Trending
            </Typography>
            <Grid container>
              {trending &&
                trending.map((data) => (
                  <Grid item lg={2} md={4} sx={6}>
                    <GradiantCards
                      key={data?.id}
                      pid={data?.id}
                      category={data?.category}
                      imageLink={
                        "https://picsum.photos/200/300"
                      }
                      name={data?.title}
                      price={data?.price}
                      review={"product.attributes.review"}
                    />
                  </Grid>
                ))}
            </Grid>

            <Typography variant="h6" style={{ paddingLeft: "18px" }}>
              For You
            </Typography>
            <Grid container>
              {forYou &&
                forYou.map((forYou) => (
                  <Grid item lg={2} md={4} sx={6}>
                  <Cards
                        key={forYou?.id}
                        pid={forYou?.id}
                        category={forYou?.category}
                        imageLink={forYou?.thumbnail}
                        name={forYou?.title}
                        price={forYou?.price}
                        currency={forYou?.currency}
                        review={'product.attributes.review'}
                      />
                  </Grid>
                ))}
            </Grid>

            <Typography variant="h6" style={{ paddingLeft: "18px" }}>
            Featured Brand
            </Typography>
            <Grid container>
              {featBrand &&
                featBrand.map((forYou) => (
                  <Grid item lg={2} md={4} sx={6}>
                  <BannerCards
                        key={forYou?.id}
                        pid={forYou?.id}
                        category={forYou?.category}
                        imageLink={forYou?.thumbnail}
                        name={forYou?.title}
                        // price={forYou?.price}
                        review={'product.attributes.review'}
                      />
                  </Grid>
                ))}
            </Grid>


            <Typography variant="h6" style={{ paddingLeft: "18px" }}>
              Featured
            </Typography>
            <Grid container>
              {featured &&
                featured.map((forYou) => (
                  <Grid item lg={2} md={4} sx={6}>
                  <Cards
                        key={forYou?.id}
                        pid={forYou?.id}
                        category={forYou?.category}
                        imageLink={forYou?.thumbnail}
                        name={forYou?.title}
                        price={forYou?.price}
                        currency={forYou?.currency}
                        review={'product.attributes.review'}
                      />
                  </Grid>
                ))}
            </Grid>


            <Typography variant="h6" style={{ paddingLeft: "18px" }}>
              Featured Categories
            </Typography>
            <Grid container>
              {featCateg &&
                featCateg.map((forYou) => (
                  <Grid item lg={2} md={4} sx={6}>
                  <BannerCards
                        key={forYou?.id}
                        pid={forYou?.id}
                        category={forYou?.category}
                        imageLink={forYou?.thumbnail}
                        name={forYou?.title}
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
export default Products;
