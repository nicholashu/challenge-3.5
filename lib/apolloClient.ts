import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    name: "leo-challenge-client",
    version: "1.0",
    link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;