// Each entry is one article. `content` is an array of paragraphs (plain
// strings) — keep it simple so there's no markdown renderer to configure.
// Add a new object to this array and a new page automatically appears at
// /writings/<slug>.
export const writings = [
  {
    slug: "why-explainability-matters-in-medical-ai",
    title: "Why Explainability Matters More in Medicine Than Anywhere Else",
    date: "2026-05",
    tags: ["Explainable AI", "Healthcare"],
    summary:
      "A high-accuracy model that can't show its work is a liability in a hospital, not an asset. Some notes on why interpretability is a first-class requirement, not a nice-to-have, in clinical AI.",
    content: [
      "Replace this paragraph with your own writing. A good opening states the core claim directly: in most software, a wrong prediction is inconvenient. In medicine, it can be fatal — so the bar for trust is categorically different.",
      "Add a second paragraph here — perhaps a concrete example from your gallbladder cancer project: what happens when a model is confident but wrong, and how an explanation (a Grad-CAM heatmap, an attribution score) lets a radiologist catch that before it reaches a patient.",
      "Close with your own take: what would it take for explainable AI to become standard practice in hospitals, not just a research nice-to-have?",
    ],
  },
  {
    slug: "genetics-to-machine-learning",
    title: "What Genetics Taught Me About Machine Learning",
    date: "2026-02",
    tags: ["Career", "Genetics", "ML"],
    summary:
      "Two years into a Genetic Engineering degree, I didn't expect the biggest lesson to be about statistical thinking. Some reflections on the unexpected overlap between wet-lab biology and machine learning.",
    content: [
      "Replace this with your own story — how a genetics background shaped the way you think about noisy data, variability, and evidence in ML.",
      "A concrete detail helps: a specific concept from Genetic Engineering (e.g. penetrance, phenotype variability, population studies) and how it maps onto a machine learning idea (e.g. uncertainty, generalization, sampling bias).",
      "End with why this cross-disciplinary path is actually an advantage for AI-for-healthcare work specifically.",
    ],
  },
  {
    slug: "reading-a-radiology-report-like-a-model-should",
    title: "Reading a Radiology Report the Way a Model Should",
    date: "2025-11",
    tags: ["NLP", "Medical Imaging"],
    summary:
      "Radiology reports are unstructured, inconsistent, and full of hedged language — and that's exactly what makes them a hard, interesting NLP problem for diagnosis support.",
    content: [
      "Replace this with your own notes on parsing clinical language — how radiologists write findings, why hedging ('cannot rule out...') matters, and what that means for an NLP pipeline built to complement imaging models.",
      "Add an example (anonymized/paraphrased) of the kind of phrasing that trips up naive text models.",
      "Close with a link back to how this connects to your current project.",
    ],
  },
];

export function getWritingBySlug(slug) {
  return writings.find((w) => w.slug === slug);
}
