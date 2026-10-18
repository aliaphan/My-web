import { scrollToTop } from '../utils/scrollToTop'
import './Footer.css'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a className="brand" href="#home" onClick={scrollToTop}>
          Alia <em>Phan</em>
        </a>
        <p>© {YEAR} Alia Phan</p>
        <a className="site-footer__top" href="#home" onClick={scrollToTop}>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
