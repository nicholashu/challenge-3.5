import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql",
      fetchOptions: {
        // cache for 7 days as rick and morty API data changes infrequently
        next: { revalidate: 604800 },
      },
     }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;