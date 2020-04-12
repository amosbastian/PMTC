import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import "typeface-roboto";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://pmtc.herokuapp.com/v1/graphql",
    headers: {
      "X-Hasura-Admin-Secret": "ajsangels",
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById("root"),
);
