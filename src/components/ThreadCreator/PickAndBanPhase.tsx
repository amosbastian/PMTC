import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: 1rem;
`;

const PickAndBanPhase: React.FC = () => {
  const teams: { value: string; label: string }[] = [];
  const noTeams = teams.length === 0;
  return (
    <Card>
      <CardHeader title="Pick & ban phase" />
      <StyledCardContent>
        <Autocomplete
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team 1" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team 2" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Bans 1" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Bans 2" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Picks 1" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Picks 2" size="small" />}
          disabled={noTeams}
        />
      </StyledCardContent>
    </Card>
  );
};

export default PickAndBanPhase;
