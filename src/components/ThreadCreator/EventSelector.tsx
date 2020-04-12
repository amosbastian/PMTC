import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const EventCardContent = styled(Card)`
  display: grid;
  gap: 1rem;
  padding: 0 1rem 1rem 1rem;
`;

const EventSelector: React.FC = () => {
  const events: { value: string; label: string }[] = [];
  const disabled = events.length === 0;

  return (
    <Card>
      <CardHeader title="Event" />
      <EventCardContent>
        <TextField fullWidth size="small" variant="outlined" select disabled={disabled} label="Event" value="">
          {events.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField fullWidth size="small" variant="outlined" disabled={disabled} label="Lolesports" />
        <TextField fullWidth size="small" variant="outlined" disabled={disabled} label="Gamepedia" />
        <TextField fullWidth size="small" variant="outlined" disabled={disabled} label="Liquipedia" />
      </EventCardContent>
    </Card>
  );
};

export default EventSelector;
