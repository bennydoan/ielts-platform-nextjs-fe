const API_URL = process.env.NEXT_PUBLIC_API_URL;
export type Test = {
  id: number; // needed for links and React keys
  title: string;
  durationMinutes: number; // ← number, not string: the backend sends 60, not "60"
  category: "Reading" | "Listening" | "Writing" | "Speaking";
};
// type of all entities in one test

export type QuestionType =
  | "FillInTheBlank"
  | "MultipleChoice"
  | "ChooseTheCorrectAnswer"
  | "DragNDrop";

export type PassagePart = {
  type: "text" | "blank";
  content: string | null;
  questionNumber: number | null;
};

export type Question = {
  questionNumber: number;
  prompt: string | null;
  options: string[];
  passage: PassagePart[];
  // no correctAnswers: the API doesn't send them
};

export type QuestionGroup = {
  label: string;
  type: QuestionType;
  instructions: string | null;
  context: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  passage: PassagePart[];
  sharedOptions: string[];
  questions: Question[];
};

export type TestSection = {
  id: number;
  sectionNumber: number;
  audioUrl: string | null;
  passageText: string | null;
  groups: QuestionGroup[];
};

export type TestDetails = Test & { sections: TestSection[] }; // all Test fields + sections

//get all test
export async function getTest(category?: Test["category"]): Promise<Test[]> {
  const url = category
    ? `${API_URL}/api/Test/get-test?category=${category}`
    : `${API_URL}/api/Test/get-test`;

  const response = await fetch(url, {
    credentials: "include", // because whe need to send cookies to BE, it is authorized in back end
  });

  if (!response.ok) throw new Error("Could not load tests");
  return response.json();
}

export async function getTestById(id: string | number): Promise<Test | null> {
  const response = await fetch(`${API_URL}/api/Test/get-test-byid/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Could not load test"); // other errors

  return response.json();
}

export async function getTestContent(
  id: string | number,
): Promise<TestDetails | null> {
  const response = await fetch(`${API_URL}/api/Test/get-test-content/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Could not load test content");
  return response.json();
}
