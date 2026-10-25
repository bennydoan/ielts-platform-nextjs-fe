//Tick the correct Answer
import Image from "next/image";
import { QuestionGroup } from "@/libs/testBank";
type Props = {
  group: QuestionGroup;
  // answers: Record<number, string>;
  // setAnswer: (questionId: number, value: string) => void;
};
function ChooseTheCorrectAnswer({ group }: Props) {
  if (!group.sharedOptions) return null;

  return (
    <div className="flex flex-col gap-1">
      {group.context && (
        <h1 className="text-black font-bold">{group.context}</h1>
      )}
      <div className="flex justify-center gap-2">
        {group.imageUrl && (
          <Image
            src={group.imageUrl}
            alt={group.imageAlt ?? ""}
            width={500}
            height={300}
          />
        )}
        <table className="w-full border-collapse border-2 border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center border-2 border-gray-300 bg-gray-50 text-black"></th>
              {group.sharedOptions.map((sharedOption) => (
                <th
                  key={sharedOption}
                  className="px-4 py-2 border-2 border-gray-300 text-center bg-gray-50 text-black"
                >
                  {sharedOption}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {group.questions.map((q) => (
              <tr key={q.questionNumber}>
                <td className="px-4 py-2 border-2 border-gray-300 text-black">
                  <span className="text-[#F5222D]">{q.questionNumber}. </span>
                  {q.prompt}
                </td>
                {group.sharedOptions?.map((sharedOption) => (
                  <td
                    key={sharedOption}
                    className="border-2 border-gray-300 px-4 py-2 text-center"
                  >
                    <input
                      type="radio"
                      name={`q-${q.questionNumber}`}
                      value={sharedOption}
                      // checked={answers[q.id] === sharedOption}
                      // onChange={() => setAnswer(q.id, sharedOption)}
                      className="h-4 w-4"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChooseTheCorrectAnswer;
