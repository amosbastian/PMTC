import React from "react";
import styled from "styled-components";

const TextInputContainer = styled.div`
  width: 100%;

  .label {
    font-size: 0.875rem;
    color: #374151;
    font-weight: 500;
    line-height: 1.25rem;
    margin-bottom: 0.45rem;
  }

  input {
    width: 100%;
    border-radius: 0.25rem;
    transition: all 0.2s;
    min-height: 2.375rem;
    padding: 0 0.75rem;
    border: 1px solid hsl(0, 0%, 80%);
    font-size: 1rem;

    &::placeholder {
      color: hsl(0, 0%, 50%);
    }

    &:focus {
      outline: none;
      border-color: #718096;
    }
  }
`;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

const TextInput: React.FC<TextInputProps> = ({ className, id, label, ...rest }) => {
  return (
    <TextInputContainer className={className} id={id}>
      <label>
        <p className="label">{label}</p>
        <input type="text" {...rest} />
      </label>
    </TextInputContainer>
  );
};

export default TextInput;
