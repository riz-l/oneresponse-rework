// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: ReportField
function ReportField({ field, data, marginTop, marginBottom }) {
  return (
    <ReportFieldContainer
      style={{ marginTop: `${marginTop}`, marginBottom: `${marginBottom}` }}
    >
      <ReportFieldWrapper>
        <ReportFieldField>{field}</ReportFieldField>
        <ReportFieldData>{data}</ReportFieldData>
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
  padding-bottom: 1rem;
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
  color: #414141;
`;

// Styled: ReportFieldData
const ReportFieldData = styled.p`
  color: #2c2c2c;
  font-weight: 600;
`;
