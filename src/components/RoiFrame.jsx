export default function RoiFrame({ tag, children, className = "" }) {
  return (
    <div className={`roi-frame ${className}`}>
      {tag && (
        <span className="roi-tag absolute -top-3 left-4 bg-base-100 px-2 text-primary">
          {tag}
        </span>
      )}
      {children}
    </div>
  );
}
