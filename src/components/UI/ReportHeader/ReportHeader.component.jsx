// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Import: Assets
// import { ReactComponent as NwasLogo } from "../../../assets/images/nwaslogo.svg";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: ReportHeader
function ReportHeader({ patientListIsOpen }) {
  // State = windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect = Checks and updates windowWidth
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      console.log("Updating Height");
    };

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <ReportHeaderContainer
      patientListIsOpen={patientListIsOpen}
      windowWidth={windowWidth}
    >
      <ReportHeaderOptions>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/"
          exact
        >
          <Icon icon="fas fa-file-medical-alt" />
          <li>Report</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/notes"
        >
          <Icon icon="fas fa-sticky-note" />
          <li>Notes</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/media"
        >
          <Icon icon="fas fa-camera" />
          <li>Media</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/ecg"
        >
          <Icon icon="fas fa-heartbeat" />
          <li>ECG</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 150ms linear",
          }}
          to="/diagnosis-of-death"
        >
          <Icon icon="fas fa-procedures" />
          <li>DoD</li>
        </NavLink>
      </ReportHeaderOptions>

      {/* <ReportHeaderLogo>
        <NwasLogo />
      </ReportHeaderLogo> */}
    </ReportHeaderContainer>
  );
}

// Export: ReportHeader
export default ReportHeader;

// Styled: ReportHeaderContainer
const ReportHeaderContainer = styled.div`
  align-items: center;
  background: #ffffff;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0 1rem;
  position: ${({ patientListIsOpen, windowWidth }) => {
    if (!patientListIsOpen || windowWidth > 768) {
      return "sticky";
    } else {
      return "static";
    }
  }};
  -webkit-position: ${({ patientListIsOpen, windowWidth }) => {
    if (!patientListIsOpen || windowWidth > 768) {
      return "sticky";
    } else {
      return "static";
    }
  }};
  top: 0;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

  & svg {
    height: 90px;
    margin-right: 0.2rem;
    visibility: visible;

    @media screen and (max-width: 912px) {
      display: none;
      visibility: hidden;
    }
  }
`;

// Styled: ReportHeaderLogo
// const ReportHeaderLogo = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   height: 80px;
//   width: 216px;
// `;

// Styled: ReportHeaderOptions
const ReportHeaderOptions = styled.ul`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: flex-start;
  width: 100%;

  & a {
    align-items: center;
    border-top: 3px solid transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.8rem 2rem;

    @media screen and (max-width: 558px) {
      padding: 0.8rem 1.6rem;
    }

    @media screen and (max-width: 480px) {
      padding: 0.8rem 1.2rem;
    }

    @media screen and (max-width: 400px) {
      padding: 0.8rem 1rem;
    }

    @media screen and (max-width: 364px) {
      padding: 0.8rem 0.8rem;
    }

    &:hover {
      & i,
      li {
        color: #2c2c2c;
        transition: color 150ms linear;
      }
    }

    & i {
      color: #414141;
      font-size: 2.4rem;
      transition: color 150ms linear;

      @media screen and (max-width: 416px) {
        font-size: 2rem;
      }
    }

    & li {
      color: #414141;
      display: inline;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding-top: 0.2rem;
      transition: color 150ms linear;

      @media screen and (max-width: 678px) {
        display: none;
      }
    }
  }
`;
