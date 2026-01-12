
import { getApolloClient } from "@/lib/apolloClient";
import { getAllRickData } from "@/graphql/queries";
import type { RickData } from "@/types/api";

export async function fetchRickData({ page }: { page: number }): Promise<RickData> {
  const client = getApolloClient();
  const { data } = await client.query({
    query: getAllRickData,
    variables: { page }
  });

  return data as RickData;
}
