import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const initial = { tp: 42, fp: 8, fn: 6, tn: 44 };

function Slider({ label, value, onChange, max = 100 }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-wide text-base-content/60">
          {label}
        </span>
        <span className="font-mono text-xs text-primary">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range range-primary range-xs mt-1"
      />
    </label>
  );
}

export default function MetricsExplorer() {
  const [matrix, setMatrix] = useState(initial);
  const { tp, fp, fn, tn } = matrix;

  const metrics = useMemo(() => {
    const total = tp + fp + fn + tn || 1;
    const accuracy = (tp + tn) / total;
    const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
    const recall = tp + fn === 0 ? 0 : tp / (tp + fn);
    const specificity = tn + fp === 0 ? 0 : tn / (tn + fp);
    const f1 =
      precision + recall === 0
        ? 0
        : (2 * precision * recall) / (precision + recall);
    return { accuracy, precision, recall, specificity, f1 };
  }, [tp, fp, fn, tn]);

  const chartData = [
    { name: "Accuracy", value: +(metrics.accuracy * 100).toFixed(1) },
    { name: "Precision", value: +(metrics.precision * 100).toFixed(1) },
    { name: "Recall", value: +(metrics.recall * 100).toFixed(1) },
    { name: "Specificity", value: +(metrics.specificity * 100).toFixed(1) },
    { name: "F1", value: +(metrics.f1 * 100).toFixed(1) },
  ];

  const set = (key) => (val) => setMatrix((m) => ({ ...m, [key]: val }));

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-base-content/50">
          Confusion matrix — drag to simulate a diagnostic test's outcomes
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
            <Slider label="True Positive" value={tp} onChange={set("tp")} />
          </div>
          <div className="rounded-lg border border-error/30 bg-error/5 p-3">
            <Slider label="False Positive" value={fp} onChange={set("fp")} />
          </div>
          <div className="rounded-lg border border-error/30 bg-error/5 p-3">
            <Slider label="False Negative" value={fn} onChange={set("fn")} />
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
            <Slider label="True Negative" value={tn} onChange={set("tn")} />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ["Accuracy", metrics.accuracy],
            ["Precision", metrics.precision],
            ["Recall", metrics.recall],
            ["Specificity", metrics.specificity],
            ["F1 Score", metrics.f1],
          ].map(([label, val]) => (
            <div
              key={label}
              className="rounded-lg border border-base-300/60 bg-base-100/60 p-3 text-center"
            >
              <p className="font-display text-lg font-semibold text-primary">
                {(val * 100).toFixed(1)}%
              </p>
              <p className="font-mono text-[0.6rem] uppercase tracking-wide text-base-content/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-mono text-xs uppercase tracking-wide text-base-content/50">
          Live chart
        </p>
        <div className="mt-2 h-64 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--bc) / 0.1)" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "hsl(var(--bc) / 0.6)" }}
                axisLine={{ stroke: "hsl(var(--bc) / 0.2)" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: "hsl(var(--bc) / 0.6)" }}
                axisLine={{ stroke: "hsl(var(--bc) / 0.2)" }}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--b2))",
                  border: "1px solid hsl(var(--b3))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill="hsl(var(--p))" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-base-content/60">
          In a clinical setting, recall (catching true cancer cases) and
          precision (avoiding false alarms) often trade off against each
          other — this is the tension my research tries to make visible and
          explainable, not just optimize blindly.
        </p>
      </div>
    </div>
  );
}
