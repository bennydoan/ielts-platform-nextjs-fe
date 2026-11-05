import TestScoreBox from "./TestScoreBox";
import AnswerKey from "./AnswerKey";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import TestAnalytic from "./TestAnalytic";
import CardCTA from "../CallToActionSlider/CardCTA";
import TeamImageComponent from "../CourseRegistration/TeamImageComponent";
import TestList from "../Course/TestList";
import { getSubmissionResult, SubmissionResult } from "@/libs/submission";
import { getTestContent, TestDetails, getTest, Test } from "@/libs/testBank";

import { toast } from "sonner";

function TestResult() {
  const router = useRouter();
  const { SubmissionID } = router.query;
  const [result, setResult] = useState<SubmissionResult | null>();
  const [test, setTest] = useState<TestDetails | null>(null);
  const [testByCat, setTestByCat] = useState<Test[]>();

  useEffect(() => {
    if (!router.isReady || !SubmissionID) return;
    getSubmissionResult(Number(SubmissionID))
      .then(async (submission) => {
        const content = await getTestContent(submission.testId);
        setResult(submission);
        setTest(content);
        if (!content) return; // the test no longer exists
        const tests = await getTest(content.category);
        //filterOut the current test
        const newListOfTests = tests.filter((t) => t.id != content.id);

        setTestByCat(newListOfTests); // leave out the current test
      })
      .catch((error) => toast.error(error.message));
  }, [SubmissionID, router.isReady]);

  if (!result || !test) return null; // nothing to show until the data arrives

  return (
    <div className="bg-[#f0f0f0] py-20 px-6">
      <div className="bg-white w-full h-auto flex flex-col py-10 px-20 gap-15">
        {/* test score and time report  */}
        <TestScoreBox
          timeTaken={`${Math.round(result.timeTakenSeconds / 60)} mins`}
          correctAnswer={result.rawScore}
          date={result.submittedAt}
        />
        {/* Answer key: */}
        <AnswerKey Answers={result.answers} Test={test} />
        {/* button */}
        <Link
          href="/"
          className="mt-8 flex items-center self-center bg-[#F5222D] text-white text-xs font-medium px-3 py-2 rounded-md hover:opacity-50 transition"
        >
          Back to Homepage
        </Link>

        {/* Test Statistic  */}
        {/* {answers && <TestAnalytic test={foundTest} Answers={answers} />} */}

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

          {/* add test to filter later */}
          <TestList tests={testByCat} />
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
