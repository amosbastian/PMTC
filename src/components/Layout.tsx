import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Main = styled.main`
  padding: 2rem 0;
`;

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <Main>{children}</Main>
  </div>
);

export default Layout;
