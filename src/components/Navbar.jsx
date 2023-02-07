import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  // eslint-disable-next-line
  const Container = styled.div`
    height: 40px;
    ${"" /* background-color:#A0C3D2; */}
    border-bottom:1px solid #000;
    border-top: 1px solid #000;
    ${mobile({
      height: "50px",
    })}
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
      padding:"10px 0px"
    })}
  `;

  // Left Side

  const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
      display:"none"
    })}
  `;

  const SearchContainer = styled.div`
    border: 1px solid #000;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 3px;
  `;

  const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({
      width:"40px"
    })}
  `;

  // Center side
  const Center = styled.div`
    flex: 2;
    ${mobile({
      width:"50px",
      flex:"1"
    })}
  `;

  const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    ${mobile({
      fontSize:"12px",
      letterSpacing:"0px",
      // textAlign:"left",
    })}
  `;

  // Right side
  const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    ${mobile({
      justifyContent:"center",
      flex:"3"
    })}
  `;

  const MenuItems = styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-left: 10px;
    ${mobile({
      fontSize:"10px",
      // marginLeft:"0px"
    })}

    `;


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{ color: "black", fontSize: "15px", cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><NavLink activeclassname="active" style={{textDecoration:'none'}} to="/">SONA</NavLink></Logo>
        </Center>
        <Right>
          <MenuItems> <NavLink activeclassname="active" style={{textDecoration:'none'}} to="/register">REGISTER</NavLink></MenuItems>
          <MenuItems> <NavLink activeclassname="active" style={{textDecoration:'none'}} to="/login">SIGN IN</NavLink></MenuItems>
          <MenuItems>
            <NavLink activeclassname="active" style={{textDecoration:'none'}} to="/cart">
            <Badge badgeContent={4} color="secondary" showZero>
              <ShoppingCartOutlinedIcon />
            </Badge>
            </NavLink>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
}
