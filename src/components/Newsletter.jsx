import React from "react";
import styled from "styled-components";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import {mobile} from "../Responsive"
export default function Newsletter() {
const Container = styled.div`
height:60vh;
background-color:#background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({
    height:"30vh"
})}
    `;

  const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
    letter-spacing: 2px;
    ${mobile({
        fontSize:"20px",
    })}
  `;

  const Description = styled.div`
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 20px;
${mobile({
    textAlign:"center",
    fontSize:"18px",
    fontWeight:"400"
})}
  `;
  const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    ${mobile({
        width:"80%",
        height:"30px"
    })}
  `;

  const Input = styled.input`
    ::placeholder {
      color: #000;
      font-size: 13px;
      letter-spacing: 1.5px;
      font-weight: 700;
      text-transform: uppercase;
    }
    border: none;
    outline: none;
    border-radius: 10px solid black;
    flex: 8;
  `;

  const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    outline: none;
    background-color: #16c79a;
    color: #000;
    font-weight: 500;
    &:hover {
      opacity: 0.8;
    }
  `;
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>Get Timely updates From Your Favourite Products</Description>
      <InputContainer>
        <Input placeholder="Your E-mail" />
        <Button>
          {" "}
          SEND
          <MarkAsUnreadIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
