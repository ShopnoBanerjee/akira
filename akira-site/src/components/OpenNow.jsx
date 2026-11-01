import { useOpenStatus } from '../hooks/useOpenStatus';

export default function OpenNow({ className = '' }) {
  const { open, label } = useOpenStatus();
  return (
    <p className={`open-now ${open ? 'open-now--open' : ''} ${className}`}>
      <span className="open-now__dot" aria-hidden="true" />
      {label}
    </p>
  );
}
