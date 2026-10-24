import FillInTheBlank from "./QuestionTypes/Listening/FillInBlank";
import MultipleChoice from "./QuestionTypes/Listening/MultipleChoice";
import ChooseTheCorrectAnswer from "./QuestionTypes/Listening/ChooseTheCorrectAnswer";
import DragNDrop from "./QuestionTypes/Listening/Drag-N-Drop";

import { TestDetails } from "@/libs/testBank";
type Props = {
  test: TestDetails | null;
  selectedSection: number;
  // answers: Record<number, string>;
  // setAnswer: (questionId: number, value: string) => void;
};

function TestQuestioningBox({
  test,
  selectedSection,
  // answers,
  // setAnswer,
}: Props) {
  //filter the shown section
  const filterSection = test?.sections.find(
    (section) => section.sectionNumber === selectedSection,
  );

  if (!filterSection) {
    return (
      <div className="w-full pt-3 px-8">
        <div className="bg-white w-full h-full rounded-lg p-6 text-black">
          Test not found.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-8 ">
      <div
        key={filterSection.sectionNumber} // prevents only plays once, the very first time, and never again.
        className="border bg-white w-full h-full rounded-lg p-5 flex flex-col gap-5 section-fade-in"
      >
        {filterSection.groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <h1 className="text-lg font-bold text-[#F5222D] ">{group.label}</h1>
            <p className="text-black">{group.instructions}</p>

            <div className="flex">
              {group.type === "FillInTheBlank" && (
                <FillInTheBlank
                  group={group}
                  // answers={answers}
                  // setAnswer={setAnswer}
                />
              )}
            </div>

            <div className="flex">
              {group.type === "MultipleChoice" && (
                <MultipleChoice
                  group={group}
                  // answers={answers}
                  // setAnswer={setAnswer}
                />
              )}
            </div>

            <div className="flex">
              {group.type === "ChooseTheCorrectAnswer" && (
                <ChooseTheCorrectAnswer
                  group={group}
                  // answers={answers}
                  // setAnswer={setAnswer}
                />
              )}
            </div>

            <div className="flex">
              {group.type === "DragNDrop" && (
                <DragNDrop
                  group={group}
                  // answers={answers}
                  // setAnswer={setAnswer}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestQuestioningBox;
