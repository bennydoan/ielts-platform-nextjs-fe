export enum BlogCategory {
  Noti = "Course Notification",
  Tips = "Education & Tips",
  Vocab = "Vocabularies & Tips",
  Grammars = "English Grammar",
}

export interface Blog {
  id: number;
  blogName: string;
  dateCreated: Date;
  category: BlogCategory;
  img: string;
}

const Blogs: Blog[] = [
  {
    id: 1,
    blogName: "High School Admission Revion 2026-2027 ",
    dateCreated: new Date(),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 2,
    blogName: "Top 5 Tips to Improve Your IELTS Writing Score",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Tips,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 3,
    blogName: "Essential Vocabulary for IELTS Academic",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Vocab,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 4,
    blogName: "Common Grammar Mistakes in IELTS Writing",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Grammars,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 5,
    blogName: "How to Score Band 8 in IELTS Listening",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Tips,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 6,
    blogName: "New IELTS Course Schedule 2026 Announcement",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 7,
    blogName: "Academic vs General IELTS: What's the Difference?",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Tips,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 8,
    blogName: "100 Must-Know Words for IELTS Reading",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Vocab,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 9,
    blogName: "Understanding Conditional Sentences in English",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Grammars,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 10,
    blogName: "How to Practice Speaking for IELTS at Home",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Tips,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 11,
    blogName: "Summer Intensive IELTS Program 2026",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 12,
    blogName: "Summer Intensive IELTS Program 2026",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 13,
    blogName: "Summer Intensive IELTS Program 2026",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 14,
    blogName: "Summer Intensive IELTS Program 2026",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
  {
    id: 15,
    blogName: "Summer Intensive IELTS Program 2026",
    dateCreated: new Date("2024-01-15T08:30:00"),
    category: BlogCategory.Noti,
    img: "/images/Blogs/BlogImage.svg",
  },
];

export default Blogs;
