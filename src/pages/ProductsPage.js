import React from "react";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";
import Products from "../components/productsPage/products";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
