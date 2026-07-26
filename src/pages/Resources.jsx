import { resourceGroups } from "../data/resources";
import Reveal from "../components/Reveal";
import { accentAt } from "../data/accents";

export default function Resources() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">07 // resources</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Tools &amp; Resources
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        A working list of the tools and sites I rely on for research,
        machine learning, and academic writing.
        <code className="font-mono text-xs text-secondary">
          {/* src/data/resources.js */}
        </code>{" "}
        to change this list.
      </p>

      <div className="mt-10 space-y-12">
        {resourceGroups.map((group, gi) => {
          const a = accentAt(gi);
          return (
            <Reveal key={group.category} delay={gi * 0.06}>
              <section>
                <h2 className={`font-display text-lg font-semibold ${a.text}`}>
                  {group.category}
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-start justify-between gap-3 rounded-lg border border-base-300/60 bg-base-200/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${a.border}`}
                    >
                      <div>
                        <p className="font-display text-sm font-semibold">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-base-content/65">
                          {item.note}
                        </p>
                      </div>
                      <span
                        className={`mt-0.5 shrink-0 font-mono opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${a.text}`}
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
