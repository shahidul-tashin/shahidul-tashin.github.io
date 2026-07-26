import { Link, useParams, Navigate } from "react-router-dom";
import { getWritingBySlug } from "../data/writings";
import Reveal from "../components/Reveal";

function formatDate(value) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function WritingDetail() {
  const { slug } = useParams();
  const post = getWritingBySlug(slug);

  if (!post) {
    return <Navigate to="/writings" replace />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <Link
        to="/writings"
        className="font-mono text-xs text-primary hover:underline"
      >
        ← all writings
      </Link>

      <Reveal>
        <article className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="badge badge-outline badge-primary badge-xs font-mono"
              >
                {t}
              </span>
            ))}
            <span className="font-mono text-[0.65rem] text-base-content/50">
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">
            {post.title}
          </h1>

          <div className="prose-sm mt-6 space-y-4 text-sm leading-relaxed text-base-content/85 sm:text-base">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      </Reveal>
    </div>
  );
}
