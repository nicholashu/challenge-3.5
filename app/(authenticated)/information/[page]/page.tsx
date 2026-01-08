import BasePage from '../page';

type Props = {
  params: Promise<{
    page: string;
  }>;
};
const PaginatedInformationPage = async ({ params }: Props) => {
  const pageNumber = await parseInt((await params).page, 10) || 1;

  return <BasePage page={pageNumber} />;
};

export default PaginatedInformationPage;