import { fetchRickData } from "@/lib/rickAPI";
import PageContent from "./pageContent";

const informationPage = async ({ page = 1 }: { page: number }) => {
  const initialData = await fetchRickData({ page });

  return <PageContent initialData={initialData} page={page} />;
};

export default informationPage;
