// Import: Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Import: page
import Report from "./components/pages/Report/Report.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";
import PatientList from "./components/UI/PatientList/PatientList.component";
import PatientSearchMenu from "./components/UI/PatientSearchMenu/PatientSearchMenu.component";

// Component: App
function App() {
  // State = patientListIsOpen, selectedPatient
  const [patients, setPatients] = useState([]);
  const [patientListIsOpen, setPatientListIsOpen] = useState(true);
  const [searchMenuIsOpen, setSearchMenuIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <AppContainer>
      <AppHeader>
        <Header
          setPatientListIsOpen={setPatientListIsOpen}
          setSearchMenuIsOpen={setSearchMenuIsOpen}
        />
      </AppHeader>

      <AppLayout
        style={
          !patientListIsOpen
            ? {
                gridTemplateColumns: "0 1fr",
              }
            : null
        }
      >
        <AppPatientList>
          <PatientList
            patientListIsOpen={patientListIsOpen}
            setPatientListIsOpen={setPatientListIsOpen}
            patients={patients}
            setPatients={setPatients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
          />
        </AppPatientList>

        <AppPatientReport>
          <Report
            selectedPatient={selectedPatient}
            patientListIsOpen={patientListIsOpen}
          />
        </AppPatientReport>

        <PatientSearchMenu
          searchMenuIsOpen={searchMenuIsOpen}
          setSearchMenuIsOpen={setSearchMenuIsOpen}
          patients={patients}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
      </AppLayout>
    </AppContainer>
  );
}

// Export: App
export default App;

// Styled: AppContainer
const AppContainer = styled.div`
  background: #f0f1f6;
`;

// Styled: AppHeader
const AppHeader = styled.div`
  height: 12vh;
  /* height: auto; */
  width: 100%;
`;

// Styled: AppLayout
const AppLayout = styled.div`
  display: grid;
  grid-template-areas: "patient-list report-container";
  grid-template-columns: 400px 1fr;
  grid-template-rows: 88vh;
  transition: all 150ms linear;
`;

// Styled: AppPatientList
const AppPatientList = styled.div`
  grid-area: patient-list;
`;

// Styled: AppPatientReport
const AppPatientReport = styled.div`
  grid-area: report-container;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
