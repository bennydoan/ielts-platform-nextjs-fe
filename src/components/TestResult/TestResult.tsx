import TestScoreBox from "./TestScoreBox";
import AnswerKey from "./AnswerKey";
import { useEffect, useState } from "react";
import { listeningTests } from "@/data/ListeningTest/ListeningTests";
import Link from "next/link";
import { useRouter } from "next/router";
import TestAnalytic from "./TestAnalytic";
import CardCTA from "../CallToActionSlider/CardCTA";
import TeamImageComponent from "../CourseRegistration/TeamImageComponent";
import dynamic from "next/dynamic";
import { getLatestSubmission } from "@/libs/submission";
const TestList = dynamic(() => import("../Course/TestList"), { ssr: false }); // only render in client side not server side

function TestResult() {
  const [timeTaken, setTimeTaken] = useState<string | null>(null);
  const [answers, setAnswer] = useState<Record<number, string> | null>(null);
  const [date, setDate] = useState<string | null>(null);

  const router = useRouter();
  const { TestID, category } = router.query;

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
    getLatestSubmission(String(TestID)).then((s) => {
      if (s) {
        setAnswer(s.answers as Record<number, string>);
        setTimeTaken(s.timeTaken);
        setDate(s.date);
      }
    });
  }, [foundTest, TestID]);

  if (!router.isReady || !foundTest) return null; // avoid flashing content while redirecting

  const allQuestion = foundTest.sections.flatMap((section) =>
    section.groups.flatMap((group) => group.questions),
  );

  //checking the correct answer

  const correctCount = allQuestion.filter((q) =>
    q.correctAnswer
      .map((a) => a.toLowerCase())
      .includes((answers?.[q.id] ?? "").toLowerCase()),
  ).length;

  return (
    <div className="bg-[#f0f0f0] py-20 px-6">
      <div className="bg-white w-full h-auto flex flex-col py-10 px-20 gap-15">
        {/* test score and time report  */}
        <TestScoreBox
          timeTaken={timeTaken}
          correctAnswer={correctCount}
          date={date}
        />
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
        {answers && <TestAnalytic test={foundTest} Answers={answers} />}

        {/* another test */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h1 className="text-black text-3xl font-bold">
              Những bài thi khác
            </h1>

            <Link
              href="/exam-library"
              className="flex items-center justify-center self-center border border-[#F5222D] text-[#F5222D] text-xs font-medium px-3 py-2 rounded-md hover:bg-[#F5222D] hover:text-white transition"
            >
              View test page
            </Link>
          </div>
          <TestList
            categoryShown={typeof category === "string" ? category : null}
          />
        </div>
        <div className="flex flex-col gap-5">
          <TeamImageComponent />
          <CardCTA />
        </div>
      </div>
    </div>
  );
}

export default TestResult;
