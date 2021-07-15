let mode = "remoteserver";
let domain =
  mode === "local" ? "http://localhost:1337/" : "https://api.transcoders.run/";

let appConfig = {
  graphDomain: domain + "graphql",
};

export default appConfig;
