import { FaMagnifyingGlass } from "react-icons/fa6";
import AnswerKeyBox from "./AnswerKeyBox";
import { SubmissionAnswer } from "@/libs/submission";
import { TestDetails } from "@/libs/testBank";

type Props = {
  Answers: SubmissionAnswer[];
  Test: TestDetails;
};

function AnswerKey({ Answers, Test }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-black font-bold flex items-center gap-2">
        <FaMagnifyingGlass />
        <h1>Answer Keys</h1>
      </div>
      {/* Answer key box */}
      <AnswerKeyBox test={Test} Answers={Answers} />
    </div>
  );
}

export default AnswerKey;
