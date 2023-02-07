import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../Responsive"
export default function Login() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    // background: linear-gradient(to top, #000, rgba(255, 255, 255, 0.5)),
    //   url("https://images.pexels.com/photos/10205898/pexels-photo-10205898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
    background-color:#F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Wrapper = styled.div`
    // width: 40%;
    width: 30%;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #6C00FF;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    ${mobile({
      width:"75%"
    })}
  `;
  const Title = styled.h1`
    margin: 10px 0px;
    letter-spacing: 2px;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
  `;
  const Form = styled.form`
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
  `;
  const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `;

  const Input = styled.input`
    ::placeholder {
      // text-align: center;
      color: #6C00FF;
      text-transform: lowercase;
      letter-spacing: 1px;
      font-weight: 200;
    }
    min-width: 20%;
    // flex: 1;
    background-color: transparent;
    color: #6C00FF;
    font-size:12px;
    padding: 5px 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #6C00FF;
    margin: 10px 10px;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Button = styled.button`
    width: 25%;
    margin: 12px;
    padding: 5px 12px;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: 1px solid #000;
    letter-spacing: 1.5px;
    transition: all 0.5s ease;
    background-color: #6c00ff;
    color: #fff;
    &:hover {
      transform: scale(1.1);
      border-radius:10px 10px 10px 10px;
    }
  `;
  const LinkWrapper = styled.div`
  text-align:center;
  margin:5px;
  `;

  const Link = styled.a`
  margin:5px;
  font-size:10px;
  text-decoration:underline;
  cursor:pointer;
  color:#6c00ff;
  &:hover{
    color:red;
  }
  `;

  return (
    <>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>
          Login Your&nbsp;
          <span
            style={{ color: "#6C00FF", fontSize: "20px", fontWeight: "400" }}
          >
            Account
          </span>
        </Title>
        <Form>
          <InputWrapper>
            <Input placeholder="UserName" />
            <Input placeholder="password" />
          </InputWrapper>
          <ButtonWrapper>
            <Button>Login</Button>
          </ButtonWrapper>
         <LinkWrapper>
         <Link>Forget your password</Link>
          <Link>Create new Account</Link>
          </LinkWrapper>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </>
  );
}
