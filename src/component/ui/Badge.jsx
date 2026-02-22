export default function Badge({ children, className = '' }) {
  return (
    <div
      className={`px-3 py-1.5 rounded-full text-sm font-medium ${className}`}
    >
      {children}
    </div>
  );
}
