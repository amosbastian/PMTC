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
import { Formik, Field, Form } from "formik";
import FormikCheckbox from "../FormikCheckbox";

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
  const onSubmit = (data: any) => {
    console.log(data);
  };

  if (loading) return null;

  const teamIds = data!.teams.map((team) => team.id);
  const roleIds = data!.roles.map((role) => role.id);

  return (
    <Formik
      initialValues={{
        name: "",
        teamId: 0,
        roleId: 0,
        isStarter: false,
      }}
      onSubmit={(data) => console.log(data)}
    >
      {({ setFieldValue }) => (
        <Card>
          <CardHeader title={player ? `Edit ${player.name}` : "Add player"} />
          <Form>
            <StyledCardContent>
              <Autocomplete
                options={teamIds}
                getOptionLabel={(option) => option.toString()}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} variant="outlined" label="Team" />}
                disabled={!data}
                size="small"
                onChange={(event: unknown, value: any) => setFieldValue("teamId", value)}
              />
              <Field
                name="name"
                as={TextField}
                fullWidth
                variant="outlined"
                label="Name"
                disabled={!data}
                size="small"
              />
              <Autocomplete
                options={roleIds ?? []}
                getOptionLabel={(option) => option.toString()}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} variant="outlined" label="Role" />}
                disabled={!data}
                size="small"
                onChange={(event: unknown, value: any) => setFieldValue("roleId", value)}
              />
              <FormikCheckbox label="Starter" name="isStarter" />
            </StyledCardContent>
            <StyledCardActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" color="primary" variant="contained">
                Save
              </Button>
            </StyledCardActions>
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export default PlayerForm;
