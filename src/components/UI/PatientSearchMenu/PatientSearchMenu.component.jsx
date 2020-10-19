// Import: Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Import: UI
import Icon from "../Icon/Icon.component";
import PatientItem from "../PatientItem/PatientItem.component";

// UI: PatientSearchMenu
function PatientSearchMenu({
  searchMenuIsOpen,
  setSearchMenuIsOpen,
  patients,
  selectedPatient,
  setSelectedPatient,
}) {
  // State
  const [searchIncidentNo, setSearchIncidentNo] = useState(null); // Incident No., PD_Incident_Number
  const [searchCallSign, setSearchCallSign] = useState(null); // Call Sign, ePR_CallSign
  const [searchEprUser, setSearchEprUser] = useState(null); // ePR User, ePR_User
  const [searchFirstname, setSearchFirstname] = useState(null); // Patient Firstname, PD_Firstname
  const [searchSurname, setSearchSurname] = useState(null); // Patient Surname, PD_Surname
  const [searchNhsNo, setSearchNhsNo] = useState(null); // NHS No., PD_NHS_No
  const [searchReceivingLocation, setSearchReceivingLocation] = useState(null); // Receiving Location, PD_Receiving_Location

  // form: handleSubmit
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  // form: resetSearch
  function resetSearch() {
    setSearchMenuIsOpen((searchMenuIsOpen) => !searchMenuIsOpen);
    setSearchIncidentNo(null);
    setSearchCallSign(null);
    setSearchEprUser(null);
    setSearchFirstname(null);
    setSearchSurname(null);
    setSearchNhsNo(null);
    setSearchReceivingLocation(null);
  }

  return (
    <PatientSearchMenuContainer searchMenuIsOpen={searchMenuIsOpen}>
      <PatientSearchMenuWrapper>
        <PatientSearchMenuHeader>
          <PatientSearchMenuHeading>
            <Icon icon="fas fa-search" />
            <h3>Patient / Incident Search</h3>
          </PatientSearchMenuHeading>
          <p>Please enter search criteria below:</p>
        </PatientSearchMenuHeader>

        <PatientSearchMenuButtonContainer>
          <PatientSearchMenuButton type="submit">
            Search
          </PatientSearchMenuButton>

          <PatientSearchMenuButton onClick={resetSearch} type="button">
            Clear / Cancel
          </PatientSearchMenuButton>
        </PatientSearchMenuButtonContainer>

        <PatientSearchMenuInputContainer onSubmit={handleSubmit}>
          <PatientSearchMenuLabel htmlFor="incidentNo">
            Incident No.
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="Incident No."
            name="incidentNo"
            id="incidentNo"
            type="text"
            value={searchIncidentNo}
            onChange={(event) => setSearchIncidentNo(event.target.value)}
          />

          <PatientSearchMenuLabel htmlFor="callSign">
            Call Sign
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="Call Sign"
            name="callSign"
            id="callSign"
            type="text"
            value={searchCallSign}
            onChange={(event) => setSearchCallSign(event.target.value)}
          />

          <PatientSearchMenuLabel htmlFor="eprUser">
            ePR User
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="ePR User"
            name="eprUser"
            id="eprUser"
            type="text"
            value={searchEprUser}
            onChange={(event) => setSearchEprUser(event.target.value)}
          />

          <PatientSearchMenuLabel htmlFor="patientFirstname">
            Patient Firstname
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="Patient Firstname"
            name="patientFirstname"
            id="patientFirstname"
            type="text"
            value={searchFirstname}
            onChange={(event) => setSearchFirstname(event.target.value)}
          />

          <PatientSearchMenuLabel htmlFor="patientSurname">
            Patient Surname
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="Patient Surname"
            name="patientSurname"
            id="patientSurname"
            type="text"
            value={searchSurname}
            onChange={(event) => setSearchSurname(event.target.value)}
          />

          <PatientSearchMenuLabel htmlFor="nhsNo">
            NHS No.
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="NHS No."
            name="nhsNo"
            id="nhsNo"
            type="text"
            value={searchNhsNo}
            onChange={(event) => setSearchNhsNo(event.target.value)}
          />

          <PatientSearchMenuLabel htmlFor="receivingLocation">
            Receiving Location
          </PatientSearchMenuLabel>
          <PatientSearchMenuInput
            placeholder="Receiving Location"
            name="receivingLocation"
            id="receivingLocation"
            type="text"
            value={searchReceivingLocation}
            onChange={(event) => setSearchReceivingLocation(event.target.value)}
          />

          <PatientSearchResultContainer>
            <h5>Results:</h5>
            <div>
              {patients
                .filter(
                  (patient) =>
                    patient.PD_Firstname !== "" &&
                    patient.PD_Firstname === searchFirstname
                )
                .map(({ Master_ePR_ID, ...otherPatientListProps }) => (
                  <div
                    key={Master_ePR_ID}
                    style={
                      Master_ePR_ID === selectedPatient
                        ? { background: "#2c2c2c" }
                        : null
                    }
                    onClick={() => setSelectedPatient(Master_ePR_ID)}
                  >
                    <div
                      onClick={
                        window.innerWidth <= 768
                          ? () =>
                              setSearchMenuIsOpen(
                                (searchMenuIsOpen) => !searchMenuIsOpen
                              )
                          : null
                      }
                    >
                      <PatientItem {...otherPatientListProps} />
                    </div>
                  </div>
                ))}
            </div>

            <h5 style={{ marginTop: "1rem" }}>Anonymous Results:</h5>
            <div>
              {patients
                .filter((patient) => patient.PD_Firstname === "")
                .map(({ Master_ePR_ID, ...otherPatientListProps }) => (
                  <div
                    key={Master_ePR_ID}
                    style={
                      Master_ePR_ID === selectedPatient
                        ? { background: "#2c2c2c" }
                        : null
                    }
                    onClick={() => setSelectedPatient(Master_ePR_ID)}
                  >
                    <div
                      onClick={
                        window.innerWidth <= 768
                          ? () =>
                              setSearchMenuIsOpen(
                                (searchMenuIsOpen) => !searchMenuIsOpen
                              )
                          : null
                      }
                    >
                      <PatientItem {...otherPatientListProps} />
                    </div>
                  </div>
                ))}
            </div>
          </PatientSearchResultContainer>
        </PatientSearchMenuInputContainer>
      </PatientSearchMenuWrapper>
    </PatientSearchMenuContainer>
  );
}

