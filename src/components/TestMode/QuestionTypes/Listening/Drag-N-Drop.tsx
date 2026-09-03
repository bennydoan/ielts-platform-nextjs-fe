import { QuestionGroup } from "@/data/ListeningTest/Listening";
type Props = {
  group: QuestionGroup;
  answers: Record<number, string>;
  setAnswer: (questionId: number, value: string) => void;
};
function DragNDrop({ group, answers, setAnswer }: Props) {
  const handleDrop = (questionId: number, word: string) => {
    setAnswer(questionId, word);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Answer box */}
      <div className="flex flex-wrap gap-2 border border-dashed border-gray-300 rounded-lg p-3">
        {group.sharedOptions?.map((answer) => (
          <div
            key={answer}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", answer)} // remember what's being dragged
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-grab"
          >
            {answer}
          </div>
        ))}
      </div>

      <p className="text-black leading-8">
        {group.passage?.map((part, index) =>
          part.type === "text" ? (
            <span key={index}>{part.content}</span>
          ) : (
            <span
              key={index}
              className="inline-block min-w-[80px] border border-dashed border-gray-400 rounded-md px-3 py-1 mx-1 text-center bg-gray-50"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const word = e.dataTransfer.getData("text/plain"); // get the data from the onDragStart
                if (part.questionId !== undefined)
                  handleDrop(part.questionId, word);
              }}
            >
              {part.questionId !== undefined
                ? (answers[part.questionId] ?? part.questionId)
                : ""}
            </span>
          ),
        )}
      </p>
    </div>
  );
}

export default DragNDrop;
