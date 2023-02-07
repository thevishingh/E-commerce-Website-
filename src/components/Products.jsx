import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
export default function Products() {
  const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Container>
      {popularProducts.map((items) => (
        <Product item={items} key={items.id} />
      ))}
    </Container>
  );
}
