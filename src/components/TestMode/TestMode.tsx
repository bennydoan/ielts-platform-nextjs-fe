import TestHeader from "./TestHeader";
import TestQuestioningBox from "./TestQuestioningBox";
import TestFooter from "./TestFooter";
import { useRouter } from "next/router";
import { listeningTests } from "@/data/ListeningTest/ListeningTests";
import { useState, useRef } from "react";
import { ListeningTest } from "@/data/ListeningTest/Listening";

function TestMode() {
  const router = useRouter();
  const { TestID, category } = router.query;

  const test = listeningTests.find((test) => test.courseId === Number(TestID)); // this is the object

  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState(false); // check if the test has been submitted or not

  const [answers, setAnswers] = useState<Record<number, string>>({}); // keys are number and values are string, this is an object as well , answer gonna be an object of question ID and answers
  const startTimeRef = useRef(Date.now()); // recorded once, when TestMode first mounts

  const setAnswer = (questionId: number, value: string) =>
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

  // this is the function to get all the testID, this will return the array of testid
  function getAllQuestionIds(test: ListeningTest | undefined): number[] {
    if (!test) return [];

    return test.sections.flatMap((section) =>
      section.groups.flatMap((group) => group.questions.map((q) => q.id)),
    );
  }

  function handleSubmitTest() {
    setIsSubmitted(true);

    const allQuestionIds = getAllQuestionIds(test); // get all the ids
    const completeAnswers: Record<number, string | null> = Object.fromEntries(
      allQuestionIds.map((id) => [id, answers[id] || null]),
    );

    const timeTakenSeconds = Math.floor(
      (Date.now() - startTimeRef.current) / 1000,
    );
    const minutes = Math.floor(timeTakenSeconds / 60);
    const seconds = timeTakenSeconds % 60;
    const timeTaken = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    sessionStorage.setItem(
      "testSubmission",
      JSON.stringify({ answers: completeAnswers, timeTaken }),
    );
    router.push(`/ielts-tests/${category}/result/${TestID}`);
  }
  return (
    <div className=" flex flex-col gap-10">
      {/* test header */}
      <TestHeader
        listeningTest={test}
        selectedSection={selectedSection}
        onSubmit={handleSubmitTest}
        isTestSubmitted={isSubmitted} // if the test is submitted
      />
      {/* Test Question Box */}
      <TestQuestioningBox
        listeningTest={test}
        selectedSection={selectedSection}
        answers={answers}
        setAnswer={setAnswer}
      />

      {/* Test section Controller */}
      <TestFooter
        listeningTest={test}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        answers={answers}
        onSubmit={handleSubmitTest}
      />
    </div>
  );
}

export default TestMode;
