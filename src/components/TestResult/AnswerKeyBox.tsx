import { FaCheck } from "react-icons/fa6";
import { SubmissionAnswer } from "@/libs/submission";
import { TestDetails } from "@/libs/testBank";

type Props = {
  Answers: SubmissionAnswer[];
  test: TestDetails;
};

function AnswerKeyBox({ Answers, test }: Props) {
  const correctAnswer =
    "text-xs border border-gray-300 p-1 rounded-md text-black";

  const wrongAnswer =
    "text-xs border border-gray-300 p-1 rounded-md text-[#f5222d]";

  return (
    <div className="grid grid-cols-2 gap-10">
      {test.sections.map((section) => {
        const questionBySection = section.groups.flatMap((g) => g.questions);

        return (
          <div key={section.sectionNumber} className="flex flex-col gap-4">
            <h2 className="text-black font-bold">
              Section {section.sectionNumber}
            </h2>

            {questionBySection.map((question) => {
              // find the user's answer for this question
              const a = Answers.find(
                (answer) => answer.questionNumber === question.questionNumber,
              );
              if (!a) return null;

              return (
                <div key={a.questionNumber} className="flex gap-3 items-center">
                  <div className="flex h-7 w-7 bg-[#f5222d] rounded-full text-white items-center justify-center">
                    {a.questionNumber}
                  </div>
                  <div className={a.isCorrect ? correctAnswer : wrongAnswer}>
                    {a.userAnswer ? (
                      a.isCorrect ? (
                        <span className="flex items-center gap-1">
                          <FaCheck className="text-[#52c41a]" />
                          {a.userAnswer}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <span>X</span> {a.userAnswer}
                        </span>
                      )
                    ) : (
                      <p className="text-xs text-[#f5222d]">
                        <span>X</span> No Answer
                      </p>
                    )}
                  </div>
                  <div className="border border-gray-300 p-1 rounded-md">
                    <p className="text-xs text-[#52c41a]">
                      {a.correctAnswers.join(", ")}
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
