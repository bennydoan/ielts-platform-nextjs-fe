import TestScoreBox from "./TestScoreBox";
import AnswerKey from "./AnswerKey";
import { useEffect, useState } from "react";
import { listeningTests } from "@/data/ListeningTest/ListeningTests";
import Link from "next/link";
import { useRouter } from "next/router";

function TestResult() {
  const [timeTaken, setTimeTaken] = useState<string | null>(null);
  const [answers, setAnswer] = useState<Record<number, string> | null>(null);

  const router = useRouter();
  const { TestID } = router.query;

  //find the test for the answer
  const foundTest = listeningTests.find((t) => t.courseId === Number(TestID));

  useEffect(() => {
    if (!router.isReady) return;
    if (!foundTest) {
      router.replace("/404");
    }
  }, [router.isReady, foundTest, router]);

  useEffect(() => {
    if (!foundTest) return;
    const raw = sessionStorage.getItem("testSubmission");
    if (raw) {
      const parsed = JSON.parse(raw);
      setAnswer(parsed.answers);
      setTimeTaken(parsed.timeTaken);
    }
  }, [foundTest]);

  if (!router.isReady || !foundTest) return null; // avoid flashing content while redirecting

  //checking the correct answer
  const allQuestion = foundTest.sections.flatMap((section) =>
    section.groups.flatMap((group) => group.questions),
  );

  const correctCount = allQuestion.filter((q) =>
    q.correctAnswer
      .map((a) => a.toLowerCase())
      .includes((answers?.[q.id] ?? "").toLowerCase()),
  ).length;

  console.log(typeof correctCount);

  return (
    <div className="bg-[#f0f0f0] py-20 px-6">
      <div className="bg-white w-full h-auto flex flex-col px-20 gap-10">
        {/* test score and time report  */}
        <TestScoreBox timeTaken={timeTaken} correctAnswer={correctCount} />
        {/* Answer key: */}
        {answers && <AnswerKey test={foundTest} Answers={answers} />}
        {/* button */}
        <Link
          href="/"
          className="mt-8 flex items-center self-center bg-[#F5222D] text-white text-xs font-medium px-3 py-2 rounded-md hover:opacity-50 transition"
        >
          Back to Homepage
        </Link>

        {/* Test Statistic  */}
      </div>
    </div>
  );
}

export default TestResult;
