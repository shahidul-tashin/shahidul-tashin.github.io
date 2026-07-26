import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { accentAt } from "../data/accents";

export default function Education() {
  const pmscs = profile.education.find((e) => e.semesters);
  const rest = profile.education.filter((e) => !e.semesters);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">03 // education</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Education
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        A path from genetics to computer science — each stage feeding
        directly into the next.
      </p>

      {/* PMSCS detail card */}
      <Reveal>
        <section className="mt-10 rounded-2xl border border-base-300/60 bg-base-200/30 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-secondary badge-sm font-mono">
              In progress
            </span>
            <span className="font-mono text-[0.65rem] text-base-content/50">
              Jahangirnagar University
            </span>
          </div>
          <h2 className="mt-3 font-display text-xl font-semibold">
            {pmscs.degree}
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {pmscs.semesters.map((sem, i) => {
              const a = accentAt(i);
              return (
                <div
                  key={sem.label}
                  className={`rounded-xl border border-base-300/50 bg-base-100/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${a.border}`}
                >
                  <div className="flex items-center justify-between">
                    <p className={`font-mono text-xs uppercase tracking-wide ${a.text}`}>
                      {sem.label}
                    </p>
                    <span className="font-mono text-xs text-base-content/50">
                      {sem.cgpa}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {sem.courses.map((c) => (
                      <li key={c} className="text-sm text-base-content/75">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* Timeline for the rest */}
      <section className="mt-16">
        <h2 className="font-display text-xl font-semibold">
          Academic Timeline
        </h2>
        <ul className="mt-6 space-y-0">
          {rest.map((item, i) => {
            const a = accentAt(i);
            return (
              <Reveal key={item.degree} as="li" delay={i * 0.06} className="relative pb-8 pl-8 last:pb-0">
                {i !== rest.length - 1 && (
                  <span className="absolute left-[7px] top-3 h-full w-px bg-base-300" />
                )}
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base-100 ${a.dot}`}
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-base font-semibold">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-base-content/50">
                    {item.period}
                  </span>
                </div>
                {item.institution && (
                  <p className="text-sm text-base-content/70">
                    {item.institution}
                  </p>
                )}
                <p className={`mt-1 font-mono text-xs ${a.text}`}>
                  {item.detail}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
