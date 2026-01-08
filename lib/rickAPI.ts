
import createApolloClient from "./apolloClient";
import { getAllRickData } from "@/graphql/queries";
import type { RickData } from "@/types/api";

export async function fetchRickData({ page }: { page: number }): Promise<RickData> {
  const client = createApolloClient();

  const { data } = await client.query({
    query: getAllRickData,
    variables: { page },
  });

  return data as RickData;
}
