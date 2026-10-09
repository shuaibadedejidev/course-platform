"use client";

import { useMemo, useState } from "react";
import type { Course, CourseLesson } from "@/lib/courses";

type CoursePlayerProps = {
  course: Course;
};

function PlayIcon({ playing }: { playing: boolean }) {
  return playing ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.8c0-.8.9-1.3 1.6-.9l10 5.9a1.4 1.4 0 0 1 0 2.4l-10 5.9c-.7.4-1.6-.1-1.6-.9V5.8Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="m4.5 10.2 3.6 3.5 7.5-7.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function flattenedLessons(course: Course) {
  return course.sections.flatMap((section) =>
    section.lessons.map((lesson) => ({ ...lesson, sectionTitle: section.title })),
  );
}

export default function CoursePlayer({ course }: CoursePlayerProps) {
  const lessonList = useMemo(() => flattenedLessons(course), [course]);
  const [activeLessonId, setActiveLessonId] = useState(lessonList[0]?.id ?? "");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeLesson = lessonList.find((lesson) => lesson.id === activeLessonId);
  const lessonIndex = lessonList.findIndex((lesson) => lesson.id === activeLessonId);
  const progress = lessonList.length
    ? Math.round((completedLessons.length / lessonList.length) * 100)
    : 0;

  function selectLesson(lesson: CourseLesson) {
    setActiveLessonId(lesson.id);
    setIsPlaying(false);
  }

  function toggleComplete() {
    if (!activeLesson) return;
    setCompletedLessons((current) =>
      current.includes(activeLesson.id)
        ? current.filter((id) => id !== activeLesson.id)
        : [...current, activeLesson.id],
    );
    setIsPlaying(false);
  }

  function goToAdjacentLesson(direction: -1 | 1) {
    const nextLesson = lessonList[lessonIndex + direction];
    if (nextLesson) selectLesson(nextLesson);
  }

  return (
    <div className="learning-layout">
      <section className="lesson-main" aria-label="Course lesson player">
        <div className={`lesson-screen lesson-screen-${course.artwork}`}>
          <div className="lesson-screen-grid" aria-hidden="true" />
          <div className="lesson-screen-orbit lesson-screen-orbit-one" aria-hidden="true" />
          <div className="lesson-screen-orbit lesson-screen-orbit-two" aria-hidden="true" />
          <div className="lesson-screen-copy">
            <span className="lesson-screen-label">GOODCOURSE · SAMPLE PLAYER</span>
            <span className="lesson-screen-course">{course.category}</span>
          </div>
          <button
            className={`lesson-play-button${isPlaying ? " lesson-play-button-active" : ""}`}
            type="button"
            aria-label={isPlaying ? "Pause sample player" : "Play sample player"}
            aria-pressed={isPlaying}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            <PlayIcon playing={isPlaying} />
          </button>
          <div className="lesson-screen-controls" aria-hidden="true">
            <span className={`mock-video-progress${isPlaying ? " mock-video-progress-playing" : ""}`} />
            <span>PREVIEW PLAYER</span>
          </div>
          <p className="lesson-player-status" aria-live="polite">
            {isPlaying
              ? "Sample player preview is active. Real lesson video will connect later."
              : "Sample player UI · lesson video connects later"}
          </p>
        </div>

        <div className="lesson-now-playing">
          <div>
            <p className="eyebrow">NOW LEARNING · {activeLesson?.sectionTitle}</p>
            <h2>{activeLesson?.title ?? "Choose a lesson to begin"}</h2>
            <p>
              A sample lesson from {course.instructor}. Your real course video,
              written lesson, and resources will appear here.
            </p>
          </div>
          <button
            className={`lesson-complete-button${activeLesson && completedLessons.includes(activeLesson.id) ? " is-complete" : ""}`}
            type="button"
            onClick={toggleComplete}
            disabled={!activeLesson}
          >
            <CheckIcon />
            {activeLesson && completedLessons.includes(activeLesson.id)
              ? "Completed"
              : "Mark complete"}
          </button>
        </div>

        <div className="lesson-notes-card">
          <div className="lesson-notes-heading">
            <span className="lesson-notes-icon" aria-hidden="true">✳</span>
            <div>
              <p className="eyebrow">A NOTE BEFORE YOU BEGIN</p>
              <h3>Learn a little. Try a little.</h3>
            </div>
          </div>
          <p>
            This course page is a working visual sample. Select a lesson from
            the outline to explore the player layout and course progress states.
          </p>
        </div>
      </section>

      <aside className="lesson-sidebar" aria-label="Course outline">
        <div className="lesson-sidebar-heading">
          <div>
            <p className="eyebrow">YOUR LEARNING PATH</p>
            <h2>Course content</h2>
          </div>
          <span className="lesson-sidebar-total">{lessonList.length} lessons</span>
        </div>

        <div
          className="course-progress-summary"
          role="progressbar"
          aria-label="Course progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div className="course-progress-labels">
            <span>YOUR PROGRESS</span>
            <strong>{progress}%</strong>
          </div>
          <div className="course-progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>
          <p>{completedLessons.length} of {lessonList.length} lessons complete</p>
        </div>

        <div className="course-outline">
          {course.sections.map((section, sectionIndex) => (
            <section className="course-outline-section" key={section.title}>
              <h3>{section.title}</h3>
              <ol>
                {section.lessons.map((lesson) => {
                  const index = lessonList.findIndex((item) => item.id === lesson.id);
                  const isActive = activeLessonId === lesson.id;
                  const isComplete = completedLessons.includes(lesson.id);

                  return (
                    <li key={lesson.id}>
                      <button
                        className={`outline-lesson${isActive ? " is-active" : ""}${isComplete ? " is-complete" : ""}`}
                        type="button"
                        aria-current={isActive ? "step" : undefined}
                        onClick={() => selectLesson(lesson)}
                      >
                        <span className="outline-lesson-index">
                          {isComplete ? <CheckIcon /> : String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="outline-lesson-copy">
                          <span className="outline-lesson-title">{lesson.title}</span>
                          <span className="outline-lesson-meta">
                            <span>{lesson.duration}</span>
                            {lesson.preview && <span className="preview-tag">PREVIEW</span>}
                          </span>
                        </span>
                        {isActive && <span className="outline-playing-dot" aria-hidden="true" />}
                      </button>
                    </li>
                  );
                })}
              </ol>
              {sectionIndex < course.sections.length - 1 && (
                <span className="outline-section-divider" aria-hidden="true" />
              )}
            </section>
          ))}
        </div>
      </aside>

      <nav className="lesson-step-nav" aria-label="Lesson navigation">
        <button
          type="button"
          onClick={() => goToAdjacentLesson(-1)}
          disabled={lessonIndex <= 0}
        >
          <span aria-hidden="true">←</span> Previous lesson
        </button>
        <span>Lesson {lessonIndex + 1} of {lessonList.length}</span>
        <button
          type="button"
          onClick={() => goToAdjacentLesson(1)}
          disabled={lessonIndex >= lessonList.length - 1}
        >
          Next lesson <span aria-hidden="true">→</span>
        </button>
      </nav>
    </div>
  );
}
