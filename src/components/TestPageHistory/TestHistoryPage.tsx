import GreetingComponent from "../ExamLibrary/GreetingComponent";
import TestHistoryComponent from "./TestHistoryComponent";

type Props = {
  testId: string;
};
function TestHistoryPage({ testId }: Props) {
  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <GreetingComponent />
      <TestHistoryComponent id={testId} />
    </div>
  );
}

export default TestHistoryPage;
