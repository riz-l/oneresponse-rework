// Import: Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import: UI
import PatientItem from "../PatientItem/PatientItem.component";

// UI: PatientList
function PatientList({ isOpen, setSelectedPatient }) {
  // State = loading, patients
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

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
  }, []);

  // If loading === true, render loading message
  if (loading) {
    return (
      <PatientListContainer>
        <PatientListLoadingMessage>
          <p>Loading...</p>
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
      >
        <PatientItem {...otherPatientListProps} />
      </div>
    )
  );

  return (
    <>
      <PatientListContainer
        style={!isOpen ? { transform: "translateX(-100%" } : null}
      >
        <PatientListWrapper>
          <PatientListHeader>Patients Created in last 72hrs</PatientListHeader>
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

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

// Styled: PatientListLoadingMessage
const PatientListLoadingMessage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 0.4rem;

  & p {
    font-size: 2rem;
    letter-spacing: 2px;
    opacity: 0.7;
  }
`;

// Styled: PatientListWrapper
const PatientListWrapper = styled.div`
  align-items: flex-start;
  ${"" /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */}
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  text-align: left;
  width: 100%;
`;

// Styled: PatientListHeader
const PatientListHeader = styled.span`
  font-size: 1.3rem;
  letter-spacing: 1px;
  margin: 0.4rem 0;

  @media screen and (max-width: 327px) {
    font-size: 1.2rem;
  }
`;

// Styled: PatientListLead
const PatientListLead = styled.span`
  letter-spacing: 0.8px;
  opacity: 0.7;
`;
