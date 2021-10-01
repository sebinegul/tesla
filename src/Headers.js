import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "./features/car/carSlice";
import { useSelector } from "react-redux";
function Headers() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  const showMenuHandler = () => {
    setBurgerStatus(true);
  };
  const menuClose = () => {
    setBurgerStatus(false);
  };
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}{" "}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={showMenuHandler} />
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={menuClose} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              {" "}
              <a href="">{car}</a>
            </li>
          ))}
        <li>
          <a href="" />
          Existing Inventory
        </li>
        <li>
          <a href="" />
          Used Inventory
        </li>
        <li>
          <a href="" />
          Trade-In
        </li>
        <li>
          <a href="" />
          Cybertruck
        </li>
        <li>
          <a href="" />
          Roadaster
        </li>
       
        <li>
          <a href="" />
          Existing Inventory
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Headers;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  min-height: 60px;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: no-wrap;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
  height: 100vh;
  padding: 10px;
  list-style: none;
  width: 300px;
  z-index: 99;
  cursor: pointer;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  
  li {
    padding: 15px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }

  a {
    font-weight: 700;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
