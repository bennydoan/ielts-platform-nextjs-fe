import GreetingComponent from "./GreetingComponent";
import TestBank from "./TestBank";

function ExamLibrary() {
  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <GreetingComponent />
      <TestBank />
    </div>
  );
}

export default ExamLibrary;
