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
import Slider from "react-slick";
// import { amountDisplay } from "utils/utils";
import { products2 } from "../data/mockdata";
const axios = require('axios').default;

const Trending = ({ tabs, productList, activeTab, value }) => {
  const classes = UseStyles();
//   const trending = products2?.data || [];

  const [tbrands, setTbrands] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async() => {
    try {
      const res = await axios.get('http://34.219.97.5:8000/v1/trending/');
      const resp = await axios.get('http://34.219.97.5:8000/v1/trending/brands/');
    //   console.log(resp.data);

    //   setForYou(res?.data[0]?.children);
      setTrending(res?.data?.data);
      setTbrands(resp?.data);

      

    } catch (err) {
      console.error(err);
    }
  }

  const SampleNextArrow =(props)=> {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, borderRadius: "10px", display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow =(props)=> {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, borderRadius: "10px",  display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={classes.blogsContainer}>
      {tabs.map((item, index) => {
        return (
          <TabPanel value={value} index={index}>

          <Typography variant="h6" style={{ paddingLeft: "18px" }}>
              Brands
            </Typography>
          <Slider {...settings}>
              {tbrands &&
                tbrands.map((tbrands) => (
                 
                  <BannerCards    
                        imageLink={tbrands?.brand_link}
                        name={tbrands?.name}
                        review={'product.attributes.review'}
                      />
                 
                ))}
                </Slider>

            <Typography variant="h6" style={{ paddingLeft: "18px" }}>
              Products
            </Typography>
            <Grid container>
              {trending &&
                trending.map((trending) => (
                  <Grid item lg={2} md={4} sx={6}>
                  <Cards    
                        key={trending?.product_id}
                        pid={trending?.product_id}
                        imageLink={trending?.image}
                        name={trending?.title}
                        price={trending?.price}
                        currency={trending?.currency}
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
export default Trending;
