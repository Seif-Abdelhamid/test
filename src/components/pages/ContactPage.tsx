import { useEffect, useState, useRef } from 'react';

export default function ContactPage() {
  useEffect(() => { document.title = 'Contact | OMGyro Halal'; }, []);

  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('Sending...');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('Message sent! We\'ll get back to you soon.');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <main className="site-content__main">

      <section className="ultimate-form-section">
        <div className="form-mesh-bg" />
        <div className="container">
          <div className="ultimate-form-header">
            <div className="ultimate-badge badge-form">
              <div className="badge-sparkle" />
              <span className="badge-icon">💫</span>
              <span className="badge-text">Send Message</span>
            </div>
            <h2 className="ultimate-title">
              <span className="title-word word-1">Share</span>
              <span className="title-word word-2">Your</span>
              <span className="title-word word-3">Thoughts</span>
            </h2>
          </div>
          <div className="ultimate-form-wrapper">
            <div className="form-glow-orb" />
            <form className="ultimate-form" id="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
              <input type="hidden" name="_subject" value="OMGYRO Contact Form" />
              <div className="form-row-ultimate">
                <div className="ultimate-field">
                  <div className="field-glow" />
                  <div className="field-icon-wrapper">
                    <i className="fa fa-user" />
                  </div>
                  <input type="text" id="ultimate-name" name="name" className="ultimate-input" placeholder="Your Name" required />
                  <div className="field-underline" />
                  <div className="field-focus-line" />
                </div>

                <div className="ultimate-field">
                  <div className="field-glow" />
                  <div className="field-icon-wrapper">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <input type="email" id="ultimate-email" name="email" className="ultimate-input" placeholder="Your Email" required />
                  <div className="field-underline" />
                  <div className="field-focus-line" />
                </div>
              </div>

              <div className="ultimate-field">
                <div className="field-glow" />
                <div className="field-icon-wrapper">
                  <i className="fa fa-tag" />
                </div>
                <input type="text" id="ultimate-subject" name="subject" className="ultimate-input" placeholder="Subject" />
                <div className="field-underline" />
                <div className="field-focus-line" />
              </div>

              <div className="ultimate-field textarea-field">
                <div className="field-glow" />
                <div className="field-icon-wrapper">
                  <i className="fa fa-comment" />
                </div>
                <textarea id="ultimate-message" name="message" className="ultimate-input ultimate-textarea" rows={6} placeholder="Your Message" required />
                <div className="field-underline" />
                <div className="field-focus-line" />
              </div>

              <div className="form-status" id="form-status" aria-live="polite" role="status">{status}</div>
              <div className="form-submit-wrap">
                <button type="submit" className="ultimate-submit" id="form-submit-btn">
                  <span className="submit-text">Send Message</span>
                  <span className="submit-icon">
                    <i className="fa fa-paper-plane" />
                  </span>
                  <div className="submit-shine" />
                  <div className="submit-ripple" />
                  <div className="submit-particles">
                    <span /><span /><span />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
