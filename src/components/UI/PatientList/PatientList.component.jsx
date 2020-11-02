// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";
import PatientItem from "../PatientItem/PatientItem.component";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.component";

// UI: PatientList
function PatientList({
  patientListIsOpen,
  setPatientListIsOpen,
  patients,
  setPatients,
  selectedPatient,
  setSelectedPatient,
}) {
  // State = loading
  const [loading, setLoading] = useState(true);

  // When PatientList renders fetch data from OneResponse API
  // If successful, patients === OneResponse API data, loading === false
  // If unsuccessful, catch error
  useEffect(() => {
    async function getPatientList() {
      setLoading(true);
      try {
        const oneResponseApi =
          "https://cad-message-to-trust-test.azurewebsites.net/PatientDetails";
        const oneResponseResponse = await fetch(oneResponseApi);
        const oneResponseApiData = await oneResponseResponse.json();
        setPatients(oneResponseApiData);
      } catch (error) {
        console.log("Patient Lists data error: ", error);
        throw new Error("Patient List data unavailable.");
      }
      setLoading(false);
    }
    getPatientList();
  }, [setPatients]);

  // If loading === true, render loading message
  if (loading) {
    return (
      <PatientListContainer>
        <PatientListWrapper>
          <PatientListHeader>
            <Icon icon="fas fa-hospital-user" />
            Patients Created in last 72hrs
          </PatientListHeader>

          {/* <PatientListButtonContainer>
            <PatientListButton type="button">Incoming</PatientListButton>
            <PatientListButton type="button">Arrived</PatientListButton>
            <PatientListButton type="button">Processed</PatientListButton>
          </PatientListButtonContainer>

          <PatientListButtonContainer>
            <PatientListButton type="button">PID</PatientListButton>
            <PatientListButton type="button">Non-PID</PatientListButton>
          </PatientListButtonContainer> */}

          <PatientListCount>
            <p>Patient Count: {Object.keys(patients).length}</p>
          </PatientListCount>

          <PatientListLead>Please select from the list below:</PatientListLead>
        </PatientListWrapper>

        <PatientListLoadingMessage>
          <p>Loading...</p>
          <LoadingSpinner />
        </PatientListLoadingMessage>
      </PatientListContainer>
    );
  }

  // Maps PD_Firstname, PD_Surname and Master_ePR_ID from state
  const patientListRender = patients.map(
    ({ Master_ePR_ID, ...otherPatientListProps }) => (
      <div
        key={Master_ePR_ID}
        onClick={() => setSelectedPatient(Master_ePR_ID)}
        style={
          Master_ePR_ID === selectedPatient ? { background: "#2c2c2c" } : null
        }
      >
        <div
          onClick={
            window.innerWidth <= 768
              ? () =>
                  setPatientListIsOpen(
                    (patientListIsOpen) => !patientListIsOpen
                  )
              : null
          }
        >
          <PatientItem {...otherPatientListProps} />
        </div>
      </div>
    )
  );

  return (
    <>
      <PatientListContainer
        style={!patientListIsOpen ? { transform: "translateX(-100%" } : null}
      >
        <PatientListWrapper>
          <PatientListHeader>
            <Icon icon="fas fa-hospital-user" />
            Patients Created in last 72hrs
          </PatientListHeader>

          {/* <PatientListButtonContainer>
            <PatientListButton type="button">Incoming</PatientListButton>
            <PatientListButton type="button">Arrived</PatientListButton>
            <PatientListButton type="button">Processed</PatientListButton>
          </PatientListButtonContainer>

          <PatientListButtonContainer>
            <PatientListButton type="button">PID</PatientListButton>
            <PatientListButton type="button">Non-PID</PatientListButton>
          </PatientListButtonContainer> */}

          <PatientListCount>
            <p>Patient Count: {Object.keys(patients).length}</p>
          </PatientListCount>

          <PatientListLead>Please select from the list below:</PatientListLead>
        </PatientListWrapper>
        {patientListRender}
      </PatientListContainer>
    </>
  );
}

// Export: PatientList
export default PatientList;

// Styled: PatientListContainer
const PatientListContainer = styled.div`
  background: #414141;
  color: #ffffff;
  left: 0;
  max-height: 88vh;
  min-height: 88vh;
  overflow-x: hidden;
  overflow-y: scroll;
  top: 0;
  transform: translateX(0%);
  transition: transform 150ms linear;
  width: 400px;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

// Styled: PatientListLoadingMessage
const PatientListLoadingMessage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0.4rem;

  & p {
    font-size: 2rem;
    letter-spacing: 2px;
    opacity: 0.7;
  }
`;

// Styled: PatientListWrapper
const PatientListWrapper = styled.div`
  align-items: flex-start;
  background: #414141;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  -webkit-position: sticky;
  text-align: left;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

// Styled: PatientListHeader
const PatientListHeader = styled.span`
  font-size: 1.3rem;
  letter-spacing: 1px;
  margin: 0.4rem 0;

  @media screen and (max-width: 327px) {
    font-size: 1.2rem;
  }

  & i {
    font-size: 1.3rem;
    margin-right: 6px;
  }
`;

// Styled: PatientListLead
const PatientListLead = styled.span`
  letter-spacing: 0.8px;
  opacity: 0.7;
`;

// Styled: PatientListButtonContainer
// const PatientListButtonContainer = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: flex-start;
//   margin: 4px 0;
//   width: 100%;
// `;

// Styled: PatientListButton
// const PatientListButton = styled.button`
//   background: #414141;
//   border: 2px solid #fff;
//   color: #fff;
//   cursor: pointer;
//   display: inline;
//   font-size: 14px;
//   padding: 4px 0;
//   letter-spacing: 1px;
//   margin: 0 2px;
//   text-align: center;
//   text-decoration: none;
//   transition: all 150ms linear;
//   width: 100px;

//   &:hover {
//     background: #e0e0e0;
//     color: #414141;
//     transition: all 150ms linear;
//   }

//   &:focus {
//     background: #fff;
//     border: 2px solid #fff;
//     color: #2c2c2c;
//     transition: all 150ms linear;
//   }
// `;

// Styled: PatientListCount
const PatientListCount = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 4px;

  & p {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
