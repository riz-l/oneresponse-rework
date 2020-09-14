// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: ReportField
function ReportField({ field, data }) {
  return (
    <ReportFieldContainer>
      <ReportFieldWrapper>
        <ReportFieldField>{field}</ReportFieldField>
        <p>{data}</p>
      </ReportFieldWrapper>
    </ReportFieldContainer>
  );
}

// Export: ReportField
export default ReportField;

// Styled: ReportFieldContainer
const ReportFieldContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

// Styled: ReportFieldWrapper
const ReportFieldWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// Styled: ReportFieldField
const ReportFieldField = styled.p`
  font-weight: 600;
`;
