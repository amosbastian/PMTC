// Source for handling react-select with formik:
// https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706
import React from "react";
import styled from "styled-components";
import ReactSelect from "react-select";
import { FieldProps } from "formik";
import { OptionsType, ValueType } from "react-select/src/types";
import Label from "./Label";

const TextInputContainer = styled.div`
  width: 100%;
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
  isDisabled?: boolean;
  isMulti?: boolean;
  label?: string;
  options: OptionsType<Option>;
  value?: Option;
}

const Select: React.FC<SelectProps> = ({
  className,
  id,
  label,
  field,
  form,
  options,
  isMulti = false,
  isDisabled = false,
}) => {
  const onChangeHandler = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      isMulti ? (option as Option[])?.map((item: Option) => item.value) : (option as Option).value,
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? field.value?.forEach((value: any) => options.find((option) => option.value === value))
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <TextInputContainer className={className} id={id}>
      <label>
        <Label>{label}</Label>
        <ReactSelect
          styles={customStyles}
          name={field.name}
          value={getValue()}
          onChange={onChangeHandler}
          options={options}
          isMulti={isMulti}
          isDisabled={isDisabled}
        />
      </label>
    </TextInputContainer>
  );
};

export default Select;
