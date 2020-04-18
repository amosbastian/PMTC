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
import { useForm, Controller } from "react-hook-form";

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
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const { data, loading, error } = useQuery<FetchTeamsAndRolesQuery>(FETCH_TEAMS_AND_ROLES);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const teams = data?.teams.map((team) => ({ id: team.id, label: team.name }));
  const roles = data?.roles.map((role) => ({ id: role.id, label: role.name }));

  const playerTeam = {
    id: player?.team?.id ?? "",
    label: player?.team?.name ?? "",
  };

  const playerRole = {
    id: player?.role.id ?? "",
    label: player?.role.name ?? "",
  };

  return (
    <Card component="form" onSubmit={handleSubmit(onSubmit)}>
      <CardHeader title={player ? `Edit ${player.name}` : "Add player"} />
      <StyledCardContent>
        <Autocomplete
          options={teams ?? []}
          getOptionLabel={(option) => option?.label ?? ""}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team" />}
          disabled={!data}
          defaultValue={player ? playerTeam : null}
          size="small"
        />
        <Controller
          as={<TextField fullWidth variant="outlined" label="Name" disabled={!data} size="small" />}
          defaultValue={player?.name ?? ""}
          name="name"
          control={control}
        />
        <Autocomplete
          options={roles ?? []}
          getOptionLabel={(option) => option?.label ?? ""}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Role" />}
          disabled={!data}
          defaultValue={player ? playerRole : null}
          size="small"
        />
      </StyledCardContent>
      <StyledCardActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" color="primary" variant="contained">
          Save
        </Button>
      </StyledCardActions>
    </Card>
  );
};

export default PlayerForm;
