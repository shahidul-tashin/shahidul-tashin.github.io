import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RoiFrame from "../components/RoiFrame";
import Reveal from "../components/Reveal";
import ContactIcons from "../components/ContactIcons";
import { profile } from "../data/profile";
import { accentAt } from "../data/accents"; 

import proImg from "../assets/profile.jpg"

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-20">
      {/* Hero — identity + direct contact, front and center */}
      <section className="scanlines relative overflow-hidden rounded-2xl border border-base-300/60 bg-base-200/40 p-6 sm:p-12">
        <div
          className="hero-blob left-[-4rem] top-[-3rem] h-64 w-64 animate-float bg-primary/25"
          aria-hidden
        />
        <div
          className="hero-blob right-[-3rem] bottom-[-4rem] h-72 w-72 animate-float-slow bg-secondary/20"
          aria-hidden
        />
        <div
          className="hero-blob left-1/2 top-1/3 h-40 w-40 animate-float bg-accent/10"
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <RoiFrame tag="">
            <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-primary/40 shadow-[0_0_0_6px_hsl(var(--p)/0.08)] transition-shadow hover:shadow-[0_0_0_10px_hsl(var(--p)/0.12)] sm:h-32 sm:w-32">
              {/* Add your photo at src/assets/profile.jpg and this will
                  show it automatically. Until then, initials are shown. */}
              <img
                src={proImg}
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
          </RoiFrame>

          <p className="roi-tag mt-4 text-primary">{profile.caseId || ""}</p>
          <h1 className="gradient-text mt-2 animate-gradient-x font-display text-3xl font-semibold leading-[1.1] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-secondary">
            {profile.tagline}
          </p>
          <p className="mt-2 max-w-lg text-xs text-base-content/60 sm:text-sm">
            Currently pursuing an M.Sc. in Computer Science at Jahangirnagar
            University.I have completed B.S. &amp; M.S. in Genetic Engineering &amp;
            Biotechnology from University of Dhaka 
          </p>

          {/* Direct contact — the fastest path for a professor to reach out */}
          <div className="mt-6">
            <ContactIcons size="lg" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-base-content/80">
            {profile.pitch}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {profile.focus.map((f, i) => {
              const a = accentAt(i);
              return (
                <span
                  key={f}
                  className={`badge badge-outline ${a.border} ${a.text} ${a.bg} font-mono text-[0.65rem] uppercase transition-transform hover:-translate-y-0.5`}
                >
                  {f}
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/research"
              className="btn btn-primary btn-sm transition-transform hover:scale-105 active:scale-95"
            >
              View current research
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline btn-sm transition-transform hover:scale-105 active:scale-95"
            >
              Full contact details
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Academic snapshot */}
      <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {profile.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="group rounded-xl border border-base-300/60 bg-base-200/30 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <p className="font-display text-2xl font-semibold text-primary transition-transform duration-300 group-hover:scale-110">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wide text-base-content/60">
                {s.label}
              </p>
            </div>
          </Reveal>
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
        <Reveal>
          <div className="mt-4 rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5">
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
        </Reveal>
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
        ].map((item, i) => {
          const a = accentAt(i);
          return (
            <Reveal key={item.title} delay={i * 0.1}>
              <div
                className={`roi-frame rounded-xl border border-base-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${a.dot} mb-2`}
                />
                <h3 className={`font-display text-sm font-semibold ${a.text}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                  {item.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Beyond the lab */}
      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        <Reveal>
          <Link
            to="/writings"
            className="group block rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
          >
            <p className="roi-tag text-accent">08 — writings</p>
            <h3 className="mt-2 font-display text-lg font-semibold">
              Writings
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-base-content/75">
              Short essays on AI, machine learning, and science.
            </p>
            <span className="mt-3 inline-block font-mono text-xs text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              start reading →
            </span>
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <Link
            to="/travel"
            className="group block rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-400/5"
          >
            <p className="roi-tag text-rose-400">06 — travel log</p>
            <h3 className="mt-2 font-display text-lg font-semibold">
              Beyond the lab
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-base-content/75">
              A few notes from trips outside work and research.
            </p>
            <span className="mt-3 inline-block font-mono text-xs text-rose-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              see the log →
            </span>
          </Link>
        </Reveal>
        <Reveal delay={0.12}>
          <Link
            to="/resources"
            className="group block rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/5"
          >
            <p className="roi-tag text-sky-400">07 — tools</p>
            <h3 className="mt-2 font-display text-lg font-semibold">
              Tools &amp; Resources
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-base-content/75">
              The AI, research, and writing tools I use day to day.
            </p>
            <span className="mt-3 inline-block font-mono text-xs text-sky-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              browse the list →
            </span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
