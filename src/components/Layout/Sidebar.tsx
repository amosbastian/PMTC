import React from "react";
import styled from "styled-components";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import SidebarNavigation, { NavigationItem } from "./SidebarNavigation";
import CreateIcon from "@material-ui/icons/Create";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 240px;
    ${({ theme }) => theme.breakpoints.up("lg")} {
      margin-top: 64px;
      height: calc(100% - 64px);
    }
  }
`;

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

const navigationItems: NavigationItem[] = [
  {
    name: "PMTC",
    to: "/",
    icon: <CreateIcon />,
  },
  {
    name: "Players",
    to: "/players",
    icon: <PersonIcon />,
  },
  {
    name: "Teams",
    to: "/teams",
    icon: <GroupIcon />,
  },
  {
    name: "Events",
    to: "/events",
    icon: <EmojiEventsIcon />,
  },
  {
    name: "Schedule",
    to: "/schedule",
    icon: <EventIcon />,
  },
];

const Sidebar: React.FC<DrawerProps> = ({ onClose, open, variant }) => {
  return (
    <StyledDrawer anchor="left" onClose={onClose} open={open} variant={variant}>
      <DrawerContainer>
        <SidebarNavigation navigationItems={navigationItems} />
      </DrawerContainer>
    </StyledDrawer>
  );
};

export default Sidebar;
