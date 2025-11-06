# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (or **"Log In"** if you already have an account)
3. Create a free account (you can use Google, GitHub, or email)

## Step 2: Create an Email Service

1. Once logged in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported provider
4. Follow the connection steps for your provider
5. After connecting, you'll get a **Service ID** (e.g., `service_xxxxxxx`)
   - **Copy this Service ID** - you'll need it later

## Step 3: Create an Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Choose a template or start from scratch
4. In the template editor:
   - **To Email**: Your email address (where you want to receive messages)
   - **From Name**: `{{from_name}}` (or `{{name}}`)
   - **Subject**: `Portfolio Contact: {{subject}}` or `New message from {{name}}`
   - **Content**: 
     ```
     From: {{name}}
     Email: {{email}}
     
     Message:
     {{message}}
     ```
5. Click **"Save"**
6. You'll get a **Template ID** (e.g., `template_xxxxxxx`)
   - **Copy this Template ID** - you'll need it later

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **"Public Key"** (also called User ID)
   - It looks like: `xxxxxxxxxxxxx`
   - **Copy this Public Key** - you'll need it later

## Step 5: Update Your Code

1. Open `src/app/service/email.service.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
private serviceId = 'YOUR_SERVICE_ID';      // From Step 2
private templateId = 'YOUR_TEMPLATE_ID';    // From Step 3
private publicKey = 'YOUR_PUBLIC_KEY';      // From Step 4
```

## Step 6: Test Your Setup

1. Run your Angular app: `npm start`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email inbox for the test message
5. Check the browser console for any errors

## Troubleshooting

- **"Invalid service ID"**: Double-check your Service ID
- **"Invalid template ID"**: Double-check your Template ID
- **"Public key is required"**: Make sure you've initialized EmailJS with your public key
- **Email not received**: Check your spam folder and verify the email service connection

## Free Tier Limits

- **200 emails/month** on the free plan
- Upgrade to paid plans for more emails if needed

## Security Note

- The Public Key is safe to expose in frontend code
- Never share your Private Key (if you have one)
- Service ID and Template ID are also safe to expose

