import React from "react";
import styled from "styled-components";

const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 1rem;

  &.active {
    background-color: #ebf8ff;
    color: #2a4365;
  }
`;

interface GameTabProps {
  active: boolean;
  className?: string;
  name: string;
  onClick: () => void;
}

const GameTab: React.FC<GameTabProps> = ({ active, className, name, onClick }) => {
  return (
    <Tab onClick={onClick} className={`${className} ${active ? "active" : ""}`}>
      {name}
    </Tab>
  );
};

export default GameTab;
