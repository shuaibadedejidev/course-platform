import Image from "next/image";
import Link from "next/link";
import { HeaderActions } from "@/components/header-actions";

//import { courses } from "@/lib/courses";


const courses = [
  {
    number: "01",
    eyebrow: "START HERE",
    title: "Build a strong foundation",
    description:
      "Get clear on the fundamentals and create a learning rhythm that works for you.",
    lessons: "A thoughtful place to begin",
    art: "foundation",
  },
  {
    number: "02",
    eyebrow: "GO DEEPER",
    title: "Turn ideas into real progress",
    description:
      "Move from understanding the basics to putting useful new skills into practice.",
    lessons: "Practical lessons, at your pace",
    art: "progress",
  },
  {
    number: "03",
    eyebrow: "KEEP GROWING",
    title: "Make your next move count",
    description:
      "Explore fresh perspectives and keep building on what you already know.",
    lessons: "Learn something new every day",
    art: "growth",
  },
];


const plans = [
  {
    name: "One course",
    description: "Choose a course and learn at your own pace.",
    price: "$25",
    cadence: "one time",
    details: ["Lifetime access to one course", "All lessons and downloads"],
    featured: false,
  },
  {
    name: "All access",
    description: "The whole library, for as long as you’re subscribed.",
    price: "$50",
    cadence: "per month",
    details: ["Every course in the library", "New courses as they arrive"],
    featured: true,
  },
  {
    name: "Lifetime",
    description: "One purchase. The entire library, forever.",
    price: "$250",
    cadence: "one time",
    details: ["Every current course", "All future courses, too"],
    featured: false,
  },
];

