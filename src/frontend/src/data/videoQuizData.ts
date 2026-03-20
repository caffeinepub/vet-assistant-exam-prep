export interface VideoQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const videoQuizData: Record<string, VideoQuiz[]> = {
  GZV6X9l9l8E: [
    {
      question: "What is the normal rectal temperature range for a dog?",
      options: ["98–100°F", "101–102.5°F", "103–105°F", "99–100.5°F"],
      correctIndex: 1,
      explanation: "Normal canine temperature is 101–102.5°F.",
    },
    {
      question: "Where is the best location to measure a dog's pulse?",
      options: ["Neck", "Wrist", "Femoral artery", "Tail"],
      correctIndex: 2,
      explanation:
        "The femoral artery inside the thigh is standard for pulse measurement in dogs.",
    },
    {
      question: "What is the normal respiratory rate for a cat?",
      options: [
        "5–10 breaths/min",
        "10–20 breaths/min",
        "20–30 breaths/min",
        "35–50 breaths/min",
      ],
      correctIndex: 2,
      explanation: "Cats normally breathe 20–30 times per minute.",
    },
    {
      question:
        "What does a capillary refill time greater than 2 seconds indicate?",
      options: [
        "Normal circulation",
        "Possible shock or poor perfusion",
        "Dehydration only",
        "Nothing significant",
      ],
      correctIndex: 1,
      explanation:
        "CRT > 2 seconds can indicate shock, dehydration, or cardiovascular compromise.",
    },
    {
      question: "What does TPR stand for in veterinary medicine?",
      options: [
        "Temperature, Pulse, Respiration",
        "Therapy, Procedure, Records",
        "Tissue, Pressure, Range",
        "Temperature, Pressure, Rate",
      ],
      correctIndex: 0,
      explanation:
        "TPR = Temperature, Pulse, Respiration — the three core vital signs.",
    },
  ],
  Gg2rRkR8X9E: [
    {
      question: "What is the primary function of a hemostat?",
      options: [
        "Cut tissue",
        "Clamp blood vessels",
        "Hold suture needles",
        "Measure temperature",
      ],
      correctIndex: 1,
      explanation:
        "Hemostats clamp blood vessels to control bleeding during surgery.",
    },
    {
      question: "What distinguishes Metzenbaum scissors from Mayo scissors?",
      options: [
        "Color",
        "Metzenbaum cut delicate tissue; Mayo cut heavy tissue",
        "Mayo are smaller",
        "They are the same",
      ],
      correctIndex: 1,
      explanation:
        "Metzenbaum scissors are for delicate tissue; Mayo scissors handle heavier tissue.",
    },
    {
      question: "How should instruments be passed to a surgeon?",
      options: [
        "Tip first",
        "Handle first",
        "Drop in their hand",
        "Any way is fine",
      ],
      correctIndex: 1,
      explanation:
        "Instruments are always passed handle-first for safety and efficiency.",
    },
    {
      question: "What are thumb forceps used for?",
      options: [
        "Cutting sutures",
        "Grasping tissue without locking",
        "Clamping vessels",
        "Opening body cavities",
      ],
      correctIndex: 1,
      explanation:
        "Thumb forceps (tissue forceps) grip tissue without a locking mechanism.",
    },
    {
      question: "What is a needle holder primarily used for?",
      options: [
        "Retrieving dropped needles",
        "Holding the suture needle during closure",
        "Measuring wound depth",
        "Cutting tissue",
      ],
      correctIndex: 1,
      explanation:
        "Needle holders secure the suture needle so the surgeon can drive it through tissue.",
    },
  ],
  Qm3VQ9Z2Zk8: [
    {
      question: "What is the minimum restraint principle?",
      options: [
        "Always use maximum force",
        "Use the least restraint needed to reduce stress",
        "Sedate all patients",
        "Use a muzzle every time",
      ],
      correctIndex: 1,
      explanation:
        "Minimum restraint reduces animal stress and risk of injury.",
    },
    {
      question: "What position is lateral recumbency?",
      options: [
        "Animal sitting upright",
        "Animal on its back",
        "Animal lying on its side",
        "Animal standing",
      ],
      correctIndex: 2,
      explanation: "Lateral recumbency means the animal is lying on its side.",
    },
    {
      question: "When is a muzzle appropriate to use?",
      options: [
        "Only for large dogs",
        "When there is a bite risk",
        "Never in a clinic",
        "Only during surgery",
      ],
      correctIndex: 1,
      explanation:
        "Muzzles are used when there is a risk of biting to protect staff.",
    },
    {
      question: "How should you approach a fearful dog?",
      options: [
        "Move quickly to show confidence",
        "Approach calmly and let the dog sniff first",
        "Grab the collar immediately",
        "Make loud sounds to distract it",
      ],
      correctIndex: 1,
      explanation: "A calm, gradual approach reduces fear and bite risk.",
    },
    {
      question:
        "What should you avoid using as the primary restraint for cats?",
      options: [
        "Towel wrap",
        "Scruff hold",
        "Lateral recumbency",
        "Gentle holding",
      ],
      correctIndex: 1,
      explanation:
        "The scruff should not be the primary restraint—it can cause stress; towel wraps are preferred.",
    },
  ],
  "3JpQK7wJY5E": [
    {
      question: "What must be done before applying a disinfectant?",
      options: [
        "Apply PPE only",
        "Clean the surface to remove organic debris",
        "Rinse with hot water",
        "Nothing — apply directly",
      ],
      correctIndex: 1,
      explanation:
        "Organic matter inactivates most disinfectants, so surfaces must be cleaned first.",
    },
    {
      question: "Why is contact time important when disinfecting?",
      options: [
        "It makes the surface look cleaner",
        "The disinfectant needs time to kill pathogens",
        "It dries the surface faster",
        "Contact time doesn't matter",
      ],
      correctIndex: 1,
      explanation:
        "Disinfectants must remain wet for the labeled contact time to be fully effective.",
    },
    {
      question: "Where should used needles be discarded?",
      options: ["Regular trash", "Sharps container", "Biohazard bag", "Sink"],
      correctIndex: 1,
      explanation:
        "Sharps containers are required for safe disposal of needles and sharp objects.",
    },
    {
      question: "What type of waste belongs in a biohazard bag?",
      options: [
        "Paper towels",
        "Food waste",
        "Materials contaminated with blood or body fluids",
        "Empty medication bottles",
      ],
      correctIndex: 2,
      explanation:
        "Biohazard bags are for materials that have been contaminated with biological matter.",
    },
    {
      question: "What PPE is required when using chemical disinfectants?",
      options: [
        "Only goggles",
        "Gloves, gown, and mask as appropriate",
        "No PPE needed",
        "Only gloves",
      ],
      correctIndex: 1,
      explanation:
        "Appropriate PPE protects staff from chemical exposure and splashing.",
    },
  ],
  Z7zZk3z4Y0M: [
    {
      question: "What is the purpose of the primary (contact) bandage layer?",
      options: [
        "Provide cushioning",
        "Absorb exudate and protect the wound",
        "Secure the bandage externally",
        "Prevent the animal from licking",
      ],
      correctIndex: 1,
      explanation: "The primary layer contacts the wound and absorbs drainage.",
    },
    {
      question: "How often should bandages typically be checked?",
      options: [
        "Once a week",
        "Every 12–24 hours",
        "Only if the animal limps",
        "Only when changed",
      ],
      correctIndex: 1,
      explanation:
        "Bandages should be checked every 12–24 hours for signs of complications.",
    },
    {
      question: "What sign indicates a bandage may be too tight?",
      options: [
        "The bandage looks clean",
        "Swelling or coldness of digits below the bandage",
        "The animal is calm",
        "The outer layer is smooth",
      ],
      correctIndex: 1,
      explanation:
        "Digit swelling or coldness below the bandage indicates impaired circulation.",
    },
    {
      question: "What does the tertiary (outer) layer of a bandage do?",
      options: [
        "Contact the wound",
        "Absorb moisture",
        "Secure the bandage and protect from environment",
        "Reduce inflammation",
      ],
      correctIndex: 2,
      explanation:
        "The outer layer holds everything in place and protects against contamination.",
    },
    {
      question:
        "Which layer provides padding and moisture absorption in a bandage?",
      options: [
        "Primary layer",
        "Secondary layer",
        "Tertiary layer",
        "All layers equally",
      ],
      correctIndex: 1,
      explanation:
        "The secondary (padded) layer cushions and absorbs moisture.",
    },
  ],
};
