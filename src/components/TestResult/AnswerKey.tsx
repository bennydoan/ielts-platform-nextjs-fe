import { FaMagnifyingGlass } from "react-icons/fa6";
import AnswerKeyBox from "./AnswerKeyBox";
import { ListeningTest } from "@/data/ListeningTest/Listening";

type Props = {
  Answers: Record<number, string>;
  test: ListeningTest | undefined;
};

function AnswerKey({ Answers, test }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-black font-bold flex items-center gap-2">
        <FaMagnifyingGlass />
        <h1>Answer Keys</h1>
      </div>
      {/* Answer key box */}
      <AnswerKeyBox Answers={Answers} test={test} />
    </div>
  );
}

export default AnswerKey;
