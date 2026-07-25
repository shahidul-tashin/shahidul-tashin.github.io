const stages = [
  { label: "CT Scan", sub: "Input image" },
  { label: "Preprocess", sub: "Denoise / normalize" },
  { label: "CNN Model", sub: "Classification" },
  { label: "Explain", sub: "Grad-CAM / SHAP" },
  { label: "Review", sub: "Radiologist verifies" },
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
          <g key={s.label}>
            <rect
              x={x}
              y={y}
              width={boxW}
              height={boxH}
              rx={10}
              fill="none"
              stroke="hsl(var(--p))"
              strokeWidth="1.5"
              opacity="0.8"
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
              fill="hsl(var(--p))"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            {!isLast && (
              <path
                d={`M ${x + boxW} ${y + boxH / 2} L ${x + boxW + gap - 6} ${
                  y + boxH / 2
                }`}
                stroke="hsl(var(--s))"
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
          <path d="M0,0 L8,4 L0,8 Z" fill="hsl(var(--s))" />
        </marker>
      </defs>
    </svg>
  );
}
