/**
 * Vercel Serverless Function: Create Square Payment Link for Gift Cards
 * 
 * Environment variables required:
 *   SQUARE_ACCESS_TOKEN - Your Square API access token
 *   SQUARE_LOCATION_ID  - Your Square location ID
 * 
 * Deploy: vercel deploy
 * Or connect repo to Vercel and add env vars in dashboard
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.SQUARE_ACCESS_TOKEN;
  const locationId = process.env.SQUARE_LOCATION_ID;

  if (!token || !locationId) {
    return res.status(503).json({
      error: 'Payment service not configured',
      message: 'Square API credentials are missing. See GIFT_CARD_SETUP.md for setup instructions.',
    });
  }

  try {
    const { amountCents, recipientEmail, recipientName, senderName } = req.body || {};

    if (!amountCents || amountCents < 500) {
      return res.status(400).json({ error: 'Invalid amount. Minimum $5.00.' });
    }

    const totalCents = Math.round(Number(amountCents));
    const idempotencyKey = `gc-${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const response = await fetch('https://connect.squareup.com/v2/online-checkout/payment-links', {
      method: 'POST',
      headers: {
        'Square-Version': '2024-11-20',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idempotency_key: idempotencyKey,
        description: `OMGyro Gift Card - ${recipientName || 'Gift'}`,
        quick_pay: {
          name: 'OMGyro Gift Card',
          price_money: {
            amount: totalCents,
            currency: 'USD',
          },
          location_id: locationId,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Square API error:', data);
      return res.status(response.status || 500).json({
        error: 'Payment link creation failed',
        message: data.errors?.[0]?.detail || 'Could not create checkout link.',
      });
    }

    const url = data.payment_link?.url;
    if (!url) {
      return res.status(500).json({ error: 'No payment URL in response' });
    }

    return res.status(200).json({ url });
  } catch (err) {
    console.error('create-payment-link error:', err);
    return res.status(500).json({
      error: 'Server error',
      message: err.message || 'Failed to create payment link.',
    });
  }
}
