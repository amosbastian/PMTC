import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1024px;
  margin: auto;
`;

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledDiv className={className}>{children}</StyledDiv>
);

export default Container;
