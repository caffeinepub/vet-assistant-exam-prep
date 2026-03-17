export interface PrepVideoQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export const prepVideoQuestions: PrepVideoQuestion[] = [
  {
    id: "pvq1",
    text: "What is one of the primary responsibilities of a veterinary assistant in a clinic?",
    options: [
      "Diagnosing illnesses and prescribing medications",
      "Assisting the veterinarian with animal restraint, basic care, and clinic tasks",
      "Performing surgical procedures independently",
      "Managing the clinic's financial accounts",
    ],
    correctIndex: 1,
    explanation:
      "Veterinary assistants support the veterinarian by restraining animals, performing basic care tasks, cleaning equipment, and keeping the clinic running smoothly — but they do not diagnose or prescribe.",
    category: "Vet Assistant Responsibilities",
  },
  {
    id: "pvq2",
    text: "When restraining a dog for an exam, which technique is most appropriate for a calm, medium-sized dog?",
    options: [
      "Muzzle the dog immediately regardless of temperament",
      "Lay the dog on its back and hold all four legs",
      "Use gentle but firm control with one arm under the neck and one around the body",
      "Allow the dog to move freely to reduce stress",
    ],
    correctIndex: 2,
    explanation:
      "For a calm dog, the standard lateral or standing restraint — one arm under the neck cradling the head, and the other arm around the body — provides safe, gentle control for routine exams.",
    category: "Animal Handling",
  },
  {
    id: "pvq3",
    text: "Which of the following best describes proper clinic workflow when a new patient arrives?",
    options: [
      "Bring the animal directly into the exam room without checking in",
      "Greet the client, verify patient information, obtain weight and vitals, then prepare the exam room",
      "Have the veterinarian handle all check-in tasks themselves",
      "Administer vaccines immediately upon arrival",
    ],
    correctIndex: 1,
    explanation:
      "Proper workflow begins with client greeting and chart verification, followed by obtaining the patient's weight and preliminary vitals. The vet assistant then prepares the exam room so the veterinarian can focus entirely on the patient.",
    category: "Clinic Workflow",
  },
  {
    id: "pvq4",
    text: "What personal protective equipment (PPE) should a veterinary assistant wear when handling potentially infectious animals?",
    options: [
      "No PPE is necessary if the animal looks healthy",
      "Only a lab coat",
      "Gloves and appropriate gown or coat; a mask when respiratory concerns exist",
      "Full hazmat suit for every patient interaction",
    ],
    correctIndex: 2,
    explanation:
      "Gloves are standard PPE for handling all patients. A gown or clinic coat protects clothing, and a mask is added when there is risk of respiratory transmission. PPE choice is based on the risk level of the situation.",
    category: "Safety Practices",
  },
  {
    id: "pvq5",
    text: "How should surgical instruments be cleaned and sterilized between patients?",
    options: [
      "Rinse with cold water and reuse immediately",
      "Wipe with a dry cloth and store in the drawer",
      "Scrub to remove debris, run through an ultrasonic cleaner if available, then autoclave-sterilize before reuse",
      "Soak in bleach overnight for every use",
    ],
    correctIndex: 2,
    explanation:
      "Proper instrument reprocessing involves removing visible debris by scrubbing, using an ultrasonic cleaner to dislodge microscopic particles, and then autoclaving (steam sterilization) to achieve sterility before the instruments are used again.",
    category: "Sanitation",
  },
];
