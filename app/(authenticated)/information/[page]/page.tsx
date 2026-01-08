import BasePage from '../page';

type Props = {
  params: Promise<{
    page: string;
  }>;
};

/**
 * Load a specific page from the rick and morty data set
 * by passing a page number prop back to the main information page
 */
const PaginatedInformationPage = async ({ params }: Props) => {
  const pageNumber = parseInt((await params).page, 10) || 1;

  return <BasePage page={pageNumber} />;
};

export async function generateMetadata({ params }: Props) {
  const page = parseInt((await params).page || "0");

  return {
    title: `All The Ricks - Page ${page}`,
  };
}

export default PaginatedInformationPage;