import React from "react";
import TripleSelector from "./TripleSelector";
import Grid from "@material-ui/core/Grid";
import Chart from "./Chart";
import MyAppBar from "./MyAppBar";
import {
  getCategorys,
  getProducts,
  getBrands,
  getData,
} from "../modules/sales_api";

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
      setProductList(products);
    } catch (error) {
      console.log(error);
      setError("Could not get products from server, please try again later");
    }
  };

  const set_brands = async (product) => {
    try {
      var brands = await getBrands(product);
      setBrandList(brands);
    } catch (error) {
      console.log(error);
      setError("Could not get brands from server, please try again later");
    }
  };

  const set_data = async (brand) => {
    try {
      var data = await getData(brand);
      setData(data);
    } catch (error) {
      console.log(error);
      setError("Could not get data from server, please try again later");
    }
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
          onChange2={async (prod) => {
            setProduct(prod.target.value);
            await set_brands(prod.target.value);
            setData([]);
          }}
          elements2={product_list}
          title3="Marcas"
          store3={brand}
          onChange3={async (brn) => {
            setBrand(brn.target.value);
            await set_data(brn.target.value);
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
