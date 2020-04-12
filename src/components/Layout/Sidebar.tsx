import React from "react";
import styled from "styled-components";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 240px;
    ${({ theme }) => theme.breakpoints.up("lg")} {
      margin-top: 64px;
      height: calc(100% - 64px);
    }
  }
`;

const Sidebar: React.FC<DrawerProps> = ({ onClose, open, variant }) => {
  return (
    <StyledDrawer anchor="left" onClose={onClose} open={open} variant={variant}>
      <div>Sidebar</div>
    </StyledDrawer>
  );
};

export default Sidebar;
