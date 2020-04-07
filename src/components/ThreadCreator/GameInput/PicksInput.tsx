import React from "react";
import Select from "../../Select";
import styled from "styled-components";

const PicksInputSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

const PicksInput: React.FC = () => {
  return (
    <PicksInputSection>
      <Select id="picks1" label="Picks team 1" />
      <Select id="picks2" label="Picks team 2" />
    </PicksInputSection>
  );
};

export default PicksInput;
