import React from "react";
import styled from "styled-components";
import img1 from "../assets/logo1.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {mobile} from "../Responsive"
export default function Footer() {
  const Container = styled.div`
    display: flex;
    ${mobile({
      flexDirection:"column"
    })}
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
  `;
  const Image = styled.img`
    width: 250px;
    ${mobile({
      display:"none",
      width:"200px"
    })}
  `;
  const Desc = styled.p`
    margin: 20px 0px;
    font-size: 12px;
    font-weight: 500;
  `;
  const SocialContainer = styled.div`
    display: flez;
    align-items: center;
    justify-content: flex-start;
  `;
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${(props) => props.color};
    color: #ffffff;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      transform: scale(0.8);
    }
    ${mobile({
      width:"25px",
      height:"25px",
      margin: "5px"
      })}
  `;
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
      display:"none"
    })}
  `;

  const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({
      marginBottom:"15px"
    })}
  `;
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

  const ListItems = styled.li`
  font-size: 12px;
    margin-bottom: 10px;
    width: 50%;
    cursor: pointer;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  `;
  const Right = styled.div`
    flex: 1;
    padding: 20px;
${mobile({
  backgroundColor:"#E8E2E2"
})}
  `;
  const ContactItems = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;
  `;

  const Payment = styled.img`
    width: 50%;
  `;
  return (
    <Container>
      <Left>
        <Image src={img1} />
        <Desc>
          It is not known when the first clothes shops were opened in Europe.
          Before the era of ready-made clothes, when clothing was made by
          tailors or artisans, shops may have sold second-hand clothing. Some
          ready-made clothes
        </Desc>
        <SocialContainer>
          <SocialIcon color="D61355">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="4D96FF">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="342EAD">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>UseFull Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>Accesories</ListItems>
          <ListItems>My Accounts</ListItems>
          <ListItems>Order Tarcking</ListItems>
          <ListItems>WishList</ListItems>
          <ListItems>Terms</ListItems>
          <ListItems>Contact Us</ListItems>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItems>
          {" "}
          <HomeIcon style={{ marginRight: "10px" }} />
          Opposite: Panvelkar Homes, Bhawani Chowk Amernath (West), Thane 421505
        </ContactItems>
        <ContactItems>
          {" "}
          <PhoneAndroidIcon style={{ marginRight: "10px" }} /> Mobile no.
          9175506236
        </ContactItems>
        <ContactItems>
          {" "}
          <ContactMailIcon style={{ marginRight: "10px" }} /> Contact Email :
          singhvishal2977@gmail.com
        </ContactItems>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
