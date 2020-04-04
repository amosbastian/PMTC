import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1024px;
  padding-right: 2rem;
  padding-left: 2rem;
  margin: auto;

  @media only screen and (max-width: 600px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledDiv className={className}>{children}</StyledDiv>
);

export default Container;
