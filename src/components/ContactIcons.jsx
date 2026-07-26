import { Mail, MessageCircle, GraduationCap } from "lucide-react";
import { profile } from "../data/profile";

// lucide-react no longer ships brand/logo icons, so GitHub and LinkedIn use
// small inline glyphs (standard open, CC0-licensed brand marks).
function GithubGlyph(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedinGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const items = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    render: (dims) => <Mail size={dims} strokeWidth={1.8} />,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    render: (dims) => <GithubGlyph style={{ width: dims, height: dims }} />,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    render: (dims) => <LinkedinGlyph style={{ width: dims, height: dims }} />,
  },
  {
    label: "ResearchGate",
    href: profile.links.researchgate,
    render: (dims) => <GraduationCap size={dims} strokeWidth={1.8} />,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`,
    render: (dims) => <MessageCircle size={dims} strokeWidth={1.8} />,
  },
];

export default function ContactIcons({ size = "md" }) {
  const dims = size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const iconDims = size === "lg" ? 20 : 17;

  return (
    <div className="flex items-center gap-2.5">
      {items.map(({ label, href, render }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={`tooltip flex ${dims} items-center justify-center rounded-full border border-base-300/70 bg-base-100/70 text-base-content/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-lg hover:shadow-primary/10`}
          data-tip={label}
        >
          {render(iconDims)}
        </a>
      ))}
    </div>
  );
}
