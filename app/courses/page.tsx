import type { Metadata } from "next";
import Link from "next/link";
import { courses, getCourseLessonCount } from "@/lib/courses";
import { ArrowUp } from "lucide-react";
import { HeaderActions } from "@/components/header-actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Courses — Goodcourse",
  description:
    "Explore thoughtful courses in development, design, and creative practice.",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Goodcourse home">
      <span className="wordmark-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>goodcourse</span>
    </Link>
  );
}

export default async function CoursesPage() {
  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <div className="page-shell catalog-header-inner">
          <Wordmark />
          <nav className="catalog-nav" aria-label="Main navigation">
            <Link className="catalog-nav-active" href="/courses">Courses</Link>
            <Link href="/#pricing">Pricing</Link>
          </nav>
          <HeaderActions />
        </div>
      </header>

      <section className="catalog-intro">
        <div className="page-shell">
          <Link className="catalog-back-link" href="/">
            <span aria-hidden="true">←</span> Back to home
          </Link>
          <div className="catalog-heading">
            <div>
              <p className="eyebrow">THE GOODCOURSE LIBRARY</p>
              <h1>A good place to <span>begin.</span></h1>
              <p>
                Six thoughtful starting points for your next idea, skill, or
                little creative breakthrough.
              </p>
            </div>
            <div className="catalog-count">
              <span>06</span>
              <span>sample courses<br />to explore</span>
            </div>
          </div>
          <div className="catalog-meta">
            <p>All courses</p>
            <span>Sample catalog · USD pricing</span>
          </div>
          <div className="catalog-grid">
            {courses.map((course, index) => (
              <Link
                className="catalog-course-card"
                href={`/courses/${course.slug}`}
                key={course.slug}
              >
                <div className={`catalog-art catalog-art-${course.artwork}`}>
                  <span className="catalog-art-index">0{index + 1}</span>
                  <span className="catalog-art-orbit catalog-art-orbit-a" />
                  <span className="catalog-art-orbit catalog-art-orbit-b" />
                  <span className="catalog-art-center" />
                  <span className="catalog-art-label">{course.category}</span>
                  <span className="catalog-art-open" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
                <div className="catalog-card-content">
                  <div className="catalog-card-kicker">
                    <span>{course.category}</span>
                    <span>{course.level}</span>
                  </div>
                  <h2>{course.title}</h2>
                  <p className="catalog-course-description">{course.description}</p>
                  <div className="catalog-card-meta">
                    <span>{getCourseLessonCount(course)} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="catalog-card-footer">
                    <span className="catalog-price">${course.price}<small> one time</small></span>
                    <span className="catalog-view-course">
                      View course <ArrowIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="sample-data-note">
            Course titles, details, and pricing shown here are sample content
            for the catalog preview.
          </p>
        </div>
      </section>

      <footer className="catalog-footer">
        <div className="page-shell catalog-footer-inner">
          <Wordmark />
          <span>A little room for what’s next.</span>
          <Link href="/" className='flex items-center justify-content gap-2 text-inherit'>Back to home <ArrowUp className="size-6" /></Link>
        </div>
      </footer>
    </main>
  );
}
