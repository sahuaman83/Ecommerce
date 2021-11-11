import { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import Products from "./components/products/Products";
import Categories from "./Categories/Categories";
import Trending from "./Trending/Trending";

function App() {
  const [productList, setProductList] = useState({});
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("6");
  const [value, setValue] = useState(0);

  useEffect(() => {
    // TODO: need to replace with tag list for home
    setTabs([
      {
        title: "Product Catalog",
        key: "6",
      },
      {
        title: "Categories",
        key: "7",
      },
      {
        title: "Trending Products",
        key: "8",
      },
      {
        title: "Guides",
        key: "9",
      },
    ]);
  }, []);

  useEffect(() => {
    setProductList({ ...productList, activeTab });
    console.log(activeTab);
  }, [activeTab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout
      title="Home"
      setActiveTab={setActiveTab}
      tabs={tabs}
      handleChange={handleChange}
      value={value}
    >
      {activeTab == "6" ? (
        <Products
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          productList={productList}
          value={value}
        />
      ) : (
        <></>
      )}

      {activeTab == "7" ? (
        <Categories
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          productList={productList}
          value={value}
        />
      ) : (
        <></>
      )}

      {activeTab == "8" ? (
        <Trending
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          productList={productList}
          value={value}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
}

export default App;
