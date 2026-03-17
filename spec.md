# Vet Assistant Exam Prep

## Current State
- HomePage shows a search bar, Daily Challenge banner, Quick Study button, and a 2-column grid of study modes.
- BottomNav has 5 tabs: Home, Quiz, Cards, Videos, Progress.
- VideosPage lists multiple YouTube videos; selecting one shows embedded player + manual quiz button.
- No dedicated Exam Prep Video page. YouTube ID 6hiTz_5enxw is not in the app.

## Requested Changes (Diff)

### Add
- PrepVideoPage: Dedicated page for Exam Prep Video.
  - Header: 'Watch Before Testing'
  - Embedded YouTube player for 6hiTz_5enxw using IFrame API postMessage to detect progress/end.
  - Show thumbnail before play, support fullscreen.
  - 'Key Skills From This Video' section: Vet assistant responsibilities, Animal handling basics, Clinic workflow, Safety practices.
  - Progress tracking: mark Completed in localStorage once 80% watched.
  - Post-video quiz: auto-launches 5-question quiz when video ends.
  - 'Retake Quiz' button always visible on the video page.
  - 5 hardcoded quiz questions in prepVideoQuestions.ts.
- prepVideoQuestions.ts: 5 multiple-choice questions about the video content.

### Modify
- HomePage.tsx: Replace study mode grid with a 5-step study flow as main navigation:
  1. Watch Prep Video -> prepVideo
  2. Flashcards -> flashcards
  3. Visual Instrument Training -> visual
  4. Practice Quizzes -> quiz
  5. Certification Practice Exam -> quiz
  Each step: step number badge, label, description, completion indicator.
  Keep search bar, streak, Daily Challenge, Quick Study as secondary.
- App.tsx: Add prepVideo to SubPage and HomeNavTarget, render PrepVideoPage.
- HomeNavTarget type: add 'prepVideo'.

### Remove
- Old 2-column study modes grid on HomePage.

## Implementation Plan
1. Create prepVideoQuestions.ts with 5 questions.
2. Create PrepVideoPage.tsx with full feature set.
3. Update HomePage.tsx with 5-step flow.
4. Update App.tsx to handle prepVideo navigation.
5. Validate.
