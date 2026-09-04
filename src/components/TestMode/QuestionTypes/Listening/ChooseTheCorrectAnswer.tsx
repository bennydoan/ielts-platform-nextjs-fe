//Tick the correct Answer
import { QuestionGroup } from "@/data/ListeningTest/Listening";
import Image from "next/image";
type Props = {
  group: QuestionGroup;
  answers: Record<number, string>;
  setAnswer: (questionId: number, value: string) => void;
};
function ChooseTheCorrectAnswer({ group, answers, setAnswer }: Props) {
  if (!group.sharedOptions) return null;

  return (
    <div className="flex flex-col gap-1">
      {group.TestContext && (
        <h1 className="text-black font-bold">{group.TestContext}</h1>
      )}
      <div className="flex justify-center gap-2">
        {group.imageUrl && (
          <Image
            src={group.imageUrl}
            alt={group.imageAlt ?? ""}
            width={400}
            height={200}
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
              <tr key={q.id}>
                <td className="px-4 py-2 border-2 border-gray-300 text-black">
                  <span className="text-[#F5222D]">{q.id}. </span>
                  {q.prompt}
                </td>
                {group.sharedOptions?.map((sharedOption) => (
                  <td
                    key={sharedOption}
                    className="border-2 border-gray-300 px-4 py-2 text-center"
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={sharedOption}
                      checked={answers[q.id] === sharedOption}
                      onChange={() => setAnswer(q.id, sharedOption)}
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
