import React from "react";
import theme from "./theme";

import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://pmtc.herokuapp.com/v1/graphql",
    headers: {
      "X-Hasura-Admin-Secret": "ajsangels",
    },
  }),
  cache: new InMemoryCache(),
});

const Providers: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Providers;
