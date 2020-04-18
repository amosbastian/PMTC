import React, { useState } from "react";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { FetchPlayersQuery } from "../../generated/graphql";
import { Player } from "./PlayerForm";

const StyledPaper = styled(Paper)`
  max-width: 100%;
  overflow-x: hidden;
`;

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof PlayerTableData;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "team", numeric: false, disablePadding: false, label: "Team" },
  { id: "role", numeric: false, disablePadding: false, label: "Role" },
];

interface EnhancedTableHeadProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof PlayerTableData) => void;
  order: Order;
  orderBy: string;
}

const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property: keyof PlayerTableData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="none" />
      </TableRow>
    </TableHead>
  );
};

interface PlayerTableData {
  name: string;
  team: string;
  role: string;
}

interface PlayersTableProps {
  onEditPlayer: (player: Player) => void;
  players?: FetchPlayersQuery["players"];
}

const PlayersTable: React.FC<PlayersTableProps> = ({ onEditPlayer, players = [] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof PlayerTableData>("name");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof PlayerTableData) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const tablePlayers = players.map((player) => {
    return {
      id: player.id,
      name: player.name,
      team: player.team?.name ?? "",
      role: player.role.name,
    };
  });

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, players.length - page * rowsPerPage);

  const editPlayer = (playerId: number) => {
    const player = players.find((player) => player.id === playerId);
    onEditPlayer(player!);
  };

  return (
    <StyledPaper>
      <TableContainer>
        <Table aria-label="simple table">
          <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          <TableBody>
            {stableSort(tablePlayers, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((player) => (
                <TableRow key={player.id} hover>
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>
                  <TableCell>{player.team}</TableCell>
                  <TableCell>{player.role}</TableCell>
                  <TableCell padding="none">
                    <IconButton size="small" onClick={() => editPlayer(player.id)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tablePlayers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </StyledPaper>
  );
};

export default PlayersTable;
