import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import { colors } from "@material-ui/core";

const StyledCardContent = styled(CardContent)`
  display: grid;
  gap: 1rem;
  grid-template-rows: max-content max-content 1fr;
`;

const ObjectivesButtonGroup = styled(ButtonGroup)`
  height: 2.375rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const ObjectivesContainer = styled(Paper)`
  margin: 0;
  padding: 0;
  min-height: 2rem;
  background-color: #eeeeee;
  display: flex;
  flex-wrap: wrap;
  transform: height 0.2s;

  padding: 0.25rem;

  & > * {
    margin: 0.25rem;
  }
`;

const ObjectiveChip = styled(Chip)`
  &.team1 {
    background-color: ${colors.blue[50]};
    color: ${colors.blue[800]};
  }

  &.team2 {
    background-color: ${colors.red[50]};
    color: ${colors.red[800]};
  }
`;

interface Objective {
  label: string;
  team: number;
}

interface ObjectiveButtonsProps {
  onClick: (objective: string, team: number) => void;
  team: number;
}

const ObjectiveButtons: React.FC<ObjectiveButtonsProps> = ({ onClick, team }) => {
  return (
    <ObjectivesButtonGroup size="small" aria-label="team 1 objectives">
      <Button onClick={() => onClick("Infernal", team)}>I</Button>
      <Button onClick={() => onClick("Ocean", team)}>O</Button>
      <Button onClick={() => onClick("Mountain", team)}>M</Button>
      <Button onClick={() => onClick("Cloud", team)}>C</Button>
      <Button onClick={() => onClick("Herald", team)}>H</Button>
      <Button onClick={() => onClick("Baron", team)}>B</Button>
      <Button onClick={() => onClick("Elder", team)}>E</Button>
    </ObjectivesButtonGroup>
  );
};

const Objectives: React.FC = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]);

  const handleDelete = (objectiveToDelete: Objective) => () => {
    setObjectives((curentObjectives) => curentObjectives.filter((objective) => objective !== objectiveToDelete));
  };

  const handleObjectiveClick = (objective: string, team: number) => {
    setObjectives((previousObjectives) => [...previousObjectives, { label: objective, team }]);
  };

  return (
    <Card>
      <CardHeader title="Objectives" />
      <StyledCardContent>
        <ObjectiveButtons team={1} onClick={handleObjectiveClick} />
        <ObjectiveButtons team={2} onClick={handleObjectiveClick} />
        <ObjectivesContainer component="ul" variant="outlined">
          {objectives.map((data, index) => {
            const { label, team } = data;
            return (
              <ObjectiveChip
                key={`${label}-${index}`}
                className={`team${team}`}
                label={label}
                onDelete={handleDelete(data)}
                size="small"
              />
            );
          })}
        </ObjectivesContainer>
      </StyledCardContent>
    </Card>
  );
};

export default Objectives;
