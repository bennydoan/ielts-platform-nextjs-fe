export type Submission = {
  id: string;
  testId: string; // courseID
  userId: string;
  answers: Record<number, string | null>;
  rawScore: number; // new
  band: number; // new
  timeTaken: string;
  date: string;
};

// this one will store the submission
export async function saveSubmission(s: Submission) {
  const all = JSON.parse(localStorage.getItem("testSubmissions") ?? "[]"); // store in an array first
  all.push(s);
  localStorage.setItem("testSubmissions", JSON.stringify(all));
}

export async function getSubmissions(testId?: string): Promise<Submission[]> {
  const all: Submission[] = JSON.parse(
    localStorage.getItem("testSubmissions") ?? "[]",
  );
  const filtered = testId ? all.filter((s) => s.testId === testId) : all;
  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getLatestSubmission(testId: string) {
  // this one is fof the result page get the latest that just be submitted
  const list = await getSubmissions(testId);
  return list.at(0) ?? null;
}
