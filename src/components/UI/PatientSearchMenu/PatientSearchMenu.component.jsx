// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: PatientSearchMenu
function PatientSearchMenu({ searchMenuIsOpen, setSearchMenuIsOpen }) {
  return (
    <PatientSearchMenuContainer searchMenuIsOpen={searchMenuIsOpen}>
      <PatientSearchMenuWrapper>
        <PatientSearchMenuHeader>
          <PatientSearchMenuHeading>
            <Icon icon="" />
            <h3>Patient / Incident Search</h3>
          </PatientSearchMenuHeading>
          <p>Please enter search criteria below:</p>
        </PatientSearchMenuHeader>

        <PatientSearchMenuButtonContainer>
          <PatientSearchMenuButton type="button">
            Search
          </PatientSearchMenuButton>

          <PatientSearchMenuButton
            onClick={() => {
              setSearchMenuIsOpen((searchMenuIsOpen) => !searchMenuIsOpen);
            }}
            type="button"
          >
            Clear / Cancel
          </PatientSearchMenuButton>
        </PatientSearchMenuButtonContainer>
      </PatientSearchMenuWrapper>
    </PatientSearchMenuContainer>
  );
}

// Export: PatientSearchMenu
export default PatientSearchMenu;

// Styled: PatientSearchMenuContainer
const PatientSearchMenuContainer = styled.div`
  background: #414141;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ searchMenuIsOpen }) =>
    searchMenuIsOpen ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: ${({ searchMenuIsOpen }) =>
    searchMenuIsOpen ? `visible` : `hidden`};
  width: 500px;
  max-width: 500px;
  min-width: 500px;
  z-index: 99999;

  @media screen and (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
  }
`;

// Styled: PatientSearchMenuWrapper
const PatientSearchMenuWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background: red;
  height: 100%;
  width: 80%;
`;

// Styled: PatientSearchMenuHeader
const PatientSearchMenuHeader = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: green;
  height: auto;
  width: 100%;

  & h3 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
  }

  & p {
    color: #fff;
  }
`;

// Styled: PatientSearchMenuHeading
const PatientSearchMenuHeading = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

// Styled: PatientSearchMenuButtonContainer
const PatientSearchMenuButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Styled: PatientSearchMenuButton
const PatientSearchMenuButton = styled.button`
  background: #414141;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  display: inline;
  font-size: 14px;
  padding: 10px 8px;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 150ms linear;
  width: 100%;

  &:hover {
    background: #fff;
    color: #2c2c2c;
    transition: all 150ms linear;
  }

  &:nth-child(1) {
    margin-right: 10px;
  }
`;
