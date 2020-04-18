import React from "react";
import styled from "styled-components";
import PlayersToolbar from "../components/Players/PlayersToolbar";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { FetchPlayersQuery } from "../generated/graphql";
import PlayersTable from "../components/Players/PlayersTable";

const PlayersSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
    padding: 2rem;
  }
`;

const FETCH_PLAYERS = gql`
  query fetchPlayers {
    players {
      id
      name
      role {
        id
        name
      }
      teams {
        team {
          id
          name
        }
      }
    }
  }
`;

const Players: React.FC = () => {
  const { data, loading, error } = useQuery<FetchPlayersQuery>(FETCH_PLAYERS);

  const players = data?.players;

  return (
    <PlayersSection>
      <PlayersToolbar />
      <PlayersTable players={players} />
    </PlayersSection>
  );
};

export default Players;
