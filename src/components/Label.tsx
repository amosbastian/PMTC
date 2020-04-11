import React from "react";
import styled from "styled-components";

const StyledLabel = styled.p`
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.45rem;
`;

interface LabelProps {
  className?: string;
}

const Label: React.FC<LabelProps> = ({ className, children }) => {
  return <StyledLabel className={className}>{children}</StyledLabel>;
};

export default Label;
