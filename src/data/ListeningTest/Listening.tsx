export type ListeningQuestionType =
  | "multiple-choice"
  | "fill-in-the-blank"
  | "Choose-The-Correct-Answer"
  | "Drag-N-Drop";
// | "note-completion"
// | "table-completion"
// | "matching"
// | "map-labeling"
// | "sentence-completion";

export interface ListeningTest {
  courseId: number; // matches courseDatas.id (21-40 range)
  sections: ListeningSection[];
  isPlaceholder?: boolean;
}
// we have 4 sections
export interface ListeningSection {
  sectionNumber: 1 | 2 | 3 | 4;
  audioUrl: string; // one audio file per section
  audioStart?: number; // if using ONE file for whole test, timestamp offsets
  audioEnd?: number;
  groups: QuestionGroup[]; // replaces `questions`
}

//This is the passage design for Drag n drop and fill in the blank
export interface PassagePart {
  type: "text" | "blank";
  content?: string;
  questionId?: number;
}

export interface QuestionGroup {
  label: string;
  type: ListeningQuestionType;
  TestContext?: string;
  instructions?: string;
  passage?: PassagePart[];
  imageUrl?: string;
  imageAlt?: string;
  sharedOptions?: string[]; // shared across every question in this group (e.g. matching-grid), choose the correct answer
  questions: ListeningQuestion[];
}

export interface ListeningQuestion {
  id: number; // local to section, starts at 1
  // title: string;
  // displayNumber: number; // global 1..40
  prompt?: string;
  passage?: PassagePart[]; // this question's own text-before/blank/text-after
  options?: string[]; // MCQ / matching
  correctAnswer: string[]; // always array, even single answers
}
