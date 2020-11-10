// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import: UI
import Icon from "../Icon/Icon.component";
import Logo from "../Logo/Logo.component";
import UserDetails from "../UserDetails/UserDetails.component";

// UI: Header
function Header({ setPatientListIsOpen, setSearchMenuIsOpen }) {
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
            setPatientListIsOpen((patientListIsOpen) => !patientListIsOpen);
          }}
        >
          <HeaderSecondaryLeftToggle>
            <Icon icon="fas fa-bars" />
          </HeaderSecondaryLeftToggle>
          <p>Patient List</p>
        </HeaderSecondaryLeft>

        <HeaderSecondaryRight>
          <HeaderButton>
            <Icon icon="fas fa-print" />
          </HeaderButton>

          <HeaderButton
            onClick={() => {
              setSearchMenuIsOpen((searchMenuIsOpen) => !searchMenuIsOpen);
            }}
          >
            <Icon icon="fas fa-search" />
          </HeaderButton>

          <HeaderButton>
            <Icon icon="fas fa-sign-in-alt" />
          </HeaderButton>
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
  /* grid-template-rows: 7vh 5vh; */
  grid-template-rows: 65px 55px;
  -webkit-tap-highlight-color: transparent;
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
  text-transform: uppercase;
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

// Styled: HeaderButton
const HeaderButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 4px;
  padding: 4px 8px;
  transition: all 150ms linear;

  &:hover {
    color: #e0e0e0;
    transition: all 150ms linear;
  }

  & i {
    font-size: 1.6rem;
  }

  &:nth-child(3) {
    margin-right: 1rem;
  }
`;
