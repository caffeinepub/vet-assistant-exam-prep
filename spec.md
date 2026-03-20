# Vet Assistant Exam Prep

## Current State
- `videoData.ts` holds 6 videos with title/summary/objectives/duration
- `VideosPage.tsx` renders a video list, embedded YouTube player, objectives, and a quiz
- Quiz questions for videos come from the backend `videoLessons` prop (currently empty arrays)
- Completion tracking marks a video as watched on iframe load (not 80% threshold)
- No per-video key takeaways section separate from objectives
- No retake quiz button on the video detail page

## Requested Changes (Diff)

### Add
- 5 new videos in `videoData.ts` (with youtubeId, title, summary, keyTakeaways/objectives, duration)
- New `videoQuizData.ts` local data file with 5 quiz questions per new video
- 80% watch threshold per video using YouTube postMessage API (stored in localStorage)
- "Key Takeaways" section displayed on each video detail page (replaces or supplements objectives)
- Retake Quiz button always visible on video detail page
- Quiz auto-launches after 80% watched (same as PrepVideoPage pattern)

### Modify
- `videoData.ts`: add 5 new entries in the specified order
- `VideosPage.tsx`: switch quiz questions source to local `videoQuizData.ts`, add 80% tracking via postMessage, add retake quiz button, add key takeaways display

### Remove
- Reliance on backend-provided empty quiz question arrays for the new videos

## Implementation Plan
1. Add 5 new video entries to `videoData.ts`
2. Create `videoQuizData.ts` with 5 questions per video
3. Update `VideosPage.tsx` to use local quiz data, add YouTube postMessage 80% tracking, add retake quiz button, and display key takeaways
