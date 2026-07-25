import { travelPosts } from "../data/travel";

function formatDate(value) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function Travel() {
  return (
    <div className="max-w-5xl px-4 pt-12 pb-24 mx-auto sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">06 // travel</p>
      <h1 className="mt-3 text-3xl font-semibold font-display sm:text-4xl">
        Travel Log
      </h1>
      <p className="max-w-2xl mt-3 text-base-content/75">
        A running record of trips outside the lab and the classroom. Edit{" "}
        <code className="font-mono text-xs text-secondary">
          
        </code>{" "}
       
      </p>

      <section className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {travelPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col overflow-hidden border rounded-xl border-base-300/60 bg-base-200/30"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-base-300/40">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-base-content/40">
                  Add photo
                </span>
              )}
            </div>
            <div className="flex flex-col flex-1 p-5">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono badge badge-outline badge-primary badge-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-base font-semibold font-display">
                {post.title}
              </h2>
              <p className="mt-1 font-mono text-[0.65rem] text-base-content/50">
                {post.location} · {formatDate(post.date)}
              </p>
              <p className="flex-1 mt-3 text-sm leading-relaxed text-base-content/75">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
