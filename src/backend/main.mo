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

  func populateQuestions() {
    questions.add({
      id = nextQuestionId;
      text = "What is the most effective way to restrain a small dog during a physical exam?";
      category = "animal_restraint";
      options = [
        "Hold the dog by its tail only",
        "Use a towel to wrap the entire body",
        "Apply pressure to the neck area",
        "Hold the dog by its ears"
      ];
      correctIndex = 1;
      explanation = "Using a towel to wrap (similar to a burrito) is effective for small dogs and prevents limb flailing.";
    });
    nextQuestionId += 1;
    // Add more questions as needed...
  };

  func populateFlashcards() {
    flashcards.add({
      id = nextFlashcardId;
      term = "Stethoscope";
      definition = "A medical instrument used to listen to the internal sounds of an animal’s body.";
      usage = "Used for monitoring heart rate, respiratory rate, and other internal sounds during exams.";
      category = "instruments";
    });
    nextFlashcardId += 1;
    // Add more flashcards as needed...
  };

  func populateScenarios() {
    scenarios.add({
      id = nextScenarioId;
      situation = "A client bring a frightened cat for a check-up.";
      question = "What is the most appropriate first step?";
      choices = [
        "Immediate full body restraint",
        "Gentle handling with a soft voice",
        "Administer a sedative immediately",
        "Ignore the owner's concerns"
      ];
      correctIndex = 1;
      explanation = "Gentle handling with a soft voice helps reduce the cat's stress and is the best initial approach.";
      category = "client_communication";
    });
    nextScenarioId += 1;
    // Add more scenarios as needed...
  };

  func populateVideoLessons() {
    videoLessons.add({
      id = nextVideoId;
      title = "Dog Restraint Techniques";
      youtubeId = "f5bMnfxGMI8";
      summary = "This video demonstrates various techniques for safely restraining dogs during veterinary exams.";
      learningObjectives = [
        "Understand common dog restraint techniques",
        "Learn the importance of safety during exams",
        "Identify signs of stress in dogs"
      ];
      quizQuestions = [];
    });
    nextVideoId += 1;
    // Add more video lessons as needed...
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

  public query ({ caller }) func explainAnswer(questionId : Nat, chosenIndex : Int) : async Text {
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

  public query ({ caller }) func explainScenario(scenarioId : Nat, chosenIndex : Int) : async Text {
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
