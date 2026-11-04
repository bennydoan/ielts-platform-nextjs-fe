import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { TestDetails } from "@/libs/testBank";

type Props = {
  test: TestDetails | null;
  selectedSection: number;
  setSelectedSection: (section: number) => void;
  answers: Record<number, string>;
  onSubmit: () => void;
};

function TestFooter({
  test,
  selectedSection,
  setSelectedSection,
  answers,
  onSubmit,
}: Props) {
  const clickedStyle =
    " bg-[#FFCCC7] border border-[#f5222d] p-1 rounded-md text-[#f5222d] cursor-pointer";

  const nonClickedStyle =
    " border p-1 rounded-md text-[#bfbfbf] cursor-pointer";

  function findSectionByQuestionNumber(questionNumber: number) {
    return test?.sections.find(
      (
        section, // return the section that ..
      ) =>
        section.groups.some(
          (group) =>
            group.questions.some(
              (question) => question.questionNumber === questionNumber,
            ), // return true if at least one element sacrifies the condition
        ),
    );
  }

  return (
    <div className="w-full p-5 bg-white border rounded-lg flex flex-col gap-3 ">
      <div className="flex justify-between">
        <h1 className="text-black font-bold">Question List</h1>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={onSubmit}
            className=" border-[#F5222D] bg-[#F5222D] bg px-2 py-1 rounded-md text-white cursor-pointer"
          >
            Submit
          </button>
          <button
            onClick={() => setSelectedSection(Math.max(1, selectedSection - 1))}
            className="flex items-center gap-1 text-[#F5222D] font-medium cursor-pointer"
          >
            <IoArrowBackOutline />
            Previous
          </button>
          <button
            onClick={() =>
              setSelectedSection(
                Math.min(
                  test?.sections.length ?? selectedSection, // always stop at max
                  selectedSection + 1,
                ),
              )
            }
            className="flex items-center gap-1 text-[#F5222D] font-medium cursor-pointer"
          >
            Next
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>

      {/* section header  */}
      <div className="flex gap-2">
        {test?.sections.map((section) => (
          <button
            key={section.sectionNumber}
            onClick={() => setSelectedSection(section.sectionNumber)}
            className={
              selectedSection === section.sectionNumber
                ? clickedStyle
                : nonClickedStyle
            }
          >
            Section {section.sectionNumber}
          </button>
        ))}
      </div>

      {/* Question Done Check, question navigation */}
      <div>
        <div className="flex gap-2">
          {test?.sections.map((section) =>
            section.groups.map((group) =>
              group.questions.map((question) => (
                <button
                  key={question.questionNumber}
                  className={
                    answers[question.questionNumber]
                      ? "border border-[#F5222D] bg-[#F5222D] text-white rounded-sm p-1 cursor-pointer hover:scale-120 transition"
                      : "border text-[#bfbfbf] rounded-sm p-1 cursor-pointer hover:scale-120 transition"
                  }
                  onClick={() => {
                    const targetSection = findSectionByQuestionNumber(
                      question.questionNumber,
                    );
                    if (targetSection)
                      setSelectedSection(targetSection.sectionNumber);
                  }}
                >
                  {question.questionNumber}
                </button>
              )),
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default TestFooter;
