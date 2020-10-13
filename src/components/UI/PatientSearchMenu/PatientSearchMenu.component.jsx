// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: PatientSearchMenu
function PatientSearchMenu({ searchMenuIsOpen, setSearchMenuIsOpen }) {
  return (
    <PatientSearchMenuContainer searchMenuIsOpen={searchMenuIsOpen}>
      <h1>Patient Search Menu</h1>
      <button
        onClick={() => {
          setSearchMenuIsOpen((searchMenuIsOpen) => !searchMenuIsOpen);
        }}
        type="button"
      >
        CLOSE MENU
      </button>
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
