import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Scenario } from "./backend";
import BottomNav, { type Page } from "./components/BottomNav";
import { flashcardDeck, isDatasetsReady, questionBank } from "./data/studyData";
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

const questions = questionBank;
const flashcards = flashcardDeck;
const scenarios: Scenario[] = [];
const videoQuestions: Record<string, never[]> = {};

type SubPage =
  | "daily"
  | "quick"
  | "visual"
  | "scenarios"
  | "bookmarks"
  | "prepVideo";

export default function App() {
  const [tab, setTab] = useState<Page>("home");
  const [subPage, setSubPage] = useState<SubPage | null>(null);
  const [retryCount, setRetryCount] = useState(0);

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

  if (!isDatasetsReady()) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-gray-600 text-lg">Loading study content...</p>
        <Button onClick={() => setRetryCount((c) => c + 1)} variant="outline">
          Retry
        </Button>
        <span className="hidden">{retryCount}</span>
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
