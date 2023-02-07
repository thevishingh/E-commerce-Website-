import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../Responsive";
export default function ProductList() {
  const Container = styled.div``;
  const Title = styled.h1`
    // text-align: center;
    letter-spacing:2px;
    margin: 5px 20px;
  `;
  const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Filter = styled.div`
    margin: 5px 20px;
  `;

  const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:20px;
    ${mobile({
      fontSize:"15px",
      
    })}
  `;
  const Select = styled.select`
    margin: 10px;
    padding: 5px 10px;
    cursor: pointer;
  `;

  const Option = styled.option``;

  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Orange</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
              <Option>Red</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>Small</Option>
              <Option>Medium</Option>
              <Option>Large</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc) </Option>
              <Option>Price (desc) </Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
}
