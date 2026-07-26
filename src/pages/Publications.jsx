import { profile } from "../data/profile";
import Reveal from "../components/Reveal";

export default function Publications() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">04 // publications</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Publications
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        Published work and research currently in preparation.
      </p>

      <section className="mt-10 space-y-5">
        {profile.publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.08}>
            <div className="rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-base-content/50">
                  [{i + 1}]
                </span>
                <span
                  className={`badge badge-sm font-mono ${
                    pub.status === "Published"
                      ? "badge-primary"
                      : "badge-outline badge-secondary"
                  }`}
                >
                  {pub.status}
                </span>
              </div>
              <h3 className="mt-3 font-display text-base font-semibold sm:text-lg">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                {pub.note}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="mt-10 rounded-xl border border-dashed border-base-300/70 p-6 text-sm text-base-content/60">
          <p>
            Full citations and links will be added as they become available.
            For the latest, see my{" "}
            <a
              href={profile.links.researchgate}
              target="_blank"
              rel="noreferrer"
              className="link text-primary"
            >
              ResearchGate profile
            </a>
            .
          </p>
        </section>
      </Reveal>
    </div>
  );
}
