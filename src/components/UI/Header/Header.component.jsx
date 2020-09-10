// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import: UI
import Icon from "../Icon/Icon.component";
import Logo from "../Logo/Logo.component";
import UserDetails from "../UserDetails/UserDetails.component";

// UI: Header
function Header({ setIsOpen }) {
  return (
    <Header__Container>
      <Header__Primary>
        <Header__PrimaryLeft>
          <Link to="/">
            <Logo />
          </Link>
        </Header__PrimaryLeft>

        <Header__PrimaryRight>
          <UserDetails />
        </Header__PrimaryRight>
      </Header__Primary>

      <Header__Secondary>
        <Header__SecondaryLeft
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <Header__SecondaryLeftToggle>
            <Icon icon="fas fa-bars" />
          </Header__SecondaryLeftToggle>
          <p>Patient List</p>
        </Header__SecondaryLeft>

        <Header__SecondaryRight>
          <p>Emergency Department</p>
        </Header__SecondaryRight>
      </Header__Secondary>
    </Header__Container>
  );
}

// Export: Header
export default Header;

// Styled: Header__Container
const Header__Container = styled.div`
  display: grid;
  grid-template-areas:
    "primary-header"
    "secondary-header";
  grid-template-rows: 7vh 5vh;
`;

// Styled: Header__Primary
const Header__Primary = styled.div`
  align-items: center;
  background: #569fd3;
  display: flex;
  grid-area: primary-header;
  justify-content: space-between;
`;

// Styled: Header__PrimaryLeft
const Header__PrimaryLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

// Styled: Header__PrimaryRight
const Header__PrimaryRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

// Styled: Header__Secondary
const Header__Secondary = styled.div`
  align-items: center;
  background: #2c2c2c;
  color: #ffffff;
  display: flex;
  grid-area: secondary-header;
  justify-content: space-between;
  text-transfprm: uppercase;
  width: 100%;
`;

// Styled: Header__SecondaryLeft
const Header__SecondaryLeft = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  & p {
    text-transform: uppercase;

    @media screen and (max-width: 518px) {
      display: none;
    }
  }
`;

// Styled: Header__SecondaryLeftToggle
const Header__SecondaryLeftToggle = styled.div`
  & i {
    font-size: 20px;
    margin-right: 10px;
  }
`;

// Styled: Header__SecondaryRight
const Header__SecondaryRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & p {
    padding-right: 1rem;
    text-transform: uppercase;
  }
`;
