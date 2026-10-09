import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse, getCourseLessonCount } from "@/lib/courses";
import CoursePlayer from "./course-player";
import { HeaderActions } from "@/components/header-actions";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    return { title: "Course not found — Goodcourse" };
  }

  return {
    title: `${course.title} — Goodcourse`,
    description: course.description,
  };
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

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className={`learning-page learning-page-${course.artwork}`}>
      <header className="learning-header">
        <div className="learning-header-inner">
          <Wordmark />
          <div className="learning-breadcrumbs">
            <Link href="/courses">Courses</Link>
            <span aria-hidden="true">/</span>
            <span>{course.category}</span>
          </div>
          <div className="learning-header-actions">
            <Link className="learning-exit" href="/courses">
              <span aria-hidden="true">←</span> All courses
            </Link>
            <HeaderActions className="learning-auth-actions" />
          </div>
        </div>
      </header>

      <section className="learning-course-heading">
        <div className="learning-title-block">
          <div className="learning-title-kickers">
            <span className="learning-category">{course.category}</span>
            <span>{course.level}</span>
          </div>
          <h1>{course.title}</h1>
          <p>{course.subtitle}</p>
        </div>
        <div className="learning-course-facts">
          <span><strong>{getCourseLessonCount(course)}</strong> lessons</span>
          <span><strong>{course.duration}</strong> total</span>
          <span><strong>${course.price}</strong> one-time access</span>
        </div>
      </section>

      <CoursePlayer course={course} />

      <footer className="learning-footer">
        <div>
          <Wordmark />
          <p>Sample course experience · Progress resets when you refresh.</p>
        </div>
        <Link href="/courses">Explore another course <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
