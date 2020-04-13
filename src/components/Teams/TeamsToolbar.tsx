import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import Button from "@material-ui/core/Button";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamsToolbar: React.FC = () => {
  return (
    <Toolbar>
      <SearchInput placeholder="Search teams" size="small" variant="outlined" />
      <Button color="primary" variant="contained">
        Add team
      </Button>
    </Toolbar>
  );
};

export default TeamsToolbar;
