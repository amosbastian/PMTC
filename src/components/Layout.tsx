import React from "react";

import Header from "./Header";

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
