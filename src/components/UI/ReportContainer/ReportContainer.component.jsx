// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: ReportContainer
function ReportContainer({ children }) {
  return <ReportContainerContainer>{children}</ReportContainerContainer>;
}

// Export: ReportContainer
export default ReportContainer;

// Styled: ReportContainerContainer
const ReportContainerContainer = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem 1rem 1rem;
`;
