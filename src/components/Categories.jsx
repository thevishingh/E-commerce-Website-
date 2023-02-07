import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import Categoryitems from "./Categoryitems";
import {mobile} from "../Responsive"
export default function Categories() {
  const Container = styled.div`
  padding:20px;
  display:flex;
  justify-content:space-between;
  ${mobile({
    padding:"0px",
    flexDirection:"column",
  })}
  `;
  return (
    <Container>
      {categories.map((item) => (
        <Categoryitems items = {item} key={item.id}/>
      ))}
    </Container>
  );
}
