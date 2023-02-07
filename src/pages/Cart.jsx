import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../Responsive";
export default function Cart() {
  const Container = styled.div``;
  const Wrapper = styled.div`
    padding: 20px;
  `;
  const Title = styled.h1`
    font-weight: 300;
    letter-spacing: 1.5px;
    text-align: center;
  `;
  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `;
  const TopButton = styled.button`
    padding: 5px 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "#000" : "transparent"};
    color: ${(props) => props.type === "filled" && "#fff"};
  `;
  const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    ${mobile({
      display:"none"
    })}
  `;
  const Bottom = styled.div`
    display: flex;
    // align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({
      flexDirection: "column"
    })}
  `;
  const Info = styled.div`
    flex: 3;
  `;

  const Product = styled.div`
    display: flex;
    justy-content: space-between;
    ${mobile({
      flexDirection: "column"
    })}
  `;

  const ProductDetails = styled.div`
    flex: 2;
    display: flex;
  `;
  const Image = styled.img`
    width: 200px;
    ${mobile({
      width: "150px"
    })}
  `;
  const Details = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  `;
  const ProductName = styled.span`
    font-size: 14px;
  `;
    // const ProductId = styled.span``;
    // const ProductColor = styled.div`
    //   width: 20px;
    //   height: 20px;
    //   border-radius: 50%;
    //   background-color: ${(props) => props.color};
    // `;
    
  const ProductSize = styled.span``;
  const PrizeDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  `;
  const ProductAmount = styled.div`
    font-size: 18px;
    margin: 10px;
    ${mobile({
      margin: "5px 10px"
    })}
  `;
  const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
      marginBottom: "15px"
    })}
  `;

  const Hr = styled.hr`
    background-color: #000;
    border: none;
    height: 1px;
  `;
  const Summary = styled.div`
    height: 30vh;
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    margin: 10px;
    padding: 22px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    ${mobile({
      width: "90%",
      padding:"15px",
      margin:"0px"
    })}
  `;
  const SummaryTitle = styled.h1`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-decoration: underline;
  `;
  const SummaryItems = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "600"};
    font-size: ${(props) => props.type === "total" && "18px"};
    &:hover {
      color: blue;
      cursor: pointer;
    }
  `;
  const SummaryItemText = styled.div``;
  const SummaryItemPrice = styled.div`
    text-decoration: underline;
    padding: 0 5px;
  `;
  const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0px;
  `;
  const Button = styled.button`
    width: 35%;
    margin-bottom: 0px;
    padding:12px;
    border:1px solid #000;
    background-color:#000;
    color:#fff;
    font-size:14px;
    outline:none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
     border-radius:10px;
     background-color:#6C00FF;
    }
    ${mobile({
      width: "40%",
      padding:"4px 10px",
    })}
  `;
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopText>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopText>
          <TopButton type="filled">Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://4.imimg.com/data4/RQ/WI/MY-2366923/hoddies-500x500.jpg" />
                <Details>
                  <ProductName>
                    <b>Product&nbsp;:&nbsp;</b>Cotton flannel Hoddie
                  </ProductName>
                  {/* <ProductId>
                    <strong>ID:&nbsp;</strong> 9175506236
                  </ProductId> */}
                  {/* <ProductColor color="black"/> */}
                  <ProductSize>
                    <strong>Size&nbsp;:&nbsp;</strong> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PrizeDetails>
                <ProductAmountContainer>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice> &#8377; 2500</ProductPrice>
              </PrizeDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://estilofashions.com/wp-content/uploads/2021/02/Mens-Jeans-Pant-4-6-600x771.jpg" />
                <Details>
                  <ProductName>
                    <b>Product&nbsp;:&nbsp;</b>Levi's Women Jeans
                  </ProductName>
                  {/* <ProductId>
                    <strong>ID:&nbsp;</strong> 9175506236
                  </ProductId> */}
                  {/* <ProductColor color="black"/> */}
                  <ProductSize>
                    <strong>Size&nbsp;:&nbsp;</strong> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PrizeDetails>
                <ProductAmountContainer>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice> &#8377; 8000</ProductPrice>
              </PrizeDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://kingdoodle.com/wp-content/uploads/2019/11/Black_Printo-500x537.jpg" />
                <Details>
                  <ProductName>
                    <b>Product&nbsp;:&nbsp;</b>Men's T-shirt
                  </ProductName>
                  {/* <ProductId>
                    <strong>ID:&nbsp;</strong> 9175506236
                  </ProductId> */}
                  {/* <ProductColor color="black"/> */}
                  <ProductSize>
                    <strong>Size&nbsp;:&nbsp;</strong> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PrizeDetails>
                <ProductAmountContainer>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice> &#8377; 800</ProductPrice>
              </PrizeDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://cdn-images.farfetch-contents.com/14/60/16/40/14601640_22559259_300.jpg" />
                <Details>
                  <ProductName>
                    <b>Product&nbsp;:&nbsp;</b>Nike Shose
                  </ProductName>
                  {/* <ProductId>
                    <strong>ID:&nbsp;</strong> 9175506236
                  </ProductId> */}
                  {/* <ProductColor color="black"/> */}
                  <ProductSize>
                    <strong>Size&nbsp;:&nbsp;</strong> 6
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PrizeDetails>
                <ProductAmountContainer>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice> &#8377; 80000</ProductPrice>
              </PrizeDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItems>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice> &#8377;2500</SummaryItemPrice>
            </SummaryItems>
            <SummaryItems>
              <SummaryItemText>Shipping </SummaryItemText>
              <SummaryItemPrice> &#8377;30</SummaryItemPrice>
            </SummaryItems>
            <SummaryItems>
              <SummaryItemText> Discount</SummaryItemText>
              <SummaryItemPrice>10%</SummaryItemPrice>
            </SummaryItems>
            <SummaryItems type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> &#8377;2280</SummaryItemPrice>
            </SummaryItems>
            <ButtonWrapper>
              <Button>Place Order</Button>
            </ButtonWrapper>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
