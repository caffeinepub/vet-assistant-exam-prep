import type { Flashcard, Question } from "../backend";

export const questionBank: Question[] = [
  // ── LEGAL / SAFETY / ETHICS ───────────────────────────────────────────────
  {
    id: 1n,
    category: "legal_safety_ethics",
    text: "What does OSHA stand for?",
    options: [
      "Occupational Safety and Health Administration",
      "Organized Safety Health Agency",
      "Office of Safety and Health Authority",
      "Operational Safety Hazard Agency",
    ],
    correctIndex: 0n,
    explanation: "OSHA ensures safe and healthy working conditions.",
  },
  {
    id: 2n,
    category: "legal_safety_ethics",
    text: "What is veterinary ethics?",
    options: [
      "Moral principles guiding animal care",
      "Animal training methods",
      "Medical billing system",
      "Surgical procedures",
    ],
    correctIndex: 0n,
    explanation: "Ethics guide how professionals treat animals and clients.",
  },
  {
    id: 3n,
    category: "legal_safety_ethics",
    text: "What is the Veterinary Practice Act?",
    options: [
      "Law regulating veterinary medicine",
      "Animal feeding guide",
      "Surgical handbook",
      "Clinic cleaning rules",
    ],
    correctIndex: 0n,
    explanation: "It defines legal standards for veterinary practice.",
  },
  {
    id: 26n,
    category: "legal_safety_ethics",
    text: "Can a veterinary assistant diagnose diseases?",
    options: [
      "Yes, always",
      "Only with supervision",
      "No, only veterinarians can diagnose",
      "Yes, for minor issues",
    ],
    correctIndex: 2n,
    explanation: "Diagnosis is restricted to licensed veterinarians.",
  },
  {
    id: 27n,
    category: "legal_safety_ethics",
    text: "Who is authorized to prescribe medications for animals?",
    options: [
      "Veterinary assistant",
      "Licensed veterinarian",
      "Clinic manager",
      "Animal owner",
    ],
    correctIndex: 1n,
    explanation:
      "Only licensed veterinarians can legally prescribe medications.",
  },
  {
    id: 28n,
    category: "legal_safety_ethics",
    text: "What should you do if an owner asks you to diagnose their pet?",
    options: [
      "Give your best guess",
      "Politely explain that only a veterinarian can diagnose",
      "Ignore the question",
      "Tell them to look online",
    ],
    correctIndex: 1n,
    explanation:
      "Referring diagnosis questions to the veterinarian is both ethical and legally required.",
  },
  {
    id: 51n,
    category: "legal_safety_ethics",
    text: "Confidentiality of client and patient records in a veterinary clinic is:",
    options: [
      "Optional, depending on the case",
      "Required and protected by professional ethics",
      "Only required for large clinics",
      "Not necessary unless requested",
    ],
    correctIndex: 1n,
    explanation:
      "Client and patient records are confidential and must be handled with professional discretion.",
  },
  {
    id: 52n,
    category: "legal_safety_ethics",
    text: "What is informed consent in veterinary medicine?",
    options: [
      "The owner agrees to pay in advance",
      "The owner gives permission after being informed of risks and options",
      "The vet approves the treatment plan",
      "A written exam score",
    ],
    correctIndex: 1n,
    explanation:
      "Informed consent means the owner understands and approves procedures before they occur.",
  },
  {
    id: 250n,
    category: "legal_safety_ethics",
    text: "What does OSHA regulate?",
    options: ["Animal diets", "Workplace safety", "Surgery methods", "Billing"],
    correctIndex: 1n,
    explanation: "OSHA ensures safe working conditions.",
  },
  {
    id: 251n,
    category: "legal_safety_ethics",
    text: "What is client confidentiality?",
    options: [
      "Sharing info freely",
      "Keeping client info private",
      "Posting online",
      "Ignoring data",
    ],
    correctIndex: 1n,
    explanation: "Confidentiality is a legal and ethical duty.",
  },

  // ── ADMINISTRATION ────────────────────────────────────────────────────────
  {
    id: 4n,
    category: "administration",
    text: "What is a veterinary assistant responsible for?",
    options: [
      "Perform surgery",
      "Assist with patient care and clinic tasks",
      "Diagnose illness",
      "Prescribe medication",
    ],
    correctIndex: 1n,
    explanation:
      "Assistants support veterinarians but do not diagnose or prescribe.",
  },
  {
    id: 18n,
    category: "administration",
    text: "What is patient intake in a veterinary clinic?",
    options: [
      "Feeding the patient",
      "Collecting owner info and pet symptoms before exam",
      "Administering medication",
      "Post-surgery care",
    ],
    correctIndex: 1n,
    explanation:
      "Patient intake gathers essential information before the veterinarian sees the patient.",
  },
  {
    id: 30n,
    category: "administration",
    text: "What is the best way to communicate a pet's treatment plan to an owner?",
    options: [
      "Use complex medical jargon",
      "Speak clearly and in simple terms",
      "Send them a written note only",
      "Have them read the chart",
    ],
    correctIndex: 1n,
    explanation:
      "Clear, simple communication helps owners understand and follow care plans.",
  },
  {
    id: 53n,
    category: "administration",
    text: "What is a SOAP note used for in veterinary medicine?",
    options: [
      "Cleaning equipment",
      "Documenting patient assessments in a structured format",
      "Ordering supplies",
      "Scheduling appointments",
    ],
    correctIndex: 1n,
    explanation:
      "SOAP stands for Subjective, Objective, Assessment, and Plan — a standard medical documentation format.",
  },
  {
    id: 54n,
    category: "administration",
    text: "When scheduling appointments, which patient should be prioritized?",
    options: [
      "The one who called first",
      "The one with the most expensive visit",
      "A patient with a life-threatening emergency",
      "Long-term regular clients",
    ],
    correctIndex: 2n,
    explanation:
      "Emergency cases are always prioritized based on medical urgency.",
  },
  {
    id: 55n,
    category: "administration",
    text: "What information is typically included in a patient medical record?",
    options: [
      "Owner's social media profiles",
      "Species, breed, weight, medical history, and treatments",
      "Clinic's monthly revenue",
      "Staff work schedules",
    ],
    correctIndex: 1n,
    explanation:
      "Patient records contain identifying info, health history, and treatment details.",
  },
  {
    id: 56n,
    category: "administration",
    text: "What does an inventory management system track in a veterinary clinic?",
    options: [
      "Client satisfaction ratings",
      "Medication and supply stock levels",
      "Employee time off requests",
      "Social media engagement",
    ],
    correctIndex: 1n,
    explanation:
      "Inventory management ensures the clinic has adequate supplies and medications on hand.",
  },
  {
    id: 57n,
    category: "administration",
    text: "Which of the following is an example of proper telephone etiquette in a veterinary clinic?",
    options: [
      "Putting callers on hold immediately",
      "Answering promptly, identifying the clinic, and using a professional tone",
      "Discussing other patients by name",
      "Using slang to sound friendly",
    ],
    correctIndex: 1n,
    explanation:
      "Professional telephone communication reflects positively on the practice.",
  },
  {
    id: 101n,
    category: "administration",
    text: "How should a veterinary assistant answer the telephone?",
    options: [
      "How can I help you?",
      "Joe's Vet Clinic, how may I help you?",
      "What is your emergency?",
      "What is your animal's main symptom?",
    ],
    correctIndex: 1n,
    explanation:
      "Professional greeting includes clinic name and offer to help.",
  },
  {
    id: 102n,
    category: "administration",
    text: "What is the most appropriate place to record an appointment?",
    options: [
      "Software scheduling book",
      "Desk calendar",
      "Treatment board",
      "Prescription pad",
    ],
    correctIndex: 0n,
    explanation:
      "Appointments should be recorded in official scheduling systems.",
  },
  {
    id: 201n,
    category: "administration",
    text: "How should a veterinary assistant greet a client on the phone?",
    options: [
      "Hello?",
      "State clinic name and offer help",
      "What do you need?",
      "Hold please",
    ],
    correctIndex: 1n,
    explanation: "Professional greetings include clinic name and assistance.",
  },
  {
    id: 202n,
    category: "administration",
    text: "What is the purpose of accurate medical records?",
    options: [
      "Legal and patient care tracking",
      "Only billing",
      "Decoration",
      "Marketing",
    ],
    correctIndex: 0n,
    explanation: "Records ensure continuity of care and legal protection.",
  },
  {
    id: 203n,
    category: "administration",
    text: "Appointments should be recorded in:",
    options: ["Notebook", "Scheduling system", "Sticky notes", "Whiteboard"],
    correctIndex: 1n,
    explanation: "Official systems prevent errors and overlap.",
  },

  // ── NURSING ───────────────────────────────────────────────────────────────
  {
    id: 6n,
    category: "nursing",
    text: "What is the normal temperature range for a dog?",
    options: ["98–100°F", "101–102.5°F", "103–105°F", "95–97°F"],
    correctIndex: 1n,
    explanation: "Normal canine temperature ranges from 101 to 102.5°F.",
  },
  {
    id: 9n,
    category: "nursing",
    text: "What is a common method to restrain a cat?",
    options: ["Leash", "Towel wrap", "Let it roam", "Hold tail"],
    correctIndex: 1n,
    explanation: "Towel restraint helps calm and control cats safely.",
  },
  {
    id: 10n,
    category: "nursing",
    text: "What is the normal respiration rate for a dog?",
    options: [
      "5–10 breaths/min",
      "10–30 breaths/min",
      "30–50 breaths/min",
      "50–70 breaths/min",
    ],
    correctIndex: 1n,
    explanation: "Dogs typically breathe 10–30 times per minute.",
  },
  {
    id: 11n,
    category: "nursing",
    text: "What is a normal heart rate for a cat?",
    options: ["60–100 bpm", "100–120 bpm", "140–220 bpm", "220–300 bpm"],
    correctIndex: 2n,
    explanation: "Cats typically have a heart rate between 140 and 220 bpm.",
  },
  {
    id: 15n,
    category: "nursing",
    text: "What is the safest way to restrain a frightened dog?",
    options: [
      "Hold loosely",
      "Use proper restraint technique",
      "Let it roam",
      "Ignore it",
    ],
    correctIndex: 1n,
    explanation: "Proper restraint keeps both the animal and staff safe.",
  },
  {
    id: 17n,
    category: "nursing",
    text: "What is a stethoscope used for?",
    options: [
      "Taking blood pressure",
      "Listening to heart and lung sounds",
      "Drawing blood",
      "Measuring temperature",
    ],
    correctIndex: 1n,
    explanation: "Stethoscopes amplify internal body sounds for assessment.",
  },
  {
    id: 21n,
    category: "nursing",
    text: "When handling an aggressive dog, what is the first priority?",
    options: [
      "Move quickly",
      "Use proper restraint and consider a muzzle",
      "Ignore the aggression",
      "Give a treat immediately",
    ],
    correctIndex: 1n,
    explanation:
      "Safety for both staff and the animal is the top priority with aggressive patients.",
  },
  {
    id: 22n,
    category: "nursing",
    text: "Normal cat respiration rate is:",
    options: [
      "5–10 breaths/min",
      "10–15 breaths/min",
      "20–30 breaths/min",
      "40–50 breaths/min",
    ],
    correctIndex: 2n,
    explanation: "Cats breathe 20–30 times per minute at rest.",
  },
  {
    id: 58n,
    category: "nursing",
    text: "Which route is used when a patient needs a medication to work fastest?",
    options: ["Oral", "Topical", "Intravenous (IV)", "Subcutaneous"],
    correctIndex: 2n,
    explanation:
      "IV administration delivers medication directly into the bloodstream for the fastest effect.",
  },
  {
    id: 59n,
    category: "nursing",
    text: "What does TPR stand for in veterinary nursing?",
    options: [
      "Temperature, Pulse, Respiration",
      "Treatment Plan Review",
      "Tissue, Plasma, Red cells",
      "Total Patient Report",
    ],
    correctIndex: 0n,
    explanation:
      "TPR refers to the three basic vital signs assessed during patient monitoring.",
  },
  {
    id: 60n,
    category: "nursing",
    text: "Where is the femoral pulse most commonly assessed in dogs and cats?",
    options: ["Neck", "Chest", "Inner thigh (femoral artery)", "Tail base"],
    correctIndex: 2n,
    explanation:
      "The femoral artery runs along the inner thigh and is the standard pulse site for small animals.",
  },
  {
    id: 104n,
    category: "nursing",
    text: "What is a task of a veterinary assistant?",
    options: [
      "Administer vaccinations",
      "Diagnose conditions",
      "Perform venipuncture",
      "Trim nails",
    ],
    correctIndex: 3n,
    explanation:
      "Assistants perform basic care tasks but not advanced medical procedures.",
  },
  {
    id: 220n,
    category: "nursing",
    text: "What is a responsibility of a veterinary assistant?",
    options: [
      "Diagnose illness",
      "Perform surgery",
      "Assist with patient care",
      "Prescribe medication",
    ],
    correctIndex: 2n,
    explanation: "Assistants support but do not diagnose or prescribe.",
  },
  {
    id: 221n,
    category: "nursing",
    text: "What is the first step when handling an aggressive animal?",
    options: [
      "Ignore behavior",
      "Use proper restraint",
      "Let go",
      "Yell at it",
    ],
    correctIndex: 1n,
    explanation: "Safety is the top priority.",
  },

  // ── SANITATION ────────────────────────────────────────────────────────────
  {
    id: 5n,
    category: "sanitation",
    text: "Why is PPE used in a veterinary clinic?",
    options: [
      "For decoration",
      "To protect against infection",
      "To save time",
      "Not necessary",
    ],
    correctIndex: 1n,
    explanation: "PPE reduces exposure to harmful pathogens.",
  },
  {
    id: 8n,
    category: "sanitation",
    text: "Where should used needles be disposed?",
    options: ["Trash bag", "Sharps container", "Sink", "Drawer"],
    correctIndex: 1n,
    explanation: "Sharps containers are used for safe disposal of needles.",
  },
  {
    id: 14n,
    category: "sanitation",
    text: "Why is PPE important in a veterinary clinic?",
    options: [
      "For style",
      "To protect from infection",
      "To impress clients",
      "Not needed",
    ],
    correctIndex: 1n,
    explanation: "PPE protects staff from exposure to harmful pathogens.",
  },
  {
    id: 19n,
    category: "sanitation",
    text: "What should you do if a chemical spills on your skin in the clinic?",
    options: [
      "Ignore it",
      "Rinse with water immediately",
      "Cover with bandage",
      "Apply lotion",
    ],
    correctIndex: 1n,
    explanation:
      "Flushing the area with water immediately reduces chemical exposure risk.",
  },
  {
    id: 20n,
    category: "sanitation",
    text: "What is the first step of proper disinfection?",
    options: [
      "Apply disinfectant directly",
      "Remove debris before applying disinfectant",
      "Rinse with hot water only",
      "Air dry the surface",
    ],
    correctIndex: 1n,
    explanation:
      "Removing organic matter first ensures disinfectants work effectively.",
  },
  {
    id: 29n,
    category: "sanitation",
    text: "When should you wash your hands in a veterinary clinic?",
    options: [
      "Only before lunch",
      "After handling each patient and before new tasks",
      "Once at the end of the day",
      "Only when visibly dirty",
    ],
    correctIndex: 1n,
    explanation:
      "Frequent handwashing prevents cross-contamination between patients.",
  },
  {
    id: 61n,
    category: "sanitation",
    text: "An autoclave sterilizes instruments using:",
    options: [
      "UV light",
      "High-pressure steam",
      "Chemical bleach",
      "Dry heat only",
    ],
    correctIndex: 1n,
    explanation:
      "Autoclaves use pressurized steam to kill all microorganisms on instruments.",
  },
  {
    id: 62n,
    category: "sanitation",
    text: "What is a zoonotic disease?",
    options: [
      "A disease only affecting cats",
      "A disease that can spread from animals to humans",
      "A disease caused by vaccines",
      "A disease unique to exotic animals",
    ],
    correctIndex: 1n,
    explanation:
      "Zoonotic diseases like rabies and ringworm can be transmitted between animals and people.",
  },
  {
    id: 63n,
    category: "sanitation",
    text: "Which disinfectant is commonly used to clean kennels between patients?",
    options: [
      "Diluted bleach (sodium hypochlorite)",
      "Hydrogen gas",
      "Rubbing alcohol alone",
      "Tap water",
    ],
    correctIndex: 0n,
    explanation:
      "Diluted bleach is an effective and widely used kennel disinfectant.",
  },
  {
    id: 64n,
    category: "sanitation",
    text: "Contaminated waste from a veterinary clinic should be disposed of as:",
    options: [
      "Regular household trash",
      "Medical/biohazard waste",
      "Recyclable material",
      "Compostable waste",
    ],
    correctIndex: 1n,
    explanation:
      "Biohazard waste requires special handling to prevent environmental contamination and disease spread.",
  },
  {
    id: 103n,
    category: "sanitation",
    text: "Kennel cages should be cleaned with:",
    options: ["Bleach", "Disinfectant", "Soap and water", "Vinegar"],
    correctIndex: 1n,
    explanation: "Proper disinfectants are required to prevent disease spread.",
  },
  {
    id: 105n,
    category: "sanitation",
    text: "The amount of food fed to a hospitalized animal is determined by:",
    options: ["Breed", "Veterinarian", "Owner", "Food label"],
    correctIndex: 1n,
    explanation: "The veterinarian determines feeding plans for patients.",
  },
  {
    id: 210n,
    category: "sanitation",
    text: "What is the main goal of sanitation in a clinic?",
    options: [
      "Appearance",
      "Prevent disease spread",
      "Save time",
      "Reduce cost",
    ],
    correctIndex: 1n,
    explanation: "Sanitation protects animals and staff from infection.",
  },
  {
    id: 211n,
    category: "sanitation",
    text: "What must be done before applying disinfectant?",
    options: ["Add water", "Remove debris", "Dry surface", "Nothing"],
    correctIndex: 1n,
    explanation: "Organic material reduces disinfectant effectiveness.",
  },
  {
    id: 212n,
    category: "sanitation",
    text: "Which item should be disposed of in a biohazard container?",
    options: [
      "Paper towels",
      "Food waste",
      "Blood-soaked materials",
      "Plastic bottles",
    ],
    correctIndex: 2n,
    explanation: "Biohazard containers hold contaminated materials.",
  },

  // ── PHARMACOLOGY ──────────────────────────────────────────────────────────
  {
    id: 65n,
    category: "pharmacology",
    text: "What does 'SID' mean on a prescription label?",
    options: ["Twice daily", "Once daily", "Three times daily", "As needed"],
    correctIndex: 1n,
    explanation: "SID (semel in die) means once per day.",
  },
  {
    id: 66n,
    category: "pharmacology",
    text: "What does 'BID' mean on a veterinary prescription?",
    options: [
      "Once daily",
      "Twice daily",
      "Three times daily",
      "Every other day",
    ],
    correctIndex: 1n,
    explanation: "BID (bis in die) means twice per day.",
  },
  {
    id: 67n,
    category: "pharmacology",
    text: "Which drug class is commonly used to reduce inflammation and pain in animals?",
    options: [
      "Antibiotics",
      "NSAIDs (non-steroidal anti-inflammatory drugs)",
      "Antifungals",
      "Antiparasitics",
    ],
    correctIndex: 1n,
    explanation:
      "NSAIDs like carprofen and meloxicam reduce inflammation and manage pain.",
  },
  {
    id: 68n,
    category: "pharmacology",
    text: "What type of drug is amoxicillin?",
    options: ["Antiparasitic", "Antibiotic", "Antifungal", "Sedative"],
    correctIndex: 1n,
    explanation:
      "Amoxicillin is a broad-spectrum antibiotic used for bacterial infections.",
  },
  {
    id: 69n,
    category: "pharmacology",
    text: "Which medication is commonly used to prevent heartworm in dogs?",
    options: [
      "Amoxicillin",
      "Ivermectin (e.g., Heartgard)",
      "Prednisone",
      "Metronidazole",
    ],
    correctIndex: 1n,
    explanation:
      "Ivermectin-based products like Heartgard are the standard for heartworm prevention.",
  },
  {
    id: 70n,
    category: "pharmacology",
    text: "What does the term 'controlled substance' mean in veterinary practice?",
    options: [
      "A drug that controls fleas",
      "A regulated drug with abuse potential, requiring special record-keeping",
      "A drug that must be refrigerated",
      "Any oral medication",
    ],
    correctIndex: 1n,
    explanation:
      "Controlled substances (e.g., opioids, ketamine) require DEA oversight and strict logs.",
  },
  {
    id: 71n,
    category: "pharmacology",
    text: "What is the route of administration abbreviated as 'SQ' or 'SubQ'?",
    options: [
      "Intramuscular",
      "Intravenous",
      "Subcutaneous (under the skin)",
      "Sublingual",
    ],
    correctIndex: 2n,
    explanation:
      "Subcutaneous injections are administered under the skin, often in the scruff or flank.",
  },
  {
    id: 72n,
    category: "pharmacology",
    text: "Corticosteroids (e.g., prednisone) are primarily used to:",
    options: [
      "Kill bacteria",
      "Reduce inflammation and suppress the immune response",
      "Prevent parasites",
      "Relieve constipation",
    ],
    correctIndex: 1n,
    explanation:
      "Corticosteroids are anti-inflammatory and immunosuppressive agents.",
  },
  {
    id: 73n,
    category: "pharmacology",
    text: "Which abbreviation means 'as needed' on a prescription?",
    options: ["QID", "PRN", "TID", "BID"],
    correctIndex: 1n,
    explanation:
      "PRN (pro re nata) means the medication is given only when required.",
  },
  {
    id: 74n,
    category: "pharmacology",
    text: "A drug's 'withdrawal time' is important when treating:",
    options: [
      "Exotic pets only",
      "Food-producing animals, to ensure drug residues are gone before slaughter",
      "Animals with diabetes",
      "Pets receiving chemotherapy",
    ],
    correctIndex: 1n,
    explanation:
      "Withdrawal time is the period needed after drug administration before an animal's products (milk, meat) are safe for human consumption.",
  },
  {
    id: 240n,
    category: "pharmacology",
    text: "Who prescribes medication in a clinic?",
    options: ["Assistant", "Technician", "Veterinarian", "Receptionist"],
    correctIndex: 2n,
    explanation: "Only veterinarians prescribe medication.",
  },
  {
    id: 241n,
    category: "pharmacology",
    text: "What must be checked before giving medication?",
    options: [
      "Animal color",
      "Dosage and instructions",
      "Owner name only",
      "Time of day only",
    ],
    correctIndex: 1n,
    explanation: "Incorrect dosage can harm the animal.",
  },

  // ── LABORATORY ────────────────────────────────────────────────────────────
  {
    id: 75n,
    category: "laboratory",
    text: "What is a CBC used to evaluate?",
    options: [
      "Kidney function",
      "Red and white blood cells and platelets",
      "Liver enzymes",
      "Urine concentration",
    ],
    correctIndex: 1n,
    explanation:
      "A Complete Blood Count (CBC) measures red cells, white cells, and platelets to assess overall blood health.",
  },
  {
    id: 76n,
    category: "laboratory",
    text: "What is the purpose of a urinalysis?",
    options: [
      "Measure heart rate",
      "Evaluate kidney function and detect urinary tract infections",
      "Check blood glucose only",
      "Identify skin parasites",
    ],
    correctIndex: 1n,
    explanation:
      "Urinalysis assesses urine content to evaluate kidney health and detect infection.",
  },
  {
    id: 77n,
    category: "laboratory",
    text: "Which tube color is typically used to collect blood for a CBC?",
    options: ["Red top", "Blue top", "Purple/lavender top (EDTA)", "Green top"],
    correctIndex: 2n,
    explanation:
      "EDTA (purple/lavender) tubes prevent clotting and are used for CBC analysis.",
  },
  {
    id: 78n,
    category: "laboratory",
    text: "A fecal flotation test is used to detect:",
    options: [
      "Bacterial infections",
      "Intestinal parasites and their eggs",
      "Blood glucose levels",
      "Skin mites",
    ],
    correctIndex: 1n,
    explanation:
      "Fecal flotation separates parasite eggs/oocysts from fecal matter for microscopic examination.",
  },
  {
    id: 79n,
    category: "laboratory",
    text: "What does PCV (packed cell volume) measure?",
    options: [
      "Platelet count",
      "Percentage of red blood cells in whole blood",
      "White blood cell count",
      "Plasma protein level",
    ],
    correctIndex: 1n,
    explanation:
      "PCV (hematocrit) indicates what percentage of blood volume is made up of red blood cells.",
  },
  {
    id: 80n,
    category: "laboratory",
    text: "Which sample is required for a blood chemistry panel (BMP/CMP)?",
    options: ["Urine", "Feces", "Serum or plasma", "Saliva"],
    correctIndex: 2n,
    explanation:
      "Chemistry panels require serum (from clotted blood) or plasma (from anticoagulated blood).",
  },
  {
    id: 81n,
    category: "laboratory",
    text: "What does a positive heartworm antigen test indicate?",
    options: [
      "The animal has fleas",
      "Adult female heartworms are present",
      "The animal is immune to heartworm",
      "The test is inconclusive",
    ],
    correctIndex: 1n,
    explanation:
      "Heartworm antigen tests detect proteins shed by adult female heartworms (Dirofilaria immitis).",
  },
  {
    id: 82n,
    category: "laboratory",
    text: "A vaginal cytology smear is used in dogs to:",
    options: [
      "Check for UTI",
      "Determine stage of estrous cycle",
      "Test for heartworm",
      "Measure progesterone",
    ],
    correctIndex: 1n,
    explanation:
      "Vaginal cytology identifies cell types to determine where a dog is in her reproductive cycle.",
  },
  {
    id: 230n,
    category: "laboratory",
    text: "What is a common lab test performed in clinics?",
    options: ["Blood analysis", "X-ray", "Surgery", "Training"],
    correctIndex: 0n,
    explanation: "Blood tests help diagnose conditions.",
  },
  {
    id: 231n,
    category: "laboratory",
    text: "Why must samples be labeled correctly?",
    options: [
      "For decoration",
      "Prevent mix-ups",
      "Save time",
      "Not important",
    ],
    correctIndex: 1n,
    explanation: "Incorrect labeling leads to serious errors.",
  },

  // ── RADIOLOGY ────────────────────────────────────────────────────────────
  {
    id: 83n,
    category: "radiology",
    text: "What PPE must be worn when taking radiographs of an animal?",
    options: [
      "Surgical gloves only",
      "Lead apron, gloves, and thyroid shield",
      "Safety goggles only",
      "No PPE is required",
    ],
    correctIndex: 1n,
    explanation:
      "Lead shielding protects staff from scatter radiation during X-ray procedures.",
  },
  {
    id: 84n,
    category: "radiology",
    text: "What does ALARA stand for in radiology safety?",
    options: [
      "Always Leave A Radiograph Accessible",
      "As Low As Reasonably Achievable",
      "All Laboratories Are Radiation Areas",
      "Avoid Long And Repeated Acquisitions",
    ],
    correctIndex: 1n,
    explanation:
      "ALARA is the guiding principle to minimize radiation exposure to staff and patients.",
  },
  {
    id: 85n,
    category: "radiology",
    text: "What view is a 'VD' radiograph?",
    options: [
      "Left lateral view",
      "Right lateral view",
      "Ventrodorsal view (animal on back)",
      "Oblique view",
    ],
    correctIndex: 2n,
    explanation:
      "A VD (ventrodorsal) view is taken with the animal lying on its back, beam entering the belly first.",
  },
  {
    id: 86n,
    category: "radiology",
    text: "Radiographic film that appears too dark (overexposed) indicates:",
    options: [
      "Too little radiation was used",
      "Too much radiation was used",
      "Wrong patient position",
      "Equipment malfunction",
    ],
    correctIndex: 1n,
    explanation:
      "Overexposed radiographs result from excessive kVp or mAs settings, producing a dark image.",
  },
  {
    id: 87n,
    category: "radiology",
    text: "What is the purpose of a dosimeter badge worn by radiology staff?",
    options: [
      "Identify the staff member",
      "Monitor cumulative radiation exposure",
      "Control the X-ray machine",
      "Block radiation",
    ],
    correctIndex: 1n,
    explanation:
      "Dosimeter badges track how much radiation a staff member has been exposed to over time.",
  },

  // ── SURGERY ───────────────────────────────────────────────────────────────
  {
    id: 7n,
    category: "surgery",
    text: "Which instrument is used to clamp blood vessels?",
    options: ["Scalpel", "Forceps", "Hemostat", "Thermometer"],
    correctIndex: 2n,
    explanation:
      "Hemostats are used to clamp blood vessels and control bleeding.",
  },
  {
    id: 13n,
    category: "surgery",
    text: "What tool is used to cut tissue during surgery?",
    options: ["Hemostat", "Scalpel", "Forceps", "Bandage"],
    correctIndex: 1n,
    explanation: "A scalpel is used for making surgical incisions.",
  },
  {
    id: 23n,
    category: "surgery",
    text: "Forceps are used to:",
    options: [
      "Cut sutures",
      "Grasp or hold tissue",
      "Measure blood pressure",
      "Administer injections",
    ],
    correctIndex: 1n,
    explanation: "Forceps grasp and hold tissue during procedures.",
  },
  {
    id: 88n,
    category: "surgery",
    text: "What is the correct order for surgical hand scrubbing?",
    options: [
      "Rinse, scrub, rinse",
      "Scrub fingers to elbows in a systematic pattern, rinse, dry",
      "Apply gloves then wash hands",
      "A quick 10-second rinse",
    ],
    correctIndex: 1n,
    explanation:
      "Surgical scrubbing proceeds from fingertips to elbows to reduce microbial load before sterile gloving.",
  },
  {
    id: 89n,
    category: "surgery",
    text: "What does 'aseptic technique' mean in surgery?",
    options: [
      "Using disposable instruments",
      "Practices that prevent contamination of the sterile field",
      "Avoiding the use of anesthesia",
      "Performing surgery quickly",
    ],
    correctIndex: 1n,
    explanation:
      "Aseptic technique maintains a sterile environment to prevent surgical site infections.",
  },
  {
    id: 90n,
    category: "surgery",
    text: "What is a Mayo stand used for in the surgical suite?",
    options: [
      "Anesthesia monitoring",
      "Holding sterile surgical instruments within reach",
      "Patient positioning",
      "Waste disposal",
    ],
    correctIndex: 1n,
    explanation:
      "A Mayo stand is a mobile tray placed over the patient to hold sterile instruments during surgery.",
  },

  // ── ANIMAL MEDICINE ──────────────────────────────────────────────────────
  {
    id: 12n,
    category: "animal_medicine",
    text: "What does 'lateral' mean in veterinary positioning?",
    options: ["Standing", "On the side", "Sitting", "Upside down"],
    correctIndex: 1n,
    explanation: "Lateral refers to lying on the side.",
  },
  {
    id: 16n,
    category: "animal_medicine",
    text: "What does 'dorsal' refer to in anatomy?",
    options: ["The belly", "The back side", "The front", "The left side"],
    correctIndex: 1n,
    explanation: "Dorsal refers to the back side of the animal.",
  },
  {
    id: 24n,
    category: "animal_medicine",
    text: "'Ventral' refers to:",
    options: ["The back", "The side", "The underside or belly", "The head"],
    correctIndex: 2n,
    explanation: "Ventral describes the underside or belly of the animal.",
  },
  {
    id: 25n,
    category: "animal_medicine",
    text: "'Anterior' refers to:",
    options: ["The back", "The front of the body", "The left", "The right"],
    correctIndex: 1n,
    explanation: "Anterior describes structures toward the front of the body.",
  },
  {
    id: 91n,
    category: "animal_medicine",
    text: "Which of the following is a core vaccine recommended for dogs?",
    options: ["Lyme disease", "Rabies", "Leptospirosis", "Bordetella"],
    correctIndex: 1n,
    explanation:
      "Rabies vaccination is a core (required) vaccine for dogs in most jurisdictions.",
  },
  {
    id: 92n,
    category: "animal_medicine",
    text: "The medical term 'polyuria' means:",
    options: [
      "Excessive thirst",
      "Excessive urination",
      "Difficulty breathing",
      "Loss of appetite",
    ],
    correctIndex: 1n,
    explanation:
      "Polyuria is the production of abnormally large amounts of urine.",
  },
  {
    id: 93n,
    category: "animal_medicine",
    text: "Which organ is primarily responsible for filtering blood and producing urine?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correctIndex: 2n,
    explanation:
      "The kidneys filter waste from the blood and excrete it as urine.",
  },

  // ── SCENARIO ─────────────────────────────────────────────────────────────
  {
    id: 260n,
    category: "scenario",
    text: "A dog attempts to bite during exam. What should you do?",
    options: [
      "Continue exam",
      "Use restraint or muzzle",
      "Ignore it",
      "Let go",
    ],
    correctIndex: 1n,
    explanation: "Safety protocols must be followed.",
  },
  {
    id: 261n,
    category: "scenario",
    text: "A client is upset about wait time. What is best response?",
    options: [
      "Ignore them",
      "Respond calmly and professionally",
      "Argue",
      "Walk away",
    ],
    correctIndex: 1n,
    explanation: "Professional communication builds trust.",
  },
];

