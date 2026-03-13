import { useState } from 'react';
import { useEffect } from 'react';
import { BaseCrudService } from '@/integrations';
import { ContactSubmissions } from '@/entities';
import Reveal from '@/components/Reveal';

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
    <main className="bg-white min-h-screen">
      <section className="bg-brand-black py-20 px-4 text-center">
        <Reveal>
          <span className="text-primary font-heading uppercase tracking-widest text-sm">Get In Touch</span>
          <h1 className="font-display text-6xl md:text-7xl uppercase text-white mt-2">Contact Us</h1>
        </Reveal>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info column */}
          <Reveal>
            <h2 className="font-display text-4xl uppercase text-brand-black mb-8">We'd Love to Hear From You</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-brand-black">South Orange, NJ</p>
                  <p className="font-paragraph text-foreground/60 text-sm">+ Locations across New Jersey</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-brand-black">Email Us</p>
                  <a href="mailto:feedback@mamounts.com" className="font-paragraph text-primary text-sm hover:underline">feedback@mamounts.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <i className="fa-brands fa-instagram text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-brand-black">Follow Us</p>
                  <a href="https://www.instagram.com/omgyrohalal/" target="_blank" rel="noopener noreferrer" className="font-paragraph text-primary text-sm hover:underline">@omgyrohalal</a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={150}>
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <i className="fa-solid fa-circle-check text-green-500 text-4xl mb-4" />
                <h3 className="font-display text-3xl uppercase text-brand-black mb-2">Message Sent!</h3>
                <p className="font-paragraph text-foreground/60">We'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-primary font-heading text-sm hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-heading font-semibold text-brand-black text-sm mb-1">Name <span className="text-primary">*</span></label>
                  <input
                    type="text"
                    name="customerName"
                    value={form.customerName}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-brand-black text-sm mb-1">Email <span className="text-primary">*</span></label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={form.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full border border-border rounded-xl px-4 py-3 font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-brand-black text-sm mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 py-3 font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-brand-black text-sm mb-1">Message <span className="text-primary">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-border rounded-xl px-4 py-3 font-paragraph text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-destructive font-paragraph text-sm">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand-black text-white font-heading font-semibold py-4 rounded-full hover:bg-primary transition-all duration-200 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
