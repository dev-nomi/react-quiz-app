export default function SummaryStat({ label, children }) {
  return (
    <p>
      <span className="number">{children}%</span>
      <span className="text">{label}</span>
    </p>
  );
}
