import Image from "next/image";
import { QuestionGroup } from "@/libs/testBank";
type Props = {
  group: QuestionGroup;
  // answers: Record<number, string>;
  // setAnswer: (questionId: number, value: string) => void;
};

function FillInTheBlank({ group }: Props) {
  //, answers, setAnswer
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
          <p key={question.questionNumber} className="text-black leading-8">
            <span className="text-black font-bold">
              {question.questionNumber}.{" "}
            </span>
            {question.passage?.map((part, index) =>
              part.type === "text" ? (
                <span key={index}>{part.content}</span>
              ) : (
                <input
                  key={index}
                  id={`q-${part.questionNumber}`}
                  name={`q-${part.questionNumber}`}
                  type="text"
                  // value={
                  //   part.questionNumber !== null
                  //     ? (answers[part.questionNumber] ?? "")
                  //     : ""
                  // }
                  // onChange={(e) => {
                  //   if (part.questionNumber !== null)
                  //     setAnswer(part.questionNumber, e.target.value);
                  // }}
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
