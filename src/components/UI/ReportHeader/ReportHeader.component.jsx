// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: ReportHeader
function ReportHeader() {
  return (
    <ReportHeaderContainer>
      <ReportHeaderOptions>
        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          to="/sbar"
        >
          <Icon icon="fas fa-laptop-medical" />
          <li>SBAR</li>
        </NavLink>

        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          to="/patient-report"
        >
          <Icon icon="fas fa-file-medical-alt" />
          <li>Report</li>
        </NavLink>

        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          to="/notes"
        >
          <Icon icon="fas fa-sticky-note" />
          <li>Notes</li>
        </NavLink>

        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          to="/media"
        >
          <Icon icon="fas fa-camera" />
          <li>Media</li>
        </NavLink>

        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          to="/ecg"
        >
          <Icon icon="fas fa-heartbeat" />
          <li>ECG</li>
        </NavLink>

        <NavLink
          activeStyle={{
            borderTop: "3px solid #569fd3",
          }}
          to="/diagnosis-of-death"
        >
          <Icon icon="fas fa-procedures" />
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
  background: #f0f1f6;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0 1rem;
  top: 0;
  width: 100%;
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
      font-size: 1.4rem;
      transition: color 150ms linear;
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
