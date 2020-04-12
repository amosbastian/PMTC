import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useTheme, useMediaQuery } from "@material-ui/core";

interface LayoutContainerProps {
  isDesktop: boolean;
}

const LayoutContainer = styled.div<LayoutContainerProps>`
  padding-top: 56px;
  height: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }

  padding-left: ${({ isDesktop }) => (isDesktop ? 240 : 0)}px;
`;

const MainContainer = styled.main`
  height: 100%;
`;

const Layout: React.FC = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const sidebarIsOpen = isDesktop ? true : openSidebar;

  return (
    <LayoutContainer isDesktop={isDesktop}>
      <Header onSidebarOpen={handleSidebarOpen} />
      <Sidebar onClose={handleSidebarClose} open={sidebarIsOpen} variant={isDesktop ? "persistent" : "temporary"} />
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
