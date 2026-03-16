export interface VisualQuestion {
  id: number;
  image: string;
  imageCaption: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export const visualQuestions: VisualQuestion[] = [
  {
    id: 1,
    image: "/assets/generated/surgical-instruments.dim_800x500.jpg",
    imageCaption: "Veterinary Surgical Instruments",
    question:
      "Which instrument is used to clamp blood vessels and control bleeding?",
    options: [
      "Scalpel",
      "Hemostatic Forceps (Hemostat)",
      "Needle Holder",
      "Tissue Scissors",
    ],
    correctIndex: 1,
    explanation:
      "Hemostatic forceps (hemostats) are locking clamps used to control bleeding by clamping blood vessels during surgery.",
    category: "Surgical Instruments",
  },
  {
    id: 2,
    image: "/assets/generated/surgical-instruments.dim_800x500.jpg",
    imageCaption: "Veterinary Surgical Instruments",
    question: "What instrument is used to hold a needle during suturing?",
    options: ["Tissue Forceps", "Retractor", "Needle Holder", "Scalpel Handle"],
    correctIndex: 2,
    explanation:
      "A needle holder is a locking forceps designed specifically to grip and drive suture needles through tissue.",
    category: "Surgical Instruments",
  },
  {
    id: 3,
    image: "/assets/generated/surgical-instruments.dim_800x500.jpg",
    imageCaption: "Veterinary Surgical Instruments",
    question: "Which instrument is used to make incisions in tissue?",
    options: ["Needle Holder", "Retractor", "Hemostatic Forceps", "Scalpel"],
    correctIndex: 3,
    explanation:
      "A scalpel consists of a handle and a disposable blade and is used to make precise incisions in skin and tissue.",
    category: "Surgical Instruments",
  },
  {
    id: 4,
    image: "/assets/generated/dog-restraint.dim_800x500.jpg",
    imageCaption: "Dog Restraint Technique",
    question: "The restraint position shown (dog lying on its side) is called:",
    options: [
      "Dorsal recumbency",
      "Lateral recumbency",
      "Sternal recumbency",
      "Standing restraint",
    ],
    correctIndex: 1,
    explanation:
      "Lateral recumbency means the animal is lying on its side. It is commonly used for physical exams, radiographs, and minor procedures.",
    category: "Dog Restraint",
  },
  {
    id: 5,
    image: "/assets/generated/dog-restraint.dim_800x500.jpg",
    imageCaption: "Dog Restraint on Exam Table",
    question:
      "When restraining a dog on an exam table, which is the most important safety concern?",
    options: [
      "Keeping the dog quiet",
      "Preventing the dog from jumping off the table",
      "Making the dog comfortable",
      "Checking the dog's weight",
    ],
    correctIndex: 1,
    explanation:
      "The primary safety concern is preventing the dog from jumping off the table, which could result in serious injury to the patient.",
    category: "Dog Restraint",
  },
  {
    id: 6,
    image: "/assets/generated/cat-restraint.dim_800x500.jpg",
    imageCaption: "Cat Towel Restraint",
    question: "The cat towel wrap technique shown is commonly called:",
    options: [
      "Scruffing technique",
      "Kitty burrito",
      "Stretch restraint",
      "Bag restraint",
    ],
    correctIndex: 1,
    explanation:
      'The "kitty burrito" wraps the cat snugly in a towel to limit limb movement, reducing stress and risk of injury during exams and procedures.',
    category: "Cat Restraint",
  },
  {
    id: 7,
    image: "/assets/generated/cat-restraint.dim_800x500.jpg",
    imageCaption: "Cat Restraint Technique",
    question: "The primary benefit of towel restraint for cats is:",
    options: [
      "It is faster than other methods",
      "It reduces stress and limits movement safely",
      "It sedates the cat",
      "It prevents the cat from breathing deeply",
    ],
    correctIndex: 1,
    explanation:
      "Towel restraint reduces stress by limiting the cat's ability to scratch or bite while keeping them calm and contained without chemical restraint.",
    category: "Cat Restraint",
  },
  {
    id: 8,
    image: "/assets/generated/dog-anatomy.dim_800x500.jpg",
    imageCaption: "Dog Anatomy Diagram",
    question:
      "Where is the best location to auscultate (listen to) the heart in a dog?",
    options: [
      "Right side, behind the elbow",
      "Left side, behind the elbow",
      "Directly over the spine",
      "Over the cranial abdomen",
    ],
    correctIndex: 1,
    explanation:
      "The apex of the heart is best heard on the left side, caudal to the elbow at the 5th intercostal space in dogs.",
    category: "Dog Anatomy",
  },
  {
    id: 9,
    image: "/assets/generated/dog-anatomy.dim_800x500.jpg",
    imageCaption: "Dog Anatomy - Organs",
    question: "In dogs, what is the normal rectal temperature range?",
    options: [
      "96-98°F (35.5-36.7°C)",
      "99-102.5°F (37.2-39.2°C)",
      "103-105°F (39.4-40.6°C)",
      "106-108°F (41.1-42.2°C)",
    ],
    correctIndex: 1,
    explanation:
      "The normal rectal temperature for dogs is 99-102.5°F (37.2-39.2°C). Temperatures above 103°F may indicate fever or hyperthermia.",
    category: "Dog Anatomy",
  },
  {
    id: 10,
    image: "/assets/generated/cat-anatomy.dim_800x500.jpg",
    imageCaption: "Cat Anatomy Diagram",
    question: "In cats, the normal resting heart rate range is:",
    options: ["40-60 bpm", "60-100 bpm", "100-140 bpm", "160-240 bpm"],
    correctIndex: 3,
    explanation:
      "Cats have a resting heart rate of 160-240 bpm, significantly faster than humans or dogs due to their smaller body size.",
    category: "Cat Anatomy",
  },
  {
    id: 11,
    image: "/assets/generated/cat-anatomy.dim_800x500.jpg",
    imageCaption: "Cat Anatomy - Organ Systems",
    question: "What is the normal respiratory rate for a cat at rest?",
    options: [
      "5-10 breaths per minute",
      "16-40 breaths per minute",
      "50-70 breaths per minute",
      "80-100 breaths per minute",
    ],
    correctIndex: 1,
    explanation:
      "Normal respiratory rate for cats at rest is 16-40 breaths per minute. Rates above 40 at rest may indicate respiratory distress.",
    category: "Cat Anatomy",
  },
];
