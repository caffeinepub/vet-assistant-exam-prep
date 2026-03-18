import Array "mo:core/Array";
import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  ///////////////////// TYPES /////////////////////

  type Question = {
    id : Nat;
    text : Text;
    category : Text;
    options : [Text];
    correctIndex : Nat;
    explanation : Text;
  };

  type Flashcard = {
    id : Nat;
    term : Text;
    definition : Text;
    usage : Text;
    category : Text;
  };

  type Scenario = {
    id : Nat;
    situation : Text;
    question : Text;
    choices : [Text];
    correctIndex : Int;
    explanation : Text;
    category : Text;
  };

  type VideoLesson = {
    id : Nat;
    title : Text;
    youtubeId : Text;
    summary : Text;
    learningObjectives : [Text];
    quizQuestions : [Question];
  };

  type LessonWithQuestions = {
    lesson : VideoLesson;
    questions : [Question];
  };

  module Question {
    public func compareByCategory(q1 : Question, q2 : Question) : Order.Order {
      Text.compare(q1.category, q2.category);
    };
  };

  module Flashcard {
    public func compare(f1 : Flashcard, f2 : Flashcard) : Order.Order {
      Text.compare(f1.term, f2.term);
    };
  };

  module Scenario {
    public func compareByCategory(s1 : Scenario, s2 : Scenario) : Order.Order {
      Text.compare(s1.category, s2.category);
    };
  };

  module VideoLesson {
    public func compare(v1 : VideoLesson, v2 : VideoLesson) : Order.Order {
      Text.compare(v1.title, v2.title);
    };
  };

  ///////////////////// DATA /////////////////////

  var nextQuestionId = 1;
  var nextFlashcardId = 1;
  var nextScenarioId = 1;
  var nextVideoId = 1;

  let questions = List.empty<Question>();
  let flashcards = List.empty<Flashcard>();
  let scenarios = List.empty<Scenario>();
  let videoLessons = List.empty<VideoLesson>();

  public shared ({ caller }) func initializeData() : async () {
    populateQuestions();
    populateFlashcards();
    populateScenarios();
    populateVideoLessons();
  };

  func addQ(text : Text, cat : Text, opts : [Text], ci : Nat, exp : Text) {
    questions.add({ id = nextQuestionId; text; category = cat; options = opts; correctIndex = ci; explanation = exp });
    nextQuestionId += 1;
  };

  func addF(term : Text, def : Text, usage : Text, cat : Text) {
    flashcards.add({ id = nextFlashcardId; term; definition = def; usage; category = cat });
    nextFlashcardId += 1;
  };

  func addS(sit : Text, q : Text, ch : [Text], ci : Int, exp : Text, cat : Text) {
    scenarios.add({ id = nextScenarioId; situation = sit; question = q; choices = ch; correctIndex = ci; explanation = exp; category = cat });
    nextScenarioId += 1;
  };

  func populateQuestions() {
    if (nextQuestionId > 1) { return };

    // ---- VITAL SIGNS (25) ----
    addQ("What is the normal temperature range for a dog?",
      "vital_signs",
      ["98\u{2013}99\u{00b0}F", "101\u{2013}102.5\u{00b0}F", "103\u{2013}105\u{00b0}F", "95\u{2013}97\u{00b0}F"],
      1, "Normal canine temperature ranges from 101 to 102.5\u{00b0}F.");

    addQ("What is a normal heart rate for a cat?",
      "vital_signs",
      ["60\u{2013}100 bpm", "100\u{2013}120 bpm", "140\u{2013}220 bpm", "220\u{2013}300 bpm"],
      2, "Cats typically have a heart rate between 140 and 220 bpm.");

    addQ("What is the normal respiratory rate for a dog at rest?",
      "vital_signs",
      ["5\u{2013}10 breaths/min", "10\u{2013}30 breaths/min", "40\u{2013}60 breaths/min", "60\u{2013}80 breaths/min"],
      1, "Dogs breathe 10\u{2013}30 times per minute at rest.");

    addQ("What is the normal blood pressure range for a healthy dog?",
      "vital_signs",
      ["60\u{2013}80 mmHg systolic", "110\u{2013}160 mmHg systolic", "180\u{2013}200 mmHg systolic", "200\u{2013}240 mmHg systolic"],
      1, "A healthy dog's systolic blood pressure is approximately 110\u{2013}160 mmHg.");

    addQ("How is capillary refill time (CRT) measured?",
      "vital_signs",
      ["By pressing the nose and timing color return", "By pressing the gum and timing color return", "By checking the ear canal", "By feeling the pulse"],
      1, "CRT is assessed by pressing on the gum until it blanches white and timing how long it takes to return to pink (normally under 2 seconds).");

    addQ("What does a CRT greater than 2 seconds indicate?",
      "vital_signs",
      ["Normal circulation", "Possible dehydration or shock", "High fever", "Overhydration"],
      1, "A CRT over 2 seconds suggests poor circulation, which may indicate dehydration, shock, or cardiovascular compromise.");

    addQ("What is the normal heart rate for a large dog (over 30 lbs)?",
      "vital_signs",
      ["40\u{2013}60 bpm", "60\u{2013}100 bpm", "120\u{2013}160 bpm", "160\u{2013}180 bpm"],
      1, "Large dogs typically have a resting heart rate of 60\u{2013}100 bpm.");

    addQ("What is the normal heart rate for a small dog (under 30 lbs)?",
      "vital_signs",
      ["40\u{2013}60 bpm", "60\u{2013}80 bpm", "100\u{2013}140 bpm", "150\u{2013}200 bpm"],
      2, "Small dogs have faster hearts; 100\u{2013}140 bpm is a normal resting range.");

    addQ("Where is the best place to check a cat's pulse?",
      "vital_signs",
      ["Behind the knee", "At the femoral artery (inner thigh)", "On the neck", "Under the front leg"],
      1, "The femoral artery on the inner thigh is the most accessible pulse point in cats.");

    addQ("A dog's gums are pale white. What does this suggest?",
      "vital_signs",
      ["Healthy and hydrated", "Possible anemia or internal bleeding", "Normal for some breeds", "Too much water intake"],
      1, "Pale or white gums suggest reduced red blood cell circulation, which may indicate anemia, shock, or internal hemorrhage.");

    addQ("What is the normal temperature for a cat?",
      "vital_signs",
      ["97\u{2013}99\u{00b0}F", "100.5\u{2013}102.5\u{00b0}F", "103\u{2013}105\u{00b0}F", "99\u{2013}100\u{00b0}F"],
      1, "The normal rectal temperature for a cat is 100.5\u{2013}102.5\u{00b0}F.");

    addQ("Which thermometer type is most accurate for taking a dog's temperature?",
      "vital_signs",
      ["Oral thermometer", "Rectal digital thermometer", "Infrared ear thermometer", "Forehead strip"],
      1, "Rectal digital thermometers are standard in veterinary practice for accurate temperature readings.");

    addQ("A cat's temperature reads 104.5\u{00b0}F. What should you do?",
      "vital_signs",
      ["Give the cat water and wait", "Alert the veterinarian immediately", "Recheck in one hour", "Administer fever-reducing medication"],
      1, "A temperature of 104.5\u{00b0}F indicates significant fever; notify the vet immediately for evaluation.");

    addQ("What is the normal respiratory rate for a cat at rest?",
      "vital_signs",
      ["5\u{2013}10 breaths/min", "20\u{2013}30 breaths/min", "40\u{2013}60 breaths/min", "60\u{2013}80 breaths/min"],
      1, "Cats breathe approximately 20\u{2013}30 times per minute at rest.");

    addQ("Which vital sign reflects how well blood is circulating to tissues?",
      "vital_signs",
      ["Temperature", "Capillary refill time", "Respiratory rate", "Weight"],
      1, "CRT reflects peripheral circulation; a normal CRT of less than 2 seconds shows good tissue perfusion.");

    addQ("What color should healthy mucous membranes appear in dogs and cats?",
      "vital_signs",
      ["Yellow", "Pink", "White", "Blue"],
      1, "Pink, moist mucous membranes indicate good oxygenation and hydration.");

    addQ("Blue or purple gums in a dog most likely indicate:",
      "vital_signs",
      ["Normal pigmentation", "Cyanosis from lack of oxygen", "Minor bruising", "Food staining"],
      1, "Cyanosis (blue/purple mucous membranes) is a serious sign of oxygen deprivation requiring emergency care.");

    addQ("What instrument is typically used to measure an animal's heart rate in the clinic?",
      "vital_signs",
      ["Blood pressure cuff", "Stethoscope", "Pulse oximeter only", "Thermometer"],
      1, "A stethoscope allows auscultation of the heart to count beats per minute.");

    addQ("What is a normal weight range indicator measured at every visit?",
      "vital_signs",
      ["Coat color", "Body weight on a scale", "Eye color", "Nail length"],
      1, "Body weight is recorded at every visit as a key vital sign to track trends in health.");

    addQ("What does 'tachycardia' mean?",
      "vital_signs",
      ["Slow heart rate", "Rapid heart rate", "Irregular breathing", "High temperature"],
      1, "Tachycardia is an abnormally fast heart rate, which may indicate pain, fear, fever, or cardiac issues.");

    addQ("What does 'bradycardia' mean?",
      "vital_signs",
      ["Rapid heart rate", "Abnormally slow heart rate", "Normal resting pulse", "Irregular heartbeat"],
      1, "Bradycardia is an abnormally slow heart rate and can signal sedation effects, hypothermia, or cardiac problems.");

    addQ("How should a veterinary assistant count breaths to assess respiratory rate?",
      "vital_signs",
      ["Count only exhales for 60 seconds", "Watch chest rise and fall for 60 seconds or count for 30 sec and multiply by 2", "Ask the owner how fast the pet breathes", "Use a spirometer"],
      1, "Observing chest movements for 60 seconds (or 30 sec x 2) is the standard method to measure respiratory rate.");

    addQ("Which of the following can cause an elevated temperature in dogs?",
      "vital_signs",
      ["Dehydration only", "Infection, stress, or physical activity", "Cold environment", "Overeating"],
      1, "Fever can result from infection, excitement, stress, or strenuous exercise.");

    addQ("A dog's heart rate at 180 bpm while resting is considered:",
      "vital_signs",
      ["Normal for large breeds", "Tachycardic (abnormally elevated)", "Normal for puppies only", "Bradycardic"],
      1, "A resting rate of 180 bpm exceeds the normal range for most dogs and should be reported to the veterinarian.");

    addQ("Why is it important to record baseline vital signs at every visit?",
      "vital_signs",
      ["For billing purposes only", "To detect changes in health status over time", "Required only for senior pets", "To fill out vaccination records"],
      1, "Baseline vitals establish a reference point, allowing the veterinary team to identify deviations that may indicate illness.");

    // ---- INSTRUMENTS (25) ----
    addQ("Which instrument is used to clamp blood vessels?",
      "instruments",
      ["Scalpel", "Forceps", "Hemostat", "Thermometer"],
      2, "Hemostats are used to clamp blood vessels and control bleeding.");

    addQ("What tool is used to cut tissue during surgery?",
      "instruments",
      ["Hemostat", "Scalpel", "Forceps", "Bandage"],
      1, "A scalpel is a small, sharp knife used for making surgical incisions.");

    addQ("Which instrument is used to listen to heart and lung sounds?",
      "instruments",
      ["Otoscope", "Stethoscope", "Ophthalmoscope", "Sphygmomanometer"],
      1, "A stethoscope is used to auscultate heart, lung, and bowel sounds.");

    addQ("What is the purpose of an otoscope in veterinary care?",
      "instruments",
      ["To examine the eyes", "To examine the ear canal", "To check blood pressure", "To measure temperature"],
      1, "An otoscope uses a light and magnifying lens to visualize the ear canal and eardrum.");

    addQ("Which instrument measures blood pressure in animals?",
      "instruments",
      ["Thermometer", "Sphygmomanometer with Doppler probe", "Stethoscope alone", "Pulse oximeter"],
      1, "Blood pressure is measured with a cuff (sphygmomanometer) and a Doppler ultrasound probe in veterinary patients.");

    addQ("What is a needle driver used for?",
      "instruments",
      ["Injecting vaccines", "Holding a suture needle during wound closure", "Drawing blood", "Cauterizing tissue"],
      1, "A needle driver (needle holder) is used to grasp and manipulate suture needles when closing wounds.");

    addQ("Which instrument is used to visualize the inside of the eye?",
      "instruments",
      ["Otoscope", "Ophthalmoscope", "Endoscope", "Rhinoscope"],
      1, "An ophthalmoscope illuminates and magnifies internal eye structures for examination.");

    addQ("What does a pulse oximeter measure?",
      "instruments",
      ["Blood pressure", "Blood oxygen saturation", "Heart rhythm", "Respiratory volume"],
      1, "A pulse oximeter clips onto a tissue (e.g., tongue, ear) to measure oxygen saturation (SpO2) non-invasively.");

    addQ("Which type of forceps are used to grasp tissue during surgery?",
      "instruments",
      ["Thumb forceps", "Towel clamps", "Needle drivers", "Retractors"],
      0, "Thumb (tissue) forceps are used to grasp and manipulate tissue during surgical procedures.");

    addQ("What is the function of a retractor in surgery?",
      "instruments",
      ["Cut tissue", "Hold incisions open for visualization", "Control bleeding", "Suture wounds"],
      1, "Retractors hold the edges of an incision apart, giving the surgeon better visibility of the operative field.");

    addQ("Which instrument is used to remove sutures?",
      "instruments",
      ["Scalpel", "Suture scissors (stitch scissors)", "Towel clamps", "Hemostat"],
      1, "Suture scissors have a small hook that slides under stitches for clean removal.");

    addQ("What is the autoclave used for?",
      "instruments",
      ["Storing instruments", "Steam sterilization of instruments", "Sharpening blades", "X-ray imaging"],
      1, "An autoclave uses pressurized steam to sterilize surgical instruments and kill all microorganisms.");

    addQ("Which instrument is used to inject medications subcutaneously?",
      "instruments",
      ["Syringe and hypodermic needle", "Lancet", "Trocar", "Cannula"],
      0, "A syringe fitted with a hypodermic needle is used for subcutaneous, intramuscular, and intravenous injections.");

    addQ("What does an endotracheal tube do?",
      "instruments",
      ["Measures blood pressure", "Maintains an open airway during anesthesia", "Delivers fluids intravenously", "Monitors oxygen saturation"],
      1, "An endotracheal tube is placed in the trachea to maintain a patent airway and deliver anesthetic gas.");

    addQ("What is the purpose of an IV catheter?",
      "instruments",
      ["Measure body temperature", "Provide direct venous access for fluids and medications", "Collect urine samples", "Monitor heart rate"],
      1, "An IV catheter is inserted into a vein to allow continuous administration of fluids, medications, or blood products.");

    addQ("A Penrose drain is used to:",
      "instruments",
      ["Close surgical wounds", "Allow fluid to drain from a wound or body cavity", "Measure organ function", "Administer anesthesia"],
      1, "A Penrose drain is a soft rubber tube placed in a wound to facilitate drainage of fluid and prevent abscess formation.");

    addQ("Which instrument delivers measured volumes of intravenous fluids?",
      "instruments",
      ["Syringe", "IV fluid pump (infusion pump)", "Burette only", "Stethoscope"],
      1, "An infusion pump delivers precise volumes of IV fluids at controlled rates.");

    addQ("What are towel clamps used for in surgery?",
      "instruments",
      ["Cutting tissue", "Securing surgical drapes to the patient", "Holding sutures", "Clamping vessels"],
      1, "Towel clamps attach sterile drapes to the patient's skin, keeping the surgical field clean.");

    addQ("Which instrument would you use to examine the nasal passages?",
      "instruments",
      ["Otoscope", "Rhinoscope", "Stethoscope", "Ophthalmoscope"],
      1, "A rhinoscope allows visualization of the nasal passages for diagnostic purposes.");

    addQ("What type of needle is used for collecting blood samples from a vein?",
      "instruments",
      ["A spinal needle", "A vacutainer needle with collection tube", "An insulin needle", "A biopsy needle"],
      1, "Vacutainer systems use a double-pointed needle that connects to collection tubes for efficient blood draws.");

    addQ("Which instrument is used to measure the weight of a patient?",
      "instruments",
      ["Caliper", "Scale (platform or baby scale)", "Measuring tape only", "Sphygmomanometer"],
      1, "Platform scales (or baby scales for small patients) are used to record accurate body weights.");

    addQ("What is the purpose of a urinary catheter?",
      "instruments",
      ["Deliver IV fluids", "Drain urine from the bladder or collect samples", "Measure blood pressure", "Provide oxygen"],
      1, "A urinary catheter is inserted into the urethra to drain urine when the animal cannot urinate or for sample collection.");

    addQ("A scalpel handle #3 is most commonly paired with which blade?",
      "instruments",
      ["Blade #10 or #15", "Blade #20 or #22", "Blade #30", "Blade #1"],
      0, "Handle #3 is paired with smaller blades (#10, #11, #15) used for delicate incisions.");

    addQ("Which of the following is considered a sharp instrument requiring careful handling?",
      "instruments",
      ["Stethoscope", "Scalpel blade", "Towel clamp body", "Bandage roll"],
      1, "Scalpel blades are extremely sharp and must be handled with forceps or a blade remover, never bare hands.");

    addQ("What is the primary purpose of surgical drapes?",
      "instruments",
      ["Provide warmth to the patient", "Maintain a sterile field around the incision site", "Absorb blood from wounds", "Identify the surgical team"],
      1, "Sterile drapes isolate the surgical site from surrounding non-sterile areas, reducing contamination risk.");

    // ---- ANIMAL RESTRAINT (25) ----
    addQ("What is the safest way to restrain a frightened dog?",
      "animal_restraint",
      ["Hold loosely", "Use proper restraint technique", "Let it roam", "Ignore it"],
      1, "Proper restraint keeps both the animal and staff safe by controlling movement without causing unnecessary pain.");

    addQ("What is a common method to restrain a cat?",
      "animal_restraint",
      ["Leash", "Towel wrap", "Let it roam", "Hold tail"],
      1, "Towel restraint (\u{2018}burrito wrap\u{2019}) helps calm and safely control cats during procedures.");

    addQ("What is the most effective way to restrain a small dog during a physical exam?",
      "animal_restraint",
      ["Hold the dog by its tail only", "Use a towel to wrap the entire body", "Apply pressure to the neck area", "Hold the dog by its ears"],
      1, "Wrapping small dogs in a towel prevents flailing limbs and reduces stress during brief procedures.");

    addQ("When is a muzzle appropriate for a dog?",
      "animal_restraint",
      ["Always, for every exam", "When the dog shows aggression or may bite during procedures", "Only for large breed dogs", "Never in a clinic setting"],
      1, "Muzzles protect staff when a dog is in pain or anxious and may bite, but should not be used on animals with breathing difficulties.");

    addQ("How should you position a dog for a lateral (side-lying) restraint?",
      "animal_restraint",
      ["Hold the tail and push down", "Place one arm over the neck and one arm over the hips, gently lower the dog onto its side", "Pull the front legs forward", "Apply pressure to the back only"],
      1, "Lateral recumbency is achieved by placing arms over the neck and hindquarters, lowering the dog smoothly onto the table.");

    addQ("What is \u{2018}sternal recumbency\u{2019} in animal restraint?",
      "animal_restraint",
      ["Animal lying on its back", "Animal lying on its stomach (belly down)", "Animal standing upright", "Animal lying on its side"],
      1, "Sternal recumbency (sphinx position) has the animal resting on its sternum with legs tucked under.");

    addQ("Which restraint technique is used for cats that resist handling?",
      "animal_restraint",
      ["Pressing the cat against the table with full body weight", "Scruffing by grasping the loose skin at the back of the neck", "Holding the tail firmly", "Muzzling with tape"],
      1, "Scruffing mimics how a mother cat carries kittens and immobilizes the cat for brief procedures; it should be used minimally.");

    addQ("What is the correct way to carry a large dog in the clinic?",
      "animal_restraint",
      ["By the collar only", "With a leash only", "With staff assistance using a stretcher or walking the dog with a leash and body support", "By holding the tail"],
      2, "Large dogs should be walked or carried with proper support using stretchers or multiple staff to prevent injury to the animal and staff.");

    addQ("Why should you avoid restraining an animal too tightly?",
      "animal_restraint",
      ["It may loosen the muzzle", "It can cause injury, restrict breathing, or increase the animal\u{2019}s fear", "It wastes time", "It makes vaccination harder"],
      1, "Excessive restraint causes pain, stress, and risk of injury; always use the minimum force necessary.");

    addQ("What does \u{2018}fear-free\u{2019} handling in veterinary practice refer to?",
      "animal_restraint",
      ["Using sedatives for every animal", "Minimizing stress and fear through gentle handling, calm environments, and positive reinforcement", "Avoiding all restraint", "Only allowing the vet to handle patients"],
      1, "Fear-free techniques reduce patient anxiety through soft handling, calm voices, non-slip surfaces, and high-value treats.");

    addQ("What is the \u{2018}cat bag\u{2019} used for in restraint?",
      "animal_restraint",
      ["Transporting cats long distances", "A zippered nylon bag that allows access to body parts while restricting movement", "Storing medical supplies", "Grooming cats"],
      1, "Cat restraint bags have access openings for injections, blood draws, or nail trims while keeping the cat contained.");

    addQ("When restraining a rabbit, which area must be especially protected?",
      "animal_restraint",
      ["Ears", "Spine (lumbar area)", "Front paws", "Tail"],
      1, "Rabbits can fracture their own lumbar vertebrae by kicking violently; the back must always be supported.");

    addQ("What is the first thing you should do before attempting to restrain an aggressive dog?",
      "animal_restraint",
      ["Grab the dog immediately", "Assess the dog\u{2019}s body language and prepare a muzzle if needed", "Ask the owner to leave the room", "Administer sedation without assessment"],
      1, "Reading body language and preparing appropriate tools (muzzle, leash slip) before approaching protects both staff and the animal.");

    addQ("A standing restraint for a dog is best described as:",
      "animal_restraint",
      ["Dog sitting with a muzzle", "Dog standing while a handler holds the head and body to prevent movement", "Dog lying on its side", "Dog in a kennel"],
      1, "Standing restraint keeps the dog on all four feet while the assistant controls the head and body for exams or injections.");

    addQ("How should a veterinary assistant handle a bird for a basic exam?",
      "animal_restraint",
      ["Hold by the wings only", "Wrap gently in a towel, supporting the body and controlling the head", "Hold by the feet and let it hang", "Place in a dark box without restraint"],
      1, "Birds are wrapped in a soft towel to control the wings and body while keeping the head accessible for the exam.");

    addQ("What technique prevents a cat from biting during blood draw from the jugular vein?",
      "animal_restraint",
      ["Hold the front feet only", "Scruff the cat and extend the neck, keeping the body controlled", "Place a muzzle only", "Let the cat sit freely"],
      1, "Extending the neck exposes the jugular vein while scruffing prevents biting and controls movement.");

    addQ("When is chemical restraint (sedation) appropriate?",
      "animal_restraint",
      ["For every routine exam", "When physical restraint is insufficient or causes excessive stress/risk", "Only in emergency situations", "For cats but never dogs"],
      1, "Chemical restraint is used when manual restraint puts the animal or staff at risk, or when the animal\u{2019}s anxiety is extreme.");

    addQ("What protective equipment should staff wear when restraining a potentially aggressive animal?",
      "animal_restraint",
      ["Lab coat only", "Thick gloves, long-sleeved clothing, and possibly a face shield", "No special equipment needed", "Only a muzzle on the animal"],
      1, "Thick gloves and protective clothing reduce the risk of bites and scratches from frightened or aggressive animals.");

    addQ("What is \u{2018}dorsal recumbency\u{2019} positioning?",
      "animal_restraint",
      ["Animal lying on its side", "Animal lying on its back (ventral surface up)", "Animal standing upright", "Animal in sternal position"],
      1, "Dorsal recumbency places the animal on its back and is commonly used for abdominal exams and surgeries.");

    addQ("How do you safely move an injured dog that cannot walk?",
      "animal_restraint",
      ["Drag by the front legs", "Use a firm stretcher or board with help, supporting the whole body", "Carry by the collar", "Push from behind"],
      1, "A rigid stretcher supports the spine and injured areas, preventing further injury during transport.");

    addQ("Which restraint position is used for examining the abdomen of a cat?",
      "animal_restraint",
      ["Lateral recumbency", "Dorsal recumbency", "Sternal recumbency", "Standing with head down"],
      1, "Dorsal recumbency exposes the ventral abdomen for palpation and ultrasound.");

    addQ("A dog growls when you approach its cage. Your best first action is:",
      "animal_restraint",
      ["Reach in quickly to grab it", "Inform the veterinarian and use appropriate tools (leash slip, muzzle)", "Ignore the warning signs", "Give the dog a treat then grab it immediately"],
      1, "A growl is a warning; always alert the team and prepare proper equipment rather than escalating the situation.");

    addQ("How should a leash slip be used on a dog?",
      "animal_restraint",
      ["Looped around the muzzle", "Slipped over the head as a loop that tightens gently around the neck for control", "Tied to the tail", "Placed around a front leg"],
      1, "A leash slip (catch pole or slip lead) safely controls the dog\u{2019}s head and neck without harming the animal.");

    addQ("What does \u{2018}minimum restraint\u{2019} mean in veterinary practice?",
      "animal_restraint",
      ["Restraining as little as possible to speed up exams", "Using the least amount of restraint needed to safely complete the procedure", "Avoiding restraint entirely", "Using maximum force for every procedure"],
      1, "Minimum restraint reduces patient stress and injury while still ensuring safety for both animal and staff.");

    addQ("After a procedure, why should you release an animal slowly?",
      "animal_restraint",
      ["To prevent the animal from biting as it is released", "To allow the animal to calm down before movement, reducing the risk of injury", "It takes more time and is unnecessary", "Only necessary for large animals"],
      1, "A slow, calm release allows the animal to reorient without bolting or reacting defensively.");

    // ---- SANITATION (25) ----
    addQ("Where should used needles be disposed?",
      "sanitation",
      ["Trash bag", "Sharps container", "Sink", "Drawer"],
      1, "Sharps containers are puncture-resistant containers required by OSHA for safe needle disposal.");

    addQ("Why is PPE important in a veterinary clinic?",
      "sanitation",
      ["For style", "To protect from infection", "To impress clients", "Not needed"],
      1, "PPE protects staff from exposure to zoonotic pathogens, blood, and hazardous chemicals.");

    addQ("What is the correct order of steps for cleaning a contaminated surgical instrument?",
      "sanitation",
      ["Autoclave, rinse, scrub", "Rinse, scrub, ultrasonic clean, autoclave", "Autoclave immediately without cleaning", "Rinse and store in a drawer"],
      1, "Instruments must be rinsed to remove gross debris, scrubbed, processed in an ultrasonic cleaner, then autoclaved for sterility.");

    addQ("What is the minimum contact time for most disinfectants to be effective?",
      "sanitation",
      ["5 seconds", "The dwell time specified on the label (often 3\u{2013}10 minutes)", "Only needs to be applied and wiped immediately", "24 hours"],
      1, "Disinfectants require adequate contact (dwell) time to kill pathogens; wiping immediately reduces efficacy.");

    addQ("Which of the following best describes sterilization vs. disinfection?",
      "sanitation",
      ["They are the same thing", "Sterilization kills all microorganisms including spores; disinfection reduces pathogen load but may not kill spores", "Disinfection is more thorough than sterilization", "Sterilization only kills bacteria"],
      1, "Sterilization (autoclave) achieves complete microbial kill including spores; disinfection eliminates most pathogens but is not 100% effective.");

    addQ("What does \u{2018}disinfection\u{2019} mean in a veterinary clinic context?",
      "sanitation",
      ["Removing visible dirt", "Reducing microbial contamination on surfaces to safe levels", "Sterilizing all equipment", "Applying scented cleaners"],
      1, "Disinfection uses chemical agents to kill or inactivate most pathogens on environmental surfaces.");

    addQ("Which disinfectant is commonly used on kennel runs and clinic floors?",
      "sanitation",
      ["Hydrogen peroxide only", "Quaternary ammonium compounds or accelerated hydrogen peroxide products", "Bleach at full concentration", "Dish soap only"],
      1, "Quaternary ammonium and accelerated hydrogen peroxide products are broad-spectrum disinfectants effective on floors and runs.");

    addQ("When should hands be washed in a veterinary clinic?",
      "sanitation",
      ["Only after surgery", "Before and after handling each patient, after removing gloves, and after contact with bodily fluids", "Once per shift", "Only when visibly dirty"],
      1, "Hand hygiene before and after every patient contact is the single most important action to prevent cross-contamination.");

    addQ("What is a zoonotic disease?",
      "sanitation",
      ["A disease only found in zoo animals", "A disease that can be transmitted between animals and humans", "A genetic disorder in cats", "A vaccine-preventable viral infection"],
      1, "Zoonotic diseases (e.g., ringworm, leptospirosis, rabies) can be transmitted from animals to humans, making PPE essential.");

    addQ("A cat with an unknown vaccination history bites a staff member. What should happen?",
      "sanitation",
      ["Wash the wound and ignore it", "Wash the wound thoroughly, report to a supervisor, and follow clinic bite protocol and local health authority guidelines", "Apply a bandage and continue working", "Only report if the wound is severe"],
      1, "Animal bite protocols exist to assess rabies risk and prevent infection; all bites must be documented and reported.");

    addQ("What protective gear is required when handling chemotherapy drugs for animals?",
      "sanitation",
      ["Standard gloves only", "Double nitrile gloves, gown, mask, and eye protection", "No special PPE needed", "Lab coat only"],
      1, "Chemotherapy agents are cytotoxic; full PPE including double gloves, gown, mask, and eye protection is mandatory.");

    addQ("How should a contaminated exam table be cleaned between patients?",
      "sanitation",
      ["Wipe with a dry paper towel", "Clean visible debris, then apply an approved disinfectant and allow full dwell time", "Rinse with water only", "Spray air freshener"],
      1, "Tables must be cleaned then disinfected (two-step process) between every patient to prevent disease transmission.");

    addQ("Which of these is NOT appropriate personal protective equipment (PPE)?",
      "sanitation",
      ["Nitrile gloves", "N95 mask when handling respiratory cases", "Open-toed sandals", "Safety glasses"],
      2, "Open-toed footwear is a safety hazard; closed-toe shoes are required in clinical settings.");

    addQ("How should biohazardous waste (e.g., tissues, blood-soaked materials) be disposed of?",
      "sanitation",
      ["In regular trash bags", "In labeled red biohazard bags according to local regulations", "In the recycling bin", "Flushed down the drain"],
      1, "Biohazardous waste must be placed in approved red biohazard bags and disposed of through licensed medical waste contractors.");

    addQ("What is the purpose of an ultrasonic cleaner for instruments?",
      "sanitation",
      ["To sterilize instruments", "To remove microscopic debris from instrument crevices using sound wave vibration", "To sharpen blades", "To dry instruments quickly"],
      1, "Ultrasonic cleaners use high-frequency vibrations to dislodge debris from joints and grooves before sterilization.");

    addQ("Which of the following actions prevents cross-contamination between isolation patients and other animals?",
      "sanitation",
      ["Using the same leash for all patients", "Wearing dedicated PPE for isolation rooms and removing it before leaving", "Washing hands only at the end of the day", "Keeping isolation patients in the main lobby"],
      1, "Dedicated PPE for isolation areas and proper donning/doffing protocols prevent pathogen spread throughout the clinic.");

    addQ("What should you do if a disinfectant splashes into your eyes?",
      "sanitation",
      ["Wipe with a dry cloth and continue working", "Immediately flush eyes with water for 15 minutes and report the exposure", "Apply eyedrops and continue", "Wait and see if irritation develops"],
      1, "Eye exposure to chemicals requires immediate irrigation with water for at least 15 minutes and documentation of the incident.");

    addQ("How often should kennels with hospitalized patients be cleaned?",
      "sanitation",
      ["Once per week", "At least once per day or immediately after soiling", "Only when the patient is discharged", "Once per shift if there is time"],
      1, "Kennels must be cleaned and disinfected at least daily and immediately when soiled to maintain hygiene and patient comfort.");

    addQ("What does \u{2018}high-level disinfection\u{2019} mean?",
      "sanitation",
      ["Spraying a surface twice", "Killing all microorganisms except high concentrations of spores", "Using any household cleaner", "Same as sterilization"],
      1, "High-level disinfection kills all vegetative bacteria, mycobacteria, viruses, and fungi; it is used for semi-critical instruments.");

    addQ("Where should soiled laundry (towels, gowns) from the clinic be stored?",
      "sanitation",
      ["In an open bin in the break room", "In a sealed, labeled biohazard laundry bag away from clean items", "On the floor near the washing machine", "With regular household laundry"],
      1, "Soiled clinic laundry must be bagged separately to prevent contamination of clean items and staff.");

    addQ("Why is it important to wear gloves when handling all animals, not just sick ones?",
      "sanitation",
      ["Gloves are only needed for aggressive animals", "Zoonotic pathogens may be present even when an animal appears healthy", "Gloves are optional if you wash hands afterward", "Gloves protect animals from humans only"],
      1, "Asymptomatic animals can carry zoonotic organisms; gloves provide a barrier regardless of apparent health status.");

    addQ("What is the proper technique for removing contaminated gloves?",
      "sanitation",
      ["Pull them off by the fingertips", "Peel off the first glove from the outside, ball it in the gloved hand, then slide fingers inside the second glove to remove", "Wash gloves before removing", "Cut them off with scissors"],
      1, "The \u{2018}glove-in-glove\u{2019} technique keeps the contaminated outer surface contained inside the removed gloves.");

    addQ("What is OSHA\u{2019}s Bloodborne Pathogen Standard designed to protect against?",
      "sanitation",
      ["Animal bites only", "Occupational exposure to blood and other potentially infectious materials", "Chemical burns only", "Radiation exposure"],
      1, "OSHA\u{2019}s BBP standard establishes protocols to prevent worker exposure to bloodborne pathogens like hepatitis B and HIV.");

    addQ("How should expired medications be disposed of in a veterinary clinic?",
      "sanitation",
      ["Flushed down the drain", "Following DEA and EPA regulations; drug take-back programs or approved pharmaceutical waste disposal", "Placed in regular trash", "Given to staff to use at home"],
      1, "Expired medications, especially controlled substances, must be disposed of following federal DEA/EPA regulations to prevent misuse and environmental harm.");

    addQ("What is the purpose of wearing a surgical mask when assisting in surgery?",
      "sanitation",
      ["To filter inhaled odors", "To prevent droplet contamination of the sterile surgical field", "Required only for long surgeries", "Decoration"],
      1, "Surgical masks prevent oral and nasal droplets from contaminating sterile instruments and the open wound.");

    // ---- VETERINARY TERMINOLOGY (25) ----
    addQ("What does 'lateral' mean in veterinary positioning?",
      "terminology",
      ["Standing", "On the side", "Sitting", "Upside down"],
      1, "Lateral refers to lying on the side.");

    addQ("What does the prefix 'brady-' mean?",
      "terminology",
      ["Rapid", "Slow", "Large", "Small"],
      1, "Brady- means slow, as in bradycardia (slow heart rate).");

    addQ("What does the prefix 'tachy-' mean?",
      "terminology",
      ["Slow", "Large", "Fast/rapid", "Below normal"],
      2, "Tachy- means rapid, as in tachycardia (rapid heart rate).");

    addQ("What does 'dorsal' refer to in animal anatomy?",
      "terminology",
      ["The belly side", "The back surface", "The head end", "The tail end"],
      1, "Dorsal refers to the back (spinal) surface of the animal.");

    addQ("What does 'ventral' refer to in animal anatomy?",
      "terminology",
      ["Back surface", "Belly (underside) surface", "Side surface", "Head end"],
      1, "Ventral refers to the belly or underside of the animal.");

    addQ("What does 'anterior' or 'cranial' mean?",
      "terminology",
      ["Toward the tail", "Toward the head", "Toward the back", "Toward the belly"],
      1, "Cranial/anterior means toward the head end of the animal.");

    addQ("What does 'posterior' or 'caudal' mean?",
      "terminology",
      ["Toward the head", "Toward the tail end", "Toward the back", "Toward the belly"],
      1, "Caudal/posterior means toward the tail end of the animal.");

    addQ("What does 'medial' mean?",
      "terminology",
      ["Toward the outer side", "Toward the midline of the body", "Toward the head", "On the surface"],
      1, "Medial means closer to the midline (center) of the body.");

    addQ("What does 'proximal' mean in anatomy?",
      "terminology",
      ["Farther from the point of attachment", "Closer to the point of attachment or trunk", "On the left side", "On the right side"],
      1, "Proximal means closer to the origin or trunk; the shoulder is proximal to the elbow.");

    addQ("What does 'distal' mean?",
      "terminology",
      ["Closer to the body", "Farther from the trunk or point of attachment", "On the surface", "Below normal"],
      1, "Distal means farther from the trunk; the paw is distal to the knee.");

    addQ("What does the suffix '-itis' indicate?",
      "terminology",
      ["Removal of", "Inflammation of", "Disease of", "Tumor of"],
      1, "-itis means inflammation, as in dermatitis (skin inflammation).");

    addQ("What does the suffix '-ectomy' mean?",
      "terminology",
      ["Inflammation", "Incision into", "Surgical removal of", "Abnormal condition of"],
      2, "-ectomy means surgical removal, as in splenectomy (removal of the spleen).");

    addQ("What does the suffix '-otomy' mean?",
      "terminology",
      ["Surgical removal", "Surgical incision into", "Inflammation", "Suturing of"],
      1, "-otomy means a surgical cutting into, as in laparotomy (incision into the abdomen).");

    addQ("What does the prefix 'hyper-' mean?",
      "terminology",
      ["Below normal", "Above normal or excessive", "Without", "Around"],
      1, "Hyper- means above normal, as in hypertension (elevated blood pressure).");

    addQ("What does the prefix 'hypo-' mean?",
      "terminology",
      ["Above normal", "Below normal or deficient", "Through", "Between"],
      1, "Hypo- means below normal, as in hypoglycemia (low blood sugar).");

    addQ("The term 'prognosis' refers to:",
      "terminology",
      ["The cause of a disease", "The predicted outcome or course of a disease", "The treatment plan", "The initial diagnosis"],
      1, "Prognosis is the veterinarian\u{2019}s prediction about the likely outcome or recovery of the patient.");

    addQ("What does 'alopecia' mean?",
      "terminology",
      ["Excessive hair growth", "Hair loss or baldness", "Skin inflammation", "Nail overgrowth"],
      1, "Alopecia is the medical term for hair loss, which can result from allergies, hormonal disorders, or parasites.");

    addQ("What does 'emesis' mean?",
      "terminology",
      ["Diarrhea", "Vomiting", "Excessive urination", "Excessive thirst"],
      1, "Emesis means vomiting.");

    addQ("What does 'polydipsia' mean?",
      "terminology",
      ["Excessive eating", "Excessive drinking/thirst", "Excessive urination", "Painful swallowing"],
      1, "Polydipsia refers to excessive thirst and water intake, often associated with diabetes or kidney disease.");

    addQ("What does 'polyuria' mean?",
      "terminology",
      ["Excessive eating", "Excessive thirst", "Excessive urination", "Infrequent urination"],
      2, "Polyuria is the production of abnormally large volumes of urine.");

    addQ("What does the term 'subcutaneous' (SQ) mean?",
      "terminology",
      ["Within a vein", "Under the skin", "Within a muscle", "Into a joint"],
      1, "Subcutaneous injections are administered under the skin into the subcutaneous tissue layer.");

    addQ("What does 'intramuscular' (IM) mean?",
      "terminology",
      ["Under the skin", "Into a vein", "Into a muscle", "Into a joint"],
      2, "Intramuscular injections deliver medication directly into muscle tissue.");

    addQ("What does 'intravenous' (IV) mean?",
      "terminology",
      ["Under the skin", "Into a muscle", "Into a vein", "Into the abdomen"],
      2, "Intravenous administration delivers fluids or medication directly into a vein.");

    addQ("What does 'pruritus' mean?",
      "terminology",
      ["Pain", "Itching", "Skin redness", "Hair loss"],
      1, "Pruritus is the medical term for itching, commonly associated with allergies or parasitic infestations.");

    addQ("What does 'dyspnea' mean?",
      "terminology",
      ["Normal breathing", "Painful urination", "Difficulty breathing", "Excessive salivation"],
      2, "Dyspnea is difficulty breathing or labored respiration, which requires prompt veterinary attention.");

    // ---- CLIENT COMMUNICATION (15) ----
    addQ("What should be collected during patient intake?",
      "client_communication",
      ["Only pet name", "Owner info and symptoms", "Nothing", "Only payment"],
      1, "Accurate intake information including owner details, chief complaint, and history is critical for effective treatment.");

    addQ("How should a veterinary assistant greet a client arriving for an appointment?",
      "client_communication",
      ["Ignore them until they check in", "Greet them warmly by name, acknowledge the pet, and direct them appropriately", "Ask for payment immediately", "Have them wait without acknowledgment"],
      1, "A warm, professional greeting sets a positive tone and demonstrates respect for the client and their pet.");

    addQ("When a client asks about their pet's diagnosis, what is the appropriate response?",
      "client_communication",
      ["Provide a detailed diagnosis based on your observations", "Refer the client to the veterinarian for medical information", "Tell them to look it up online", "Avoid the question"],
      1, "Diagnosis and medical interpretation must come from the veterinarian; assistants refer all diagnostic questions appropriately.");

    addQ("How should discharge instructions be communicated to a client?",
      "client_communication",
      ["Verbally only, as quickly as possible", "Verbally and in writing, confirming client understanding before they leave", "Written only, no explanation needed", "Via email only"],
      1, "Discharge instructions should be explained verbally and provided in writing, with confirmation that the client understands.");

    addQ("A client becomes upset about the cost of treatment. What is the best approach?",
      "client_communication",
      ["Argue with them about pricing", "Listen empathetically, explain the services provided, and offer to involve the practice manager", "Ignore their concerns", "Tell them to find another clinic"],
      1, "Empathy, clear explanation, and escalating to the practice manager when needed are key to resolving billing concerns professionally.");

    addQ("What information should you confirm when scheduling an appointment?",
      "client_communication",
      ["Only the pet\u{2019}s name", "Client name, contact info, pet name, species/breed, reason for visit, and preferred date/time", "Only the date and time", "Only the reason for visit"],
      1, "Thorough scheduling confirmation prevents miscommunication and ensures the clinic is prepared for the visit.");

    addQ("Why is maintaining client confidentiality important in a veterinary clinic?",
      "client_communication",
      ["It is not important", "It builds trust and is required by professional and ethical standards", "Only required for human medical records", "Only important for famous clients"],
      1, "Confidentiality builds the client-clinic relationship and protects sensitive personal and financial information.");

    addQ("What is the best way to communicate a complex medication schedule to a client?",
      "client_communication",
      ["Use complex medical terminology", "Use simple language with written instructions and confirm understanding", "Describe it quickly and move on", "Tell them to ask the pharmacist"],
      1, "Simple language, written instructions, and confirmation of understanding improve medication compliance.");

    addQ("If a client calls to report their pet is having a seizure, what should you do first?",
      "client_communication",
      ["Tell them to wait and call back later", "Calmly instruct them to keep the pet safe and advise them to come in immediately or go to an emergency clinic", "Diagnose over the phone", "Put them on hold for several minutes"],
      1, "Seizures are emergencies; calmly guide the client to immediate care rather than delaying or diagnosing remotely.");

    addQ("How should a veterinary assistant handle a distressed client in the waiting room?",
      "client_communication",
      ["Ask them to leave if they are disrupting others", "Acknowledge their distress, offer a private space, and notify the veterinarian of the situation", "Ignore them until their turn", "Offer them a refund immediately"],
      1, "Empathy and prompt action in providing a private space shows compassion and professionalism.");

    addQ("What is active listening in client communication?",
      "client_communication",
      ["Listening while doing other tasks", "Fully concentrating on the speaker, reflecting understanding, and asking clarifying questions", "Nodding without paying attention", "Finishing the client\u{2019}s sentences"],
      1, "Active listening ensures accurate information gathering and makes the client feel heard and respected.");

    addQ("When a client asks about their pet's prognosis, you should:",
      "client_communication",
      ["Give your personal opinion", "Direct them to the veterinarian who can provide an informed medical opinion", "Research online during the call", "Tell them what you think they want to hear"],
      1, "Only the veterinarian is qualified to discuss prognosis; the assistant\u{2019}s role is to facilitate that conversation.");

    addQ("Why is it important to document client communications in the medical record?",
      "client_communication",
      ["It is not necessary", "It creates a legal record and ensures continuity of care", "Only required for billing", "To share with other clinics without permission"],
      1, "Documented communications protect the clinic legally and ensure that all team members have access to relevant history.");

    addQ("What tone of voice is most appropriate when speaking with a concerned pet owner?",
      "client_communication",
      ["Fast and dismissive", "Calm, warm, and professional", "Overly technical to demonstrate expertise", "Rushed and hurried"],
      1, "A calm, warm tone reassures clients and fosters trust in the veterinary team.");

    addQ("If a client requests a refill for their pet\u{2019}s prescription, what is the correct process?",
      "client_communication",
      ["Dispense the medication without consulting the veterinarian", "Relay the request to the veterinarian for approval before dispensing", "Tell the client to buy it over the counter", "Refill it based on your own judgment"],
      1, "Prescription refills require veterinarian authorization to ensure the medication is still appropriate for the patient.");

    // ---- RECORD KEEPING (10) ----
    addQ("What does SOAP stand for in veterinary medical records?",
      "record_keeping",
      ["Subject, Observation, Assessment, Plan", "Subjective, Objective, Assessment, Plan", "Situation, Observation, Action, Plan", "Symptoms, Orders, Assessment, Prescription"],
      1, "SOAP notes organize clinical information: Subjective (owner-reported), Objective (exam findings), Assessment (diagnosis), Plan (treatment).");

    addQ("Why is accurate medical record keeping important?",
      "record_keeping",
      ["Only for billing purposes", "For legal protection, continuity of care, and accurate treatment", "To meet decoration requirements", "Only required for large clinics"],
      1, "Medical records are legal documents that support continuity of care, liability protection, and proper billing.");

    addQ("Which of the following should be recorded in a patient\u{2019}s medical record at every visit?",
      "record_keeping",
      ["Only the diagnosis", "Date, weight, vital signs, chief complaint, procedures, and treatments", "Only the owner\u{2019}s name", "Only billing information"],
      1, "A complete record includes date, vitals, history, exam findings, diagnosis, and treatment plan for every visit.");

    addQ("Who is authorized to make entries in a patient\u{2019}s medical record?",
      "record_keeping",
      ["Only the receptionist", "Credentialed/licensed staff under the supervising veterinarian\u{2019}s oversight", "Anyone in the clinic", "Only the owner"],
      1, "Medical record entries must be made by qualified staff under veterinary supervision to ensure accuracy and legal compliance.");

    addQ("If a mistake is made in a paper medical record, how should it be corrected?",
      "record_keeping",
      ["Use white-out to cover the error", "Draw a single line through the error, write the correction, and initial/date the change", "Erase the error completely", "Discard the page and start over"],
      1, "Errors in paper records are corrected with a single line (keeping the original readable), a correction, and an initialed date to maintain the integrity of the record.");

    addQ("How long must veterinary medical records typically be retained?",
      "record_keeping",
      ["One year", "At least 3 years; some states require longer", "One month", "Forever without exception"],
      1, "Most states require veterinary records to be kept for a minimum of 3 years; some require longer depending on the patient\u{2019}s age and state regulations.");

    addQ("What information must be included on a prescription label?",
      "record_keeping",
      ["Only the drug name", "Patient name, drug name, dose, frequency, route, prescribing vet name, clinic name, and refill info", "Only the owner\u{2019}s name and drug", "Clinic name only"],
      1, "A complete prescription label ensures safe administration and includes all identifying and dosing information.");

    addQ("What is an AVMA-compliant vaccination record used for?",
      "record_keeping",
      ["Scheduling surgery", "Documenting vaccine history for legal and health purposes (boarding, travel, licensing)", "Tracking payment", "Recording blood pressure readings"],
      1, "Vaccination records are required for boarding, interstate travel, and local licensing and serve as legal proof of immunization.");

    addQ("Which of the following is the best practice for electronic medical records security?",
      "record_keeping",
      ["Share login credentials among staff for efficiency", "Use individual secure logins, log out after each session, and follow clinic data security protocols", "Leave computers unlocked at all times", "Store passwords on a sticky note near the computer"],
      1, "Individual logins and logging out protect patient data privacy and maintain an accurate audit trail of who entered information.");

    addQ("What does \u{2018}informed consent\u{2019} mean in veterinary practice?",
      "record_keeping",
      ["The client agrees verbally without documentation", "The owner is provided with enough information to understand a procedure\u{2019}s risks and benefits and signs a consent form", "The vet approves the procedure internally", "The clinic decides treatment without owner input"],
      1, "Informed consent requires documented owner agreement after explanation of risks, benefits, and alternatives for procedures.");
  };

    // ---- ADDITIONAL USER-PROVIDED QUESTIONS ----
    addQ("What is the normal respiration rate for a dog?",
      "vital_signs",
      ["5–10 breaths/min", "10–30 breaths/min", "30–50 breaths/min", "50–70 breaths/min"],
      1, "Dogs typically breathe 10–30 times per minute.");

    addQ("Where is a dog's pulse commonly checked?",
      "vital_signs",
      ["Tail", "Ear", "Femoral artery", "Back"],
      2, "The femoral artery, located inside the thigh, is commonly used to check a dog's pulse.");

    addQ("What instrument is used to listen to heart sounds?",
      "instruments",
      ["Thermometer", "Stethoscope", "Scalpel", "Forceps"],
      1, "A stethoscope is used to listen to heart and lung sounds.");

    addQ("What are forceps primarily used for?",
      "instruments",
      ["Cutting", "Holding tissue", "Measuring temperature", "Bandaging"],
      1, "Forceps are used to grasp or hold tissues during exams and surgery.");

    addQ("What is the purpose of disinfecting exam tables?",
      "sanitation",
      ["Make it look clean", "Prevent disease spread", "Dry the table", "Save time"],
      1, "Disinfecting exam tables between patients prevents transmission of pathogens.");

    addQ("What type of waste is placed in a biohazard bag?",
      "sanitation",
      ["Paper", "Food", "Contaminated materials", "Plastic bottles"],
      2, "Biohazard bags are for materials exposed to bodily fluids or infectious agents.");

    addQ("What is lateral restraint used for?",
      "animal_restraint",
      ["Walking dogs", "Holding animals on their side", "Feeding animals", "Cleaning cages"],
      1, "Lateral restraint positions the animal on its side for procedures such as blood draws or radiographs.");

    addQ("Why is proper restraint important?",
      "animal_restraint",
      ["To save time", "To protect staff and animal", "To impress clients", "No reason"],
      1, "Proper restraint prevents injuries to both the animal and veterinary staff during procedures.");

    addQ("What does 'anterior' refer to in anatomy?",
      "terminology",
      ["Back", "Front", "Side", "Inside"],
      1, "Anterior refers to the front of the body.");

    addQ("What does 'posterior' mean in anatomy?",
      "terminology",
      ["Front", "Side", "Back", "Top"],
      2, "Posterior refers to the rear or back of the body.");

    addQ("Why is clear communication important in a vet clinic?",
      "client_communication",
      ["To waste time", "To avoid mistakes", "To confuse clients", "Not important"],
      1, "Clear communication ensures proper care and safety for both patients and staff.");

    addQ("What should you do if a client is upset?",
      "client_communication",
      ["Ignore them", "Listen calmly and respond professionally", "Argue", "Walk away"],
      1, "Professional and empathetic communication builds trust and helps resolve client concerns.");

    addQ("What is a syringe used for?",
      "instruments",
      ["Cutting", "Injecting fluids", "Holding tissue", "Measuring weight"],
      1, "Syringes deliver medications or fluids by injection or are used to withdraw fluid samples.");

    addQ("What is a normal respiration rate for a cat?",
      "vital_signs",
      ["5–10 breaths/min", "10–20 breaths/min", "20–30 breaths/min", "40–60 breaths/min"],
      2, "Cats normally breathe 20–30 times per minute at rest.");

    addQ("When should hands be washed in a clinic?",
      "sanitation",
      ["Once a day", "Before and after each patient", "Only if visibly dirty", "Never"],
      1, "Hand hygiene before and after every patient contact prevents infection spread.");
  func populateFlashcards() {
    if (nextFlashcardId > 1) { return };

    // ---- INSTRUMENTS (15) ----
    addF("Stethoscope",
      "An instrument used to listen to internal body sounds including heart, lungs, and gut.",
      "Placed on the chest wall or abdomen to auscultate during physical exams.",
      "instruments");
    addF("Hemostat",
      "A clamp-like instrument used to compress blood vessels to control bleeding.",
      "Used in surgery to clamp vessels before ligation; also holds tissue.",
      "instruments");
    addF("Scalpel",
      "A small, sharp-bladed knife used to make surgical incisions.",
      "Used for initial incision through skin and tissue in surgical procedures.",
      "instruments");
    addF("Otoscope",
      "An instrument with a light and magnifying lens for examining the ear canal.",
      "Used to check for ear infections, foreign bodies, or parasites.",
      "instruments");
    addF("Ophthalmoscope",
      "An instrument with a light source and lenses for examining the interior of the eye.",
      "Used to assess retinal health, lens clarity, and optic nerve.",
      "instruments");
    addF("Autoclave",
      "A device that uses pressurized steam to sterilize surgical instruments.",
      "Used after cleaning instruments to achieve complete sterility before surgery.",
      "instruments");
    addF("Pulse Oximeter",
      "A device that measures blood oxygen saturation (SpO2) non-invasively.",
      "Clipped to tongue, ear, or toe web during anesthesia to monitor oxygenation.",
      "instruments");
    addF("Needle Driver (Needle Holder)",
      "A forceps-like instrument used to grip and manipulate suture needles.",
      "Used during wound closure to safely drive needles through tissue.",
      "instruments");
    addF("Forceps (Tissue)",
      "Thumb-operated grasping instruments used to hold or manipulate tissue.",
      "Used in surgery to retract tissue and assist in dissection or suturing.",
      "instruments");
    addF("Retractor",
      "An instrument used to hold incision edges or tissue aside for surgical access.",
      "Improves visualization of the surgical field by holding structures apart.",
      "instruments");
    addF("Syringe",
      "A piston-driven device used to inject or withdraw fluids.",
      "Used with needles for administering injections or drawing blood.",
      "instruments");
    addF("IV Catheter",
      "A flexible tube inserted into a vein to allow continuous vascular access.",
      "Used for administering IV fluids, medications, or blood products.",
      "instruments");
    addF("Endotracheal Tube",
      "A flexible tube placed into the trachea to maintain a patent airway.",
      "Used during anesthesia to deliver oxygen and anesthetic gases.",
      "instruments");
    addF("Thermometer (Digital Rectal)",
      "A device used to accurately measure core body temperature via the rectum.",
      "Standard for obtaining accurate temperature readings in dogs and cats.",
      "instruments");
    addF("Infusion Pump",
      "An electronic device that delivers precise volumes of IV fluids at controlled rates.",
      "Used for critical patients or those needing exact fluid therapy.",
      "instruments");

    // ---- VITAL SIGNS (12) ----
    addF("Normal Dog Temperature",
      "101\u{2013}102.5\u{00b0}F (38.3\u{2013}39.2\u{00b0}C)",
      "Measured rectally; above 104\u{00b0}F is a fever; below 99\u{00b0}F is hypothermia.",
      "vital_signs");
    addF("Normal Cat Temperature",
      "100.5\u{2013}102.5\u{00b0}F (38.1\u{2013}39.2\u{00b0}C)",
      "Measured rectally; fevers above 103.5\u{00b0}F require veterinary attention.",
      "vital_signs");
    addF("Normal Dog Heart Rate (large breed)",
      "60\u{2013}100 bpm",
      "Auscultated with stethoscope at the left chest wall.",
      "vital_signs");
    addF("Normal Dog Heart Rate (small breed)",
      "100\u{2013}140 bpm",
      "Small dogs have a naturally faster heart rate than large breeds.",
      "vital_signs");
    addF("Normal Cat Heart Rate",
      "140\u{2013}220 bpm",
      "Elevated rates during stress are common; persistent tachycardia warrants evaluation.",
      "vital_signs");
    addF("Normal Dog Respiratory Rate",
      "10\u{2013}30 breaths per minute (at rest)",
      "Count chest rises for 60 seconds with animal calm.",
      "vital_signs");
    addF("Normal Cat Respiratory Rate",
      "20\u{2013}30 breaths per minute (at rest)",
      "Open-mouth breathing in a calm cat is always abnormal.",
      "vital_signs");
    addF("Capillary Refill Time (CRT)",
      "Normal: less than 2 seconds",
      "Press on gum, release, and time how long it takes to return to pink.",
      "vital_signs");
    addF("Tachycardia",
      "Heart rate above normal range for the species",
      "Can result from fever, pain, anxiety, cardiac disease, or hyperthyroidism.",
      "vital_signs");
    addF("Bradycardia",
      "Heart rate below normal range for the species",
      "Can result from hypothermia, drug effects, vagal stimulation, or heart block.",
      "vital_signs");
    addF("Mucous Membrane Color (Normal)",
      "Pink and moist",
      "Pale, white, yellow, blue, or bright red gums indicate systemic abnormalities.",
      "vital_signs");
    addF("Cyanosis",
      "Blue or purple discoloration of mucous membranes indicating low oxygen",
      "Emergency sign requiring immediate veterinary intervention and oxygen support.",
      "vital_signs");

    // ---- MEDICAL TERMS (15) ----
    addF("Alopecia",
      "Hair loss or absence of hair",
      "Documented as a dermatological finding; investigate for allergies or hormonal causes.",
      "medical_terms");
    addF("Emesis",
      "Vomiting",
      "Record frequency, color, and contents; report to the veterinarian.",
      "medical_terms");
    addF("Pruritus",
      "Itching",
      "Common with allergies, parasites, or skin infections.",
      "medical_terms");
    addF("Dyspnea",
      "Difficulty breathing",
      "A presenting emergency sign; alert the veterinarian immediately.",
      "medical_terms");
    addF("Polydipsia",
      "Excessive thirst and water intake",
      "Associated with diabetes mellitus, Cushing\u{2019}s disease, or kidney disease.",
      "medical_terms");
    addF("Polyuria",
      "Production of abnormally large volumes of urine",
      "Often accompanies polydipsia; both are key history findings.",
      "medical_terms");
    addF("Subcutaneous (SQ/SC)",
      "Under the skin",
      "Route for vaccines and many medications; injected into the scruff or tent of skin.",
      "medical_terms");
    addF("Intramuscular (IM)",
      "Into a muscle",
      "Common injection sites: epaxial muscles, quadriceps, or semimembranosus.",
      "medical_terms");
    addF("Intravenous (IV)",
      "Into a vein",
      "Provides fastest drug absorption; requires catheter placement.",
      "medical_terms");
    addF("Lateral Recumbency",
      "Lying on the side",
      "Used for blood draws from the jugular, radiographs, and some procedures.",
      "medical_terms");
    addF("Dorsal Recumbency",
      "Lying on the back (ventral surface up)",
      "Used for abdominal surgery, spays, and ultrasound.",
      "medical_terms");
    addF("Sternal Recumbency",
      "Lying on the sternum (belly down, sphinx position)",
      "Preferred position for respiratory patients; reduces diaphragm compression.",
      "medical_terms");
    addF("Prognosis",
      "Predicted outcome or likely course of a disease",
      "Communicated to clients by the veterinarian; ranges from excellent to grave.",
      "medical_terms");
    addF("-itis",
      "Suffix meaning inflammation",
      "Examples: otitis (ear inflammation), dermatitis (skin), gastritis (stomach).",
      "medical_terms");
    addF("-ectomy",
      "Suffix meaning surgical removal",
      "Examples: splenectomy, ovariohysterectomy (spay), orchiectomy (neuter).",
      "medical_terms");

    // ---- ANIMAL HANDLING (10) ----
    addF("Towel Restraint (Cat Burrito)",
      "Wrapping a cat snugly in a towel to restrict limb movement",
      "Allows safe access for injections and exams while reducing bite/scratch risk.",
      "animal_handling");
    addF("Scruffing",
      "Grasping the loose skin at the back of the neck to immobilize a cat",
      "Use minimally; triggers immobility response in cats for brief procedures.",
      "animal_handling");
    addF("Lateral Recumbency Restraint",
      "Placing an animal on its side by controlling the head and hindquarters",
      "Used for jugular blood draws, radiographs, and minor procedures.",
      "animal_handling");
    addF("Fear-Free Handling",
      "An approach that minimizes patient stress using gentle techniques and positive reinforcement",
      "Reduces anxiety, improves safety, and improves exam accuracy.",
      "animal_handling");
    addF("Muzzle",
      "A device placed over an animal\u{2019}s snout to prevent biting",
      "Use when a dog shows aggression; never use on brachycephalic breeds or dyspneic animals.",
      "animal_handling");
    addF("Minimum Restraint",
      "Using the least force necessary to safely complete a procedure",
      "Reduces animal stress and injury risk while maintaining safety for staff.",
      "animal_handling");
    addF("Chemical Restraint",
      "Use of sedatives or tranquilizers to calm a patient for examination or procedures",
      "Ordered by the veterinarian when physical restraint is insufficient or unsafe.",
      "animal_handling");
    addF("Sternal Recumbency Restraint",
      "Positioning the animal in a \u{2018}sphinx\u{2019} (belly-down) position",
      "Common for cats and rabbits; reduces respiratory stress compared to dorsal recumbency.",
      "animal_handling");
    addF("Rabbit Spinal Safety",
      "Rabbits must have their lumbar spine supported at all times to prevent fracture",
      "Rabbits can kick powerfully enough to break their own spine if not supported.",
      "animal_handling");
    addF("Slip Lead",
      "A looped leash that slides over a dog\u{2019}s head and tightens gently for control",
      "Used to move dogs safely from cage to exam room when a regular collar is unavailable.",
      "animal_handling");
  };

  func populateScenarios() {
    if (nextScenarioId > 1) { return };

    addS("A client brings a visibly frightened cat to the exam room. The cat is hissing and swatting.",
      "What is the most appropriate first step?",
      ["Immediately apply full body restraint", "Speak softly, give the cat space to calm, and prepare towel restraint if needed", "Administer a sedative immediately without consulting the vet", "Ask the owner to hold the cat however they can"],
      1, "Fear-free principles: allow the cat to settle, speak calmly, and use minimum restraint necessary. Consult the vet before sedation.",
      "animal_restraint");

    addS("After completing a procedure, you notice the surgical instruments have blood and tissue debris on them.",
      "What is the correct cleaning process?",
      ["Place directly in the autoclave", "Rinse, hand-scrub, ultrasonic clean, package, then autoclave", "Wipe with a dry cloth and store", "Soak in cold water overnight, then autoclave"],
      1, "Autoclaving without prior mechanical cleaning is ineffective; debris must be removed before sterilization.",
      "sanitation");

    addS("A dog begins panting heavily, its gums are pale, and its CRT is 3 seconds during a routine visit.",
      "What should you do?",
      ["Complete the routine exam as normal", "Alert the veterinarian immediately \u{2014} these are signs of possible shock", "Give the dog water and recheck in 30 minutes", "Note the findings and include in the end-of-day report"],
      1, "Pale gums and prolonged CRT indicate circulatory compromise; this is an emergency requiring immediate veterinary assessment.",
      "vital_signs");

    addS("A client calls and says their dog accidentally ingested rat poison 20 minutes ago.",
      "What is the correct action?",
      ["Tell them to wait and watch for symptoms", "Instruct them to come in immediately or go to the nearest emergency clinic and inform the vet", "Advise them to give the dog milk", "Tell them it is probably fine if the dog seems normal"],
      1, "Toxin ingestion is a time-sensitive emergency; getting the patient to care quickly may allow induction of vomiting and prevent serious harm.",
      "client_communication");

    addS("You are preparing a new patient file and realize the owner provided only the pet\u{2019}s name.",
      "What additional information is required?",
      ["Nothing; pet name is sufficient", "Owner name, address, phone number, pet species, breed, age, sex, and reason for visit", "Only a payment method", "Only the pet\u{2019}s vaccination records"],
      1, "Complete intake records are essential for communication, medical history, and legal documentation.",
      "record_keeping");
  };

  func populateVideoLessons() {
    if (nextVideoId > 1) { return };

    videoLessons.add({
      id = nextVideoId;
      title = "Veterinary Assistant Training: Clinic Essentials";
      youtubeId = "6hiTz_5enxw";
      summary = "A comprehensive overview of veterinary assistant duties including animal handling, clinic workflow, safety, and patient care fundamentals.";
      learningObjectives = [
        "Understand veterinary assistant responsibilities in a clinical setting",
        "Learn safe animal handling and restraint fundamentals",
        "Identify proper clinic workflow from patient check-in to discharge",
        "Apply safety and sanitation practices in the clinic"
      ];
      quizQuestions = [];
    });
    nextVideoId += 1;

    videoLessons.add({
      id = nextVideoId;
      title = "Dog Restraint Techniques";
      youtubeId = "f5bMnfxGMI8";
      summary = "Demonstrates various techniques for safely restraining dogs during veterinary exams.";
      learningObjectives = [
        "Identify common dog restraint positions",
        "Understand safety considerations during restraint",
        "Recognize signs of stress in dogs during handling"
      ];
      quizQuestions = [];
    });
    nextVideoId += 1;
  };

  ///////////////////// CORE FUNCTIONS /////////////////////

  public query ({ caller }) func getAllQuestions() : async [Question] {
    questions.toArray().sort(Question.compareByCategory);
  };

  public query ({ caller }) func getQuestionsByCategory(cat : Text) : async [Question] {
    let filtered = questions.filter(
      func(q) { Text.equal(q.category, cat) }
    );
    filtered.toArray();
  };

  public query ({ caller }) func getAllFlashcards() : async [Flashcard] {
    flashcards.toArray().sort();
  };

  public query ({ caller }) func getFlashcardsByCategory(cat : Text) : async [Flashcard] {
    let filtered = flashcards.filter(
      func(f) { Text.equal(f.category, cat) }
    );
    filtered.toArray();
  };

  public query ({ caller }) func getAllScenarios() : async [Scenario] {
    scenarios.toArray().sort(Scenario.compareByCategory);
  };

  public query ({ caller }) func getAllVideoLessons() : async [VideoLesson] {
    videoLessons.toArray().sort();
  };

  ///////////////////// UTILITY FUNCTIONS /////////////////////

  public query ({ caller }) func countQuestionsByCategory() : async [(Text, Nat)] {
    let categories = [
      "animal_restraint",
      "vital_signs",
      "instruments",
      "sanitation",
      "terminology",
      "client_communication",
      "record_keeping",
    ];
    categories.map(
      func(cat) {
        let count = questions.filter(func(q) { Text.equal(q.category, cat) }).size();
        (cat, count);
      }
    );
  };

  public query ({ caller }) func countFlashcardsByCategory() : async [(Text, Nat)] {
    let categories = [
      "instruments",
      "medical_terms",
      "vital_signs",
      "animal_handling",
    ];
    categories.map(
      func(cat) {
        let count = flashcards.filter(func(f) { Text.equal(f.category, cat) }).size();
        (cat, count);
      }
    );
  };

  public query ({ caller }) func getVideoLessonsWithQuestions() : async [LessonWithQuestions] {
    let lessonsArray = videoLessons.toArray();
    let lessonWithQuestionsArray = lessonsArray.map(
      func(lesson) { { lesson; questions = lesson.quizQuestions } }
    );
    lessonWithQuestionsArray;
  };

  public query ({ caller }) func explainAnswer(questionId : Nat, chosenIndex : Nat) : async Text {
    let questionArray = questions.toArray();
    let maybeQuestion = questionArray.find(func(q) { q.id == questionId });
    switch (maybeQuestion) {
      case (null) { Runtime.trap("Question not found") };
      case (?question) {
        if (chosenIndex == question.correctIndex) {
          "Correct! " # question.explanation;
        } else {
          "Incorrect. The correct answer is " # question.options[question.correctIndex] # ". " # question.explanation;
        };
      };
    };
  };

  public query ({ caller }) func explainScenario(scenarioId : Nat, chosenIndex : Nat) : async Text {
    let scenarioArray = scenarios.toArray();
    let maybeScenario = scenarioArray.find(func(s) { s.id == scenarioId });
    switch (maybeScenario) {
      case (null) { Runtime.trap("Scenario not found") };
      case (?scenario) {
        if (chosenIndex == scenario.correctIndex) {
          "Correct! " # scenario.explanation;
        } else {
          "Incorrect. The correct approach is " # scenario.choices[scenario.correctIndex.toNat()] # ". " # scenario.explanation;
        };
      };
    };
  };

  ///////////////////// SYSTEM FUNCTIONS /////////////////////

  public query ({ caller }) func countAllData() : async Nat {
    questions.size() + flashcards.size() + scenarios.size() + videoLessons.size();
  };
};
