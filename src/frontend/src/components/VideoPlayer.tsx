import { List, Play, VideoOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { VideoLesson } from "../data/videoData";

interface VideoPlayerProps {
  lesson: VideoLesson;
}

type PlayerState = "thumbnail" | "playing" | "failed";

export default function VideoPlayer({ lesson }: VideoPlayerProps) {
  const [state, setState] = useState<PlayerState>("thumbnail");
  const [thumbError, setThumbError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isPlaylist = lesson.type === "playlist";
  const watchUrl = lesson.youtubeUrl;
  const thumbUrl = lesson.thumbnail ?? null;

  // Build embed src — playlists embed as videoseries, videos get JS API
  const embedSrc = isPlaylist
    ? `${lesson.embedUrl}&origin=${encodeURIComponent(window.location.origin)}`
    : `${lesson.embedUrl}?enablejsapi=1&rel=0&modestbranding=1`;

  // Listen for postMessage errors from YouTube iframe
  useEffect(() => {
    if (state !== "playing") return;
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "onError") setState("failed");
      } catch {
        // ignore non-JSON
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [state]);

  // Playlist height is taller to accommodate the playlist sidebar
  const playerHeight = isPlaylist ? 320 : 220;

  return (
    <div className="flex flex-col gap-2">
      {/* Player area — note: parent passes key={lesson.id} so this component
          is remounted on lesson change, resetting all state automatically */}
      <div
        className="rounded-2xl overflow-hidden shadow-md bg-black relative"
        style={{ height: playerHeight }}
      >
        {/* Thumbnail / click-to-play state */}
        {state === "thumbnail" && (
          <button
            type="button"
            data-ocid="video.canvas_target"
            onClick={() => setState("playing")}
            className="w-full h-full relative block"
            aria-label={`Play ${lesson.title}`}
          >
            {/* Playlist: show a styled placeholder since there's no single thumbnail */}
            {isPlaylist ? (
              <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-600 flex flex-col items-center justify-center gap-3 px-4 text-center">
                <List size={40} className="text-white/80" />
                <p className="text-white font-semibold text-sm">
                  {lesson.title}
                </p>
                <p className="text-white/70 text-xs">Tap to open playlist</p>
              </div>
            ) : !thumbError && thumbUrl ? (
              <img
                src={thumbUrl}
                alt={lesson.title}
                className="w-full h-full object-cover"
                onError={() => setThumbError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-900" />
            )}

            {/* Dark overlay for video thumbnails */}
            {!isPlaylist && <div className="absolute inset-0 bg-black/30" />}

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-lg">
                <Play size={28} className="text-white fill-white ml-1" />
              </div>
            </div>
          </button>
        )}

        {/* Playing state */}
        {state === "playing" && (
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={lesson.title}
            width="100%"
            height={playerHeight}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen"
            onError={() => setState("failed")}
            className="block"
          />
        )}

        {/* Failed state */}
        {state === "failed" && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-900 px-6 text-center">
            <VideoOff size={32} className="text-gray-400" />
            <p className="text-gray-300 text-sm font-medium">
              This video cannot be played in the app
            </p>
            <a
              data-ocid="video.primary_button"
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Watch on YouTube ↗
            </a>
          </div>
        )}
      </div>

      {/* Always-visible secondary Watch on YouTube link */}
      <div className="flex justify-center">
        <a
          data-ocid="video.watch_button"
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
        >
          {isPlaylist ? "Open Playlist on YouTube ↗" : "Watch on YouTube ↗"}
        </a>
      </div>
    </div>
  );
}
