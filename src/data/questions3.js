export const parties = {
  disy: 0,
  akel: 0,
  diko: 0,
  elam: 0,
  edek: 0,
  depa: 0,
  greens: 0,
};

export const questions = [
  {
    questionId: 1,
    questionTitle: "What solution model do you support?",
    questionAspect: "Cyprus Problem",
    answers: [
      {
        answerId: 1,
        answerText: "Bizonal Bicommunal Federation",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "akel", value: 1 },
          { party: "diko", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText: "Unitary state",
        answerPoints: [
          { party: "edek", value: 1 },
          { party: "elam", value: 1 },
        ],
      },
      {
        answerId: 3,
        answerText: "Two-states",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Double union",
        answerPoints: [],
      },
      {
        answerId: 5,
        answerText: "I don't know",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 2,
    questionTitle:
      "What do you think of the European Union integration process",
    questionAspect: "Foreign Policy",
    answers: [
      {
        answerId: 1,
        answerText: "The EU should evolve to a European Federation",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText: "The EU should continue the integration process",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "The EU should remain as is",
        answerPoints: [{ party: "akel", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "The national states need to be sovereign again",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "elam", value: 1 },
          { party: "edek", value: 1 },
        ],
      },
      {
        answerId: 5,
        answerText: "I don't know",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 3,
    questionTitle:
      "Do you accept rotating presidency within the framework of a solution to the Cyprus problem?",
    questionAspect: "Cyprus Problem",
    answers: [
      {
        answerId: 1,
        answerText:
          "Yes, rotating presidency can be accepted within an overall acceptable solution",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "akel", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText: "No, rotating presidency can't be accepted",
        answerPoints: [
          { party: "edek", value: 1 },
          { party: "elam", value: 1 },
          { party: "greens", value: 1 },
        ],
      },
      {
        answerId: 3,
        answerText:
          "Only if it's included with a single ballot and a single voting base",
        answerPoints: [{ party: "diko", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "I don't know",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 4,
    questionTitle:
      "What should be Cyprus's approach to the Israeli-Palestinian conflict?",
    questionAspect: "Foreign Policy",
    answers: [
      {
        answerId: 1,
        answerText:
          "Cyprus should call for immediate ceasefire in Gaza and the end of the occupation",
        answerPoints: [
          { party: "akel", value: 1 },
          { party: "greens", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText:
          "Cyprus should defend Israel's right to defend itself and the continuation of the operation in Gaza",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "Cyprus should stay neutral",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Πρεπει να υποστηρίξει την",
        answerPoints: [],
      },
      {
        answerId: 5,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 5,
    questionTitle:
      "Within the EU, what should be Cyprus's position regarding the invasion in Ukraine?",
    questionAspect: "European Union",
    answers: [
      {
        answerId: 1,
        answerText:
          "Cyprus should continue supporting imposing of sanctions against Russia until Ukraine is free",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "Cyprus should support the end of the conflict and for peace negotiations between Ukraine and Russia to begin",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "Cyprus should block future sanctions to Russia",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 6,
    questionTitle:
      "Where should the Republic of Cyprus focus its efforts in relation to Turkey?",
    questionAspect: "European Union",
    answers: [
      {
        answerId: 1,
        answerText: "On imposing sanctions to Turkey",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "On implementing Trust Building measures(including possibly opening new crossing points)",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "On both the above",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 4,
        answerText:
          "On imposing sanctions to Turkey and to Turkish Cypriots (including possibly closing the crossing points)",
        answerPoints: [],
      },
      {
        answerId: 5,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 7,
    questionTitle:
      "What strategy should be followed to get closer to achieving a solution to the Cyprus problem?",
    questionAspect: "Cyprus Problem",
    answers: [
      {
        answerId: 1,
        answerText:
          "We should focus on the resumption of negotiations from the point they left off in Crans Montana, accepting the Guterres Framework as is",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "akel", value: 1 },
          { party: "dipa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText:
          "We should focus on the resumption of negotiations without accepting some of the previous unacceptable convergences",
        answerPoints: [{ party: "diko", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "The Cyprus problem should be refocused as an issue of invasion and occupation, refraining from engaging in bi-communal dialogue",
        answerPoints: [
          { party: "elam", value: 1 },
          { party: "edek", value: 1 },
        ],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 8,
    questionTitle: "What is your stance regarding abortions",
    questionAspect: "Social Issues",
    answers: [
      {
        answerId: 1,
        answerText:
          "The right of women to choose what to do with their bodies needs to be protected.",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "Abortions should only be acceptable in cases of rape, fetal abnormalities, or when the life of the mother is threatened.",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "They need to be banned. The life of the embryo must be protected",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 9,
    questionTitle:
      "Should same-sex marriages and the adoption of children by same-sex couples be legalized?",
    questionAspect: "Social Issues",
    answers: [
      {
        answerId: 1,
        answerText:
          "Yes, both should be legalised, same-sex couples should have the same rights as heterosexual couples",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Yes for same-sex marriage, but not for adoption",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText: "No, for neither same-sex marriage nor for adoption",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },

  {
    questionId: 10,
    questionTitle: "Do you support the creation of a European Army?",
    questionAspect: "European Union",
    answers: [
      {
        answerId: 1,
        answerText: "Yes",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "No",
        answerPoints: [{ party: "akel", value: 1 }],
      },
      {
        answerId: 3,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 11,
    questionTitle:
      "Should the Republic of Cyprus join the 'Patternship for Peace' and NATO?",
    questionAspect: "Foreign Policy",
    answers: [
      {
        answerId: 1,
        answerText:
          "The RoC should apply to join the PfP and joining NATO should be a long-term goal.",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "The RoC needs to join the PfP, but not NATO",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText: "The RoC should neither join PfP nor NATO",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 12,
    questionTitle: "Should cannabis be decriminalised?",
    questionAspect: "Social Issues",
    answers: [
      {
        answerId: 1,
        answerText:
          "Yes, both for medicinal and recreational purposesphar Ναι, για ιατρική και ψυχαγωγική χρήση.",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Yes, but strictly for medical use",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText: "No, decriminalising it will lead to serious problems",
        answerPoints: [
          { party: "akel", value: 1 },
          { party: "elam", value: 1 },
        ],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 13,
    questionTitle:
      "What's your opinion regarding the underwater natural gas pipeline East Med",
    questionAspect: "Green Politics",
    answers: [
      {
        answerId: 1,
        answerText:
          "The ongoing efforts to create East Med should be sustained, as they are crucial for positioning Cyprus as a key energy hub in the Mediterranean.",
        answerPoints: [
          { party: "deko", value: 1 },
          { party: "edek", value: 1 },
          { party: "elam", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText:
          "While the creation of East Med would be beneficial for Cyprus, it is not a realistic option",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "Extraction of fossil fuels belongs to the past. We need to focus on Renewable Energy Sources",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "I don't know / Prefer not to say",
        answerPoints: [],
      },
    ],
  },
];
