import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { accentAt } from "../data/accents";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/shahidul-tashin",
    href: profile.links.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/msi-tashin",
    href: profile.links.linkedin,
  },
  {
    label: "ResearchGate",
    value: "Md-Islam-Tashin",
    href: profile.links.researchgate,
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="roi-tag text-primary">05 // contact</p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-3 max-w-2xl text-base-content/75">
        Open to conversations about PhD opportunities, collaborations, and
        anything at the intersection of AI and healthcare.
      </p>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {contactItems.map((item, i) => {
          const a = accentAt(i);
          return (
            <Reveal key={item.label} delay={i * 0.06}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`group flex items-center justify-between rounded-xl border border-base-300/60 bg-base-200/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${a.border}`}
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-base-content/50">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-sm font-medium">
                    {item.value}
                  </p>
                </div>
                <span
                  className={`font-mono opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${a.text}`}
                >
                  →
                </span>
              </a>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}
