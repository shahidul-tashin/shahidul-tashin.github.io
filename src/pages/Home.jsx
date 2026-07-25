import { Link } from "react-router-dom";
import RoiFrame from "../components/RoiFrame";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-20">
      {/* Hero */}
      <section className="scanlines relative grid gap-10 rounded-2xl border border-base-300/60 bg-base-200/40 p-6 sm:grid-cols-[1.4fr_1fr] sm:p-10">
        <div>
          <p className="roi-tag text-primary">
            {profile.caseId || "candidate // ai-for-healthcare"}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-secondary">
            {profile.tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-base-content/80">
            {profile.pitch}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <span
                key={f}
                className="badge badge-outline badge-primary font-mono text-[0.65rem] uppercase"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/research" className="btn btn-primary btn-sm">
              View current research
            </Link>
            <Link to="/contact" className="btn btn-outline btn-sm">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <RoiFrame tag="fig. 01 — profile" className="w-full">
            <div className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-xl bg-base-100/60 p-6 text-center">
              {/* Add your photo at src/assets/profile.jpg and this will
                  show it automatically. Until then, initials are shown. */}
              <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-primary/40">
                <img
                  src="/src/assets/profile.jpg"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                <div
                  className="hidden h-full w-full items-center justify-center font-display text-2xl font-semibold text-primary"
                  style={{ display: "none" }}
                >
                  MST
                </div>
              </div>
              <p className="font-mono text-xs text-base-content/60">
                Genetics → Machine Learning
              </p>
              <p className="text-sm text-base-content/70">
                B.S. &amp; M.Sc. in Genetic Engineering &amp; Biotechnology,
                now completing a Professional Master's in Computer Science.
              </p>
            </div>
          </RoiFrame>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-base-300/60 bg-base-200/30 p-4 text-center"
          >
            <p className="font-display text-2xl font-semibold text-primary">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wide text-base-content/60">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Current project teaser */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-semibold">
            Current Research
          </h2>
          <Link
            to="/research"
            className="font-mono text-xs text-primary hover:underline"
          >
            full detail →
          </Link>
        </div>
        <div className="mt-4 rounded-xl border border-base-300/60 bg-base-200/30 p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-secondary badge-sm font-mono">
              {profile.currentProject.status}
            </span>
            <span className="font-mono text-[0.65rem] text-base-content/50">
              {profile.currentProject.caseId}
            </span>
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold">
            {profile.currentProject.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-base-content/80">
            {profile.currentProject.description}
          </p>
        </div>
      </section>

      {/* Why AI for Healthcare */}
      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Clinical grounding",
            body: "A biology and genetics background means I read a radiology report and a CT scan the way a clinician does, not just as pixels and text.",
          },
          {
            title: "Explainability first",
            body: "My work treats interpretability as a requirement, not an afterthought — models need to earn a clinician's trust.",
          },
          {
            title: "Teaching mindset",
            body: "7 years of teaching means I can communicate technical work clearly — to committees, collaborators, and clinicians alike.",
          },
        ].map((item) => (
          <div key={item.title} className="roi-frame border border-base-300/40 rounded-xl">
            <h3 className="font-display text-sm font-semibold text-primary">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-base-content/75">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      {/* Beyond the lab */}
      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <Link
          to="/travel"
          className="group rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-colors hover:border-primary/60"
        >
          <p className="roi-tag text-secondary">06 — travel log</p>
          <h3 className="mt-2 font-display text-lg font-semibold">
            Beyond the lab
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-base-content/75">
            A few notes from trips outside work and research.
          </p>
          <span className="mt-3 inline-block font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
            see the log →
          </span>
        </Link>
        <Link
          to="/resources"
          className="group rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-colors hover:border-primary/60"
        >
          <p className="roi-tag text-secondary">07 — tools</p>
          <h3 className="mt-2 font-display text-lg font-semibold">
            Tools &amp; Resources
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-base-content/75">
            The AI, research, and writing tools I use day to day.
          </p>
          <span className="mt-3 inline-block font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
            browse the list →
          </span>
        </Link>
      </section>
    </div>
  );
}
