// A small rotating palette used to add color variety to tags, badges, and
// list markers without touching the core primary/secondary theme colors.
export const accentPalette = [
  { text: "text-teal-400", border: "border-teal-400/40", bg: "bg-teal-400/10", dot: "bg-teal-400" },
  { text: "text-amber-400", border: "border-amber-400/40", bg: "bg-amber-400/10", dot: "bg-amber-400" },
  { text: "text-rose-400", border: "border-rose-400/40", bg: "bg-rose-400/10", dot: "bg-rose-400" },
  { text: "text-sky-400", border: "border-sky-400/40", bg: "bg-sky-400/10", dot: "bg-sky-400" },
  { text: "text-violet-400", border: "border-violet-400/40", bg: "bg-violet-400/10", dot: "bg-violet-400" },
];

export function accentAt(index) {
  return accentPalette[index % accentPalette.length];
}
