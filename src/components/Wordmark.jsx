export default function Wordmark({ className = '' }) {
  return (
    <span
      className={`wordmark${className ? ` ${className}` : ''}`}
      aria-label="Anchor Labs"
    >
      <img
        className="wordmark-icon"
        src="/anchor-mark.svg"
        alt=""
        aria-hidden="true"
      />
      <span className="wordmark-text">Anchor Labs</span>
    </span>
  )
}
