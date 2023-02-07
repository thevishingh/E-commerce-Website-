import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { mobile } from "../Responsive";
export default function Product() {
    const Container = styled.div``;
    const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
      padding:"10px",
      flexDirection:"column"
    })}
  `;
    const ImageContainer = styled.div`
    flex: 1;
  `;
    const Image = styled.img`
    width: 90%;
    // height: 60vh;
    object-fit: cover;
    ${mobile({
      height:"40vh"
    })}
  `;
    const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
      padding:"10px"
    })}
  `;
    const Title = styled.h1`
    font-weight: 300;
    margin-bottom: 20px 0px;
    letter-spacing: 2px;
    text-decoration: underline;
    cursor: pointer;
  `;
    const Desc = styled.p`
    margin: 20px 0px;
    font-size: 15px;
    font-weight: 500;
  `;
    const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
  `;
    const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({
      width:"100%"
    })}
  `;
    const Filter = styled.div`
    display: flex;
    align-items: center;
  `;
    const FilterTitle = styled.span`
    font-size: 15px;
    font-weight: 300;
    // margin: 10px;
  `;
    const FilterColor = styled.div`
    width: 15px;
    height: 15px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.2);
    }
    margin: 0 2px;
  `;
    const FilterSize = styled.select`
    margin-left: 5px;
    padding: 0px 8px;
  `;
    const FilterSizeOption = styled.option``;

    const AddContainer = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({
    width:"100%"
  })}
  `;
    const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
//   cursor:pointer;
  `;
    const Amount = styled.span`
  width:30px;
  height:30px;
  font-size:15px;
  margin:5px;
  border:1px solid #5D3891;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  `;
    const Button = styled.button`
  padding:5px 10px;
  border:2px solid teal;
  outline:none;
  cursor:pointer;
  font-weight:600;
  &:hover{
    border:1px solid red;
    background-color:#E5E0FF;
    color:#000;
  }
  `;
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://www.hollisterindiaonline.com/images/advocaten/Men%20s%20Hollister%20Advanced%20Stretch%20Ath%20652.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title> Levi's Jeans</Title>
                    <Desc>
                        A modern slim with room to move, the 511™ Slim Fit Jean has added
                        stretch for all-day comfort. It offers a lean look and is a great
                        alternative to skinny jeans.{" "}
                    </Desc>
                    <Price>&#8377;2200</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="darkblue" />
                            <FilterColor color="black" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon style={{ cursor: "pointer" }} />
                            <Amount>1</Amount>
                            <AddIcon style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}
