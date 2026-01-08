
import createApolloClient from "./apolloClient";
import { getAllRickData } from "@/graphql/queries";

export async function fetchRickData({ page }: { page: number }) {
  const client = createApolloClient();

  const { data } = await client.query({
    query: getAllRickData,
    variables: { page },
  });

  return data;
}
