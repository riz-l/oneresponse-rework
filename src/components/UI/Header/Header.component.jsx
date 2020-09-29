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
    <HeaderContainer>
      <HeaderPrimary>
        <HeaderPrimaryLeft>
          <Link to="/">
            <Logo />
          </Link>
        </HeaderPrimaryLeft>

        <HeaderPrimaryRight>
          <UserDetails />
        </HeaderPrimaryRight>
      </HeaderPrimary>

      <HeaderSecondary>
        <HeaderSecondaryLeft
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <HeaderSecondaryLeftToggle>
            <Icon icon="fas fa-bars" />
          </HeaderSecondaryLeftToggle>
          <p>Patient List</p>
        </HeaderSecondaryLeft>

        <HeaderSecondaryRight>
          <p>Emergency Department</p>
        </HeaderSecondaryRight>
      </HeaderSecondary>
    </HeaderContainer>
  );
}

// Export: Header
export default Header;

// Styled: HeaderContainer
const HeaderContainer = styled.div`
  display: grid;
  grid-template-areas:
    "primary-header"
    "secondary-header";
  grid-template-rows: 7vh 5vh;
  min-height: 200px;
`;

// Styled: HeaderPrimary
const HeaderPrimary = styled.div`
  align-items: center;
  background: #569fd3;
  display: flex;
  grid-area: primary-header;
  justify-content: space-between;
`;

// Styled: HeaderPrimaryLeft
const HeaderPrimaryLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

// Styled: HeaderPrimaryRight
const HeaderPrimaryRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

// Styled: HeaderSecondary
const HeaderSecondary = styled.div`
  align-items: center;
  background: #2c2c2c;
  color: #ffffff;
  display: flex;
  grid-area: secondary-header;
  justify-content: space-between;
  text-transfprm: uppercase;
  width: 100%;
`;

// Styled: HeaderSecondaryLeft
const HeaderSecondaryLeft = styled.div`
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

// Styled: HeaderSecondaryLeftToggle
const HeaderSecondaryLeftToggle = styled.div`
  & i {
    font-size: 20px;
    margin-right: 10px;
  }
`;

// Styled: HeaderSecondaryRight
const HeaderSecondaryRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & p {
    padding-right: 1rem;
    text-transform: uppercase;
  }
`;
