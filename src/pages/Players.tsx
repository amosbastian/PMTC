import React, { useState } from "react";
import styled from "styled-components";
import PlayersToolbar from "../components/Players/PlayersToolbar";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { FetchPlayersQuery } from "../generated/graphql";
import Collapse from "@material-ui/core/Collapse";
import PlayersTable from "../components/Players/PlayersTable";
import PlayerForm, { Player } from "../components/Players/PlayerForm";

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
  const [formOpen, setFormOpen] = useState(false);
  const [player, setPlayer] = useState<Player | undefined>();
  const { data, loading, error } = useQuery<FetchPlayersQuery>(FETCH_PLAYERS);

  const players = data?.players;
  console.log(player);

  const handleOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  const onEditPlayer = (player: Player) => {
    setPlayer(player);
    setFormOpen(true);
  };

  return (
    <PlayersSection>
      <PlayersToolbar handleOpen={handleOpen} />
      <Collapse in={formOpen}>
        <PlayerForm player={player} handleClose={handleClose} />
      </Collapse>
      <PlayersTable players={players} onEditPlayer={onEditPlayer} />
    </PlayersSection>
  );
};

export default Players;
