// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: assets
import { ReactComponent as OneResponseLogo } from "../../../assets/images/oneresponselogo.svg";

// UI: Logo
function Logo() {
  return (
    <LogoContainer>
      <OneResponseLogo />
    </LogoContainer>
  );
}

// Export: Logo
export default Logo;

// Styled: LogoContainer
const LogoContainer = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-left: -1.9rem;

  & svg {
    height: 170px;
    width: auto;
  }
`;
