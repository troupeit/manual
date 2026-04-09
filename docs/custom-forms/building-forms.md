---
sidebar_position: 1
---

# Building and managing custom forms

Custom forms let your company publish structured applications (auditions, registrations, waivers, and similar flows). You design the form, choose when it is open, and review submissions from your dashboard.

:::note Availability

Custom forms appear when the feature is enabled for your TroupeIT environment. If you do not see **Forms** in the app, contact your administrator or TroupeIT support.

:::

## Open the forms list

From the main app, go to **Forms** (`/custom_forms`). If you belong to more than one company, pick the company whose forms you want to work with.

The list shows each form’s title, status, submission count, and quick actions.

## Create a new form

1. Click the control to create a new form (for example **Create form** or **New form**).
2. Enter a **title** and optional **description**. The description is for your team’s reference.
3. After you save, the app opens the form editor for that form.

New forms start in **draft**. Draft forms are not open to the public until you publish them.

## Form statuses

| Status | What it means |
|--------|----------------|
| **Draft** | You are still editing. Only you (and your team with access) can open it; use **Preview** to see the applicant experience. |
| **Published** | The form accepts submissions at its public link (subject to open/close dates and other settings). |
| **Closed** | The form no longer accepts new submissions. Existing responses are kept. |
| **Archived** | The form is set aside from your main list; use your filters or archived view to find it again. |

You can **close** a published form to stop new entries, then **reopen** it later if needed.

## The form editor: three tabs

### Builder

The **Builder** tab is where you structure the form:

- **Sections** group related questions. Each new form includes a first section; you can add more and give each section a title and optional description.
- **Fields** are the actual questions or content. Use **Add field** to insert a field type (short answer, paragraph, multiple choice, file upload, dates, scales, and more).
- Click a field to edit its label, whether it is required, help text, and type-specific options (for example choices for a dropdown).
- Drag fields by the handle to **reorder** them within a section.

Display-only types such as **Heading** and **Info text** help you structure long forms without collecting an answer.

### Settings

The **Settings** tab controls how the form behaves and how applicants experience it. Highlights:

- **Basic information**: Title, internal description, and **URL slug**. The public link uses the slug (for example `/apply/your-slug`). Use lowercase letters, numbers, and hyphens only.
- **Public listing**: Optionally show the form in TroupeIT’s public forms directory and add a short public description.
- **Schedule**: Optional **Opens at** and **Closes at** times. If you leave them empty, availability follows publish/close status only.
- **Payment**: **Application fee** in dollars. Set **$0.00** for free forms. If you charge a fee, your company must complete [payout setup](./paid-forms-payouts) before you can publish.
- **Access and submissions**: Require login, cap how many times each user may submit, and optionally require applicants to **lock** a submission when they are finished (after lock, they cannot edit).
- **Confirmation**: Message after submit and whether to send a confirmation email.
- **Terms**: Optional required acceptance of your terms text.

Always click **Save settings** when you change this tab.

### Preview

The **Preview** tab shows how sections and fields look to applicants as you build. For a full applicant view while still in draft, use **Preview** in the header (opens the public-style page in preview mode).

## Publish, share, and pause

When you are ready:

1. Use **Publish** from the form header (draft only). If the form has a fee, the app blocks publish until payout setup and TroupeIT approval are complete; see [Paid forms and payouts](./paid-forms-payouts).
2. After publishing, use **View form** (or copy the public URL) to share the link with applicants.

To temporarily stop new submissions without deleting anything, **Close** the form. **Reopen** when you want to accept entries again.

## Submissions

From the forms list, open **Submissions** for a form (often shown as a count or menu item). There you can browse responses, filter by status where available, open individual submissions, and export data (for example CSV) for review in a spreadsheet.

Deleting a form from the list may be restricted if it already has submissions, to avoid losing data.

## Other list actions

Depending on permissions, you may also **duplicate** a form to reuse its structure, **archive** to tidy the main list, or **delete** only when there are no submissions.

## Applicants and payment

For **free** forms, applicants submit and land on a thank-you page (and confirmation email if enabled).

For **paid** forms, after submit they complete checkout on a secure payment step. Money is processed through TroupeIT; your company receives its share after the platform fee, as described in [Paid forms and payouts](./paid-forms-payouts).

Applicants who use TroupeIT can track their own submissions from **My applications** (or equivalent) when that entry point is available in your app.
