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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Event: React.FC = () => {
  const events: { value: string; label: string }[] = [];
  const noEvents = events.length === 0;

  return (
    <Card>
      <CardHeader title="Event" />
      <StyledCardContent>
        <Autocomplete
          options={events}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} variant="outlined" label="Event" size="small" />}
          disabled={noEvents}
        />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Lolesports" />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Gamepedia" />
        <TextField fullWidth size="small" variant="outlined" disabled={noEvents} label="Liquipedia" />
      </StyledCardContent>
    </Card>
  );
};

export default Event;
