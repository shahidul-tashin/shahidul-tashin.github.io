import RoiFrame from "../components/RoiFrame";
import Reveal from "../components/Reveal";
import { accentAt } from "../data/accents";
import PipelineFigure from "../components/PipelineFigure";
import MetricsExplorer from "../components/MetricsExplorer";
import { profile } from "../data/profile";

export default function Research() {
  const project = profile.currentProject;

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">02 // research</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Research
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        My research sits between medical imaging, explainable AI, and
        clinical language — using each to make the others more trustworthy.
      </p>

      {/* Featured project */}
      <section className="mt-10">
        <Reveal>
        <RoiFrame tag={project.caseId} className="rounded-2xl border border-base-300/60 bg-base-200/30 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-secondary badge-sm font-mono">
              {project.status}
            </span>
            {project.themes.map((t) => (
              <span
                key={t}
                className="badge badge-outline badge-primary badge-sm font-mono text-[0.6rem]"
              >
                {t}
              </span>
            ))}
          </div>
          <h2 className="mt-4 font-display text-xl font-semibold sm:text-2xl">
            {project.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-base-content/80 sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-base-content/50">
                Methods
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.stack.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-base-content/50">
                Data
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.data.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RoiFrame>
        </Reveal>
      </section>

      {/* Figure: pipeline diagram */}
      <section className="mt-16">
        <Reveal>
          <RoiFrame
            tag="fig. 02 — pipeline overview"
            className="rounded-2xl border border-base-300/60 bg-base-200/30 transition-shadow duration-300 hover:shadow-lg hover:shadow-secondary/5"
          >
            <PipelineFigure />
          </RoiFrame>
        </Reveal>
      </section>

      {/* Interactive: diagnostic metrics explorer */}
      <section className="mt-16">
        <h2 className="font-display text-xl font-semibold">
          Try it: Diagnostic Metrics Explorer
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-base-content/70">
          A small interactive built to make one point concrete: in medical
          diagnosis, no single metric tells the whole story. Adjust the
          confusion matrix below and watch how accuracy can look fine even
          while recall — the metric that matters most for not missing a
          cancer case — quietly falls.
        </p>
        <Reveal>
          <RoiFrame
            tag="fig. 03 — interactive"
            className="mt-5 rounded-2xl border border-base-300/60 bg-base-200/30"
          >
            <MetricsExplorer />
          </RoiFrame>
        </Reveal>
      </section>

      {/* Research interests */}
      <section className="mt-16">
        <h2 className="font-display text-xl font-semibold">
          Research Interests
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {profile.researchInterests.map((item, i) => {
            const a = accentAt(i);
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className={`rounded-xl border border-base-300/60 bg-base-200/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                  <p className={`font-mono text-[0.65rem] ${a.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Teaching / experience */}
      <section className="mt-16">
        <h2 className="font-display text-xl font-semibold">Experience</h2>
        <div className="mt-5 space-y-4">
          {profile.experience.map((e) => (
            <Reveal key={e.role}>
            <div
              className="flex flex-col gap-1 rounded-xl border border-base-300/60 bg-base-200/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3 className="font-display text-base font-semibold">
                  {e.role}
                </h3>
                <p className="mt-1 text-sm text-base-content/75">
                  {e.detail}
                </p>
              </div>
              <span className="font-mono text-xs text-base-content/50">
                {e.period}
              </span>
            </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
