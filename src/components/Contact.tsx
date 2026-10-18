import { content } from '../data/content'
import './Contact.css'

const { contact } = content

export function Contact() {
  return (
    <section className="contact" id="contact">
      <img className="contact__flower" src="/images/flower-rose.png" alt="" width={289} height={292} loading="lazy" />

      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <h2>
            Let's <em>connect</em>.
          </h2>
          <p className="contact__lede">{contact.lede}</p>
        </div>

        <dl className="contact__list reveal">
          {contact.links.map((link) => (
            <div key={link.label}>
              <dt>{link.label}</dt>
              <dd>
                <a href={link.href} {...(link.external && { target: '_blank', rel: 'noopener' })}>
                  {link.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