const learnerStories = [
  {
    name: "Maya Chen",
    role: "Frontend developer",
    photo: "/learners/maya.jpg",
    quote:
      "I wanted to keep growing, but I needed learning to fit around real project work. Being able to come back to a lesson when I have the time makes a difference.",
    tone: "coral",
    featured: true,
  },
  {
    name: "Jordan Ellis",
    role: "Independent designer",
    photo: "/learners/jordan.jpg",
    quote:
      "The best part is having a place to start. One focused lesson feels much more doable than trying to figure out the whole journey at once.",
    tone: "mint",
    featured: false,
  },
  {
    name: "Sam Rivera",
    role: "Product engineer",
    photo: "/learners/sam.jpg",
    quote:
      "I can learn something new, put it into practice, then pick things up again later. That kind of flexibility suits the way I work.",
    tone: "lilac",
    featured: true,
  },
];

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

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8.25 6.75 5 3.25-5 3.25v-6.5Z" fill="currentColor" />
    </svg>
  );
}

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="page-shell hero-shell">
          <header className="site-header">
            <a className="wordmark" href="#home" aria-label="Goodcourse home">
              <span className="wordmark-symbol" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>goodcourse</span>
            </a>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/courses">Courses</Link>
              <a href="#approach">Our approach</a>
              <a href="#pricing">Pricing</a>
            </nav>
            <HeaderActions />
          </header>

          <div className="hero-content" id="home">
            <div className="hero-globe-stage" aria-hidden="true">
              <div className="hero-globe-halo" />
              <div className="hero-globe">
                <div className="hero-globe-texture" />
                <div className="hero-globe-shading" />
                <div className="hero-globe-atmosphere" />
              </div>
              <div className="hero-globe-orbit hero-globe-orbit-one" />
              <div className="hero-globe-orbit hero-globe-orbit-two" />
            </div>
            <a className="announcement" href="#courses">
              <span className="announcement-dot" />
              A little more room to grow
              <span className="announcement-arrow">
                <ArrowIcon />
              </span>
            </a>
            <p className="eyebrow hero-eyebrow">LEARN AT YOUR OWN PACE</p>
            <h1 id="hero-title">
              Your next chapter
              <br />
              <span>starts with learning.</span>
            </h1>
            <p className="hero-description">
              Thoughtful courses to help you build new skills, find your
              momentum, and make progress that lasts.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#courses">
                Find your first course <ArrowIcon />
              </a>
              <a className="button button-outline" href="#approach">
                <PlayIcon /> See how it works
              </a>
            </div>
            <div className="hero-note">
              <span className="note-mark" aria-hidden="true">✳</span>
              <span>Learn on your schedule. Keep access to what you love.</span>
            </div>
          </div>
          <div className="hero-spacer" aria-hidden="true" />
        </div>
      </section>

      <section className="dashboard-preview" aria-labelledby="dashboard-title">
        <div className="page-shell dashboard-preview-shell">
          <div className="dashboard-preview-copy">
            <p className="eyebrow">A LITTLE PROGRESS, ALL IN ONE PLACE</p>
            <h2 id="dashboard-title">Pick up right where you left off.</h2>
            <p>
              Your courses, your next lesson, and the progress you’ve made —
              ready whenever you are.
            </p>
          </div>
          <div
            className="dashboard-artwork"
            role="img"
            aria-label="Illustrative dark dashboard artwork from the supplied landing-page background"
          />
          <p className="dashboard-caption">
            Supplied dashboard artwork — a placeholder for the student dashboard.
          </p>
        </div>
      </section>

      <section className="intro-strip" id="approach">
        <h2 className="sr-only">A more thoughtful way to learn</h2>
        <div className="page-shell intro-strip-inner">
          <p>Good things happen when you keep learning.</p>
          <div className="value-list" aria-label="What to expect">
            <span><i aria-hidden="true">✳</i> Learn at your own pace</span>
            <span><i aria-hidden="true">✳</i> Come back anytime</span>
            <span><i aria-hidden="true">✳</i> Keep what you learn</span>
          </div>
        </div>
      </section>

      <section className="section stories-section" aria-labelledby="stories-title">
        <div className="page-shell">
          <div className="stories-heading">
            <div>
              <p className="eyebrow">A LITTLE LEARNING GOES A LONG WAY</p>
              <h2 id="stories-title">
                Made for real life.
                <br />
                <span>And everything around it.</span>
              </h2>
            </div>
            <p>
              Your days are already full. Learning should meet you where you
              are, fit into your rhythm, and be here when you want to come back.
            </p>
          </div>

          <div className="stories-banner">
            <span className="stories-banner-icon" aria-hidden="true">✳</span>
            <p>
              Small, thoughtful lessons.
              <strong> A little more momentum, on your terms.</strong>
            </p>
            <a className="text-link" href="#courses">
              Find your starting point <ArrowIcon />
            </a>
          </div>

          <div className="testimonials-heading">
            <div>
              <p className="eyebrow">KIND WORDS, IN PROGRESS</p>
              <h3>Learning looks different for everyone.</h3>
            </div>
            <p className="sample-disclosure">
              Sample stories and names for design preview — not real testimonials.
            </p>
          </div>

          <div
            className="testimonial-marquee"
            role="region"
            aria-label="Illustrative sample learner testimonials"
          >
            <div className="testimonial-track">
              {[false, true].map((isDuplicate) => (
                <div
                  className="testimonial-set"
                  key={isDuplicate ? "duplicate" : "original"}
                  aria-hidden={isDuplicate || undefined}
                >
                  {learnerStories.map((story, index) => (
                    <figure
                      className={`testimonial-card testimonial-${story.tone}${story.featured ? " testimonial-featured" : ""}`}
                      key={`${isDuplicate ? "duplicate-" : ""}${story.name}`}
                    >
                      <div className="testimonial-card-top">
                        <span className="testimonial-index">0{index + 1} / SAMPLE</span>
                        <span className="quote-mark" aria-hidden="true">“</span>
                      </div>
                      <blockquote>{story.quote}</blockquote>
                      <figcaption className="learner-profile">
                        <Image
                          className="learner-avatar"
                          src={story.photo}
                          alt=""
                          width="44"
                          height="44"
                          loading="lazy"
                        />
                        <span className="learner-details">
                          <span className="learner-name">{story.name}</span>
                          <span className="learner-role">
                            {story.role} <span aria-hidden="true">·</span> Sample profile
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section courses-section" id="courses">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COURSE LIBRARY</p>
              <h2>Find a place to begin.</h2>
              <p className="section-description">
                Pick a course that meets you where you are. There’s no rush
                and no wrong place to start.
              </p>
            </div>
            <Link className="text-link" href="/courses">
              Explore all courses <ArrowIcon />
            </Link>
          </div>

          <div className="course-grid">
            {courses.slice(0, 3).map((course) => (
              <article className="course-card" key={course.number}>
                <div className={`course-art course-art-${course.art}`}>
                  <span className="course-art-number">{course.number}</span>
                  <span className="course-art-orbit course-art-orbit-one" />
                  <span className="course-art-orbit course-art-orbit-two" />
                  <span className="course-art-core" />
                  <span className="course-art-caption">A GOOD PLACE TO START</span>
                </div>
                <div className="course-card-content">
                  <p className="eyebrow course-eyebrow">{course.eyebrow}</p>
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-card-footer">
                    <span>{course.lessons}</span>
                    <Link href="/courses" aria-label={`Explore courses including ${course.title}`}>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="page-shell">
          <div className="pricing-heading">
            <p className="eyebrow">SIMPLE, FLEXIBLE PRICING</p>
            <h2>Choose how you want to learn.</h2>
            <p className="section-description">
              Start with one course, join us month to month, or get lifetime
              access to everything.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <span className="popular-label">THE MOST FLEXIBLE</span>}
                <div className="pricing-card-top">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>
                <p className="price">
                  {plan.price}
                  <span>{plan.cadence}</span>
                </p>
                <ul>
                  {plan.details.map((detail) => (
                    <li key={detail}>
                      <span className="check-icon" aria-hidden="true">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  className={`button ${plan.featured ? "button-primary" : "button-outline"}`}
                  href="#courses"
                >
                  Explore the courses <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            All prices in USD. Course purchases and lifetime access are one-time payments.
          </p>
        </div>
      </section>

      <section className="closing-section">
        <div className="page-shell closing-content">
          <p className="eyebrow">YOUR PACE. YOUR NEXT STEP.</p>
          <h2>There’s always more to discover.</h2>
          <p>Take a look around and find the course that feels right for you.</p>
          <a className="button button-primary" href="#courses">
            Browse the library <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>goodcourse</span>
          </a>
          <p>Make a little room for what’s next.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
