export function DroneMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" className={className} aria-hidden="true">
      <rect x="18" y="13" width="12" height="6" rx="1.2" fill="currentColor" />
      <rect x="21" y="11" width="6" height="3" rx="0.6" fill="currentColor" opacity="0.7" />
      <rect x="6" y="14.5" width="14" height="2" rx="1" fill="currentColor" />
      <rect x="28" y="14.5" width="14" height="2" rx="1" fill="currentColor" />
      <circle cx="8" cy="15.5" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="15.5" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      <circle cx="32" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      <circle cx="24" cy="22" r="1.6" fill="currentColor" />
    </svg>
  );
}
