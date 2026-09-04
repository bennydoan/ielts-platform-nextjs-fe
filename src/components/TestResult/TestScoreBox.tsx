import { FaRegClock } from "react-icons/fa";
import { calculatingBandScore } from "@/utils";

type Props = {
  timeTaken: string | null;
  correctAnswer: number;
};

function TestScoreBox({ timeTaken, correctAnswer }: Props) {
  return (
    <div className=" flex flex-col items-center justify-center py-5 gap-6">
      <div className="flex items-center gap-5">
        <p className="text-black text-xs">TEST RESULT:</p>
        <p className="border border-[#F5222D] p-1 rounded-xl text-[#F5222D]">
          <span className="text-[#F5222D] text-xl">{correctAnswer} </span>/20
        </p>
      </div>

      {/* score */}

      <div className="border border-[#F5222D] bg-[#F5222D] py-2 px-5 rounded-xl flex items-center gap-3">
        <p className="text-white font-thin">Band score:</p>
        <p className="text-2xl">{calculatingBandScore(correctAnswer)}</p>
      </div>

      {/* Time Spent */}

      <div className="text-center">
        <h1 className="text-black text-3xl font-bold">
          You have finished your test
        </h1>
        <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 mt-3">
          <span className="text-black text-xs">Time spent:</span>
          <FaRegClock className="text-black text-xs" />
          <span className="text-black text-xs font-medium">{timeTaken}</span>
        </div>
      </div>
    </div>
  );
}

export default TestScoreBox;
