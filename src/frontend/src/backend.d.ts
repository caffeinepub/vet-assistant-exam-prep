import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LessonWithQuestions {
    lesson: VideoLesson;
    questions: Array<Question>;
}
export interface Question {
    id: bigint;
    correctIndex: bigint;
    explanation: string;
    text: string;
    category: string;
    options: Array<string>;
}
export interface VideoLesson {
    id: bigint;
    title: string;
    learningObjectives: Array<string>;
    summary: string;
    youtubeId: string;
    quizQuestions: Array<Question>;
}
export interface Flashcard {
    id: bigint;
    term: string;
    usage: string;
    category: string;
    definition: string;
}
export interface Scenario {
    id: bigint;
    question: string;
    correctIndex: bigint;
    explanation: string;
    category: string;
    choices: Array<string>;
    situation: string;
}
export interface backendInterface {
    countAllData(): Promise<bigint>;
    countFlashcardsByCategory(): Promise<Array<[string, bigint]>>;
    countQuestionsByCategory(): Promise<Array<[string, bigint]>>;
    explainAnswer(questionId: bigint, chosenIndex: bigint): Promise<string>;
    explainScenario(scenarioId: bigint, chosenIndex: bigint): Promise<string>;
    getAllFlashcards(): Promise<Array<Flashcard>>;
    getAllQuestions(): Promise<Array<Question>>;
    getAllScenarios(): Promise<Array<Scenario>>;
    getAllVideoLessons(): Promise<Array<VideoLesson>>;
    getFlashcardsByCategory(cat: string): Promise<Array<Flashcard>>;
    getQuestionsByCategory(cat: string): Promise<Array<Question>>;
    getVideoLessonsWithQuestions(): Promise<Array<LessonWithQuestions>>;
    initializeData(): Promise<void>;
}
