import { useEffect, useState } from 'react';

export default function GiftCardPage() {
  useEffect(() => { document.title = 'Gift Card | OMGyro Halal'; }, []);

  const [activeTab, setActiveTab] = useState<'buy' | 'balance'>('buy');
  const [selectedDesign, setSelectedDesign] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [showCustomPanel, setShowCustomPanel] = useState(false);

  const designs: { id: number; emoji?: string; label: string; desc: string; isCustom?: boolean }[] = [
    { id: 1, emoji: '🎁', label: 'Gift Card', desc: 'Classic' },
    { id: 2, emoji: '🎂', label: 'Birthday', desc: 'Party' },
    { id: 3, emoji: '✨', label: 'Holidays', desc: 'Festive' },
    { id: 4, emoji: '💝', label: 'Thank You', desc: 'Appreciation' },
    { id: 5, label: 'Custom', desc: 'Design yours', isCustom: true },
  ];

  const amounts = [10, 25, 50, 75, 100];

  function handleAmountClick(amt: number | 'custom') {
    if (amt === 'custom') {
      setShowCustomAmount(true);
      setSelectedAmount(0);
    } else {
      setShowCustomAmount(false);
      setSelectedAmount(amt as number);
    }
  }

  const displayAmount = showCustomAmount && customAmount ? parseInt(customAmount) : selectedAmount;
  const fee = +(displayAmount * 0.05).toFixed(2);
  const total = +(displayAmount + fee).toFixed(2);

  return (
    <main className="site-content__main">

      <section className="gift-card-page">
        <div className="gift-card-page-inner">
          <div className="gift-card-tabs">
            <button type="button" className={`gift-card-tab${activeTab === 'buy' ? ' active' : ''}`} onClick={() => setActiveTab('buy')}>Buy Card</button>
            <button type="button" className={`gift-card-tab${activeTab === 'balance' ? ' active' : ''}`} onClick={() => setActiveTab('balance')}>Check Balance</button>
          </div>

          {/* Design Section */}
          <div className="gift-card-design-section" id="buy-section" style={{ display: activeTab === 'buy' ? undefined : 'none' }}>
            <h2 className="gift-card-design-heading">Choose your card design</h2>
            <div className="gift-card-design-row">
              {designs.map(d => (
                <div
                  key={d.id}
                  className={`gift-card-design card-${d.id}${selectedDesign === d.id ? ' selected' : ''}`}
                  data-design={d.id}
                  onClick={() => { setSelectedDesign(d.id); setShowCustomPanel(d.id === 5); }}
                >
                  {d.isCustom ? (
                    <span className="gift-card-design-emoji"><i className="fa-solid fa-palette" /></span>
                  ) : (
                    <span className="gift-card-design-emoji">{d.emoji}</span>
                  )}
                  <span className="gift-card-design-label">{d.label}</span>
                  <span className="gift-card-design-desc">{d.desc}</span>
                  <div className={`gift-card-design-bg gift-card-design-bg-${d.id}`} aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* Custom Panel */}
            <div className="gift-card-custom-panel" id="custom-design-panel" aria-hidden={!showCustomPanel} style={{ display: showCustomPanel ? undefined : 'none' }}>
              <h3 className="gift-card-custom-panel-title"><i className="fa-solid fa-wand-magic-sparkles" /> Design your card <span className="gift-card-custom-emoji">✨</span></h3>
              <p className="gift-card-custom-panel-desc">Colors, photo, message — make it yours! Everything updates live. 🎨</p>

              <div className="gift-card-custom-section">
                <h4 className="gift-card-custom-section-title"><span className="gift-card-custom-section-emoji">🖼️</span> Add a photo</h4>
                <div className="gift-card-custom-photo-row">
                  <label className="gift-card-custom-photo-btn">
                    <input type="file" id="custom-card-photo" accept="image/*" aria-label="Upload photo for card" />
                    <span className="gift-card-custom-photo-btn-inner"><i className="fa-solid fa-image" /> Choose image</span>
                  </label>
                  <span className="gift-card-custom-photo-hint">Shows on your card — max 5MB</span>
                </div>
              </div>

              <div className="gift-card-custom-section">
                <h4 className="gift-card-custom-section-title"><span className="gift-card-custom-section-emoji">💬</span> Message on card <span className="gift-card-custom-optional">(optional)</span></h4>
                <input type="text" id="custom-card-message" className="gift-card-input gift-card-custom-message-input" placeholder="e.g. Happy Birthday! 🎂" maxLength={40} aria-label="Short message on card" />
              </div>

              <div className="gift-card-custom-section">
                <h4 className="gift-card-custom-section-title"><span className="gift-card-custom-section-emoji">🎨</span> Colors — tap a swatch or use picker</h4>
                <div className="gift-card-custom-swatches">
                  <div className="gift-card-custom-swatch-group">
                    <span className="gift-card-custom-swatch-label">Top bar</span>
                    <div className="gift-card-custom-swatch-row" id="swatch-row-top">
                      <button type="button" className="gift-card-swatch" data-color="#FF6600" data-target="top" style={{ background: '#FF6600' }} title="Orange" />
                      <button type="button" className="gift-card-swatch" data-color="#2c5282" data-target="top" style={{ background: '#2c5282' }} title="Blue" />
                      <button type="button" className="gift-card-swatch" data-color="#2d5a27" data-target="top" style={{ background: '#2d5a27' }} title="Green" />
                      <button type="button" className="gift-card-swatch" data-color="#e85d7a" data-target="top" style={{ background: '#e85d7a' }} title="Pink" />
                      <button type="button" className="gift-card-swatch" data-color="#1a1a2e" data-target="top" style={{ background: '#1a1a2e' }} title="Navy" />
                      <button type="button" className="gift-card-swatch" data-color="#9d4edd" data-target="top" style={{ background: '#9d4edd' }} title="Purple" />
                      <button type="button" className="gift-card-swatch" data-color="#e85d04" data-target="top" style={{ background: '#e85d04' }} title="Sunset" />
                      <button type="button" className="gift-card-swatch" data-color="#b76e79" data-target="top" style={{ background: '#b76e79' }} title="Rose" />
                    </div>
                  </div>
                  <div className="gift-card-custom-swatch-group">
                    <span className="gift-card-custom-swatch-label">Text &amp; amount</span>
                    <div className="gift-card-custom-swatch-row" id="swatch-row-accent">
                      <button type="button" className="gift-card-swatch" data-color="#0a0a0a" data-target="accent" style={{ background: '#0a0a0a' }} title="Black" />
                      <button type="button" className="gift-card-swatch" data-color="#1a365d" data-target="accent" style={{ background: '#1a365d' }} title="Dark blue" />
                      <button type="button" className="gift-card-swatch" data-color="#4a2c38" data-target="accent" style={{ background: '#4a2c38' }} title="Brown" />
                      <button type="button" className="gift-card-swatch" data-color="#fff" data-target="accent" style={{ background: '#fff', border: '2px solid #ddd' }} title="White" />
                      <button type="button" className="gift-card-swatch" data-color="#c45c2a" data-target="accent" style={{ background: '#c45c2a' }} title="Warm" />
                      <button type="button" className="gift-card-swatch" data-color="#b8325c" data-target="accent" style={{ background: '#b8325c' }} title="Rose" />
                      <button type="button" className="gift-card-swatch" data-color="#2d1810" data-target="accent" style={{ background: '#2d1810' }} title="Dark" />
                    </div>
                  </div>
                </div>
                <div className="gift-card-custom-controls">
                  <div className="gift-card-custom-group">
                    <label className="gift-card-custom-label">Top bar</label>
                    <div className="gift-card-custom-row">
                      <input type="color" id="custom-color-top" defaultValue="#FF6600" aria-label="Top bar color" className="gift-card-color-input" />
                      <input type="text" id="custom-color-top-hex" defaultValue="#FF6600" className="gift-card-custom-hex" maxLength={7} aria-label="Top bar hex" />
                    </div>
                  </div>
                  <div className="gift-card-custom-group">
                    <label className="gift-card-custom-label">Background start</label>
                    <div className="gift-card-custom-row">
                      <input type="color" id="custom-color-bg-start" defaultValue="#ffffff" aria-label="Background start" className="gift-card-color-input" />
                      <input type="text" id="custom-color-bg-start-hex" defaultValue="#ffffff" className="gift-card-custom-hex" maxLength={7} aria-label="Hex" />
                    </div>
                  </div>
                  <div className="gift-card-custom-group">
                    <label className="gift-card-custom-label">Background end</label>
                    <div className="gift-card-custom-row">
                      <input type="color" id="custom-color-bg-end" defaultValue="#f5f5f5" aria-label="Background end" className="gift-card-color-input" />
                      <input type="text" id="custom-color-bg-end-hex" defaultValue="#f5f5f5" className="gift-card-custom-hex" maxLength={7} aria-label="Hex" />
                    </div>
                  </div>
                  <div className="gift-card-custom-group">
                    <label className="gift-card-custom-label">Accent</label>
                    <div className="gift-card-custom-row">
                      <input type="color" id="custom-color-accent" defaultValue="#0a0a0a" aria-label="Accent color" className="gift-card-color-input" />
                      <input type="text" id="custom-color-accent-hex" defaultValue="#0a0a0a" className="gift-card-custom-hex" maxLength={7} aria-label="Hex" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="gift-card-custom-presets-wrap">
                <span className="gift-card-custom-presets-label">One-click vibes</span>
                <div className="gift-card-custom-presets">
                  <button type="button" className="gift-card-custom-preset" data-preset="classic" aria-label="Classic orange"><span className="gift-card-preset-emoji">🍊</span> Classic</button>
                  <button type="button" className="gift-card-custom-preset" data-preset="midnight" aria-label="Midnight"><span className="gift-card-preset-emoji">🌙</span> Midnight</button>
                  <button type="button" className="gift-card-custom-preset" data-preset="forest" aria-label="Forest"><span className="gift-card-preset-emoji">🌲</span> Forest</button>
                  <button type="button" className="gift-card-custom-preset" data-preset="sunset" aria-label="Sunset"><span className="gift-card-preset-emoji">🌅</span> Sunset</button>
                  <button type="button" className="gift-card-custom-preset" data-preset="rose" aria-label="Rose"><span className="gift-card-preset-emoji">🌷</span> Rose</button>
                  <button type="button" className="gift-card-custom-preset" data-preset="ocean" aria-label="Ocean"><span className="gift-card-preset-emoji">🌊</span> Ocean</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card Preview + Form */}
          <div className="gift-card-layout" style={{ display: activeTab === 'buy' ? undefined : 'none' }}>
            <div className="gift-card-preview-wrap" id="gift-card-preview-wrap">
              <div className={`gift-card-preview preview-${selectedDesign} card-anim-float`} id="gift-card-preview">
                <div className="preview-bg-glow" aria-hidden="true" />
                <div className="preview-holographic" aria-hidden="true" />
                <div className="preview-celebration preview-celebration--1" aria-hidden="true" />
                <div className="preview-celebration preview-celebration--2" aria-hidden="true" />
                <div className="preview-celebration preview-celebration--3" aria-hidden="true" />
                <div className="preview-celebration preview-celebration--4" aria-hidden="true" />
                <div className="preview-celebration preview-celebration--5" aria-hidden="true" />
                <div className="preview-custom-image" id="preview-custom-image" aria-hidden="true" />
                <div className="preview-shine" aria-hidden="true" />
                <div className="preview-shine preview-shine--fast" aria-hidden="true" />
                <div className="preview-chip" aria-hidden="true" />
                <div className="preview-magstrip" aria-hidden="true" />
                <div className="preview-card-inner">
                  <div className="preview-top-row">
                    <span className="preview-design" id="preview-design">
                      {designs.find(d => d.id === selectedDesign)?.label || 'Gift Card'}
                    </span>
                  </div>
                  <span className="preview-custom-message" id="preview-custom-message" aria-hidden="true" />
                  <div className="preview-number" aria-hidden="true">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 5082</div>
                  <div className="preview-mid-row">
                    <span className="preview-amount" id="preview-amount">${displayAmount || 50}</span>
                    <span className="preview-valid">VALID THRU <em>12/28</em></span>
                  </div>
                  <div className="preview-bottom-row">
                    <span className="preview-name" id="preview-name">{recipientName ? recipientName.toUpperCase() : 'RECIPIENT NAME'}</span>
                    <span className="preview-brand">OMGyro Halal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gift-card-form" id="buy-card-form">
              <div className="gift-card-section">
                <h3><span className="section-icon"><i className="fa-solid fa-coins" /></span> Amount</h3>
                <div className="gift-card-amounts">
                  {amounts.map(amt => (
                    <div key={amt} className={`gift-card-amount${selectedAmount === amt && !showCustomAmount ? ' selected' : ''}`} data-amount={amt} onClick={() => handleAmountClick(amt)}>${amt}</div>
                  ))}
                  <div className={`gift-card-amount${showCustomAmount ? ' selected' : ''}`} data-amount="custom" onClick={() => handleAmountClick('custom')}>Custom</div>
                </div>
                {showCustomAmount && (
                  <div className="gift-card-custom-amount" id="custom-amount-wrap">
                    <label className="gift-card-label">Amount ($5–$500)</label>
                    <input type="number" id="custom-amount-input" className="gift-card-input" placeholder="25" min={5} max={500} step={1} value={customAmount} onChange={e => setCustomAmount(e.target.value)} />
                  </div>
                )}
              </div>

              <div className="gift-card-section">
                <h3><span className="section-icon"><i className="fa-solid fa-user" /></span> From</h3>
                <label className="gift-card-label">Your name <span className="required">*</span></label>
                <input type="text" name="senderName" id="sender-name" className="gift-card-input" placeholder="Your name" required />
                <label className="gift-card-label">Your email <span className="required">*</span></label>
                <input type="email" name="senderEmail" id="sender-email" className="gift-card-input" placeholder="Your email" required />
                <label className="gift-card-label">Message (optional)</label>
                <input type="text" name="note" id="note" className="gift-card-input" placeholder="Personal message" />
                <div className="gift-card-checkbox">
                  <input type="checkbox" id="send-myself" name="sendMyself" />
                  <label htmlFor="send-myself">Send to myself</label>
                </div>
              </div>

              <div className="gift-card-section">
                <h3><span className="section-icon"><i className="fa-solid fa-heart" /></span> To</h3>
                <label className="gift-card-label">Recipient name <span className="required">*</span></label>
                <input type="text" name="recipientName" id="recipient-name" className="gift-card-input" placeholder="Recipient name" required onChange={e => setRecipientName(e.target.value)} />
                <label className="gift-card-label">Recipient email <span className="required">*</span></label>
                <input type="email" name="recipientEmail" id="recipient-email" className="gift-card-input" placeholder="Recipient email" required />
              </div>

              <div className="gift-card-section">
                <h3><span className="section-icon"><i className="fa-solid fa-clock" /></span> Delivery</h3>
                <div className="gift-card-delivery">
                  <label><input type="radio" name="delivery" value="now" defaultChecked /> Now</label>
                  <label><input type="radio" name="delivery" value="later" /> Later</label>
                </div>
              </div>

              <div className="gift-card-summary">
                <div className="gift-card-summary-row"><span>Subtotal</span><span id="subtotal">${(displayAmount || 50).toFixed(2)}</span></div>
                <div className="gift-card-summary-row"><span>Fee</span><span id="fee">${fee.toFixed(2)}</span></div>
                <div className="gift-card-summary-row gift-card-summary-total"><span>Total</span><span id="total">${total.toFixed(2)}</span></div>
              </div>

              <div className="gift-card-buttons">
                <button type="button" id="gift-card-pay-btn" className="gift-card-pay-btn">
                  <span className="gift-card-pay-btn-shine" aria-hidden="true" />
                  <span className="btn-text">Pay ${total.toFixed(2)} — Send Gift Card</span>
                </button>
                <div className="gift-card-secure"><i className="fa-solid fa-lock" /> Secure checkout (Square)</div>
              </div>
            </div>
          </div>

          {/* Check Balance */}
          <div className="gift-card-form gift-card-form--balance" id="check-balance-form" style={{ display: activeTab === 'balance' ? undefined : 'none' }}>
            <div className="gift-card-section">
              <h3><span className="section-icon"><i className="fa-solid fa-wallet" /></span> Check Balance</h3>
              <label className="gift-card-label">Gift Card Number</label>
              <input type="text" id="balance-card-number" className="gift-card-input" placeholder="Enter gift card number" />
              <label className="gift-card-label">Security Code</label>
              <input type="text" id="balance-security-code" className="gift-card-input" placeholder="Enter code" />
              <a href="https://squareup.com/gift-cards/balance" className="gift-card-pay-btn" target="_blank" rel="noopener" style={{ marginTop: '0.75rem', textDecoration: 'none', display: 'inline-block' }}>Check Balance on Square</a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
