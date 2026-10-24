import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
// import TimerClock from "./Timer";
import TestFunctioning from "./TestFunctioning";
import { TestDetails } from "@/libs/testBank";

type Props = {
  test: TestDetails | null;
  selectedSection: number;
  // onSubmit: () => void;
  // isTestSubmitted: boolean;
};

function TestHeader({
  test,
  selectedSection,
  // onSubmit,
  // isTestSubmitted,
}: Props) {
  const router = useRouter();
  // const { TestID } = router.query;

  const currentSection = test?.sections.find(
    (s) => s.sectionNumber === selectedSection,
  );

  //get the name and category in Course data to name the test

  return (
    <div className="w-full pt-3 px-8 flex flex-col gap-2 lg:flex-row lg:gap-0 justify-between">
      {/* Test info + back button */}
      <div className="flex lg:w-[25%]">
        <div className="border w-full bg-white h-[60px] rounded-lg flex justify-between items-center p-3">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-black cursor-pointer"
          >
            <IoIosArrowRoundBack /> Back
          </button>
          <h1 className="text-[#F5222D] items-center text-xl xl:text-2xl font-semibold">
            {test?.title}
          </h1>
        </div>
      </div>

      {/* Timer */}
      {/* <TimerClock
        timeUpSubmission={onSubmit}
        isTestSubmitted={isTestSubmitted} // for submit btn
      /> */}

      {/* Test fucntioning */}
      <TestFunctioning audioSrc={currentSection?.audioUrl ?? undefined} />
    </div>
  );
}

export default TestHeader;
