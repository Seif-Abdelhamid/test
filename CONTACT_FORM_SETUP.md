# Contact Form Setup (Formspree)

The contact page (`contact/index.html`) uses **Formspree** so submissions are sent by email without a backend. Follow these steps to make it work.

## 1. Get a Formspree form ID

1. Go to **[formspree.io](https://formspree.io)** and sign up (free).
2. Click **“New form”** and give it a name (e.g. “OMGYRO Contact”).
3. Copy the **form ID** Formspree shows (e.g. `xyzabcde`). Your form URL will look like:  
   `https://formspree.io/f/xyzabcde`

## 2. Add the form ID to the contact page

1. Open **`contact/index.html`** in your editor.
2. Find the contact form (search for `ultimate-form` or `contact-form`).
3. In the `<form>` tag, find:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
4. Replace **`YOUR_FORMSPREE_ID`** with your actual form ID, e.g.:
   ```html
   action="https://formspree.io/f/xyzabcde"
   ```
5. Save the file.

## 3. Confirm in Formspree

- In your Formspree dashboard, the email you used to sign up will receive new submissions.
- You can add more notification emails or turn on other options (e.g. Slack, webhooks) in Formspree’s form settings.

## What the form sends

- **Name** (required)  
- **Email** (required)  
- **Subject** (optional)  
- **Message** (required)  

Submissions are sent to Formspree, which emails them to your Formspree account email. The subject line of those emails is set to **“OMGYRO Contact Form”**.

## If the form doesn’t work

- Make sure you replaced **every** instance of `YOUR_FORMSPREE_ID` in the form `action`.
- If the ID is still the placeholder, the page will show:  
  *“Please set your Formspree form ID in the form action. Get one free at formspree.io”*
- Check the browser console (F12 → Console) for any errors when you click **Send Message**.
