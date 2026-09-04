import { ListeningTest } from "@/data/ListeningTest/Listening";
import { FaCheck } from "react-icons/fa6";

type Props = {
  Answers: Record<number, string>;
  test: ListeningTest | undefined;
};
function AnswerKeyBox({ Answers, test }: Props) {
  const correctAnswer =
    "text-xs border border-gray-300 p-1 rounded-md text-black";

  const wrongAnswer =
    "text-xs border border-gray-300 p-1 rounded-md text-[#f5222d]";

  return (
    <div className="grid grid-cols-2 gap-10">
      {test?.sections.map((section) => {
        const questionBySection = section.groups.flatMap((q) => q.questions);
        return (
          <div key={section.sectionNumber} className="flex flex-col gap-4">
            <h2 className="text-black font-bold">
              Section {section.sectionNumber}
            </h2>

            {questionBySection.map((question) => {
              const answer = Answers[question.id];

              //check is answer is correct
              const isCorrect = question.correctAnswer
                .map((a) => a.toLowerCase())
                .includes((answer ?? "").toLowerCase());

              return (
                <div key={question.id} className="flex gap-3 items-center">
                  <div className="flex h-7 w-7 bg-[#f5222d] border-[#f5222] rounded-full text-white items-center justify-center">
                    {question.id}
                  </div>
                  <div className={isCorrect ? correctAnswer : wrongAnswer}>
                    {answer ? (
                      isCorrect ? (
                        <span className="flex items-center gap-1">
                          <span>
                            <FaCheck className="text-[#52c41a]" />
                          </span>
                          {answer}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <span>X</span> {answer}
                        </span>
                      )
                    ) : (
                      <p className="text-xs text-[#f5222d]">
                        {" "}
                        <span>X</span> No Answer
                      </p>
                    )}
                  </div>
                  <div className=" border border-gray-300 p-1 rounded-md">
                    <p className=" text-xs text-[#52c41a]">
                      {question.correctAnswer.join(", ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default AnswerKeyBox;
