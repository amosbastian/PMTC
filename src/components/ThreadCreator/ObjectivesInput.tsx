import React, { useState } from "react";
import styled from "styled-components";
import Label from "../Label";

const ObjectivesInputSection = styled.div`
  display: grid;
  padding: 0 1rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const ObjectiveContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  --margin: 0.25rem;
  margin: calc(var(--margin) * -1) !important;

  & > * {
    margin: var(--margin);
  }
`;

const ObjectiveItem = styled.li`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 0.15rem;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 500;

  &.team-0 {
    background-color: #ebf8ff;
    color: #4299e1;
  }

  &.team-1 {
    background-color: #fff5f5;
    color: #e53e3e;
  }
`;

const ObjectiveRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transform: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

type Objective = {
  value: string;
  team: number;
};

interface ObjectivesInputProps {
  game: number;
}

const ObjectivesInput: React.FC<ObjectivesInputProps> = ({ game }) => {
  const [objectives, setObjectives] = useState<Objective[]>([]);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, objective: string, team: number) => {
    event.preventDefault();
    setObjectives((prevState) => [...prevState, { value: objective, team }]);
  };

  const onRemoveHandler = (removedObjective: Objective) => {
    setObjectives((prevState) => prevState.filter((objective) => objective !== removedObjective));
  };

  return (
    <ObjectivesInputSection>
      <Label>Objectives team 1</Label>
      <ButtonContainer>
        <button onClick={(event) => onClickHandler(event, "Cloud", 0)}>C</button>
        <button onClick={(event) => onClickHandler(event, "Ocean", 0)}>O</button>
        <button onClick={(event) => onClickHandler(event, "Infernal", 0)}>I</button>
        <button onClick={(event) => onClickHandler(event, "Mountain", 0)}>M</button>
        <button onClick={(event) => onClickHandler(event, "Herald", 0)}>H</button>
        <button onClick={(event) => onClickHandler(event, "Baron", 0)}>B</button>
        <button onClick={(event) => onClickHandler(event, "Elder", 0)}>E</button>
      </ButtonContainer>
      <Label>Objectives team 2</Label>
      <ButtonContainer>
        <button onClick={(event) => onClickHandler(event, "Cloud", 1)}>C</button>
        <button onClick={(event) => onClickHandler(event, "Ocean", 1)}>O</button>
        <button onClick={(event) => onClickHandler(event, "Infernal", 1)}>I</button>
        <button onClick={(event) => onClickHandler(event, "Mountain", 1)}>M</button>
        <button onClick={(event) => onClickHandler(event, "Herald", 1)}>H</button>
        <button onClick={(event) => onClickHandler(event, "Baron", 1)}>B</button>
        <button onClick={(event) => onClickHandler(event, "Elder", 1)}>E</button>
      </ButtonContainer>
      <ObjectiveContainer>
        {objectives.map((objective, index) => (
          <ObjectiveItem key={index} className={`team-${objective.team}`}>
            <span>
              {objective.value} ({index + 1})
            </span>
            <ObjectiveRemove onClick={() => onRemoveHandler(objective)}>X</ObjectiveRemove>
          </ObjectiveItem>
        ))}
      </ObjectiveContainer>
    </ObjectivesInputSection>
  );
};

export default ObjectivesInput;
