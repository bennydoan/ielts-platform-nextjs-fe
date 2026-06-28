import { useRouter } from "next/router";
import GreetingComponent from "@/components/ExamLibrary/GreetingComponent";
import WholeTestBank from "@/components/ExamLibrary/WholeTextBank";
function ExamTypePage() {
  const router = useRouter();
  const { type } = router.query; // "listening", "reading", etc.

  if (typeof type !== "string") return null; // handles undefined during SSR

  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <GreetingComponent />
      <WholeTestBank header={type.charAt(0).toUpperCase() + type.slice(1)} />
    </div>
  );
}

export default ExamTypePage;
