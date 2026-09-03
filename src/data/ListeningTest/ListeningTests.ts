import { ListeningTest } from "./Listening";

export const listeningTests: ListeningTest[] = [
  {
    courseId: 21,
    sections: [
      {
        sectionNumber: 1,
        audioUrl: "/audio/ListeningTest1/test1-section1.mp3",
        groups: [
          {
            label: "Question 1 - 5",
            type: "fill-in-the-blank",
            instructions:
              "Complete the table below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            imageUrl: "/images/ListeningTestImages/Test1/section1.webp",
            imageAlt: "listening1, section1",

            questions: [
              {
                id: 1,
                passage: [
                  {
                    type: "text",
                    content: "Class of licence:",
                  },
                  { type: "blank", questionId: 1 },
                ],
                correctAnswer: ["C license"],
              },
              {
                id: 2,
                passage: [
                  {
                    type: "text",
                    content: "Address: _____ Street, Bentley",
                  },
                  { type: "blank", questionId: 2 },
                ],
                correctAnswer: ["28 River"],
              },
              {
                id: 3,
                passage: [
                  {
                    type: "text",
                    content: "Phone number:",
                  },
                  { type: "blank", questionId: 3 },
                ],
                correctAnswer: ["37018699"],
              },
              {
                id: 4,
                passage: [
                  {
                    type: "text",
                    content: "Identification:",
                  },
                  { type: "blank", questionId: 4 },
                ],
                correctAnswer: ["Student card"],
              },
              {
                id: 5,
                passage: [
                  {
                    type: "text",
                    content: "Method of payment:",
                  },
                  { type: "blank", questionId: 5 },
                ],
                correctAnswer: ["cash"],
              },
            ],
          },
          {
            label: "Questions 6 - 10",
            type: "multiple-choice",
            instructions: "Choose the correct letter, A, B or C.",
            questions: [
              {
                id: 6,
                prompt:
                  "In the test of road rules, you are allowed to make no more than",
                options: ["One mistake", "Two mistakes", "Four mistakes"],
                correctAnswer: ["Four mistakes"],
              },
              {
                id: 7,
                prompt:
                  "A person who has a learner’s licence can only drive with a person",
                options: [
                  "Who has a provisional license",
                  "Who has a full license",
                  "Who is an authorized driving instructor",
                ],
                correctAnswer: ["Who has a full license"],
              },
              {
                id: 8,
                prompt: "A provisional licence is valid for",
                options: ["9 months", "18 months", "6 months"],

                correctAnswer: ["18 months"],
              },
              {
                id: 9,
                prompt:
                  "The maximum speed for a person who has a learner’s license is",
                options: [
                  "60 km per hour",
                  "100 km per hour",
                  "80 km per hour",
                ],
                correctAnswer: ["80 km per hour"],
              },
              {
                id: 10,
                prompt: "While driving a person is",
                options: [
                  "Not allowed to use a mobile phone",
                  "Only allowed to use a mobile phone if they are not holding it",
                  "Allowed to send an SMS",
                ],
                correctAnswer: ["Not allowed to use a mobile phone"],
              },
            ],
          },
        ],
      },
      //section 2
      {
        sectionNumber: 2,
        audioUrl: "/audio/ListeningTest1/test1-section2.mp3",
        groups: [
          {
            label: "Question 11 - 15",
            type: "Choose-The-Correct-Answer",
            TestContext:
              "What is the stated about the following means of transport from the airtport?",
            sharedOptions: [
              "Cheapest",
              "Fastest",
              "Most comfortable",
              "Most environmentally friendly",
              "Most popular",
              "Most reliable",
              "Safest",
            ],
            instructions:
              "Listen to the audio and choose the correct answers from the table below.",
            questions: [
              {
                id: 11,
                prompt: "Trains",
                correctAnswer: ["Cheapest"],
              },
              {
                id: 12,
                prompt: "Minibuses",
                correctAnswer: ["Most reliable"],
              },
              {
                id: 13,
                prompt: "Buses",
                correctAnswer: ["Most comfortable"],
              },
              {
                id: 14,
                prompt: "Cars",
                correctAnswer: ["Safest"],
              },
              {
                id: 15,
                prompt: "Taxis",
                correctAnswer: ["Most environmentally friendly"],
              },
            ],
          },
          {
            label: "Questions 16 - 20",
            type: "Choose-The-Correct-Answer",
            instructions:
              "Listen to the audio and choose the correct answers from the table below.",
            sharedOptions: [
              "Cafe",
              "Dress shop	",
              "Internet cafe	",
              "Newsagency",
              "Pharmacy",
              "Smoking room",
              "Toilets",
              "Winebar",
            ],
            imageUrl: "/images/ListeningTestImages/Test1/section2.png",
            imageAlt: "listening2,section2,group2",
            questions: [
              {
                id: 16,
                correctAnswer: ["Newsagency"],
              },
              {
                id: 17,
                correctAnswer: ["Pharmacy"],
              },
              {
                id: 18,
                correctAnswer: ["Toilets"],
              },
              {
                id: 19,
                correctAnswer: ["Cafe"],
              },
              {
                id: 20,
                correctAnswer: ["Smoking room"],
              },
            ],
          },
        ],
      },
      //section 3

      {
        sectionNumber: 3,
        audioUrl: "/audio/ListeningTest1/test1-section3.mp3",
        groups: [
          {
            label: "Question 21 - 26",
            type: "multiple-choice",
            instructions: "Choose the correct letter, A, B or C.",
            imageUrl:
              "/images/ListeningTestImages/Test1/TasmaniaDevil-section3-groupt1.png",
            imageAlt: "TasmanianDevils",

            questions: [
              {
                id: 21,
                prompt: "The largest numbers of Tasmanian devils live in",
                options: ["Coastal areas", "Drier forests", "Rainforests"],
                correctAnswer: ["Drier forests"],
              },
              {
                id: 22,
                prompt: "An adult female can weigh up to",
                options: ["4.5 kg", "9 kg", "13 kg"],

                correctAnswer: ["9 kg"],
              },
              {
                id: 23,
                prompt: "Tasmanian devils are",
                options: ["Shy", "Aggressive", "Friendly"],

                correctAnswer: ["Shy"],
              },
              {
                id: 24,
                prompt: "In one year an adult female usually raises",
                options: ["One baby", "Three babies", "Twenty babies"],
                correctAnswer: ["Three babies"],
              },
              {
                id: 25,
                prompt:
                  "Tasmanian devils become independent when they are about",
                options: ["5 months old", "8 months old", "2 years old"],
                correctAnswer: ["8 months old"],
              },
              {
                id: 26,
                prompt: "Farmers are",
                options: [
                  "Permitted to shoot or poison them",
                  "Paid to kill them",
                  "Prohibited from killing them",
                ],
                correctAnswer: ["Prohibited from killing them"],
              },
            ],
          },
          {
            label: "Questions 27 - 30",
            type: "Drag-N-Drop",
            instructions:
              "Complete the summary below using words from the box below. Choose only Four correct answers.",
            sharedOptions: [
              "dead",
              "sick",
              "fight",
              "young",
              "bark",
              "bite",
              "friendly",
              "yawn",
              "clean",
            ],
            passage: [
              {
                type: "text",
                content:
                  "Tasmanian devils live alone and move slowly. They usually eat",
              },
              {
                type: "blank",
                questionId: 27,
              },
              {
                type: "text",
                content:
                  "animals and are not affected by the diseases of the animals they eat. They are generally",
              },
              {
                type: "blank",
                questionId: 28,
              },
              {
                type: "text",
                content:
                  ". They travel long distances at night and are famous for their strong appetite. To decide the order in which they eat, Tasmanian devils often",
              },
              {
                type: "blank",
                questionId: 29,
              },
              {
                type: "text",
                content: "whereas if they are afraid, they",
              },
              {
                type: "blank",
                questionId: 30,
              },
            ],

            questions: [
              {
                id: 27,
                correctAnswer: ["dead"],
              },
              {
                id: 28,
                correctAnswer: ["clean"],
              },
              {
                id: 29,
                correctAnswer: ["bite"],
              },
              {
                id: 30,
                correctAnswer: ["yawn"],
              },
            ],
          },
        ],
      },

      //section 4
      {
        sectionNumber: 4,
        audioUrl: "/audio/ListeningTest1/test1-section4.mp3",
        groups: [
          {
            label: "Question 31 - 37",
            type: "fill-in-the-blank",
            instructions:
              "Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            imageUrl: "/images/ListeningTestImages/Test1/section4-test1.webp",

            questions: [
              {
                id: 31,
                passage: [
                  {
                    type: "text",
                    content:
                      "Aims of survey: investigate type of people who do yoga, styles of yoga, frequency of practice",
                  },
                  { type: "blank", questionId: 31 },
                  {
                    type: "text",
                    content: " for practice, benefits of yoga.",
                  },
                ],
                correctAnswer: [
                  "reason",
                  "reasons",
                  "motivations",
                  "motivation",
                ],
              },
              {
                id: 32,
                passage: [
                  {
                    type: "text",
                    content: "Conducted via Interact due to effectiveness and",
                  },
                  { type: "blank", questionId: 32 },
                ],
                correctAnswer: [
                  "funding limitations",
                  "funds limited",
                  "limited funds",
                  "funding",
                ],
              },
              {
                id: 33,
                passage: [
                  {
                    type: "text",
                    content:
                      "Respondents: one-third teachers, two-thirds students, ",
                  },
                  { type: "blank", questionId: 33 },
                  {
                    type: "text",
                    content: "women.",
                  },
                ],
                correctAnswer: ["85%"],
              },
              {
                id: 34,
                passage: [
                  {
                    type: "text",
                    content: "Uses of yoga: ",
                  },
                  { type: "blank", questionId: 34 },
                  {
                    type: "text",
                    content: "and meditation, spiritual path.",
                  },
                ],
                correctAnswer: ["exercise", "therapy"],
              },
              {
                id: 35,
                passage: [
                  {
                    type: "text",
                    content:
                      "Less time spent on physical exercise due to rise in popularity of",
                  },
                  { type: "blank", questionId: 35 },
                ],
                correctAnswer: ["computer games"],
              },
              {
                id: 36,
                passage: [
                  {
                    type: "text",
                    content:
                      "Reasons for starting yoga practice: health and fitness, ",
                  },
                  { type: "blank", questionId: 36 },
                  {
                    type: "text",
                    content: "treat physical problem.",
                  },
                ],
                correctAnswer: ["reduce stress"],
              },
              {
                id: 37,
                passage: [
                  {
                    type: "text",
                    content: "Major motivation to continue yoga: ",
                  },
                  { type: "blank", questionId: 37 },
                ],
                correctAnswer: ["personal development"],
              },
            ],
          },

          {
            label: "Questions 38 - 40",
            type: "multiple-choice",
            instructions: "Choose the correct letter, A, B or C.",
            questions: [
              {
                id: 38,
                prompt: "A major cause of injuries when doing yoga is",
                options: [
                  "headstand and shoulder stand",
                  "students causing injuries to themselves",
                  "teachers pushing students too hard",
                ],
                correctAnswer: ["students causing injuries to themselves"], // placeholder — confirm against audio
              },
              {
                id: 39,
                prompt: "A typical yoga teacher earns money",
                options: [
                  "only from teaching yoga",
                  "from massage therapy",
                  "from nursing",
                ],
                correctAnswer: ["from massage therapy"], // placeholder — confirm against audio
              },
              {
                id: 40,
                prompt: "The speaker concludes that",
                options: [
                  "teaching yoga is not a good way to earn a high income",
                  "yoga is a relatively expensive form of exercise",
                  "the benefits of yoga are unproven", // option C not visible in the screenshot — fill in manually
                ],
                correctAnswer: [
                  "teaching yoga is not a good way to earn a high income",
                ], // placeholder — confirm against audio
              },
            ],
          },
        ],
      },
    ],
  },
];
