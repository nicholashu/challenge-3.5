import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { fetchRickData } from "@/lib/rickAPI";
import PageContent from "./pageContent";
import { isAuthenticated } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "All The Ricks",
  description: "Discover all the Rick characters",
};


const informationPage = async ({ page = 1 }: { page: number }) => {
  // ensure data is only retrieved after authentication
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/");
  }

  const initialData = await fetchRickData({ page });

  return <PageContent initialData={initialData} page={page} />;
};

export default informationPage;
