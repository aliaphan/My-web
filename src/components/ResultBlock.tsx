import type { Result } from '../data/types'

export function ResultBlock({ result }: { result: Result }) {
  return (
    <div className="results">
      <h4 className="mini-label">{result.label ?? 'Result'}</h4>
      {'highlights' in result ? (
        <ul className="results__list">
          {result.highlights.map((item) => (
            <li key={item.figure}>
              <strong>{item.figure}</strong> {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>{result.text}</p>
      )}
    </div>
  )
}
