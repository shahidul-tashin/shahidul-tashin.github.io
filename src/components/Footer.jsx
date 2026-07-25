import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-base-300/60">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm font-semibold">
              {profile.name}
            </p>
            <p className="font-mono text-xs text-base-content/60">
              {profile.tagline}
            </p>
          </div>
          <div className="flex gap-4 font-mono text-xs uppercase tracking-wide text-base-content/70">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.researchgate}
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              ResearchGate
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link link-hover"
            >
              Email
            </a>
          </div>
        </div>
        <p className="mt-6 font-mono text-[0.65rem] text-base-content/40">
          © {new Date().getFullYear()} {profile.name}. Built with React,
          Tailwind CSS &amp; DaisyUI.
        </p>
      </div>
    </footer>
  );
}
