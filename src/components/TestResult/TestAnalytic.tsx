import { useState } from "react";
import { ListeningTest } from "@/data/ListeningTest/Listening";
type Props = {
  test: ListeningTest;
  Answers: Record<number, string>;
};

function TestAnalytic({ test, Answers }: Props) {
  const [activeTab, setActiveTab] = useState<string>("general");
  const clickedStyle =
    "border border-black rounded-lg px-6 py-2 text-white bg-black cursor-pointer";

  const nonClickedStyle =
    "border border-black rounded-lg px-6 py-2 text-black bg-white cursor-pointer";

  // flatten every question in the whole test, tagged with its group's type
  const allQuestionsWithType = test.sections.flatMap((section) =>
    section.groups.flatMap(
      (group) => group.questions.map((q) => ({ ...q, type: group.type })), // {[question],type}
    ),
  );

  //set all questipn type in an array
  const testTypes = [...new Set(allQuestionsWithType.map((q) => q.type))]; // new Set drops duplicates

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-black text-3xl font-bold">Phân tích bài thi</h1>
      {/* Navigation */}
      <div className=" flex gap-5">
        <button
          onClick={() => setActiveTab("general")}
          className={activeTab === "general" ? clickedStyle : nonClickedStyle}
        >
          General
        </button>

        <button
          onClick={() => setActiveTab("category")}
          className={activeTab === "category" ? clickedStyle : nonClickedStyle}
        >
          Categories
        </button>
      </div>

      {/* table */}

      {activeTab === "general" && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Sections
            </th>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Correct Answers
            </th>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Skipped Questions
            </th>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Accuracy ( % )
            </th>
          </thead>

          <tbody>
            {test.sections.map((s) => {
              //get question per section
              const questions = s.groups.flatMap((q) => q.questions);

              const correctCount = questions.filter((q) =>
                q.correctAnswer
                  .map((a) => a.toLowerCase()) // lower case the correct answer array
                  .includes((Answers[q.id] ?? "").toLowerCase()),
              ).length;

              const skippedCount = questions.filter(
                (q) => !Answers[q.id],
              ).length;

              const accuracy = Math.round(
                (correctCount / questions.length) * 100,
              );

              return (
                <tr key={s.sectionNumber}>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    Section {s.sectionNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {correctCount}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {skippedCount}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {accuracy} %
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* get the test categories */}

      {activeTab === "category" && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Type Of Questions
            </th>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Correct Answers
            </th>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Skipped Questions
            </th>
            <th className="border  border-gray-300 px-4 py-4 text-center text-black">
              Accuracy ( % )
            </th>
          </thead>

          <tbody>
            {testTypes.map((type) => {
              const questions = allQuestionsWithType.filter(
                (q) => q.type === type,
              );

              const correctCount = questions.filter((q) =>
                q.correctAnswer
                  .map((a) => a.toLowerCase())
                  .includes((Answers[q.id] ?? "").toLowerCase()),
              ).length;

              const skippedCount = questions.filter(
                (q) => !Answers[q.id],
              ).length;

              const accuracy = Math.round(
                (correctCount / questions.length) * 100,
              );

              return (
                <tr key={type}>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {type}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {correctCount}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {skippedCount}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 text-center text-black">
                    {accuracy} %
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TestAnalytic;
{
  /* {test.sections.map((s) => {
              //get question per category
              const questions = s.groups.flatMap((q) => q.type);

              console.log(questions);

              //   const correctCount = questions.filter((q) =>
              //     q.correctAnswer
              //       .map((a) => a.toLowerCase()) // lower case the correct answer array
              //       .includes((Answers[q.id] ?? "").toLowerCase()),
              //   ).length;

              //   const skippedCount = questions.filter(
              //     (q) => !Answers[q.id],
              //   ).length;

              //   const accuracy = Math.round(
              //     (correctCount / questions.length) * 100,
              //   );

              //   return (
              //     <tr key={s.sectionNumber}>
              //       <td className="border border-gray-300 px-4 py-4 text-center text-black">
              //         Section {s.sectionNumber}
              //       </td>
              //       <td className="border border-gray-300 px-4 py-4 text-center text-black">
              //         {correctCount}
              //       </td>
              //       <td className="border border-gray-300 px-4 py-4 text-center text-black">
              //         {skippedCount}
              //       </td>
              //       <td className="border border-gray-300 px-4 py-4 text-center text-black">
              //         {accuracy} %
              //       </td>
              //     </tr>
              //   );
            })} */
}
