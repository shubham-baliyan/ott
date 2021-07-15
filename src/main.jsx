import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import appConfig from "./config";
if (!localStorage.getItem("watchList")) {
  localStorage.setItem("watchList", JSON.stringify([]));
}
//intialise the Apollo Client

const client = new ApolloClient({
  uri: appConfig.graphDomain,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
