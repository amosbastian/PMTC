// Source for handling react-select with formik:
// https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706
import React from "react";
import styled from "styled-components";
import ReactSelect from "react-select";
import { FieldProps } from "formik";
import { OptionsType, ValueType } from "react-select/src/types";

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

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends FieldProps {
  className?: string;
  id?: string;
  isMulti?: boolean;
  label?: string;
  options: OptionsType<Option>;
}

const Select: React.FC<SelectProps> = ({ className, id, label, field, form, options, isMulti = false }) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      isMulti ? (option as Option[]).map((item: Option) => item.value) : (option as Option).value,
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value?.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <TextInputContainer className={className} id={id}>
      <label>
        <p className="label">{label}</p>
        <ReactSelect
          styles={customStyles}
          name={field.name}
          value={getValue()}
          onChange={onChange}
          options={options}
          isMulti={isMulti}
        />
      </label>
    </TextInputContainer>
  );
};

export default Select;
