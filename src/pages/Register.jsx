import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../Responsive"
export default function Register() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    // background: linear-gradient(to top, #000000, rgba(255, 255, 255, 0.5)),
    //   url("https://images.pexels.com/photos/5325935/pexels-photo-5325935.jpeg?auto=compress&cs=tinysrgb&w=1600");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
    background-color:#F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  `;
  const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    border: 1px solid #fff;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    ${mobile({
      width:"75%"
    })}
  `;

  const Title = styled.h1`
    font-size: 15px;
    font-weight: 300;
    text-align: center;
  `;

  const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
  `;

  const Input = styled.input`
    ::placeholder {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #6c00ff;
    }
    background-color: transparent;
    color:#6c00ff;
    flex: 1;
    min-width: 40%;
    margin: 12px 14px 0 0;
    padding: 12px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
  `;

  const Agreements = styled.span`
    font-size: 11px;
    padding: 10px;
    margin: 20px 0px;
  `;

  const Button = styled.button`
    width: 30%;
    outline: none;
    border: 1px solid #000;
    padding: 8px 10px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #698269;
      color: #fff;
      transform: scale(0.9);
    }
    ${mobile({
      width:"40%",
      padding:"5px 15px",
      fontSize:"10px"
    })}
  `;

  return (
    <>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>
          Create An&nbsp;
          <span
            style={{ color: "#6C00FF", fontSize: "20px", fontWeight: "400" }}
          >
            Account
          </span>
        </Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="e-mail" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreements>
            By Creating an Account, I consent to the processing of my personal
            Data in Acordance With the{" "}
            <b
              style={{
                color: "#6C00FF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </b>
          </Agreements>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </>
  );
}
