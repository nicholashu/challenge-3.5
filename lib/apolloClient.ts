import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient: ApolloClient | null = null;

export function getApolloClient() {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
      cache: new InMemoryCache(),
    });
  }
  return apolloClient;
}
