import { BarChart2, ClipboardList, Home, Layers, Play } from "lucide-react";

export type Page = "home" | "quiz" | "flashcards" | "videos" | "progress";

interface BottomNavProps {
  current: Page;
  onChange: (page: Page) => void;
}

const tabs: {
  id: Page;
  label: string;
  Icon: React.FC<{ size?: number; className?: string }>;
}[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "quiz", label: "Quiz", Icon: ClipboardList },
  { id: "flashcards", label: "Cards", Icon: Layers },
  { id: "videos", label: "Videos", Icon: Play },
  { id: "progress", label: "Progress", Icon: BarChart2 },
];

export default function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-pb">
      <div className="max-w-[430px] mx-auto flex">
        {tabs.map(({ id, label, Icon }) => (
          <button
            type="button"
            key={id}
            data-ocid={`nav.${id}_link`}
            onClick={() => onChange(id)}
            className={`flex-1 flex flex-col items-center py-2 pt-3 transition-colors ${
              current === id ? "text-teal-600" : "text-gray-400"
            }`}
          >
            <Icon size={22} />
            <span className="text-[10px] mt-0.5 font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
