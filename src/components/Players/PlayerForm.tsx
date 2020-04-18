import React from "react";
import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { FetchPlayersQuery, FetchTeamsAndRolesQuery } from "../../generated/graphql";
import { Button } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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

const FETCH_TEAMS_AND_ROLES = gql`
  query fetchTeamsAndRoles {
    teams {
      id
      name
    }
    roles {
      id
      name
    }
  }
`;

interface PlayerFormProps {
  player?: Player;
  handleClose: () => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ handleClose, player }) => {
  const { data, loading, error } = useQuery<FetchTeamsAndRolesQuery>(FETCH_TEAMS_AND_ROLES);

  const teams = data?.teams;
  const roles = data?.roles;

  return (
    <Card component="form">
      <CardHeader title={player ? `Edit ${player.name}` : "Add player"} />
      <StyledCardContent>
        <Autocomplete
          options={teams ?? []}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team" />}
          disabled={!data}
          value={player?.team}
          size="small"
        />
        <TextField fullWidth variant="outlined" label="Name" disabled={!data} value={player?.name} size="small" />
        <Autocomplete
          options={roles ?? []}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Role" />}
          disabled={!data}
          value={player?.role}
          size="small"
        />
      </StyledCardContent>
      <StyledCardActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </StyledCardActions>
    </Card>
  );
};

export default PlayerForm;
