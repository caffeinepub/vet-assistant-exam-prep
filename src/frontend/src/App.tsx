import { useEffect, useState } from "react";
import type { Flashcard, Question, Scenario, VideoLesson } from "./backend";
import BottomNav, { type Page } from "./components/BottomNav";
import LoadingScreen from "./components/LoadingScreen";
import { useActor } from "./hooks/useActor";
import BookmarksPage from "./pages/BookmarksPage";
import DailyChallengePage from "./pages/DailyChallengePage";
import FlashcardsPage from "./pages/FlashcardsPage";
import HomePage, { type HomeNavTarget } from "./pages/HomePage";
import PrepVideoPage from "./pages/PrepVideoPage";
import ProgressPage from "./pages/ProgressPage";
import QuickStudyPage from "./pages/QuickStudyPage";
import QuizPage from "./pages/QuizPage";
import ScenariosPage from "./pages/ScenariosPage";
import VideosPage from "./pages/VideosPage";
import VisualLearningPage from "./pages/VisualLearningPage";

type SubPage =
  | "daily"
  | "quick"
  | "visual"
  | "scenarios"
  | "bookmarks"
  | "prepVideo";

export default function App() {
  const { actor, isFetching } = useActor();
  const [tab, setTab] = useState<Page>("home");
  const [subPage, setSubPage] = useState<SubPage | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [videoLessons, setVideoLessons] = useState<VideoLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const videoQuestions: Record<string, Question[]> = {};
  for (const vl of videoLessons) {
    videoQuestions[vl.youtubeId] = vl.quizQuestions;
  }

  useEffect(() => {
    if (!actor) return;
    async function load() {
      try {
        await actor!.initializeData();
        const [qs, fcs, scens, vls] = await Promise.all([
          actor!.getAllQuestions(),
          actor!.getAllFlashcards(),
          actor!.getAllScenarios(),
          actor!.getAllVideoLessons(),
        ]);
        setQuestions(qs);
        setFlashcards(fcs);
        setScenarios(scens);
        setVideoLessons(vls);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [actor]);

  const streakRaw =
    typeof window !== "undefined" ? localStorage.getItem("vet_streak") : null;
  const streak = streakRaw
    ? (JSON.parse(streakRaw) as { count: number }).count
    : 0;
  const dailyRaw =
    typeof window !== "undefined"
      ? localStorage.getItem("vet_daily_challenge")
      : null;
  const dailyCompleted = dailyRaw
    ? (JSON.parse(dailyRaw) as { date: string; completed: boolean }).date ===
        new Date().toISOString().slice(0, 10) &&
      (JSON.parse(dailyRaw) as { completed: boolean }).completed
    : false;

  const handleTabChange = (page: Page) => {
    setTab(page);
    setSubPage(null);
  };

  const handleNavigate = (page: HomeNavTarget) => {
    const tabPages: Page[] = [
      "home",
      "quiz",
      "flashcards",
      "videos",
      "progress",
    ];
    if (tabPages.includes(page as Page)) {
      setTab(page as Page);
      setSubPage(null);
    } else {
      setSubPage(page as SubPage);
    }
  };

  const handleBack = () => {
    setSubPage(null);
  };

  if (isFetching || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-6">
        <p className="text-red-500 font-semibold">
          Failed to load study content.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="py-3 px-6 bg-teal-600 text-white rounded-2xl font-semibold"
        >
          Retry
        </button>
      </div>
    );
  }

  if (subPage === "daily") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[430px] mx-auto px-4 pt-6 pb-6">
          <DailyChallengePage questions={questions} onBack={handleBack} />
        </div>
      </div>
    );
  }

  if (subPage === "quick") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[430px] mx-auto px-4 pt-6 pb-6">
          <QuickStudyPage questions={questions} onBack={handleBack} />
        </div>
      </div>
    );
  }

  if (subPage === "prepVideo") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[430px] mx-auto px-4 pt-6 pb-6">
          <PrepVideoPage onBack={handleBack} />
        </div>
      </div>
    );
  }

  if (subPage === "visual") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[430px] mx-auto px-4 pt-6 pb-24">
          <VisualLearningPage />
        </div>
        <BottomNav current={tab} onChange={handleTabChange} />
      </div>
    );
  }

  if (subPage === "scenarios") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[430px] mx-auto px-4 pt-6 pb-24">
          <ScenariosPage scenarios={scenarios} loading={false} />
        </div>
        <BottomNav current={tab} onChange={handleTabChange} />
      </div>
    );
  }

  if (subPage === "bookmarks") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[430px] mx-auto px-4 pt-6 pb-6">
          <BookmarksPage questions={questions} onBack={handleBack} />
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (tab) {
      case "home":
        return (
          <HomePage
            questions={questions}
            flashcards={flashcards}
            streak={streak}
            dailyCompleted={dailyCompleted}
            onNavigate={handleNavigate}
          />
        );
      case "quiz":
        return <QuizPage questions={questions} loading={false} />;
      case "flashcards":
        return <FlashcardsPage flashcards={flashcards} loading={false} />;
      case "videos":
        return <VideosPage videoQuestions={videoQuestions} />;
      case "progress":
        return <ProgressPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[430px] mx-auto px-4 pt-6 pb-24">
        {renderContent()}
      </div>
      <BottomNav current={tab} onChange={handleTabChange} />
    </div>
  );
}
