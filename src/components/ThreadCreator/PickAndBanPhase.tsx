import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "team1"
    "team2"
    "bans1"
    "bans2"
    "picks1"
    "picks2";

  .team1 {
    grid-area: team1;
  }

  .team2 {
    grid-area: team2;
  }

  .bans1 {
    grid-area: bans1;
  }

  .bans2 {
    grid-area: bans2;
  }

  .picks1 {
    grid-area: picks1;
  }

  .picks2 {
    grid-area: picks2;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-areas:
      "team1 team2"
      "bans1 bans1"
      "bans2 bans2"
      "picks1 picks1"
      "picks2 picks2";
  }
`;

interface PickAndBanPhaseProps {
  className?: string;
}

const PickAndBanPhase: React.FC<PickAndBanPhaseProps> = ({ className }) => {
  const teams: { value: string; label: string }[] = [];
  const noTeams = teams.length === 0;
  return (
    <Card className={className}>
      <CardHeader title="Pick & ban phase" />
      <StyledCardContent>
        <Autocomplete
          className="team1"
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team 1" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          className="team2"
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Team 2" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          className="bans1"
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Bans 1" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          className="bans2"
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Bans 2" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          className="picks1"
          multiple
          options={teams}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Picks 1" size="small" />}
          disabled={noTeams}
        />
        <Autocomplete
          className="picks2"
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
