const stages = [
  { label: "CT Scan", sub: "Input image", color: "hsl(var(--p))" },
  { label: "Preprocess", sub: "Denoise / normalize", color: "hsl(var(--in))" },
  { label: "CNN Model", sub: "Classification", color: "hsl(var(--a))" },
  { label: "Explain", sub: "Grad-CAM / SHAP", color: "hsl(var(--s))" },
  { label: "Review", sub: "Radiologist verifies", color: "hsl(var(--su))" },
];

export default function PipelineFigure() {
  const width = 760;
  const height = 160;
  const boxW = 128;
  const boxH = 78;
  const gap = (width - stages.length * boxW) / (stages.length + 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label="Diagram of the explainable AI diagnostic pipeline: CT scan input, preprocessing, CNN model, explainability layer, radiologist review"
    >
      {stages.map((s, i) => {
        const x = gap + i * (boxW + gap);
        const y = (height - boxH) / 2;
        const isLast = i === stages.length - 1;
        const cx = x + boxW / 2;
        return (
          <g key={s.label} style={{ animation: `fig-fade-in 0.5s ease-out ${i * 0.12}s both` }}>
            <rect
              x={x}
              y={y}
              width={boxW}
              height={boxH}
              rx={10}
              fill={s.color}
              fillOpacity="0.08"
              stroke={s.color}
              strokeWidth="1.5"
              opacity="0.9"
            />
            <text
              x={cx}
              y={y + boxH / 2 - 6}
              textAnchor="middle"
              fontSize="13"
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="600"
              fill="hsl(var(--bc))"
            >
              {s.label}
            </text>
            <text
              x={cx}
              y={y + boxH / 2 + 14}
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="'JetBrains Mono', monospace"
              fill="hsl(var(--bc) / 0.55)"
            >
              {s.sub}
            </text>
            <text
              x={x + 8}
              y={y - 8}
              fontSize="9"
              fontFamily="'JetBrains Mono', monospace"
              fill={s.color}
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            {!isLast && (
              <path
                d={`M ${x + boxW} ${y + boxH / 2} L ${x + boxW + gap - 6} ${
                  y + boxH / 2
                }`}
                stroke="hsl(var(--bc) / 0.35)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />
            )}
          </g>
        );
      })}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="hsl(var(--bc) / 0.35)" />
        </marker>
        <style>
          {`@keyframes fig-fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }`}
        </style>
      </defs>
    </svg>
  );
}
