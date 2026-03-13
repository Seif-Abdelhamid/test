import { useState } from 'react';
import { useEffect } from 'react';
import { BaseCrudService } from '@/integrations';
import { ContactSubmissions } from '@/entities';

export default function ContactPage() {
  const [form, setForm] = useState({ customerName: '', emailAddress: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => { document.title = 'Contact | OMGyro Halal'; }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customerName || !form.emailAddress || !form.message) return;
    setStatus('sending');
    try {
      await BaseCrudService.create<ContactSubmissions>('contactsubmissions', {
        ...form,
        submissionDate: new Date().toISOString(),
      });
      setStatus('success');
      setForm({ customerName: '', emailAddress: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="site-content__main page-id--contact">

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
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <i className="fa-solid fa-circle-check" style={{ fontSize: '3rem', color: '#10b981', marginBottom: '16px', display: 'block' }} />
                <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ color: '#666' }}>We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '24px', color: '#FF6600', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="ultimate-form" onSubmit={handleSubmit}>
                <div className="form-row-ultimate">
                  <div className="ultimate-field">
                    <div className="field-glow" />
                    <div className="field-icon-wrapper"><i className="fa fa-user" /></div>
                    <input
                      type="text"
                      name="customerName"
                      value={form.customerName}
                      onChange={handleChange}
                      className="ultimate-input"
                      placeholder="Your Name"
                      required
                    />
                    <div className="field-underline" />
                    <div className="field-focus-line" />
                  </div>
                  <div className="ultimate-field">
                    <div className="field-glow" />
                    <div className="field-icon-wrapper"><i className="fa-solid fa-envelope" /></div>
                    <input
                      type="email"
                      name="emailAddress"
                      value={form.emailAddress}
                      onChange={handleChange}
                      className="ultimate-input"
                      placeholder="Your Email"
                      required
                    />
                    <div className="field-underline" />
                    <div className="field-focus-line" />
                  </div>
                </div>

                <div className="ultimate-field">
                  <div className="field-glow" />
                  <div className="field-icon-wrapper"><i className="fa fa-tag" /></div>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="ultimate-input"
                    placeholder="Subject"
                  />
                  <div className="field-underline" />
                  <div className="field-focus-line" />
                </div>

                <div className="ultimate-field textarea-field">
                  <div className="field-glow" />
                  <div className="field-icon-wrapper"><i className="fa fa-comment" /></div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="ultimate-input ultimate-textarea"
                    rows={6}
                    placeholder="Your Message"
                    required
                  />
                  <div className="field-underline" />
                  <div className="field-focus-line" />
                </div>

                {status === 'error' && (
                  <div className="form-status form-status--error" aria-live="polite">Something went wrong. Please try again.</div>
                )}

                <div className="form-submit-wrap">
                  <button type="submit" className="ultimate-submit" disabled={status === 'sending'}>
                    <span className="submit-text">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    <span className="submit-icon"><i className="fa fa-paper-plane" /></span>
                    <div className="submit-shine" />
                    <div className="submit-ripple" />
                    <div className="submit-particles"><span /><span /><span /></div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
