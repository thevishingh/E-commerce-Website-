import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { sliderItems } from "../data";
import { useState } from "react";
import {mobile} from "../Responsive"

export default function Slider() {
  const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({
      display:"none"
    })}
  `;
  const Arrow = styled.div`
    width: 30px;
    height: 30px;
    background-color: #dddddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    &:hover {
      background-color: #bccef8;
    }
  `;

  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
  `;
  const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.bg};
  `;

  const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
  `;
  const Image = styled.img`
    height: 80%;
  `;

  const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
  `;

  const Ttile = styled.h1`
    font-size: 60px;
  `;
  const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  `;
  const Button = styled.button`
    padding: 8px;
    background-color: #000;
    outline: none;
    border: 1px solid #fff;
    color: #fff;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  `;
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <ImageContainer>
              <Image src={items.img} />
            </ImageContainer>
            <InfoContainer>
              <Ttile>{items.title}</Ttile>
              <Description>{items.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIcon />
      </Arrow>
    </Container>
  );
}