export const flashcardDeck: Flashcard[] = [
  {
    id: 1n,
    category: "surgery",
    term: "Hemostat",
    definition: "Used to clamp blood vessels and control bleeding",
    usage: "Surgical procedures",
  },
  {
    id: 2n,
    category: "surgery",
    term: "Scalpel",
    definition: "Used to make surgical incisions",
    usage: "Surgery",
  },
  {
    id: 3n,
    category: "nursing",
    term: "Normal Dog Temperature",
    definition: "101–102.5°F",
    usage: "Vital sign assessment",
  },
  {
    id: 4n,
    category: "nursing",
    term: "Normal Cat Heart Rate",
    definition: "140–220 bpm",
    usage: "Vital sign assessment",
  },
  {
    id: 5n,
    category: "nursing",
    term: "Towel Restraint",
    definition: "Technique used to safely control cats during exams",
    usage: "Cat handling",
  },
  {
    id: 6n,
    category: "sanitation",
    term: "Sharps Container",
    definition: "Used to safely dispose of needles and sharp objects",
    usage: "Waste management",
  },
  {
    id: 7n,
    category: "animal_medicine",
    term: "Lateral Position",
    definition: "Animal lying on its side",
    usage: "Positioning terminology",
  },
  {
    id: 8n,
    category: "administration",
    term: "Patient Intake",
    definition: "Collecting owner info and pet symptoms before exam",
    usage: "Client communication",
  },
  {
    id: 9n,
    category: "nursing",
    term: "Stethoscope",
    definition: "Used to listen to heart and lung sounds",
    usage: "Patient assessment",
  },
  {
    id: 10n,
    category: "surgery",
    term: "Forceps",
    definition: "Used to grasp or hold tissue",
    usage: "Surgical assistance",
  },
  {
    id: 11n,
    category: "nursing",
    term: "Dog Respiration Rate",
    definition: "10–30 breaths per minute",
    usage: "Vital sign assessment",
  },
  {
    id: 12n,
    category: "nursing",
    term: "Cat Respiration Rate",
    definition: "20–30 breaths per minute",
    usage: "Vital sign assessment",
  },
  {
    id: 13n,
    category: "animal_medicine",
    term: "Anterior",
    definition: "Front of the body",
    usage: "Anatomical direction",
  },
  {
    id: 14n,
    category: "animal_medicine",
    term: "Posterior",
    definition: "Back of the body",
    usage: "Anatomical direction",
  },
  {
    id: 15n,
    category: "sanitation",
    term: "Biohazard Bag",
    definition: "Used for contaminated waste",
    usage: "Waste management",
  },
  {
    id: 16n,
    category: "nursing",
    term: "Lateral Restraint",
    definition: "Animal is positioned on its side",
    usage: "Patient positioning",
  },
  {
    id: 17n,
    category: "surgery",
    term: "Needle Holder",
    definition: "Used to hold needles during suturing",
    usage: "Surgical suturing",
  },
  {
    id: 18n,
    category: "animal_medicine",
    term: "Dorsal",
    definition: "Back side of the animal",
    usage: "Anatomical direction",
  },
  {
    id: 19n,
    category: "animal_medicine",
    term: "Ventral",
    definition: "Underside or belly",
    usage: "Anatomical direction",
  },
  {
    id: 20n,
    category: "nursing",
    term: "Aggressive Dog Handling",
    definition: "Use proper restraint and consider a muzzle for safety",
    usage: "Patient handling",
  },
  {
    id: 21n,
    category: "sanitation",
    term: "Disinfection Step 1",
    definition: "Remove debris before applying disinfectant",
    usage: "Sanitation protocol",
  },
  {
    id: 22n,
    category: "legal_safety_ethics",
    term: "OSHA",
    definition:
      "Occupational Safety and Health Administration – ensures workplace safety",
    usage: "Workplace safety standards",
  },
  {
    id: 23n,
    category: "legal_safety_ethics",
    term: "Veterinary Ethics",
    definition: "Moral principles guiding animal care and treatment",
    usage: "Professional conduct",
  },
  {
    id: 24n,
    category: "legal_safety_ethics",
    term: "Veterinary Practice Act",
    definition:
      "Law that regulates veterinary medicine and who can perform procedures",
    usage: "Legal compliance",
  },
  {
    id: 25n,
    category: "administration",
    term: "Veterinary Assistant Role",
    definition:
      "Supports veterinarians with patient care, cleaning, and basic tasks",
    usage: "Job responsibilities",
  },
  {
    id: 26n,
    category: "sanitation",
    term: "PPE",
    definition: "Personal Protective Equipment used to prevent infection",
    usage: "Infection control",
  },
  {
    id: 27n,
    category: "nursing",
    term: "Normal Dog Heart Rate",
    definition: "60–140 bpm depending on size",
    usage: "Vital sign assessment",
  },
  {
    id: 28n,
    category: "animal_medicine",
    term: "Medial",
    definition: "Toward the midline of the body",
    usage: "Anatomical direction",
  },
  {
    id: 29n,
    category: "animal_medicine",
    term: "Lateral",
    definition: "Away from the midline of the body",
    usage: "Anatomical direction",
  },
  {
    id: 30n,
    category: "sanitation",
    term: "Autoclave",
    definition:
      "Device used to sterilize instruments using high-pressure steam",
    usage: "Instrument sterilization",
  },
  // Pharmacology flashcards
  {
    id: 31n,
    category: "pharmacology",
    term: "BID",
    definition: "Twice daily (bis in die)",
    usage: "Prescription frequency",
  },
  {
    id: 32n,
    category: "pharmacology",
    term: "SID",
    definition: "Once daily (semel in die)",
    usage: "Prescription frequency",
  },
  {
    id: 33n,
    category: "pharmacology",
    term: "PRN",
    definition: "As needed (pro re nata)",
    usage: "Prescription instructions",
  },
  {
    id: 34n,
    category: "pharmacology",
    term: "NSAIDs",
    definition:
      "Non-steroidal anti-inflammatory drugs (e.g., carprofen, meloxicam)",
    usage: "Pain and inflammation management",
  },
  {
    id: 35n,
    category: "pharmacology",
    term: "Controlled Substance",
    definition: "Regulated drug with abuse potential; requires DEA log",
    usage: "Pharmacy compliance",
  },
  // Laboratory flashcards
  {
    id: 36n,
    category: "laboratory",
    term: "CBC",
    definition: "Complete Blood Count — measures RBC, WBC, and platelets",
    usage: "Blood analysis",
  },
  {
    id: 37n,
    category: "laboratory",
    term: "PCV",
    definition:
      "Packed Cell Volume — percentage of red blood cells in whole blood",
    usage: "Anemia assessment",
  },
  {
    id: 38n,
    category: "laboratory",
    term: "Fecal Flotation",
    definition: "Test used to detect intestinal parasite eggs",
    usage: "Parasite screening",
  },
  // Radiology flashcards
  {
    id: 39n,
    category: "radiology",
    term: "ALARA",
    definition: "As Low As Reasonably Achievable — radiation safety principle",
    usage: "Radiography safety",
  },
  {
    id: 40n,
    category: "radiology",
    term: "VD View",
    definition:
      "Ventrodorsal radiograph — animal on its back, beam enters belly first",
    usage: "Radiographic positioning",
  },
  // New flashcards from user-provided content
  {
    id: 41n,
    category: "administration",
    term: "Proper Phone Greeting",
    definition: "State clinic name and offer help professionally",
    usage: "Client communication",
  },
  {
    id: 42n,
    category: "sanitation",
    term: "Kennel Cleaning",
    definition: "Use disinfectant to prevent disease spread",
    usage: "Sanitation protocol",
  },
  {
    id: 43n,
    category: "nursing",
    term: "Vet Assistant Role",
    definition:
      "Perform basic care tasks like nail trimming, not medical procedures",
    usage: "Job responsibilities",
  },
  {
    id: 44n,
    category: "administration",
    term: "Scheduling",
    definition: "Appointments are recorded in scheduling software",
    usage: "Administrative tasks",
  },
  {
    id: 45n,
    category: "sanitation",
    term: "Biohazard Disposal",
    definition: "Blood-soaked materials must go in a biohazard container",
    usage: "Waste management",
  },
  {
    id: 46n,
    category: "administration",
    term: "Medical Records Purpose",
    definition: "Used for legal protection and continuity of patient care",
    usage: "Administrative tasks",
  },
  {
    id: 47n,
    category: "pharmacology",
    term: "Medication Check",
    definition: "Always verify dosage and instructions before administering",
    usage: "Medication safety",
  },
  {
    id: 48n,
    category: "legal_safety_ethics",
    term: "Client Confidentiality",
    definition:
      "Keeping client and patient information private — a legal and ethical duty",
    usage: "Professional ethics",
  },
  // User-provided flashcards (IDs 50–54)
  {
    id: 50n,
    category: "sanitation",
    term: "Disinfection",
    definition: "Process of killing harmful microorganisms",
    usage: "Sanitation protocol",
  },
  {
    id: 51n,
    category: "pharmacology",
    term: "Dosage",
    definition: "Correct amount of medication given",
    usage: "Medication safety",
  },
  {
    id: 52n,
    category: "legal_safety_ethics",
    term: "Confidentiality",
    definition: "Keeping client information private",
    usage: "Professional ethics",
  },
  {
    id: 53n,
    category: "nursing",
    term: "Restraint",
    definition: "Method used to safely control animals",
    usage: "Patient handling",
  },
  {
    id: 54n,
    category: "administration",
    term: "Medical Records",
    definition: "Documentation of patient history and care",
    usage: "Administrative tasks",
  },
];

export function isDatasetsReady(): boolean {
  return questionBank.length > 0 && flashcardDeck.length > 0;
}
