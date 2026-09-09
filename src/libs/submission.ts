export type Submission = {
  id: string;
  testId: string;
  userId: string;
  answers: Record<number, string | null>;
  timeTaken: string;
  date: string; // ISO
};

export async function saveSubmission(s: Submission) {
  const all = JSON.parse(localStorage.getItem("testSubmissions") ?? "[]");
  all.push(s);
  localStorage.setItem("testSubmissions", JSON.stringify(all));
}

export async function getSubmissions(testId?: string): Promise<Submission[]> {
  const all: Submission[] = JSON.parse(
    localStorage.getItem("testSubmissions") ?? "[]",
  );
  return testId ? all.filter((s) => s.testId === testId) : all;
}

export async function getLatestSubmission(testId: string) {
  // this one is fof the result page get the latest that just be submitted
  const list = await getSubmissions(testId);
  return list.at(-1) ?? null;
}
