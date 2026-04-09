---
sidebar_position: 2
---

# Paid forms and payouts

If you set an **application fee** on a custom form (anything above **$0.00** in **Settings → Payment**), applicants pay when they submit. This guide explains what you need to do as a **company producer** so your organization can receive its share of those payments.

:::info How it works (simple version)

- Applicants pay through TroupeIT’s payment flow (secure card checkout).
- TroupeIT retains a **platform fee**; the remainder is allocated for payout to **your** company’s payout account.
- You connect **Stripe** once per company so Stripe knows where to send your share.

:::

This is separate from your **TroupeIT subscription** (plan and billing). Subscription billing is unchanged; payout setup only affects money from **custom form** application fees.

## Before you start

1. **Custom forms** must be turned on for your site (you should see **Forms** in the navigation).
2. You need permission to edit **company** settings (typically a producer or owner role).

## Step 1: Open payout setup

1. Go to your company’s **settings** page (for example **Company → Edit** or your company settings URL).
2. In the sidebar, open **Payout setup**.

If you do not see **Payout setup**, custom-form payouts may not be enabled for your environment yet—contact support.

## Step 2: Connect Stripe and finish onboarding

The **Payout setup** screen lists three requirements:

1. **Stripe account connected** — TroupeIT creates or links a **Stripe Connect** Express account for your company.
2. **Identity and banking (Stripe)** — You complete Stripe’s steps (business details, identity verification, bank account) so charges can be paid out to you.
3. **TroupeIT approval for paid forms** — After Stripe shows you as ready to charge, TroupeIT turns on paid forms for your company.

Click **Set up Stripe payouts** (or **Continue Stripe setup** if you already started). You will leave TroupeIT briefly to complete Stripe’s flow, then return.

Use **Refresh status** if you just finished Stripe and the page still looks out of date.

## Step 3: Wait for TroupeIT approval

When Stripe onboarding is complete, you may see a message that **TroupeIT still needs to enable paid forms** for your company. That is normal: an internal approval step prevents paid forms from going live before your account is verified.

If everything looks stuck, contact **TroupeIT support** with your company name.

## Step 4: Set your application fee and publish

1. Open your form → **Settings** → **Payment**.
2. Enter the **Application fee** (not zero).
3. If payout setup is incomplete, a **warning** appears at the top of the payment section with shortcuts to **Set up Stripe payouts** or **Company settings**.

You can save a paid form as **draft** while you finish setup. **Publish** is only allowed when:

- Stripe is connected and able to accept charges, and  
- TroupeIT has approved paid forms for your company.

The same rules apply when **reopening** a published paid form or changing certain settings on an already-published paid form with a fee.

## Tips from the form builder

You can start Stripe onboarding from **Form settings → Payment** as well; it uses the same Connect flow as **Payout setup** on the company page.

Keep your **URL slug** stable after you share links; changing it changes the public address of the form.

## Coupon codes

If your form supports **coupons**, a 100% discount can remove the need for card entry for that submission. Otherwise, applicants complete payment on the thank-you step after they submit.

## Troubleshooting

| What you see | What to do |
|--------------|------------|
| Cannot publish a paid form | Open **Payout setup** and complete every step; confirm **TroupeIT approval** shows complete. Use **Refresh status**. |
| Warning in form payment settings | Follow the bullets in the alert (connect Stripe, finish banking, or wait for approval). |
| Applicant says payment is unavailable | Usually the company is not fully approved for paid forms, or the form was misconfigured. Check **Payout setup** and form status (published, dates, closed). |

For technical and operations details (webhooks, environment variables, engineering references), your team can use the developer doc **Custom forms: Stripe Connect and paid submissions** in the main TroupeIT repository (`md-docs/CUSTOM_FORMS_STRIPE_CONNECT.md`).
