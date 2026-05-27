export const TestCategory = [
  "Reading",
  "Listening",
  "Writing",
  "Speaking",
] as const;

export const ListOfBGColour = [
  "#FBD9CF",
  "#D5EDDB",
  "#D7EFF2",
  "#D0DCFA",
] as const;

export interface CourseData {
  id: number;
  title: string;
  durations: number;
  category: (typeof TestCategory)[number];
  href: string;
}

const courseDatas: CourseData[] = [
  {
    id: 1,
    title: "Test 1",
    durations: 40,
    category: "Reading",
    href: "/course/reading/1",
  },

  {
    id: 2,
    title: "Test 2",
    durations: 40,
    category: "Listening",
    href: "/course/listening/1",
  },

  {
    id: 3,
    title: "Test 3",
    durations: 40,
    category: "Writing",
    href: "/course/writing/1",
  },

  {
    id: 4,
    title: "Test 1",
    durations: 40,
    category: "Reading",
    href: "/course/reading/1",
  },
  {
    id: 5,
    title: "Test 1",
    durations: 40,
    category: "Reading",
    href: "/course/reading/1",
  },
  {
    id: 6,
    title: "Test 1",
    durations: 40,
    category: "Reading",
    href: "/course/reading/1",
  },
  {
    id: 7,
    title: "Test 1",
    durations: 40,
    category: "Reading",
    href: "/course/reading/1",
  },
  {
    id: 8,
    title: "Test 1",
    durations: 40,
    category: "Writing",
    href: "/course/reading/1",
  },
];

export { courseDatas };
