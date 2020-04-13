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

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

interface ResultProps {
  className?: string;
}

const Result: React.FC<ResultProps> = ({ className }) => {
  const events: { value: string; label: string }[] = [];
  const noEvents = events.length === 0;

  return (
    <Card className={className}>
      <CardHeader title="Result" />
      <StyledCardContent>
        <Autocomplete
          options={events}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Winner" size="small" />}
          disabled={noEvents}
        />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Time" />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Screenshot" />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Match history" />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Breakdown" />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Context (picks)" />
      </StyledCardContent>
    </Card>
  );
};

export default Result;
