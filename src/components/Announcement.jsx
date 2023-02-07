import React from "react";
import styled from "styled-components";
import {mobile} from "../Responsive"
export default function Announcement() {
  const Container = styled.div`
    height: 50px;
   background-color:#000;
   color:#fff;
   text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    ${mobile({
    fontSize:"10px",
    fontWeight:"300"
    })}
  `;

  return (
    <Container>
      Super DEAL..!! Free Shippig on Orders Over &#8377;500{" "}
    </Container>
  );
}
