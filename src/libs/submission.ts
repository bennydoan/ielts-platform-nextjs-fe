// what we SEND (must match SubmitTestDto in the BE)
export type SubmitTestRequest = {
  testId: number;
  answers: Record<number, string | null>;
  timeTakenSeconds: number;
};

// what we GET BACK (matches SubmissionResultDto, camelCase)
export type SubmissionAnswer = {
  questionNumber: number;
  userAnswer: string | null;
  isCorrect: boolean;
  correctAnswers: string[];
};

export type SubmissionResult = {
  submissionId: number;
  testId: number;
  rawScore: number;
  band: number;
  timeTakenSeconds: number;
  submittedAt: string;
  answers: SubmissionAnswer[];
};

export type SubmissionHistoryType = {
  submissionId: number;
  band: number;
  timeTakenSeconds: number;
  submittedAt: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// POST: submit answers, BE grades them
export async function submitTest(
  body: SubmitTestRequest,
): Promise<SubmissionResult> {
  const response = await fetch(`${API_URL}/api/Submission/submit`, {
    method: "POST",
    credentials: "include", // send the login cookie, the endpoint is [Authorize]
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Can not submit");
  }
  return response.json();
}

// GET : get submissionHistory

export async function SubmissionHistory(
  testID: number,
): Promise<SubmissionHistoryType[]> {
  const response = await fetch(`${API_URL}/api/Submission/history/${testID}`, {
    credentials: "include",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Can not get submission history");
  }
  return response.json();
}

// get SubmissionResult
export async function getSubmissionResult(
  submissionID: number,
): Promise<SubmissionResult> {
  const response = await fetch(
    `${API_URL}/api/Submission/getSubmissionResult/${submissionID}`,
    {
      credentials: "include",
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Can not get submission result");
  }
  return response.json();
}
