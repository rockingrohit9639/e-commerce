import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({ category, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/products");
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default Products;
