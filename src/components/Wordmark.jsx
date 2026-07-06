export default function Wordmark({ className = '' }) {
  return (
    <span
      className={`wordmark${className ? ` ${className}` : ''}`}
      aria-label="The Sailors Group"
    >
      <img
        className="wordmark-icon"
        src="/sailors-bigger.svg"
        alt=""
        aria-hidden="true"
      />
      <span className="wordmark-text">The Sailors Group</span>
    </span>
  )
}
