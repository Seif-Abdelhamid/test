import { useEffect, useState } from 'react';

const designs = [
  { id: 1, emoji: '🎁', label: 'Gift Card', desc: 'Classic' },
  { id: 2, emoji: '🎂', label: 'Birthday', desc: 'Party' },
  { id: 3, emoji: '✨', label: 'Holidays', desc: 'Festive' },
  { id: 4, emoji: '💝', label: 'Thank You', desc: 'Appreciation' },
];

const amounts = [10, 25, 50, 75, 100];

export default function GiftCardPage() {
  useEffect(() => { document.title = 'Gift Card | OMGyro Halal'; }, []);
  const [selectedDesign, setSelectedDesign] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [activeTab, setActiveTab] = useState<'buy' | 'balance'>('buy');
  const [form, setForm] = useState({ senderName: '', senderEmail: '', note: '', recipientName: '', recipientEmail: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="site-content__main page-id--gift-card">

      <section className="gift-card-page">
        <div className="gift-card-page-inner">

          {/* Tabs */}
          <div className="gift-card-tabs">
            <button
              type="button"
              className={'gift-card-tab' + (activeTab === 'buy' ? ' active' : '')}
              onClick={() => setActiveTab('buy')}
            >
              Buy Card
            </button>
            <button
              type="button"
              className={'gift-card-tab' + (activeTab === 'balance' ? ' active' : '')}
              onClick={() => setActiveTab('balance')}
            >
              Check Balance
            </button>
          </div>

          {activeTab === 'buy' ? (
            <>
              {/* Design selection */}
              <div className="gift-card-design-section" id="buy-section">
                <h2 className="gift-card-design-heading">Choose your card design</h2>
                <div className="gift-card-design-row">
                  {designs.map(d => (
                    <div
                      key={d.id}
                      className={'gift-card-design card-' + d.id + (selectedDesign === d.id ? ' selected' : '')}
                      data-design={d.id}
                      onClick={() => setSelectedDesign(d.id)}
                    >
                      <span className="gift-card-design-emoji">{d.emoji}</span>
                      <span className="gift-card-design-label">{d.label}</span>
                      <span className="gift-card-design-desc">{d.desc}</span>
                      <div className={'gift-card-design-bg gift-card-design-bg-' + d.id} aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Layout */}
              <div className="gift-card-layout">

                {/* Preview */}
                <div className="gift-card-preview-wrap" id="gift-card-preview-wrap">
                  <div className={'gift-card-preview preview-' + selectedDesign + ' card-anim-float'} id="gift-card-preview">
                    <div className="preview-bg-glow" aria-hidden="true" />
                    <div className="preview-holographic" aria-hidden="true" />
                    <div className="preview-shine" aria-hidden="true" />
                    <div className="preview-chip" aria-hidden="true" />
                    <div className="preview-magstrip" aria-hidden="true" />
                    <div className="preview-card-inner">
                      <div className="preview-top-row">
                        <span className="preview-design" id="preview-design">
                          {designs.find(d => d.id === selectedDesign)?.label || 'Gift Card'}
                        </span>
                      </div>
                      <div className="preview-number" aria-hidden="true">•••• •••• •••• 5082</div>
                      <div className="preview-mid-row">
                        <span className="preview-amount" id="preview-amount">${selectedAmount}</span>
                        <span className="preview-valid">VALID THRU <em>12/28</em></span>
                      </div>
                      <div className="preview-bottom-row">
                        <span className="preview-name" id="preview-name">
                          {form.recipientName ? form.recipientName.toUpperCase() : 'RECIPIENT NAME'}
                        </span>
                        <span className="preview-brand">OMGyro Halal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="gift-card-form" id="buy-card-form">

                  {/* Amount */}
                  <div className="gift-card-section">
                    <h3><span className="section-icon"><i className="fa-solid fa-coins" /></span> Amount</h3>
                    <div className="gift-card-amounts">
                      {amounts.map(a => (
                        <div
                          key={a}
                          className={'gift-card-amount' + (selectedAmount === a ? ' selected' : '')}
                          data-amount={a}
                          onClick={() => setSelectedAmount(a)}
                        >
                          ${a}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* From */}
                  <div className="gift-card-section">
                    <h3><span className="section-icon"><i className="fa-solid fa-user" /></span> From</h3>
                    <label className="gift-card-label">Your name <span className="required">*</span></label>
                    <input type="text" name="senderName" value={form.senderName} onChange={handleChange} className="gift-card-input" placeholder="Your name" required />
                    <label className="gift-card-label">Your email <span className="required">*</span></label>
                    <input type="email" name="senderEmail" value={form.senderEmail} onChange={handleChange} className="gift-card-input" placeholder="Your email" required />
                    <label className="gift-card-label">Message (optional)</label>
                    <input type="text" name="note" value={form.note} onChange={handleChange} className="gift-card-input" placeholder="Personal message" />
                  </div>

                  {/* To */}
                  <div className="gift-card-section">
                    <h3><span className="section-icon"><i className="fa-solid fa-heart" /></span> To</h3>
                    <label className="gift-card-label">Recipient name <span className="required">*</span></label>
                    <input type="text" name="recipientName" value={form.recipientName} onChange={handleChange} className="gift-card-input" placeholder="Recipient name" required />
                    <label className="gift-card-label">Recipient email <span className="required">*</span></label>
                    <input type="email" name="recipientEmail" value={form.recipientEmail} onChange={handleChange} className="gift-card-input" placeholder="Recipient email" required />
                  </div>

                  <a
                    href="https://omgyrohalal.square.site/"
                    className="gift-card-pay-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="gift-card-pay-btn__text">Buy Gift Card — ${selectedAmount}</span>
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="gift-card-balance-section" id="balance-section">
              <h2 className="gift-card-design-heading">Check Your Balance</h2>
              <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
                Check your remaining balance on our Square store.
              </p>
              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://omgyrohalal.square.site/"
                  className="gift-card-pay-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex' }}
                >
                  <span className="gift-card-pay-btn__text">Check Balance on Square</span>
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
