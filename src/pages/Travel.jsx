import { travelPosts } from "../data/travel";
import Reveal from "../components/Reveal";
import { accentAt } from "../data/accents";

function formatDate(value) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function Travel() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">06 // travel</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Travel Log
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        A running record of trips outside the lab and the classroom. Edit{" "}
        <code className="font-mono text-xs text-secondary">
          src/data/travel.js
        </code>{" "}
        to add your own.
      </p>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {travelPosts.map((post, i) => {
          const a = accentAt(i);
          return (
            <Reveal key={post.id} delay={i * 0.08}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-xl border border-base-300/60 bg-base-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${a.border}`}
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-base-300/40">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-mono text-[0.65rem] uppercase tracking-wide text-base-content/40">
                      Add photo
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className={`badge badge-outline badge-xs font-mono ${a.border} ${a.text}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 font-display text-base font-semibold">
                    {post.title}
                  </h2>
                  <p className="mt-1 font-mono text-[0.65rem] text-base-content/50">
                    {post.location} · {formatDate(post.date)}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-base-content/75">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}
