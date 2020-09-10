// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";

// UI: PatientNameHeader
function PatientNameHeader({ selectedPatient, patientDetailsData }) {
  // Renders a selected Patient's Firstname, Surname and Master_ePR_ID
  const patientNameRender = patientDetailsData.map(
    ({ Master_ePR_ID, PD_Firstname, PD_Surname }) => (
      <PatientNameHeader__Container>
        <PatientNameHeader__Wrapper>
          <PatientNameHeader__Row>
            <PatientNameHeader__PatientFirstname>
              {PD_Firstname ? PD_Firstname : <span>Forename</span>}
            </PatientNameHeader__PatientFirstname>

            <PatientNameHeader__PatientSurname>
              {PD_Surname ? PD_Surname : <span>Surname</span>}
            </PatientNameHeader__PatientSurname>
          </PatientNameHeader__Row>

          <PatientNameHeader__IdContainer>
            <span>Master ePR ID:</span>
            <PatientNameHeader__Id>
              {Master_ePR_ID ? Master_ePR_ID : <span>Master ePR ID</span>}
            </PatientNameHeader__Id>
          </PatientNameHeader__IdContainer>
        </PatientNameHeader__Wrapper>
      </PatientNameHeader__Container>
    )
  );

  // If selectedPatient === null, render select Patient prompt
  // If selectedPatient !== null, render {patientNameRender}
  return (
    <>
      {selectedPatient === null ? (
        <PatientNameHeader__Prompt>
          <Icon icon="fas fa-exclamation-triangle" />
          <span>Please select a Patient</span>
        </PatientNameHeader__Prompt>
      ) : (
        patientNameRender
      )}
    </>
  );
}

// Export: PatientNameHeader
export default PatientNameHeader;

// Styled: PatientNameHeader__Prompt
const PatientNameHeader__Prompt = styled.div`
  align-items: center;
  background: rgba(255, 99, 71, 1);
  display: flex;
  justify-content: flex-start;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  width: 100vw;

  & i {
    color: rgb(126, 24, 24);
    margin-right: 1rem;
  }

  & span {
    color: rgb(126, 24, 24);
  }
`;

// Styled: PatientNameHeader__Container
const PatientNameHeader__Container = styled.div`
  align-items: center;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  margin: 0 2rem;
  padding: 1rem 0;
  width: 100vw;
`;

// Styled: PatientNameHeader__Wrapper
const PatientNameHeader__Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Styled: PatientNameHeader__Row
const PatientNameHeader__Row = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Styled: PatientNameHeader__PatientFirstname
const PatientNameHeader__PatientFirstname = styled.span`
  color: #414141;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1.4px;

  @media screen and (max-width: 748px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 564px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 468px) {
    display: none;
  }

  & span {
    color: #414141;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 1.4px;

    @media screen and (max-width: 748px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 564px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 468px) {
      display: none;
    }
  }
`;

// Styled: PatientNameHeader__PatientSurname
const PatientNameHeader__PatientSurname = styled.span`
  color: #414141;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1.4px;
  margin-left: 10px;

  @media screen and (max-width: 748px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 564px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 468px) {
    margin-left: 0;
  }

  @media screen and (max-width: 368px) {
    font-size: 1rem;
  }

  & span {
    color: #414141;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 1.4px;

    @media screen and (max-width: 748px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 564px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 368px) {
      font-size: 1rem;
    }
  }
`;

// Styled: PatientNameHeader__IdContainer
const PatientNameHeader__IdContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  & span {
    color: #2c2c2c;
  }

  @media screen and (max-width: 468px) {
    display: none;
  }
`;

// Styled: PatientNameHeader__Id
const PatientNameHeader__Id = styled.span`
  color: #414141;
  margin-left: 1rem;
`;
