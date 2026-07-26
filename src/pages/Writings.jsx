import { Link } from "react-router-dom";
import { writings } from "../data/writings";
import Reveal from "../components/Reveal";
import { accentAt } from "../data/accents";

function formatDate(value) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function Writings() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">08 // writings</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Writings
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        Notes and short essays on AI, machine learning, and science. Edit{" "}
        <code className="font-mono text-xs text-secondary">
          src/data/writings.js
        </code>{" "}
        to add your own — each entry becomes its own page automatically.
      </p>

      <section className="mt-10 space-y-5">
        {writings.map((post, i) => {
          const a = accentAt(i);
          return (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to={`/writings/${post.slug}`}
                className={`group block rounded-xl border border-base-300/60 bg-base-200/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${a.border}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className={`badge badge-outline badge-xs font-mono ${a.border} ${a.text}`}
                    >
                      {t}
                    </span>
                  ))}
                  <span className="font-mono text-[0.65rem] text-base-content/50">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-base-content/75">
                  {post.summary}
                </p>
                <span
                  className={`mt-3 inline-block font-mono text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${a.text}`}
                >
                  read more →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}
