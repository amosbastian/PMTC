import React from "react";
import styled from "styled-components";
import ReactSelect from "react-select";
import { SelectComponentsProps } from "react-select/src/Select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const TextInputContainer = styled.div`
  width: 100%;

  .label {
    font-size: 0.875rem;
    color: #374151;
    font-weight: 500;
    line-height: 1.25rem;
    margin-bottom: 0.45rem;
  }
`;

const customStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: state.isFocused ? "#718096" : "hsl(0, 0%, 80%)",
    "&:hover": {
      borderColor: state.isFocused ? "#718096" : "hsl(0, 0%, 80%)",
    },
    minHeight: "2.25rem !important",
  }),
};

interface SelectProps extends SelectComponentsProps {
  className?: string;
  label?: string;
}

const Select: React.FC<SelectProps> = ({ className, id, label, ...rest }) => {
  return (
    <TextInputContainer className={className} id={id}>
      <label>
        <p className="label">{label}</p>
        <ReactSelect styles={customStyles} options={options} {...rest} />
      </label>
    </TextInputContainer>
  );
};

export default Select;
