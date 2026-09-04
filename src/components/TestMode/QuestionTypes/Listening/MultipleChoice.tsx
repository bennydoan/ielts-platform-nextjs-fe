import { QuestionGroup } from "@/data/ListeningTest/Listening";
import Image from "next/image";

type Props = {
  group: QuestionGroup;
  answers: Record<number, string>;
  setAnswer: (questionId: number, value: string) => void;
};

function MultipleChoice({ group, answers, setAnswer }: Props) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex flex-col gap-4">
        {group.questions.map((question) => (
          <div key={question.id}>
            <p className="text-[#F5222D] font-bold">
              <span className="text-[#F5222D] font-normal">
                {question.id}.{" "}
              </span>
              {question.prompt}
            </p>
            <div className="flex flex-col gap-1 mt-1">
              {question.options?.map((option, i) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-black"
                >
                  <input
                    type="radio"
                    name={`q-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => {
                      setAnswer(question.id, option);
                    }}
                  />
                  {String.fromCharCode(65 + i)}. {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {group.imageUrl && (
        <Image
          src={group.imageUrl}
          alt={group.imageAlt ?? ""}
          width={280}
          height={280}
          className="rounded-lg border border-gray-300 object-cover shrink-0"
        />
      )}
    </div>
  );
}

export default MultipleChoice;
