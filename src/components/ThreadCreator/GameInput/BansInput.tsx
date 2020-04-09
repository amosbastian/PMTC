import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import { Field } from "formik";

const BansInputSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface BansInputProps {
  game: number;
}

const BansInput: React.FC<BansInputProps> = ({ game }) => {
  return (
    <BansInputSection>
      <Field
        id="bans1"
        name={`games[${game}].team1.bans`}
        component={Select}
        label="Bans team 1"
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <Field
        id="bans2"
        name={`games[${game}].team2.bans`}
        component={Select}
        label="Bans team 2"
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
    </BansInputSection>
  );
};

export default BansInput;
