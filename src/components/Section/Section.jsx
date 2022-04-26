export default function Section({ className, header, content, children }) {
  return (
    <div className={className}>
      <div className="section-header">{header}</div>
      <div className="section-content">{content}</div>
      {children}
    </div>
  );
}
