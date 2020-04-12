import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 2fr 1fr 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 1rem;
    grid-template-columns: 1fr 4rem 5rem;
  }
`;

interface ScoreboardRowProps {
  options: { value: string; label: string }[];
  disabled: boolean;
}

const ScoreboardRow: React.FC<ScoreboardRowProps> = ({ disabled, options }) => {
  return (
    <>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} variant="outlined" size="small" />}
        disabled={disabled}
      />
      <TextField fullWidth size="small" variant="outlined" disabled={disabled} />
      <TextField fullWidth size="small" variant="outlined" disabled={disabled} />
    </>
  );
};

interface ScoreboardProps {
  className?: string;
  team: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ className, team }) => {
  const events: { value: string; label: string }[] = [];
  const disabled = events.length === 0;

  return (
    <Card className={className}>
      <CardHeader title={`Team ${team}`} />
      <StyledCardContent>
        <ScoreboardRow disabled={disabled} options={events} />
        <ScoreboardRow disabled={disabled} options={events} />
        <ScoreboardRow disabled={disabled} options={events} />
        <ScoreboardRow disabled={disabled} options={events} />
        <ScoreboardRow disabled={disabled} options={events} />
      </StyledCardContent>
    </Card>
  );
};

export default Scoreboard;
