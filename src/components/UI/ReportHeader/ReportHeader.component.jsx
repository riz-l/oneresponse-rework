// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Import: Assets
import { ReactComponent as ReportIcon } from "../../../assets/images/report-icon.svg";
import { ReactComponent as NotesIcon } from "../../../assets/images/notes-icon.svg";
import { ReactComponent as MediaIcon } from "../../../assets/images/media-icon.svg";
import { ReactComponent as EcgIcon } from "../../../assets/images/ecg-icon.svg";
import { ReactComponent as DodIcon } from "../../../assets/images/dod-icon.svg";

// UI: ReportHeader
function ReportHeader({ patientListIsOpen }) {
  // State = windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect = Checks and updates windowWidth
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      // console.log("Updating Height");
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
          <ReportIcon />
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
          <NotesIcon />
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
          <MediaIcon />
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
          <EcgIcon />
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
          <DodIcon />
          <li>DoD</li>
        </NavLink>
      </ReportHeaderOptions>
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
  transition: position 150ms linear;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`;

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
      & li {
        color: #2c2c2c;
        transition: color 150ms linear;
      }

      & svg {
        fill: #2c2c2c;
        transition: fill 150ms linear;
      }
    }

    & svg {
      fill: #414141;
      height: 40px;
      transition: fill 150ms linear;
      width: 40px;

      @media screen and (max-width: 420px) {
        height: 35px;
        width: 35px;
      }

      @media screen and (max-width: 330px) {
        height: 30px;
        width: 30px;
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
