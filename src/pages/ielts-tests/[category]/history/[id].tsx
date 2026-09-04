import { TestHistoryPage } from "@/components";
import { courseDatas } from "@/data/Course";
import { GetServerSideProps } from "next";

type Props = {
  id: string;
};

// always render the sever to get the id

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { category, id } = context.params as { category: string; id: string };

  //check if no test Id found => 404
  const testValidation = courseDatas.find((data) => {
    return String(data.id) === id;
  });

  if (!testValidation) {
    return { notFound: true };
  }

  //check if the category is found => 404

  if (testValidation.category.toLowerCase() !== category.toLowerCase()) {
    return { notFound: true };
  }

  return {
    props: { id },
  };
};

export default function IeltsTestDetailPage({ id }: Props) {
  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <TestHistoryPage testId={id as string} />
    </div>
  );
}
