# Vet Assistant Exam Prep

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full educational mobile-first app for Certified Veterinary Assistant exam prep
- Practice Quiz Mode: 150+ multiple-choice questions across 7 categories with instant feedback, randomization, and score tracking
- Flashcard Study Mode: swipe-based flip cards across 4 categories (instruments, medical terms, vital signs, animal handling)
- Visual Learning Mode: image-based identification questions with labeled diagrams for instruments, restraint, anatomy
- Video Learning Section: 6 embedded YouTube videos with summaries and 3-5 post-video quiz questions each
- Daily Challenge Mode: 10 random questions per day with score summary
- Progress Tracker: local storage tracking for scores, completed categories, streaks
- Clinic Scenario Mode: interactive case-based scenarios with explanations
- Search bar across all study content
- Bookmark system for difficult questions (local storage)
- Quick Study Mode: 5-minute timed 10-question sessions
- Bottom navigation bar with 5 main sections

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan

### Backend (Motoko)
- Store question bank (150+ questions) with category, options, correct answer, explanation
- Store flashcard data (term, definition, category, usage)
- Store scenario data (situation, choices, correct choice, explanation)
- Store video metadata (title, YouTube ID, summary, post-video questions)
- Query functions: getQuestionsByCategory, getAllQuestions, getFlashcardsByCategory, getScenarios, getVideos

### Frontend
- Bottom tab navigation: Home, Quiz, Flashcards, Videos, Progress
- Home screen: daily challenge CTA, quick study, mode tiles, search
- Practice Quiz: category selector, question card with 4 choices, instant feedback overlay, score screen
- Flashcard mode: swipeable flip cards, category filter
- Visual Learning: image display with multiple choice below
- Video section: video list, embedded YouTube iframe, post-video quiz
- Daily Challenge: 10 questions, progress bar, end summary
- Clinic Scenarios: scenario card, choice selection, explanation reveal
- Quick Study Mode: 5-min countdown, 10 questions
- Progress dashboard: scores by category, completion %, streak counter
- Bookmark toggle on question cards; bookmarked questions view
- All progress stored in localStorage
