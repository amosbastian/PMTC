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
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
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

const DRAKES_FOR_ELDER = 4;
const drakes = ["infernal", "ocean", "cloud", "mountain"];

interface Objective {
  id: string;
  team: number;
  isDrake: boolean;
}

interface ObjectiveButtonsProps {
  elderHasSpawned: boolean;
  onClick: (objective: string, team: number) => void;
  team: number;
}

const ObjectiveButtons: React.FC<ObjectiveButtonsProps> = ({ elderHasSpawned, onClick, team }) => {
  if (elderHasSpawned) {
    return (
      <ObjectivesButtonGroup size="small" aria-label="team 1 objectives">
        <Button onClick={() => onClick("elder", team)}>E</Button>
        <Button onClick={() => onClick("baron", team)}>B</Button>
      </ObjectivesButtonGroup>
    );
  }
  return (
    <ObjectivesButtonGroup size="small" aria-label="team 1 objectives">
      <Button onClick={() => onClick("infernal", team)}>I</Button>
      <Button onClick={() => onClick("ocean", team)}>O</Button>
      <Button onClick={() => onClick("mountain", team)}>M</Button>
      <Button onClick={() => onClick("cloud", team)}>C</Button>
      <Button onClick={() => onClick("herald", team)}>H</Button>
      <Button onClick={() => onClick("baron", team)}>B</Button>
    </ObjectivesButtonGroup>
  );
};

const Objectives: React.FC = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]);

  const handleDelete = (objectiveToDelete: Objective) => () => {
    setObjectives((curentObjectives) => curentObjectives.filter((objective) => objective !== objectiveToDelete));
  };

  const handleObjectiveClick = (takenObjective: string, team: number) => {
    setObjectives((previousObjectives) => [
      ...previousObjectives,
      { id: takenObjective, team, isDrake: drakes.includes(takenObjective) },
    ]);
  };

  const hasElderSpawned = () => {
    const team1Drakes = objectives.filter((objective) => objective.team === 1 && objective.isDrake);
    const team2Drakes = objectives.filter((objective) => objective.team === 2 && objective.isDrake);

    return team1Drakes.length >= DRAKES_FOR_ELDER || team2Drakes.length >= DRAKES_FOR_ELDER;
  };

  const elderHasSpawned = hasElderSpawned();

  return (
    <Card>
      <CardHeader title="Objectives" />
      <StyledCardContent>
        <ObjectiveButtons elderHasSpawned={elderHasSpawned} team={1} onClick={handleObjectiveClick} />
        <ObjectiveButtons elderHasSpawned={elderHasSpawned} team={2} onClick={handleObjectiveClick} />
        <ObjectivesContainer component="ul" variant="outlined">
          {objectives.map((data, index) => {
            const { id, team } = data;
            return (
              <ObjectiveChip
                key={`${id}-${index}`}
                className={`team${team}`}
                label={id}
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
