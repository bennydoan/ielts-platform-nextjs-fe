import Image from "next/image";
import { QuestionGroup } from "@/data/ListeningTest/Listening";

type Props = {
  group: QuestionGroup;
  answers: Record<number, string>;
  setAnswer: (questionId: number, value: string) => void;
};

function FillInTheBlank({ group, answers, setAnswer }: Props) {
  return (
    <div className="flex items-center gap-5">
      {group.imageUrl && (
        <Image
          src={group.imageUrl}
          alt={group.imageAlt ?? ""}
          width={600}
          height={400}
        />
      )}

      <div className="flex flex-col gap-3">
        {group.questions.map((question) => (
          <p key={question.id} className="text-black leading-8">
            <span className="text-black font-bold">{question.id}. </span>
            {question.passage?.map((part, index) =>
              part.type === "text" ? (
                <span key={index}>{part.content}</span>
              ) : (
                <input
                  key={index}
                  id={`q-${part.questionId}`}
                  name={`q-${part.questionId}`}
                  type="text"
                  value={
                    part.questionId !== undefined
                      ? (answers[part.questionId] ?? "")
                      : ""
                  }
                  onChange={(e) => {
                    if (part.questionId !== undefined)
                      setAnswer(part.questionId, e.target.value);
                  }}
                  className="border border-gray-300 rounded-md px-2 py-1 mx-1 text-black inline-block w-32"
                />
              ),
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FillInTheBlank;
