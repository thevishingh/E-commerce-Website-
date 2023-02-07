import React from "react";
import styled from "styled-components";
import {mobile} from "../Responsive"
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  ${mobile({
   height:"30vh"
  })}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
color:#fff;
font-size:25px;
margin-bottom:20px;

`;


const Button = styled.button`
background-color:transparent;
color:#fff;
padding: 5px 10px;
outline:none;
letter-spacing:1px;
font-weight:500;
cursor:pointer;
&:hover{
    opacity:0.8;
    border:0.1px solid red;
}
`;


export default function Categoryitems({ items }) {
    return (
        <Container>
            <Image src={items.img} />
            <Info>
                <Title> {items.title} </Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
}
