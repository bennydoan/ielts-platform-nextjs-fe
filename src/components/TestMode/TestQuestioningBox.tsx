import { ListeningTest } from "@/data/ListeningTest/Listening";
import FillInTheBlank from "./QuestionTypes/Listening/FillInBlank";
import MultipleChoice from "./QuestionTypes/Listening/MultipleChoice";
import ChooseTheCorrectAnswer from "./QuestionTypes/Listening/ChooseTheCorrectAnswer";
import DragNDrop from "./QuestionTypes/Listening/Drag-N-Drop";
type Props = {
  listeningTest: ListeningTest | undefined;
  selectedSection: number;
  answers: Record<number, string>;
  setAnswer: (questionId: number, value: string) => void;
};

function TestQuestioningBox({
  listeningTest,
  selectedSection,
  answers,
  setAnswer,
}: Props) {
  //filter the shown section
  const filterSection = listeningTest?.sections.find(
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
              {group.type === "fill-in-the-blank" && (
                <FillInTheBlank
                  group={group}
                  answers={answers}
                  setAnswer={setAnswer}
                />
              )}
            </div>

            <div className="flex">
              {group.type === "multiple-choice" && (
                <MultipleChoice
                  group={group}
                  answers={answers}
                  setAnswer={setAnswer}
                />
              )}
            </div>

            <div className="flex">
              {group.type === "Choose-The-Correct-Answer" && (
                <ChooseTheCorrectAnswer
                  group={group}
                  answers={answers}
                  setAnswer={setAnswer}
                />
              )}
            </div>

            <div className="flex">
              {group.type === "Drag-N-Drop" && (
                <DragNDrop
                  group={group}
                  answers={answers}
                  setAnswer={setAnswer}
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
