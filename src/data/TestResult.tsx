export interface TestResult {
  resultId: number; // primary key — unique per result/attempt
  courseId: number; // foreign key → CourseData.id in Course.ts
  score: number;
  Duration: string;
  testDate: string;
}

export const testResult: TestResult[] = [
  {
    resultId: 1,
    courseId: 1,
    score: 32,
    Duration: "55 phút",
    testDate: "2026-06-01",
  },
  {
    resultId: 2,
    courseId: 2,
    score: 30,
    Duration: "58 phút",
    testDate: "2026-06-03",
  },
  {
    resultId: 3,
    courseId: 3,
    score: 35,
    Duration: "52 phút",
    testDate: "2026-06-05",
  },
  {
    resultId: 4,
    courseId: 21,
    score: 28,
    Duration: "38 phút",
    testDate: "2026-06-08",
  },
  {
    resultId: 5,
    courseId: 22,
    score: 33,
    Duration: "35 phút",
    testDate: "2026-06-10",
  },
  {
    resultId: 6,
    courseId: 41,
    score: 32,
    Duration: "60 phút",
    testDate: "2026-06-12",
  },
  {
    resultId: 7,
    courseId: 42,
    score: 27,
    Duration: "57 phút",
    testDate: "2026-06-15",
  },
  {
    resultId: 8,
    courseId: 61,
    score: 29,
    Duration: "14 phút",
    testDate: "2026-06-18",
  },
  {
    resultId: 9,
    courseId: 1,
    score: 36,
    Duration: "50 phút",
    testDate: "2026-06-20",
  }, // retake
  {
    resultId: 10,
    courseId: 62,
    score: 39,
    Duration: "15 phút",
    testDate: "2026-06-22",
  },
];
