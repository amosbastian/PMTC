import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField, { OutlinedTextFieldProps } from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const Form = styled.form`
  background-color: #fff;
`;

interface SearchInputProps extends OutlinedTextFieldProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className, ...rest }) => {
  return (
    <Form className={className}>
      <TextField
        className={className}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="Search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </Form>
  );
};

export default SearchInput;
