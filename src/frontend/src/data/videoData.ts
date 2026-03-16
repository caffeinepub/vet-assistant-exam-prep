export interface VideoData {
  youtubeId: string;
  title: string;
  summary: string;
  objectives: string[];
  duration: string;
}

export const videoData: VideoData[] = [
  {
    youtubeId: "f5bMnfxGMI8",
    title: "Dog Restraint Techniques",
    summary:
      "Learn proper methods for safely restraining dogs during veterinary exams. Good restraint keeps both the patient and staff safe.",
    objectives: [
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
    objectives: [
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
    objectives: [
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
    objectives: [
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
    objectives: [
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
    objectives: [
      "Differentiate between cleaning, disinfection, and sterilization",
      "Apply correct disinfectant concentrations and contact times",
      "Follow proper PPE protocols during sanitation",
      "Maintain a safe clinic environment for patients and staff",
    ],
    duration: "9 min",
  },
];
