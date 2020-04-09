import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import { Field } from "formik";

const PicksInputSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface PicksInputProps {
  game: number;
}

const PicksInput: React.FC<PicksInputProps> = ({ game }) => {
  return (
    <PicksInputSection>
      <Field
        id="picks1"
        name={`games[${game}].team1.picks`}
        component={Select}
        label="Picks team 1"
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <Field
        id="picks2"
        name={`games[${game}].team2.picks`}
        component={Select}
        label="Picks team 2"
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
    </PicksInputSection>
  );
};

export default PicksInput;
