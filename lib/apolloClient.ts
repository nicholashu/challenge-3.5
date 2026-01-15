import { registerApolloClient, ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";
import { HttpLink } from "@apollo/client";

const { getClient: getApolloClient } = registerApolloClient(() =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://rickandmortyapi.com/graphql",
    }),
  })
);

export { getApolloClient };
