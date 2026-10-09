# Implementation plan

### What I found

The initial project was a minimal Next.js app: `package.json` listed Next.js **16.3.8**, React, and TypeScript, but not shadcn/ui or the planned service integrations. The app initially consisted of the starter pages and styles in `app/`.

### Implementation plan

1. **Verify project setup and framework guidance**
   - Confirm the project root before running setup commands.
   - Read the installed Next.js 16.3.8 guides before implementation, as required by the project instructions.
   - Set up shadcn/ui and a basic test foundation, then add required dependencies only after confirming current provider guidance.

2. **Define the database and access rules**
   - Model courses, sections, lessons, media/attachments, student progress, and purchase/subscription entitlements.
   - Keep provider identifiers and access periods so permanent course purchases, monthly paid-through access, and lifetime access can be evaluated consistently.
   - Implement one server-side access check used by lesson pages, video URL issuance, and attachment downloads. Previews remain available without sign-in.

3. **Wire authentication and payments**
   - Verify current Neon Auth support for Google and email/password before committing to the integration.
   - Require sign-in before checkout and prevent checkout for courses the student already owns.
   - Configure Polar products for individual course purchases, monthly all-course access, and lifetime all-course access.
   - Treat verified, idempotent Polar webhooks as the authority for granting or revoking entitlements. Add coverage for retries, duplicate events, refunds, disputes, cancellations, and failed renewals.
   
   - Link students to Polar’s customer portal for billing management.

4. **Build admin and content management**
   - Add admin-only course, section, and lesson management, with drag-and-drop ordering and draft/published status.
   - Use the configured admin email on the server for admin authorization; set it in local and deployment environments.
   - Implement browser-to-ImageKit uploads using server-authorized upload signatures.
   - Archive courses without removing existing owners’ access. Make section/lesson deletion immediate while retaining progress records.

5. **Build the student experience**
   - Add the public landing/catalog and course sales pages, then the student dashboard and lesson player.
   - Use SEO metadata for public marketing pages and `noindex` for dashboard, player, and admin areas.
   - Issue short-lived, access-checked ImageKit URLs for protected video and attachments. Confirm whether the selected ImageKit setup supports the desired adaptive streaming.
   - Save playback position and mark lessons complete when playback ends.

6. **Validate and prepare deployment**
   - Test purchase/access decisions, webhook entitlement updates, and progress/resume behavior.
   - Add end-to-end checks for the main student and admin flows, plus responsive and accessibility checks.
   - Configure Vercel environment variables and production provider webhook/upload settings; verify error monitoring and recovery behavior.

### Decisions to confirm during implementation

Before selecting exact APIs and configuration, verify Neon Auth’s supported sign-in methods, ImageKit’s upload and streaming capabilities on your plan, and Polar’s current webhook events for the cancellation, renewal-failure, refund, and dispute rules. No AI features, extra platform email campaigns, or product analytics are included in v1.