// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: ReportField
function ReportField({
  fieldAlignItems,
  data,
  field,
  fieldFontWeight,
  fieldLetterSpacing,
  fieldMarginBottom,
  fieldMinHeight,
  fieldTextTransform,
  fontSize,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  fieldWidth,
}) {
  return (
    <ReportFieldContainer
      style={{
        fontSize: `${fontSize}`,
        margin: `${margin}`,
        marginTop: `${marginTop}`,
        marginRight: `${marginRight}`,
        marginBottom: `${marginBottom}`,
        marginLeft: `${marginLeft}`,
        padding: `${padding}`,
        paddingTop: `${paddingTop}`,
        paddingRight: `${paddingRight}`,
        paddingBottom: `${paddingBottom}`,
        paddingLeft: `${paddingLeft}`,
      }}
    >
      <ReportFieldWrapper>
        <ReportFieldField
          style={{
            alignItems: `${fieldAlignItems}`,
            marginBottom: `${fieldMarginBottom}`,
            fontWeight: `${fieldFontWeight}`,
            letterSpacing: `${fieldLetterSpacing}`,
            minHeight: `${fieldMinHeight}`,
            textTransform: `${fieldTextTransform}`,
            width: `${fieldWidth}`,
          }}
        >
          {field}
        </ReportFieldField>
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
const ReportFieldField = styled.span`
  align-items: flex-start;
  color: #414141;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Styled: ReportFieldData
const ReportFieldData = styled.span`
  color: #2c2c2c;
  font-weight: 600;
  word-wrap: break-word;
`;
