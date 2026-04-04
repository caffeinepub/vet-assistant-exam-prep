export type VideoType = "video" | "playlist";

export interface VideoLesson {
  id: number;
  title: string;
  type: VideoType;
  // video-only fields
  videoId?: string;
  thumbnail?: string;
  // playlist-only fields
  playlistId?: string;
  // shared
  embedUrl: string;
  youtubeUrl: string;
  // optional metadata (retained from previous entries where available)
  summary?: string;
  keyTakeaways?: string[];
  duration?: string;
}

export const videoLessons: VideoLesson[] = [
  {
    id: 1,
    title: "Basic Blood Collection",
    type: "video",
    videoId: "uYyh3DIQ91c",
    embedUrl: "https://www.youtube.com/embed/uYyh3DIQ91c",
    youtubeUrl: "https://youtu.be/uYyh3DIQ91c",
    thumbnail: "https://img.youtube.com/vi/uYyh3DIQ91c/0.jpg",
    summary:
      "Step-by-step guide to basic blood collection techniques in veterinary patients.",
    keyTakeaways: [
      "Identify appropriate venipuncture sites",
      "Use proper needle and syringe technique",
      "Minimize patient stress during collection",
      "Label samples correctly for the lab",
    ],
    duration: "8 min",
  },
  {
    id: 2,
    title: "Taking Vital Signs",
    type: "video",
    videoId: "z9qA_LrefNU",
    embedUrl: "https://www.youtube.com/embed/z9qA_LrefNU",
    youtubeUrl: "https://youtu.be/z9qA_LrefNU",
    thumbnail: "https://img.youtube.com/vi/z9qA_LrefNU/0.jpg",
    summary:
      "Learn how to accurately measure temperature, pulse, and respiration in veterinary patients.",
    keyTakeaways: [
      "Normal dog temperature: 101–102.5°F; cat: 100.5–102.5°F",
      "Measure pulse at the femoral artery",
      "Normal respiratory rate: dogs 10–30 breaths/min",
      "Record TPR accurately in patient medical records",
    ],
    duration: "9 min",
  },
  {
    id: 3,
    title: "Veterinary Instruments Explained",
    type: "video",
    videoId: "3jpQLW18G6U",
    embedUrl: "https://www.youtube.com/embed/3jpQLW18G6U",
    youtubeUrl: "https://youtu.be/3jpQLW18G6U",
    thumbnail: "https://img.youtube.com/vi/3jpQLW18G6U/0.jpg",
    summary:
      "Introduction to common veterinary surgical and diagnostic instruments used in clinical practice.",
    keyTakeaways: [
      "Hemostats clamp blood vessels during surgery",
      "Metzenbaum scissors cut delicate tissue; Mayo scissors cut heavy tissue",
      "Always pass instruments handle-first to the surgeon",
      "Instruments must be sterilized after every procedure",
    ],
    duration: "10 min",
  },
  {
    id: 4,
    title: "40 Common Veterinary Equipment",
    type: "video",
    videoId: "ke0c3TQcjEU",
    embedUrl: "https://www.youtube.com/embed/ke0c3TQcjEU",
    youtubeUrl: "https://youtu.be/ke0c3TQcjEU",
    thumbnail: "https://img.youtube.com/vi/ke0c3TQcjEU/0.jpg",
    summary:
      "Visual overview of 40 pieces of common veterinary equipment and their clinical uses.",
    keyTakeaways: [
      "Recognize diagnostic equipment like otoscopes and ophthalmoscopes",
      "Identify monitoring equipment used in surgery",
      "Know the purpose of common nursing tools",
      "Understand basic imaging and laboratory equipment",
    ],
    duration: "12 min",
  },
  {
    id: 5,
    title: "Surgical Instruments",
    type: "video",
    videoId: "1jEOjg29-e0",
    embedUrl: "https://www.youtube.com/embed/1jEOjg29-e0",
    youtubeUrl: "https://youtu.be/1jEOjg29-e0",
    thumbnail: "https://img.youtube.com/vi/1jEOjg29-e0/0.jpg",
    summary:
      "Detailed walkthrough of surgical instruments used in veterinary operating rooms.",
    keyTakeaways: [
      "Identify scalpels, retractors, and suture needles",
      "Understand the difference between tissue and thumb forceps",
      "Know proper instrument handling and passing technique",
      "Sterilization methods for surgical instruments",
    ],
    duration: "11 min",
  },
  {
    id: 6,
    title: "Animal Restraints Playlist",
    type: "playlist",
    playlistId: "PLP607gU_xJ_2iBZC8OvDQIGpyEcY5c4HU",
    embedUrl:
      "https://www.youtube.com/embed/videoseries?list=PLP607gU_xJ_2iBZC8OvDQIGpyEcY5c4HU",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLP607gU_xJ_2iBZC8OvDQIGpyEcY5c4HU",
    summary:
      "A curated playlist covering animal restraint techniques for dogs, cats, and other species.",
    keyTakeaways: [
      "Multiple restraint techniques across different species",
      "Proper positioning for exams and procedures",
      "Low-stress handling principles",
      "Safety tips for both staff and patients",
    ],
  },
  {
    id: 7,
    title: "Veterinary Basics",
    type: "video",
    videoId: "lIY2sYTUh2Y",
    embedUrl: "https://www.youtube.com/embed/lIY2sYTUh2Y",
    youtubeUrl: "https://youtu.be/lIY2sYTUh2Y",
    thumbnail: "https://img.youtube.com/vi/lIY2sYTUh2Y/0.jpg",
    summary:
      "Foundational concepts and daily responsibilities for veterinary assistants in a clinical setting.",
    keyTakeaways: [
      "Core daily duties of a veterinary assistant",
      "Professional communication with clients and staff",
      "Introduction to clinic workflow and patient flow",
      "Basic safety and hygiene practices",
    ],
    duration: "10 min",
  },
  {
    id: 8,
    title: "Animal Skeletal Anatomy",
    type: "video",
    videoId: "6OoFyLHqjLM",
    embedUrl: "https://www.youtube.com/embed/6OoFyLHqjLM",
    youtubeUrl: "https://youtu.be/6OoFyLHqjLM",
    thumbnail: "https://img.youtube.com/vi/6OoFyLHqjLM/0.jpg",
    summary:
      "Overview of animal skeletal anatomy relevant to veterinary assistant exam preparation.",
    keyTakeaways: [
      "Major bone groups in dogs and cats",
      "Anatomical terminology (proximal, distal, cranial, caudal)",
      "Common fracture sites seen in clinical practice",
      "How anatomy knowledge supports patient positioning",
    ],
    duration: "9 min",
  },
  {
    id: 9,
    title: "Cleaning vs Disinfection",
    type: "video",
    videoId: "PGD0cG_lud4",
    embedUrl: "https://www.youtube.com/embed/PGD0cG_lud4",
    youtubeUrl: "https://youtu.be/PGD0cG_lud4",
    thumbnail: "https://img.youtube.com/vi/PGD0cG_lud4/0.jpg",
    summary:
      "Understand the difference between cleaning, disinfection, and sterilization and when each is required.",
    keyTakeaways: [
      "Cleaning removes debris; disinfection kills pathogens",
      "Always clean before disinfecting",
      "Sterilization eliminates all microbial life",
      "Choose the right product for the level of decontamination needed",
    ],
    duration: "7 min",
  },
  {
    id: 10,
    title: "Clinic Disinfection",
    type: "video",
    videoId: "7873scRTeYM",
    embedUrl: "https://www.youtube.com/embed/7873scRTeYM",
    youtubeUrl: "https://youtu.be/7873scRTeYM",
    thumbnail: "https://img.youtube.com/vi/7873scRTeYM/0.jpg",
    summary:
      "Proper procedures for disinfecting veterinary clinic areas to prevent the spread of infectious disease.",
    keyTakeaways: [
      "High-touch surfaces require frequent disinfection",
      "Follow label directions for dilution and contact time",
      "Isolation areas need enhanced protocols",
      "Proper PPE must be worn during disinfection",
    ],
    duration: "8 min",
  },
  {
    id: 11,
    title: "Cleaning a Cat Kennel",
    type: "video",
    videoId: "0_9v5Z65j7U",
    embedUrl: "https://www.youtube.com/embed/0_9v5Z65j7U",
    youtubeUrl: "https://youtu.be/0_9v5Z65j7U",
    thumbnail: "https://img.youtube.com/vi/0_9v5Z65j7U/0.jpg",
    summary:
      "Step-by-step technique for safely and thoroughly cleaning a cat kennel between patients.",
    keyTakeaways: [
      "Remove all waste and soiled bedding first",
      "Apply appropriate disinfectant and allow contact time",
      "Rinse and dry completely before adding new bedding",
      "Reduce stress by using unscented products when possible",
    ],
    duration: "6 min",
  },
  {
    id: 12,
    title: "Surgical Equipment Cleaning Playlist",
    type: "playlist",
    playlistId: "PLH6HdpinGr_Yr_jUkGNv6sUCC4FYx-Zjl",
    embedUrl:
      "https://www.youtube.com/embed/videoseries?list=PLH6HdpinGr_Yr_jUkGNv6sUCC4FYx-Zjl",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLH6HdpinGr_Yr_jUkGNv6sUCC4FYx-Zjl",
    summary:
      "Playlist covering the cleaning, decontamination, and sterilization of surgical instruments.",
    keyTakeaways: [
      "Pre-soak and manual scrub technique",
      "Ultrasonic cleaner usage and benefits",
      "Autoclave sterilization cycle parameters",
      "Packaging and storage of sterile instruments",
    ],
  },
  {
    id: 13,
    title: "Handling Animals Playlist",
    type: "playlist",
    playlistId: "PLH6HdpinGr_ZmWKvR_xosZCYM74uYp2zz",
    embedUrl:
      "https://www.youtube.com/embed/videoseries?list=PLH6HdpinGr_ZmWKvR_xosZCYM74uYp2zz",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLH6HdpinGr_ZmWKvR_xosZCYM74uYp2zz",
    summary:
      "Comprehensive playlist on handling dogs, cats, and other common veterinary patients safely.",
    keyTakeaways: [
      "Species-specific handling approaches",
      "Reading animal body language and stress signals",
      "Restraint techniques for common procedures",
      "Low-stress handling to improve patient compliance",
    ],
  },
  {
    id: 14,
    title: "Dog Wrapping & Basic Care",
    type: "video",
    videoId: "2T1ePIGbD2w",
    embedUrl: "https://www.youtube.com/embed/2T1ePIGbD2w",
    youtubeUrl: "https://youtu.be/2T1ePIGbD2w",
    thumbnail: "https://img.youtube.com/vi/2T1ePIGbD2w/0.jpg",
    summary:
      "Learn how to apply basic wraps and provide fundamental nursing care for canine patients.",
    keyTakeaways: [
      "Proper wrap application to prevent pressure sores",
      "Monitoring wrapped limbs for swelling or discomfort",
      "Providing comfort and environmental enrichment for hospitalized dogs",
      "Documenting nursing observations in patient records",
    ],
    duration: "8 min",
  },
  {
    id: 15,
    title: "Bandage & Splint Application",
    type: "video",
    videoId: "uuxfoxWiEG4",
    embedUrl: "https://www.youtube.com/embed/uuxfoxWiEG4",
    youtubeUrl: "https://youtu.be/uuxfoxWiEG4",
    thumbnail: "https://img.youtube.com/vi/uuxfoxWiEG4/0.jpg",
    summary:
      "Detailed guide to applying bandages and splints correctly to support healing in veterinary patients.",
    keyTakeaways: [
      "Three-layer bandage system: primary, secondary, tertiary",
      "Splint placement to immobilize fractures",
      "Check every 12–24 hours for swelling or slipping",
      "Never bandage too tightly — check digit circulation",
    ],
    duration: "11 min",
  },
  {
    id: 16,
    title: "Towel Wrap a Cat",
    type: "video",
    videoId: "XCi59dvAz7g",
    embedUrl: "https://www.youtube.com/embed/XCi59dvAz7g",
    youtubeUrl: "https://youtu.be/XCi59dvAz7g",
    thumbnail: "https://img.youtube.com/vi/XCi59dvAz7g/0.jpg",
    summary:
      "Master the kitty burrito towel wrap technique for safe, low-stress cat restraint during exams.",
    keyTakeaways: [
      "Fold the towel correctly for secure wrapping",
      "Expose one limb at a time for procedures",
      "Monitor breathing throughout the restraint",
      "Towel wraps reduce stress compared to manual scruffing",
    ],
    duration: "6 min",
  },
];

// Legacy compatibility export — maps the old VideoData shape for any
// components still referencing videoData by youtubeId key
export const videoData = videoLessons
  .filter((v) => v.type === "video" && v.videoId)
  .map((v) => ({
    youtubeId: v.videoId as string,
    title: v.title,
    summary: v.summary ?? "",
    keyTakeaways: v.keyTakeaways ?? [],
    duration: v.duration ?? "",
  }));
