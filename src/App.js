// Import: Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Import: page
import Report from "./components/pages/Report/Report.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";
import PatientList from "./components/UI/PatientList/PatientList.component";

// Component: App
function App() {
  // State = isOpen, selectedPatient
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <App__Container>
      <App__Header>
        <Header setIsOpen={setIsOpen} />
      </App__Header>

      <App__Layout
        style={
          !isOpen
            ? {
                gridTemplateColumns: "0 1fr",
              }
            : null
        }
      >
        <App__PatientList>
          <PatientList
            isOpen={isOpen}
            setSelectedPatient={setSelectedPatient}
          />
        </App__PatientList>

        <App__PatientReport>
          <Report selectedPatient={selectedPatient} />
        </App__PatientReport>
      </App__Layout>
    </App__Container>
  );
}

// Export: App
export default App;

// Styled: App__Container
const App__Container = styled.div`
  background: #f0f1f6;
`;

// Styled: App__Header
const App__Header = styled.div`
  height: 12vh;
  width: 100%;
`;

// Styled: App__Layout
const App__Layout = styled.div`
  display: grid;
  grid-template-areas: "patient-list report-container";
  grid-template-columns: 400px 1fr;
  grid-template-rows: 88vh;
  transition: all 150ms linear;
`;

// Styled: App__PatientList
const App__PatientList = styled.div`
  grid-area: patient-list;
`;

// Styled: App__PatientReport
const App__PatientReport = styled.div`
  grid-area: report-container;
`;
