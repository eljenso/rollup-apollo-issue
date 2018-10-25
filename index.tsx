import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";

const cache = new InMemoryCache();
const graphUri: string = `http://localhost:4000`;

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: graphUri,
      credentials: "same-origin"
    })
  ]),
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>Hello!</div>
  </ApolloProvider>,
  document.getElementById("reactRoot") as HTMLElement
);