// Export: PatientSearchMenu
export default PatientSearchMenu;

// Styled: PatientSearchMenuContainer
const PatientSearchMenuContainer = styled.div`
  background: #414141;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  right: 0;
  top: 0;
  transform: ${({ searchMenuIsOpen }) =>
    searchMenuIsOpen ? `translateX(0)` : `translateX(100%)`};
  transition: transform 150ms linear, visibility 150ms linear;
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
  margin: 1rem auto;
  width: 80%;
`;

// Styled: PatientSearchMenuHeader
const PatientSearchMenuHeader = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  width: 100%;

  & p {
    color: #fff;
  }
`;

// Styled: PatientSearchMenuHeading
const PatientSearchMenuHeading = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  & i {
    color: #fff;
    font-size: 22px;
    margin-right: 6px;
  }

  & h3 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
  }
`;

// Styled: PatientSearchMenuButtonContainer
const PatientSearchMenuButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
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

// Styled: PatientSearchMenuInputContainer
const PatientSearchMenuInputContainer = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
`;

// Styled: PatientSearchMenuInput
const PatientSearchMenuInput = styled.input`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  margin-bottom: 1rem;
  padding: 10px 0;
  text-indent: 1rem;
  transition: all 150ms linear;
  width: 100%;

  &:focus {
    background: #fff;
    border: 1px solid #2c2c2c;
    color: #2c2c2c;
    transition: all 150ms linear;
  }
`;

// Styled: PatientSearchMenuLabel
const PatientSearchMenuLabel = styled.label`
  color: #fff;
  margin-bottom: 8px;
`;

// Styled: PatientSearchResultContainer
const PatientSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 1rem;
  width: 100%;

  & h5 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
