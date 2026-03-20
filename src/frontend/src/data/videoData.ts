export interface VideoData {
  youtubeId: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  duration: string;
}

export const videoData: VideoData[] = [
  {
    youtubeId: "GZV6X9l9l8E",
    title: "Vital Signs Training",
    duration: "8 min",
    summary:
      "Learn to accurately measure and record vital signs in dogs and cats, including temperature, pulse, respiration, and mucous membrane color.",
    keyTakeaways: [
      "Normal dog temperature: 101–102.5°F; cat temperature: 100.5–102.5°F",
      "Measure pulse at the femoral artery; count for 15 seconds and multiply by 4",
      "Normal respiratory rate: dogs 10–30 breaths/min, cats 20–30 breaths/min",
      "Assess mucous membranes for color and capillary refill time (normal < 2 sec)",
      "Always record TPR accurately in patient medical records",
    ],
  },
  {
    youtubeId: "Gg2rRkR8X9E",
    title: "Veterinary Instruments Explained",
    duration: "10 min",
    summary:
      "Identify and understand the purpose of common veterinary surgical and diagnostic instruments used in everyday clinical practice.",
    keyTakeaways: [
      "Hemostats clamp blood vessels; Kelly vs. Mosquito sizes differ by jaw length",
      "Thumb forceps (tissue forceps) grasp tissue without locking",
      "Needle holders hold the needle during suturing; use a wrist-turn motion",
      "Metzenbaum scissors cut delicate tissue; Mayo scissors cut heavy tissue",
      "Always pass instruments handle-first to the surgeon",
    ],
  },
  {
    youtubeId: "Qm3VQ9Z2Zk8",
    title: "Animal Handling Basics",
    duration: "9 min",
    summary:
      "Master safe handling and restraint techniques for dogs and cats to protect both the animal and clinical staff during examinations.",
    keyTakeaways: [
      "Approach animals calmly; read body language before touching",
      "Use the scruff hold only as needed—do not use as primary cat restraint",
      "Lateral recumbency: animal on side; used for blood draws and X-rays",
      "Muzzles prevent bites; ensure proper fit and monitor for distress",
      "Always use the minimum restraint necessary to reduce patient stress",
    ],
  },
  {
    youtubeId: "3JpQK7wJY5E",
    title: "Cleaning and Disinfection",
    duration: "7 min",
    summary:
      "Understand the correct procedures for cleaning and disinfecting veterinary clinic surfaces, instruments, and cages to prevent disease transmission.",
    keyTakeaways: [
      "Cleaning removes debris; disinfection kills pathogens on surfaces",
      "Always clean before disinfecting—organic matter inactivates most disinfectants",
      "Follow contact time listed on the disinfectant label for full effectiveness",
      "PPE (gloves, gown, mask) must be worn when handling disinfectants",
      "Contaminated waste goes in biohazard bags; sharps in sharps containers",
    ],
  },
  {
    youtubeId: "Z7zZk3z4Y0M",
    title: "Basic Bandaging Techniques",
    duration: "11 min",
    summary:
      "Learn how to apply primary, secondary, and tertiary bandage layers correctly to protect wounds and support healing in veterinary patients.",
    keyTakeaways: [
      "Primary layer (contact layer) absorbs exudate and protects the wound",
      "Secondary layer (padded layer) provides cushioning and absorbs moisture",
      "Tertiary layer (outer layer) secures the bandage and protects from environment",
      "Check bandages every 12–24 hours for swelling, odor, or slipping",
      "Never apply a bandage too tightly—check for digit swelling or coldness",
    ],
  },
  {
    youtubeId: "f5bMnfxGMI8",
    title: "Dog Restraint Techniques",
    summary:
      "Learn proper methods for safely restraining dogs during veterinary exams. Good restraint keeps both the patient and staff safe.",
    keyTakeaways: [
      "Identify lateral and sternal recumbency positions",
      "Apply safe standing restraint technique",
      "Recognize signs of stress and pain in dogs",
      "Know when to use a muzzle",
    ],
    duration: "8 min",
  },
  {
    youtubeId: "HKpR0fEMDso",
    title: "Cat Towel Restraint (Kitty Burrito)",
    summary:
      "Master the towel wrap technique to safely restrain cats for examination without causing undue stress.",
    keyTakeaways: [
      "Perform the kitty burrito wrap correctly",
      "Minimize cat stress during restraint",
      "Safely expose one limb at a time for procedures",
      "Understand when towel restraint is appropriate",
    ],
    duration: "6 min",
  },
  {
    youtubeId: "kBPZnSFGXNk",
    title: "Taking a Dog's Temperature",
    summary:
      "Step-by-step guide for accurately measuring a dog's rectal temperature and recording your findings.",
    keyTakeaways: [
      "Prepare and lubricate the thermometer correctly",
      "Position the patient safely for temperature measurement",
      "Record and interpret temperature readings",
      "Know normal temperature ranges for dogs",
    ],
    duration: "5 min",
  },
  {
    youtubeId: "0GXbQ3mIVAI",
    title: "Checking Heart Rate with a Stethoscope",
    summary:
      "Learn to accurately assess heart rate and identify normal versus abnormal heart sounds in veterinary patients.",
    keyTakeaways: [
      "Place stethoscope correctly on the patient's chest",
      "Count beats per minute accurately",
      "Know normal heart rate ranges by species",
      "Identify when to report abnormal sounds to the veterinarian",
    ],
    duration: "7 min",
  },
  {
    youtubeId: "eV_KxuGjc1Y",
    title: "Veterinary Instrument Identification",
    summary:
      "Identify and describe the use of common veterinary surgical instruments used in routine procedures.",
    keyTakeaways: [
      "Name at least 10 common surgical instruments",
      "Describe the function of each instrument",
      "Understand proper handling during surgery",
      "Know basic sterilization requirements",
    ],
    duration: "10 min",
  },
  {
    youtubeId: "NbCiZkJjvek",
    title: "Clinic Sanitation Procedures",
    summary:
      "Proper sanitation and disinfection protocols to maintain a safe and hygienic veterinary clinic environment.",
    keyTakeaways: [
      "Differentiate between cleaning, disinfection, and sterilization",
      "Apply correct disinfectant concentrations and contact times",
      "Follow proper PPE protocols during sanitation",
      "Maintain a safe clinic environment for patients and staff",
    ],
    duration: "9 min",
  },
];
