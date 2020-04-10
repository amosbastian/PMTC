import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

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
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
