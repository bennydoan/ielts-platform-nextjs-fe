import { useRouter } from "next/router";
import { TestHistoryPage } from "@/components";
export default function IeltsTestDetailPage() {
  const router = useRouter();
  const { id } = router.query; // e.g. /ielts-tests/123 → id = "123"
  console.log(id);

  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <TestHistoryPage testId={id as string} />
    </div>
  );
}
