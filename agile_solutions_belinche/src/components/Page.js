import React from "react";
import TripleSelector from "./TripleSelector";
import Grid from "@material-ui/core/Grid";
import Chart from "./Chart";
import MyAppBar from "./MyAppBar";
import { getCategorys, getProducts } from "../modules/sales_api";

const _brands = {
  Product1: ["Brand1", "Brand2", "Brand3"],
  Product2: ["Brand4", "Brand5", "Brand6"],
  Product3: ["brand7", "brand8", "brand9"],
  Product4: ["brand10", "brand11", "brand12"],
  Product5: ["brand13", "brand14", "brand15"],
  Product6: ["brand16", "brand17", "brand18"],
  Product7: ["brand19", "brand20", "brand21"],
  Product8: ["brand22", "brand23", "brand24"],
  Product9: ["brand25", "brand26", "brand27"],
};

const _data = {
  Brand1: [100, 500, 300, 100],
  Brand2: [600, 200, 100, 300],
  Brand3: [400, 200, 600, 300],
  Brand4: [600, 100, 200, 200],
  Brand5: [300, 200, 500, 300],
};

const getBrands = (product) => {
  return _brands[product];
};

const getData = (brand) => {
  return _data[brand];
};

export default function Page() {
  const [error, setError] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [category_list, setCategoryList] = React.useState([]);
  const [product_list, setProductList] = React.useState([]);
  const [brand_list, setBrandList] = React.useState([]);
  const [data, setData] = React.useState([]);

  const set_products = async (category) => {
    try {
      var products = await getProducts(category);
      console.log("product: ", products);
      if (!Array.isArray(products)) {
        throw new Error();
      }
      setProductList(products);
    } catch (error) {
      console.log(error);
      setError("Could not get products from server, please try again later");
    }
    var products = await getProducts(category);
    setProductList(products);
  };

  const set_brands = (product) => {
    var brands = getBrands(product);
    setBrandList(brands);
  };

  const set_data = (brand) => {
    var data = getData(brand);
    setData(data);
  };

  React.useEffect(() => {
    try {
      const sync_getCategorys = async () => {
        var categorys = await getCategorys();
        setCategoryList(categorys);
      };
      sync_getCategorys();
    } catch (error) {
      console.log(error);
      setError("Could not get categorys from server, please try again later");
    }
  }, []);

  return (
    <Grid
      style={{
        minWidth: "100%",
        height: "100vh",
        resizeMode: "contained",
      }}
    >
      <div style={{ minWidth: "100%", height: "100vh" }}>
        <MyAppBar />
        <TripleSelector
          title1="Categoria"
          store1={category}
          onChange1={async (cat) => {
            setCategory(cat.target.value);
            await set_products(cat.target.value);
            setBrandList([]);
            setData([]);
          }}
          elements1={category_list}
          title2="Productos"
          store2={product}
          onChange2={(prod) => {
            setProduct(prod.target.value);
            set_brands(prod.target.value);
            setData([]);
          }}
          elements2={product_list}
          title3="Marcas"
          store3={brand}
          onChange3={(brn) => {
            setBrand(brn.target.value);
            set_data(brn.target.value);
          }}
          elements3={brand_list}
        />
        <Chart
          labels={["January", "February", "March", "April"]}
          color="rgba(53, 162, 235, 0.5)"
          data={data}
          label="Ventas"
        />
      </div>
    </Grid>
  );
}
