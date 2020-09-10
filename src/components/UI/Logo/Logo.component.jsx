// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: assets
import { ReactComponent as OneResponseLogo } from "../../../assets/images/oneresponselogo.svg";

// UI: Logo
function Logo() {
  return (
    <Logo__Container>
      <OneResponseLogo />
    </Logo__Container>
  );
}

// Export: Logo
export default Logo;

// Styled: Logo__Container
const Logo__Container = styled.div`
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
