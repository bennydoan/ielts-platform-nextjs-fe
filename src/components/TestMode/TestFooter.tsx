import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { ListeningTest } from "@/data/ListeningTest/Listening";

type Props = {
  listeningTest: ListeningTest | undefined;
  selectedSection: number;
  setSelectedSection: (section: number) => void;
  answers: Record<number, string>;
  onSubmit: () => void;
};

function TestFooter({
  listeningTest,
  selectedSection,
  setSelectedSection,
  answers,
  onSubmit,
}: Props) {
  const clickedStyle =
    " bg-[#FFCCC7] border border-[#f5222d] p-1 rounded-md text-[#f5222d] cursor-pointer";

  const nonClickedStyle =
    " border p-1 rounded-md text-[#bfbfbf] cursor-pointer";

  function findSectionByQuestionID(questionId: number) {
    return listeningTest?.sections.find((section) =>
      section.groups.some((group) =>
        group.questions.some((question) => question.id === questionId),
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
                  listeningTest?.sections.length ?? selectedSection, // always stop at max
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
        {listeningTest?.sections.map((section) => (
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
          {listeningTest?.sections.map((section) =>
            section.groups.map((group) =>
              group.questions.map((question) => (
                <button
                  key={question.id}
                  className={
                    answers[question.id]
                      ? "border border-[#F5222D] bg-[#F5222D] text-white rounded-sm p-1 cursor-pointer hover:scale-120 transition"
                      : "border text-[#bfbfbf] rounded-sm p-1 cursor-pointer hover:scale-120 transition"
                  }
                  onClick={() => {
                    const targetSection = findSectionByQuestionID(question.id);
                    if (targetSection)
                      setSelectedSection(targetSection.sectionNumber);
                  }}
                >
                  {question.id}
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
