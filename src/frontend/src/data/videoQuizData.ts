export interface VideoQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const videoQuizData: Record<string, VideoQuiz[]> = {
  "8VJvE2osFV8": [
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
  "8e1JpN96CB8": [
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
  "0VqkRkRykG8": [
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
  "7x8p0uQF0wA": [
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
  "8wzvYk0t3x0": [
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
  // Dog Restraint Techniques
  "3p6ZQvWcQnM": [
    {
      question: "What is sternal recumbency?",
      options: [
        "Animal lying on its back",
        "Animal lying on its belly (chest down)",
        "Animal lying on its side",
        "Animal standing upright",
      ],
      correctIndex: 1,
      explanation:
        "Sternal recumbency means the animal is resting on its sternum (chest down).",
    },
    {
      question:
        "Which sign indicates a dog is becoming overly stressed during restraint?",
      options: [
        "Tail wagging and relaxed ears",
        "Yawning, lip licking, or whale eye",
        "Sitting calmly",
        "Sniffing the table",
      ],
      correctIndex: 1,
      explanation:
        "Stress signals in dogs include yawning, lip licking, showing the whites of the eyes (whale eye), and stiff body posture.",
    },
    {
      question:
        "When applying standing restraint to a dog, where should your arm be placed?",
      options: [
        "Over the dog's back only",
        "Under the dog's neck and around the body to prevent movement",
        "Only around the hindquarters",
        "No arm contact — use a leash only",
      ],
      correctIndex: 1,
      explanation:
        "One arm goes under and around the neck while the other wraps the body to safely control the patient.",
    },
    {
      question: "What is the purpose of a muzzle during a dog exam?",
      options: [
        "To punish the dog for bad behavior",
        "To prevent biting and protect staff safety",
        "To keep the dog quiet",
        "To restrict breathing",
      ],
      correctIndex: 1,
      explanation:
        "Muzzles are a safety tool to prevent bites when a dog shows aggression or fear.",
    },
    {
      question:
        "What does it mean to use 'low-stress handling' during restraint?",
      options: [
        "Restraining as forcefully as possible",
        "Using minimal restraint and calm techniques to reduce the animal's fear",
        "Sedating all patients before exams",
        "Avoiding any physical contact",
      ],
      correctIndex: 1,
      explanation:
        "Low-stress handling uses the least force necessary and calm body language to keep animals relaxed.",
    },
  ],
  // Cat Towel Restraint
  "1Zq9VHtVxoE": [
    {
      question: "What is the 'kitty burrito' technique?",
      options: [
        "A feeding method for kittens",
        "Wrapping a cat snugly in a towel to limit movement during exams",
        "A surgical positioning technique",
        "A way to transport cats between rooms",
      ],
      correctIndex: 1,
      explanation:
        "The kitty burrito wraps the cat in a towel to safely restrain it while reducing stress.",
    },
    {
      question:
        "Why is towel restraint preferred over scruffing as the primary restraint for cats?",
      options: [
        "Towels are cheaper than gloves",
        "Towel restraint reduces stress and is more humane",
        "Scruffing is illegal in clinics",
        "Towels keep the cat warmer",
      ],
      correctIndex: 1,
      explanation:
        "Towel wraps minimize stress by limiting visual stimuli and movement without causing pain.",
    },
    {
      question:
        "When using towel restraint, how should you expose a limb for a blood draw?",
      options: [
        "Unwrap the entire towel",
        "Carefully slide one limb out while keeping the rest wrapped",
        "Cut a hole in the towel",
        "Have the owner hold the limb",
      ],
      correctIndex: 1,
      explanation:
        "Sliding one limb out at a time keeps the cat secure while allowing access for procedures.",
    },
    {
      question: "What should you monitor in a cat during towel restraint?",
      options: [
        "Only the cat's weight",
        "Breathing, body temperature, and signs of distress",
        "Coat color changes",
        "Eye blinking rate",
      ],
      correctIndex: 1,
      explanation:
        "Always monitor respiration and stress signals — a towel wrap that is too tight can restrict breathing.",
    },
    {
      question: "What is the main goal of low-stress cat handling?",
      options: [
        "Speed up the exam",
        "Reduce fear and improve safety for both the cat and staff",
        "Avoid using any restraint tools",
        "Keep the exam room clean",
      ],
      correctIndex: 1,
      explanation:
        "Low-stress handling reduces fear-related aggression and makes exams safer and more effective.",
    },
  ],
  // Taking a Dog's Temperature
  GgG8pZQFz7U: [
    {
      question:
        "What is the normal rectal temperature range for a healthy dog?",
      options: ["99–100°F", "101–102.5°F", "103–105°F", "98–99.5°F"],
      correctIndex: 1,
      explanation:
        "A normal dog temperature is 101–102.5°F. Above 103°F is considered a fever.",
    },
    {
      question:
        "What should be applied to the thermometer before taking a dog's rectal temperature?",
      options: [
        "Alcohol",
        "Petroleum jelly or water-based lubricant",
        "Antiseptic spray",
        "Nothing is needed",
      ],
      correctIndex: 1,
      explanation:
        "Lubricating the thermometer makes insertion comfortable and reduces risk of injury.",
    },
    {
      question: "How far should a rectal thermometer be inserted in a dog?",
      options: [
        "Just the tip — 0.25 inches",
        "About 1 inch into the rectum",
        "3–4 inches deep",
        "Until resistance is felt",
      ],
      correctIndex: 1,
      explanation:
        "Insert approximately 1 inch to ensure an accurate reading without causing discomfort.",
    },
    {
      question: "A dog's temperature reads 104°F. What should you do?",
      options: [
        "Recheck in 30 minutes and ignore",
        "Report immediately to the veterinarian — this is a fever",
        "Give the dog water and wait",
        "Take the temperature again in the other ear",
      ],
      correctIndex: 1,
      explanation:
        "A temperature of 104°F is a fever that requires prompt veterinary evaluation.",
    },
    {
      question:
        "What type of thermometer is most commonly used for rectal temperatures in dogs?",
      options: [
        "Mercury glass thermometer",
        "Digital rectal thermometer",
        "Infrared ear thermometer",
        "Temporal artery thermometer",
      ],
      correctIndex: 1,
      explanation:
        "Digital rectal thermometers are accurate, fast, and safe for routine veterinary use.",
    },
  ],
  // Checking Heart Rate
  "1uYkqYhC8xA": [
    {
      question:
        "Where should you place the stethoscope to best hear heart sounds in a dog or cat?",
      options: [
        "On the dog's back",
        "On the left side of the chest, behind the elbow",
        "On the right side of the neck",
        "Over the abdomen",
      ],
      correctIndex: 1,
      explanation:
        "Heart sounds are best heard on the left chest wall, just behind the elbow at the 4th–6th intercostal space.",
    },
    {
      question: "What is the normal heart rate range for a dog?",
      options: [
        "40–60 bpm",
        "60–140 bpm (varies by size)",
        "150–200 bpm",
        "200–300 bpm",
      ],
      correctIndex: 1,
      explanation:
        "Dogs typically have a heart rate of 60–140 bpm; smaller dogs trend higher than large breeds.",
    },
    {
      question: "What is the normal heart rate range for a cat?",
      options: ["60–100 bpm", "100–120 bpm", "140–220 bpm", "250–300 bpm"],
      correctIndex: 2,
      explanation:
        "Cats normally have a heart rate between 140 and 220 beats per minute.",
    },
    {
      question: "What does a heart murmur sound like through a stethoscope?",
      options: [
        "A crisp double 'lub-dub' with no extra sounds",
        "A whooshing or swishing sound between heartbeats",
        "Complete silence",
        "A clicking sound only",
      ],
      correctIndex: 1,
      explanation:
        "Murmurs produce a whooshing or swishing sound caused by turbulent blood flow and should be reported to the veterinarian.",
    },
    {
      question:
        "What should you do if you detect an irregular or very rapid heart rate?",
      options: [
        "Record it and say nothing",
        "Report it to the veterinarian immediately",
        "Recheck after 1 hour",
        "Assume it is normal for that patient",
      ],
      correctIndex: 1,
      explanation:
        "Abnormal heart rates must be reported promptly so the veterinarian can evaluate and act.",
    },
  ],
  bnwkbz4IAY0: [
    {
      question:
        "Which of the following is a core topic covered on the CVA certification exam?",
      options: [
        "Human anatomy and physiology",
        "Veterinary pharmacology and patient care",
        "Restaurant sanitation codes",
        "Agricultural crop management",
      ],
      correctIndex: 1,
      explanation:
        "The CVA exam covers veterinary-specific topics including pharmacology, patient care, anatomy, and clinical procedures.",
    },
    {
      question: "What drug classification do antibiotics belong to?",
      options: [
        "Analgesics",
        "Antiparasitics",
        "Antimicrobials",
        "Antihistamines",
      ],
      correctIndex: 2,
      explanation:
        "Antibiotics are antimicrobial drugs that kill or inhibit the growth of bacteria.",
    },
    {
      question: "What does the medical prefix 'brady-' mean?",
      options: ["Fast", "Slow", "Large", "Small"],
      correctIndex: 1,
      explanation:
        "'Brady-' means slow; for example, bradycardia means a slow heart rate.",
    },
    {
      question:
        "According to OSHA standards, where must sharps be disposed of?",
      options: [
        "Regular trash can",
        "Biohazard bag",
        "Puncture-resistant sharps container",
        "Recycling bin",
      ],
      correctIndex: 2,
      explanation:
        "OSHA requires sharps to be discarded in puncture-resistant, labeled sharps containers to prevent needlestick injuries.",
    },
    {
      question:
        "Which type of question is most common on the CVA practice exam?",
      options: [
        "Essay questions requiring detailed written answers",
        "Multiple-choice questions testing knowledge and clinical reasoning",
        "True/false questions only",
        "Oral examination questions",
      ],
      correctIndex: 1,
      explanation:
        "CVA exams primarily use multiple-choice questions that test both factual knowledge and practical decision-making skills.",
    },
  ],
  "6hiTz_5enxw": [
    {
      question:
        "What is the primary role of a veterinary assistant in a clinic?",
      options: [
        "Diagnose illness and prescribe medication",
        "Perform surgical procedures independently",
        "Support veterinarians with patient care and clinic tasks",
        "Manage clinic finances",
      ],
      correctIndex: 2,
      explanation:
        "Veterinary assistants support veterinarians and technicians but do not diagnose, prescribe, or perform surgery.",
    },
    {
      question: "Which of the following is a core duty of a vet assistant?",
      options: [
        "Prescribing antibiotics",
        "Reading radiograph results",
        "Cleaning and sanitizing exam rooms",
        "Diagnosing chronic disease",
      ],
      correctIndex: 2,
      explanation:
        "Sanitation and room preparation are key daily responsibilities for veterinary assistants.",
    },
    {
      question:
        "Why is understanding animal behavior important for a vet assistant?",
      options: [
        "It is not important",
        "It helps train animals for competitions",
        "It improves safety and reduces patient stress during handling",
        "It replaces the need for restraint tools",
      ],
      correctIndex: 2,
      explanation:
        "Reading animal body language helps prevent bites, reduces stress, and improves patient outcomes.",
    },
    {
      question: "When should a veterinary assistant wear PPE?",
      options: [
        "Only during surgery",
        "Only when handling aggressive animals",
        "At all times when there is risk of exposure to pathogens or chemicals",
        "PPE is optional",
      ],
      correctIndex: 2,
      explanation:
        "PPE should be used whenever there is a risk of infection, chemical exposure, or injury.",
    },
    {
      question:
        "What is the benefit of professional client communication for a vet assistant?",
      options: [
        "It allows assistants to diagnose patients",
        "It builds trust and supports the clinic-client relationship",
        "It eliminates the need for veterinarians",
        "It has no impact on clinic operations",
      ],
      correctIndex: 1,
      explanation:
        "Clear, professional communication strengthens client trust and supports the overall quality of care.",
    },
  ],
  GZV6X9l9l8E: [
    {
      question: "How is a dog's rectal temperature normally taken?",
      options: [
        "Axillary (armpit) method",
        "Ear canal method only",
        "Rectally using a lubricated thermometer",
        "Under the tongue",
      ],
      correctIndex: 2,
      explanation:
        "Rectal temperature is the standard method for dogs; a lubricated thermometer is inserted into the rectum.",
    },
    {
      question: "How do you calculate pulse rate from a 15-second count?",
      options: [
        "Multiply by 2",
        "Multiply by 4",
        "Multiply by 6",
        "Multiply by 3",
      ],
      correctIndex: 1,
      explanation:
        "Count beats for 15 seconds and multiply by 4 to get beats per minute.",
    },
    {
      question: "What is the normal respiratory rate for a dog?",
      options: [
        "5–10 breaths/min",
        "10–30 breaths/min",
        "40–60 breaths/min",
        "60–80 breaths/min",
      ],
      correctIndex: 1,
      explanation: "Dogs normally breathe 10–30 times per minute at rest.",
    },
    {
      question: "What action is required if a patient has abnormal TPR values?",
      options: [
        "Recheck in 2 hours",
        "Record and ignore",
        "Report immediately to the veterinarian",
        "Administer medication",
      ],
      correctIndex: 2,
      explanation:
        "Abnormal vital signs must be reported to the veterinarian immediately for evaluation.",
    },
    {
      question: "What does TPR stand for in veterinary records?",
      options: [
        "Temperature, Pressure, Rate",
        "Temperature, Pulse, Respiration",
        "Therapy, Pain, Recovery",
        "Treatment, Procedure, Records",
      ],
      correctIndex: 1,
      explanation:
        "TPR = Temperature, Pulse, Respiration — the three core vital signs recorded for every patient.",
    },
  ],
  Gg2rRkR8X9E: [
    {
      question: "What are hemostats primarily used for in surgery?",
      options: [
        "Cutting tissue",
        "Clamping blood vessels to control bleeding",
        "Holding suture needles",
        "Measuring incision depth",
      ],
      correctIndex: 1,
      explanation:
        "Hemostats clamp blood vessels and tissue to control hemorrhage during surgical procedures.",
    },
    {
      question: "What is important to remember about scalpel blades?",
      options: [
        "They can be reused after sterilization",
        "They are only used in large animal surgery",
        "They are single-use and must be disposed of in a sharps container",
        "They are interchangeable with scissors",
      ],
      correctIndex: 2,
      explanation:
        "Scalpel blades are single-use; they must be discarded in a puncture-resistant sharps container after use.",
    },
    {
      question: "What is the function of a retractor?",
      options: [
        "Suture tissue closed",
        "Hold tissue aside to give surgeons better visibility",
        "Clamp blood vessels",
        "Apply bandages",
      ],
      correctIndex: 1,
      explanation:
        "Retractors hold tissue or organs out of the surgical field so the surgeon has clear access.",
    },
    {
      question: "How should instruments be passed to the surgeon?",
      options: [
        "Blade-first or sharp-end first",
        "Handle-first for safety",
        "Dropped on the instrument tray",
        "Thrown across the sterile field",
      ],
      correctIndex: 1,
      explanation:
        "Instruments are always passed handle-first to prevent injury and maintain sterility.",
    },
    {
      question: "When must surgical instruments be cleaned and inspected?",
      options: [
        "Only once per week",
        "After every procedure, before sterilization",
        "Only when visibly dirty",
        "Annually during clinic audits",
      ],
      correctIndex: 1,
      explanation:
        "All instruments must be cleaned, inspected for damage, and sterilized after every procedure.",
    },
  ],
  Qm3VQ9Z2Zk8: [
    {
      question:
        "What is the recommended approach when meeting a fearful animal?",
      options: [
        "Make direct eye contact and approach quickly",
        "Approach calmly, avoiding direct eye contact",
        "Use loud commands to assert dominance",
        "Immediately apply a muzzle",
      ],
      correctIndex: 1,
      explanation:
        "Calm, non-threatening approaches reduce fear and the risk of defensive biting.",
    },
    {
      question: "What restraint principle should always be followed?",
      options: [
        "Apply maximum restraint from the start",
        "Use the least amount of restraint necessary",
        "Restrain without warning the client",
        "Restraint is not required for small animals",
      ],
      correctIndex: 1,
      explanation:
        "Minimum necessary restraint reduces patient stress and improves cooperation.",
    },
    {
      question: "In lateral recumbency, the patient is positioned:",
      options: [
        "Standing upright",
        "On its back with legs in the air",
        "On its side",
        "Sitting up",
      ],
      correctIndex: 2,
      explanation:
        "Lateral recumbency means the animal is lying on its side; used for blood draws and radiographs.",
    },
    {
      question: "When should a muzzle be applied to a dog?",
      options: [
        "Only after it has bitten someone",
        "Proactively when aggression or pain is anticipated",
        "Never; muzzles are inhumane",
        "Only during surgical procedures",
      ],
      correctIndex: 1,
      explanation:
        "Muzzles are a proactive safety tool; waiting until a bite occurs puts staff at risk.",
    },
    {
      question:
        "What is an early stress signal to watch for in dogs during handling?",
      options: [
        "Wagging tail only",
        "Yawning, lip licking, or turning head away",
        "Eating food offered",
        "Sitting quietly",
      ],
      correctIndex: 1,
      explanation:
        "Yawning, lip licking, and head turning are calming signals that indicate stress in dogs.",
    },
  ],
  "3JpQK7wJY5E": [
    {
      question:
        "What must be done BEFORE applying a disinfectant to a surface?",
      options: [
        "Rinse with water only",
        "Apply disinfectant directly",
        "Remove all visible debris and organic material",
        "Let the surface dry completely",
      ],
      correctIndex: 2,
      explanation:
        "Organic matter neutralizes most disinfectants; the surface must be cleaned first for disinfection to be effective.",
    },
    {
      question: "Why does contact time matter when using disinfectants?",
      options: [
        "It has no effect on outcome",
        "The disinfectant must remain wet on the surface to kill pathogens effectively",
        "Longer contact time damages surfaces",
        "Contact time only matters for sharps",
      ],
      correctIndex: 1,
      explanation:
        "Disinfectants must stay wet for the contact time listed on the label to achieve full effectiveness.",
    },
    {
      question: "What PPE should be worn when handling disinfectant chemicals?",
      options: [
        "No PPE needed",
        "Only gloves",
        "Gloves, gown, and mask as appropriate",
        "Only eye protection",
      ],
      correctIndex: 2,
      explanation:
        "Proper PPE including gloves, gown, and mask protects staff from chemical exposure and pathogen contact.",
    },
    {
      question: "Where should blood-soaked materials be disposed of?",
      options: [
        "Regular trash can",
        "Recycling bin",
        "Biohazard bag",
        "Outdoor dumpster",
      ],
      correctIndex: 2,
      explanation:
        "Contaminated materials must be placed in labeled biohazard bags to prevent disease transmission.",
    },
    {
      question:
        "Why are isolation areas held to stricter sanitation standards?",
      options: [
        "They contain more valuable equipment",
        "To impress clients",
        "To prevent the spread of contagious disease to other patients",
        "Isolation areas have lower standards",
      ],
      correctIndex: 2,
      explanation:
        "Isolation areas house contagious patients; strict protocols prevent disease from spreading throughout the clinic.",
    },
  ],
};
