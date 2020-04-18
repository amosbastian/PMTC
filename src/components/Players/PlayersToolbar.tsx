import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PlayersToolbarProps {
  handleOpen: () => void;
}

const PlayersToolbar: React.FC<PlayersToolbarProps> = ({ handleOpen }) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Toolbar>
      <SearchInput placeholder="Search players" size="small" variant="outlined" />
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Add{isDesktop && " player"}
      </Button>
    </Toolbar>
  );
};

export default PlayersToolbar;
