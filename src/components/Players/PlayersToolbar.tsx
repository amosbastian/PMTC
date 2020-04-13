import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import Button from "@material-ui/core/Button";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayersToolbar: React.FC = () => {
  return (
    <Toolbar>
      <SearchInput placeholder="Search players" size="small" variant="outlined" />
      <Button color="primary" variant="contained">
        Add player
      </Button>
    </Toolbar>
  );
};

export default PlayersToolbar;
