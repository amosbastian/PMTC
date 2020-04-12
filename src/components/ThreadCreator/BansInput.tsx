import React from "react";
import styled from "styled-components";
import { Champion } from "./types";

const BansInputSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface BansInputProps {
  champions: Champion[];
  game: number;
}

const BansInput: React.FC<BansInputProps> = ({ champions, game }) => {
  const championOptions = champions.map((champion) => ({ label: champion.name, value: champion.id }));
  return <BansInputSection></BansInputSection>;
};

export default BansInput;
