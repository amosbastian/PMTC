import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Container from "./Container";

const MainContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <MainContainer>{children}</MainContainer>
  </div>
);

export default Layout;
