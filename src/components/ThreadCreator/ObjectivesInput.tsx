import React, { useState } from "react";
import styled from "styled-components";
import Label from "../Label";

const Svg = styled.svg`
  display: inline-block;
  fill: currentColor;
  line-height: 1;
  stroke: currentColor;
  stroke-width: 0;
`;

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
  margin-left: calc(var(--margin) * -1) !important;
  margin-right: calc(var(--margin) * -1) !important;
  padding: var(--margin) !important;
  background-color: #f7fafc;
  border-radius: 0.25rem;
  text-align: center;

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

  font-size: 0.85rem;
  font-weight: 500;

  &.team-0 {
    background-color: #ebf8ff;
    color: #4299e1;
  }

  &.team-1 {
    background-color: #fff5f5;
    color: #e53e3e;
  }

  & span {
    line-height: 1;
  }
`;

const ObjectiveRemove = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
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
      {objectives.length > 0 && (
        <ObjectiveContainer>
          {objectives.map((objective, index) => (
            <ObjectiveItem key={index} className={`team-${objective.team}`}>
              <span>
                {objective.value} ({index + 1})
              </span>
              <ObjectiveRemove onClick={() => onRemoveHandler(objective)}>
                <Svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                </Svg>
              </ObjectiveRemove>
            </ObjectiveItem>
          ))}
        </ObjectiveContainer>
      )}
    </ObjectivesInputSection>
  );
};

export default ObjectivesInput;
