export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4">
      <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-500 text-sm">Loading study content...</p>
    </div>
  );
}
