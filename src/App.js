import { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import Products from "./components/products/Products";
// import { productApi } from "api/products";
import { products } from "./data/mockdata";

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
  
          setProductList({ ...productList, [activeTab]:products.data });
       
  }, [activeTab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Layout
      title="Home"
      setActiveTab={setActiveTab}
      tabs={tabs}
      handleChange={handleChange}
      value={value}
    >
      <Products
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        productList={productList}
        value={value}
      />
    </Layout>

  );
}



export default App;