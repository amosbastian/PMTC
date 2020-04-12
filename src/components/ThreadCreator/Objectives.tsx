import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: 1rem;
`;

const Objectives: React.FC = () => {
  return (
    <Card>
      <CardHeader title="Objectives" />
      <StyledCardContent>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </StyledCardContent>
    </Card>
  );
};

export default Objectives;
