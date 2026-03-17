# Gift Card Payment Setup

The gift card page uses **Square's Payment Links API** to create secure checkout links. To enable real payments:

## Option 1: Deploy to Vercel (Recommended)

1. **Sign up** at [vercel.com](https://vercel.com) (free).

2. **Deploy** your project:
   - Connect your GitHub repo to Vercel, or
   - Run `npx vercel` in the project root and follow prompts.

3. **Add environment variables** in Vercel Dashboard → Project → Settings → Environment Variables:
   - `SQUARE_ACCESS_TOKEN` – Your Square API access token
   - `SQUARE_LOCATION_ID` – Your Square location ID

4. **Get Square credentials**:
   - Go to [developer.squareup.com](https://developer.squareup.com)
   - Create an app (or use existing)
   - Get **Access Token** from the app dashboard
   - Get **Location ID** from Square Dashboard → Locations → [Your Location] → Settings

5. **Update the gift card page** – Set the API URL in `gift-card/index.html`:
   ```javascript
   window.GIFT_CARD_API = 'https://your-vercel-app.vercel.app/api/create-payment-link';
   ```
   Replace with your actual Vercel deployment URL.

## Option 2: Fallback (No Backend)

If you don't deploy the API, the "Pay" button falls back to opening your Square Online Store (`https://omgyrohalal.square.site/`). You can add gift cards as products in Square and link to them.

## Square API Permissions

Your Square app needs:
- **ORDERS_READ**
- **ORDERS_WRITE**
- **PAYMENTS_WRITE**

Enable these in the Square Developer Dashboard for your application.
