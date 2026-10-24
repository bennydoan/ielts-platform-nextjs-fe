import { TestHistoryPage } from "@/components";
import { getTestById } from "@/libs/testBank";
import { GetServerSideProps } from "next";
import { Test } from "@/libs/testBank";
type Props = {
  id: string;
  test: Test;
};

// always render the sever to get the id

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { category, id } = context.params as { category: string; id: string };

  let test: Test | null;
  try {
    test = await getTestById(id);
  } catch (error) {
    console.error("API call failed:", error);
    return { notFound: true };
  }
  // test doesn't exist → 404
  if (!test) {
    console.log("Test not found:", id);
    return { notFound: true };
  }

  // wrong category in the URL → 404
  if (test.category.toLowerCase() !== category.toLowerCase()) {
    console.log("Wrong category:", test.category, "vs", category);
    return { notFound: true };
  }

  return {
    props: { id, test },
  };
};

export default function IeltsTestDetailPage({ test }: Props) {
  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <TestHistoryPage testById={test} />
    </div>
  );
}
