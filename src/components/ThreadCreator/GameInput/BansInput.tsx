import React from "react";
import Select from "../../Select";
import styled from "styled-components";

const BansInputSection = styled.div`
  display: grid;
  gap: 1rem;
`;

const BansInput: React.FC = () => {
  return (
    <BansInputSection>
      <Select id="bans1" label="Bans team 1" />
      <Select id="bans2" label="Bans team 2" />
    </BansInputSection>
  );
};

export default BansInput;
