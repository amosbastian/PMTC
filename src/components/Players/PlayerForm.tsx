import React from "react";
import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { FetchPlayersQuery } from "../../generated/graphql";
import { Button } from "@material-ui/core";

export type Player = FetchPlayersQuery["players"][0];

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;

interface PlayerFormProps {
  player?: Player;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ player }) => {
  const teams: { value: string; label: string }[] = [];
  const noTeams = teams.length === 0;

  return (
    <Card component="form">
      <CardHeader title="Editing player" />
      <StyledCardContent>
        <Autocomplete
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team" size="small" />}
          disabled={noTeams}
        />
        <TextField fullWidth size="small" variant="outlined" label="Name" />
        <Autocomplete
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Role" size="small" />}
          disabled={noTeams}
        />
      </StyledCardContent>
      <StyledCardActions>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </StyledCardActions>
    </Card>
  );
};

export default PlayerForm;
