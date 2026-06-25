# Project Overview

**TL;DR —** This repository (`bitpastel_ai`) is **Bitpastel's corporate marketing website**: a Next.js 14 (App Router) site for a software-development agency that markets Shopify Plus & e-commerce development, custom SaaS, AI transformation/automation, mobile apps, websites and UI/UX design. Its primary conversion goal is **lead generation** through a global "Get a Free Quote" contact modal, supported by a careers section (job listings + resume-upload application form), a culture/team showcase, a portfolio page, a Shopify landing/migration page, and a partners program.

**Intended use of this document —** This `OVERVIEW.md` is meant to be read by a human and by an AI agent in order to **refine and author a Playwright (browser end-to-end) test suite** for the site. It therefore captures the structural and behavioural detail a test author needs: routes, forms, modals, backend endpoints, and concrete selectors / visible text per user flow. Section 5 (Testable User Flows) and Section 6 (Notes for the Playwright Test Author) are written specifically to seed a Playwright test-author prompt.

---

## 1. Purpose

Bitpastel is a software-development agency; this site is its public marketing and lead-generation front end.

- **Who it serves:** startups and enterprises looking for Shopify Plus / e-commerce builds, custom SaaS, AI automation, mobile apps, websites, and UI/UX design.
- **Primary goal:** capture leads via the global **"Get a Free Quote"** contact modal (reachable from every page).
- **Secondary goals / sections:**
  - **Careers** — job listings, per-job detail pages, and a resume-upload application form.
  - **Culture** — team/company culture showcase.
  - **Portfolio** — projects slider.
  - **Shopify** — a dedicated Shopify Plus landing / migration page.
  - **Partners** — a partner program with "Become a Partner" and partner-member signup forms.
- **Contact surface:** phone numbers for US / UK / IN, WhatsApp links, and `connect@bitpastel.com`. The office is in Kolkata, India (Technopolis Building); the privacy policy is governed by Indian law.

---

## 2. Tech Stack

| Area | Choice / Version | Notes |
|------|------------------|-------|
| Framework | **Next.js (App Router) `^14.2.35`** | React `18.2.0`. Root layout is force-static, `revalidate: 3600`. |
| Language | **TypeScript `^5.9.3`** | `strict`, target `es5`, path alias `@/* -> ./src/*`. |
| Styling | **Tailwind CSS `^3.4.19`** | `darkMode: 'class'`, CSS-variable custom tokens (`primary.*`, `text.*`), fonts roboto/source/inter, `@tailwindcss/typography`, PostCSS + autoprefixer + `@fullhuman/postcss-purgecss`. Global styles in `src/styles/index.css`. |
| Animations | **framer-motion `^12.25.0`** | Home, culture, shopify, portfolio, team components. |
| Sliders | **swiper `^11.2.10`** | Portfolio `OurProjects` and others. |
| Effects | **react-snowfall `^2.4.0`** | `SnowfallAnimation` (seasonal). |
| Phone inputs | **react-phone-number-input `^3.4.12`** | Country-aware phone fields. |
| Bot protection | **react-google-recaptcha `^3.1.0`** | reCAPTCHA v2 checkbox. |
| Misc | **country-codes-list `^2.0.0`**, **lucide-react `^0.523.0`** (icons), **next/image + sharp `^0.34.5`**, **@next/bundle-analyzer** | |
| Dev server port | **4028** | `next dev -p 4028`; `.htaccess` reverse-proxies to `http://127.0.0.1:4028`. |
| Deployment | **Netlify** (`@netlify/plugin-nextjs ^5.11.1`) and/or **Apache** front | `.htaccess`: non-www→www 301, CSP `upgrade-insecure-requests`, proxies non-`/api/` traffic to `127.0.0.1:4028`. `next.config.mjs`: 308 redirects `/horizon→/shopify` and `/home→/`, immutable cache for `/images/*`, gzip, `poweredByHeader` off. |
| Analytics | Google Tag Manager (`GTM-N7Z2X3X`), Microsoft Clarity | Injected in root layout. |

**npm scripts**

| Script | Command |
|--------|---------|
| `dev` | `next dev -p 4028` |
| `build` | `NODE_OPTIONS='--max-old-space-size=448' next build` |
| `start` / `serve` | `NODE_OPTIONS='--max-old-space-size=256' next start` |
| `format` | `prettier --write "src/**/*.{ts,tsx,css,md,json}"` |
| `type-check` | `tsc --noEmit` |

---

## 3. API Details

All backend submission endpoints are **external PHP services** (there are **no Next.js route handlers** in this repo). The base URL is configured in `config.ts`:
`API_BASE_URL = https://bitpastel.org/api`.

| Endpoint | Method | URL / Base | Purpose | Called From |
|----------|--------|------------|---------|-------------|
| Free Quote / Contact | `POST` (urlencoded) | `https://bitpastel.org/api/quote.php` | Global Free Quote modal: `name, email, phone, phone_no, phone_code, choice (service), message, g-recaptcha-response` | `src/components/Modal.tsx:252` |
| Job application | `POST` (multipart/form-data) | `https://bitpastel.org/api/sendemail.php/` | Career application w/ resume upload: `name, email, phone, url, current_location, qualification, experience, notice_period, job_title, referred_by, resume` | `src/components/JoinTeamForm.tsx:283` |
| Partner member signup | `POST` (urlencoded) | `https://bitpastel.org/api/partnersSendEmail.php` | Partner member form: `name, email, phone, message, g-recaptcha-response` | `src/components/partner/NewMember.tsx:139` |
| Become a Partner | `POST` (urlencoded) | `https://www.bitpastel.com/api/partnersSendEmail.php` ⚠️ **hardcoded host** (not `config.API_BASE_URL`) | Become-a-Partner form: `name, email, phone, message` (no reCAPTCHA field in this variant) | `src/components/partner/BecomePartner.tsx:131` |
| IP geolocation (3rd-party) | `GET` | `https://ipapi.co/json/` | Detects visitor country to set the default country on phone inputs | `Modal.tsx:98`, `JoinTeamForm.tsx:139`, `BecomePartner.tsx:40`, `NewMember.tsx:43` |
| Google reCAPTCHA v2 (3rd-party) | client widget | sitekey `6LdSzGEUAAAAABG0EhsRTOkyJUyTqwFz6gpNX8g1` | Bot protection; token sent as `g-recaptcha-response` | `Modal.tsx`, `JoinTeamForm.tsx`, `NewMember.tsx`, `BecomePartner.tsx` |

> **Notes:** One endpoint (`BecomePartner.tsx`) uses a **hardcoded `www.bitpastel.com` host** instead of the configured base URL. The reCAPTCHA token is appended to every protected POST except the Become-a-Partner variant.

---

## 4. Design Overview

### Route map

| Route | Page File | Purpose |
|-------|-----------|---------|
| `/` | `src/app/page.tsx` | Home (force-static); renders the home page component. |
| `/home` | `src/app/home/page.tsx` | Main landing content. **308-redirected to `/`** via `next.config.mjs`. Sections: Hero, Services, ShopifyStore, Testimonials, SatisfiedClient, TechPartner, Culture, Cta. |
| `/free-quote` | `src/app/free-quote/page.tsx` | Renders home and dispatches `CustomEvent 'bp:open-free-quote'` on mount → opens Free Quote modal. |
| `/careers` | `src/app/careers/page.tsx` | Careers listing: Banner + JobCard grid + JoinTeam form + Common_banner. |
| `/careers/applyJob/[id]` | `src/app/careers/applyJob/[id]/page.tsx` | Dynamic job-detail (client component, hardcoded `jobListings`, `notFound()` for unknown id). "Apply Now" scrolls to the application form. |
| `/careers/free-quote` | `src/app/careers/free-quote/page.tsx` | Careers page + opens Free Quote modal on mount. |
| `/culture` | `src/app/culture/page.tsx` | Culture/team: TeamBanner, TeamTestimonialNew, Mobile/Desktop collages, TeamEngage. |
| `/culture/free-quote` | `src/app/culture/free-quote/page.tsx` | Culture page + opens Free Quote modal on mount. |
| `/partners` | `src/app/partners/page.tsx` | Partner program: PartnerHero, PartnerService, NewIntegrated (BecomePartner / NewMember forms). |
| `/portfolio` | `src/app/portfolio/page.tsx` | Portfolio: PortfolioBanner + OurProjects (swiper). |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Static Privacy Policy (heading "Privacy Policy"). |
| `/shopify` | `src/app/shopify/page.tsx` | Shopify Plus landing/migration. **`/horizon` 308-redirects here.** Many sections (Hero, Advantage, Branding, Performance, Revamp, Checkout, FAQ, Migration, …). |
| `/shopify/free-quote` | `src/app/shopify/free-quote/page.tsx` | Shopify page + opens Free Quote modal on mount. |

### Major sections / components
- **Global:** `Header.tsx` (sticky nav, mobile/desktop variants, hosts the dynamically-imported Free Quote `Modal`), `Footer.tsx`, `FloatingFooter.tsx` (mobile bottom tab bar), `Modal.tsx` (Free Quote), `SnowfallAnimation.tsx`.
- **Home:** Hero, Services, ShopifyStore, Testimonial, SatisfiedClient, TechPartner, Culture, Cta (`src/components/home/*`).
- **Shopify:** AISection, AIPersonalization, Advantage, Checkout, Performance, Revamp, Branding, FAQ, Migration, … (`src/components/shopify/*`).
- **Careers:** `career/Banner`, `career/JobCard`, `career/JobDetailsBanner`, `JoinTeamForm.tsx`, `ui/Common_banner`.
- **Culture/Team:** `team/TeamBanner`, `TeamTestimonialNew`, `MobileTeamCollage`, `TeamCollageNew`, `TeamEngage`.
- **Partners:** `partner/PartnerHero`, `PartnerService`, `NewIntegrated`, `BecomePartner`, `NewMember`, `PartnerRefer`, `NewRefer`.
- **Portfolio:** `portfolio/PortfolioBanner`, `portfolio/OurProjects` (swiper).

### Navigation
- **Desktop Header (`>=lg`):** Bitpastel logo (`Link href='/'`); `<nav>` with **Services** (button → `#services`), **Stories** (button), **Culture** (`Link href='/culture'`), and a green **"Chat with Us"** button that opens the Free Quote modal and reflects a `/<scope>/free-quote` URL via `history`.
- **Mobile (`<lg`):** logo only in the top bar + a fixed bottom **FloatingFooter** tab bar: **Home** (`/`), **Services** (`#services`), **Stories** (button), **Culture** (`/culture`), **Careers** (`/careers`), **Contact** (button `aria-label='Open Get a Free Quote'` → opens modal).
- **Footer:** links to `/`, `/portfolio`, `/culture`, `/careers`, `/partners`, `/privacy-policy`; social (facebook/instagram/linkedin); `tel:` (US +1 872 444 6679, UK +44 7469 539191, IN +91 9830 566 248); WhatsApp; `mailto:connect@bitpastel.com`.

### Forms
- **Free Quote modal** (`Modal.tsx`): service dropdown ("I want … `select*`"), Full Name, Email, optional phone, optional Message, reCAPTCHA (appears only after service+name+email are filled), submit **"Lets Work Together"**.
- **Job application** (`JoinTeamForm.tsx`): Name, Email Address, Mobile number, Current Location, Qualification (optional), Years of experience (custom select, optional), Notice Period (custom select, optional), Referred By (optional), resume upload (`.pdf/.doc/.docx`) "Attach your CV/Resume", reCAPTCHA, submit **"Send"**.
- **Become a Partner** (`partner/BecomePartner.tsx`): Name, Email Address, Mobile number (optional), Your Message, submit **"Submit"** (no reCAPTCHA in payload; posts to `www.bitpastel.com`).
- **Partner NewMember** (`partner/NewMember.tsx`): Name, Email Address, Mobile number (optional), Your Message, reCAPTCHA (dark theme), submit **"Submit"**.

### Modals
- **Global Free Quote contact modal** (`Modal.tsx`), dynamically imported in `Header` (`ssr:false`). Opened by **"Chat with Us"** (desktop), **"Contact"** (mobile FloatingFooter), or by visiting any `/<scope>/free-quote` route (dispatches `CustomEvent 'bp:open-free-quote'`). Features: `role='dialog'` + `aria-modal`, `data-modal-root`, ESC-to-close, overlay click-to-close, body-scroll lock, focus trap, loading spinner, success state ("Thanks, you're all set"), close button `aria-label='Close modal'`.

### Notable UX
- framer-motion animations; swiper sliders; react-snowfall seasonal effect.
- ipapi.co IP-based auto-detection of default phone country.
- reCAPTCHA v2 conditionally rendered only after required fields are valid.
- Custom animated SVG "bitpastel infinity" loader during async submits/loads.
- Free Quote modal reflects URL via `history.pushState` to `/<scope>/free-quote` without a full Next navigation; back/forward syncs modal open/close.
- Mobile vs desktop split rendering (separate Header bar, FloatingFooter tab bar, mobile/desktop team collages).

---

## 5. Testable User Flows (for Playwright)

> Selectors below are candidates drawn from the code; confirm exact strings against the running DOM. Anchor on visible text / placeholders / `aria-label` / ids where possible.

### Flow 1 — Primary navigation across pages
- **Entry route:** `/`
- **Steps:**
  1. Load home.
  2. Click **Culture** in header → `/culture`.
  3. Click **Careers** (mobile FloatingFooter) or footer link → `/careers`.
  4. Click footer **Portfolio** → `/portfolio`.
  5. Click footer **Privacy Policy** → `/privacy-policy`; verify "Privacy Policy" heading.
  6. Navigate to `/shopify` and `/partners`.
- **Inputs:** none.
- **Candidate selectors / text:**
  ```
  text=Culture   text=Careers   text=Stories   text=Services
  link[href='/culture']  link[href='/portfolio']  link[href='/careers']
  link[href='/partners']  link[href='/privacy-policy']
  heading "Privacy Policy"   img[alt='Bitpastel Logo']
  ```

### Flow 2 — Free Quote modal: open + submit with validation
- **Entry route:** `/` (open via "Chat with Us") or directly `/free-quote`
- **Steps:**
  1. Click **Chat with Us** (desktop) / **Contact** (mobile) OR visit `/free-quote`.
  2. Assert modal `[data-modal-root]` / `[role=dialog]` appears.
  3. Click submit **"Lets Work Together"** with empty fields → assert validation errors.
  4. Open the "I want" dropdown and choose a service (e.g. "Shopify Store").
  5. Fill Full Name and Email.
  6. Observe reCAPTCHA widget appears once service+name+email present.
  7. Solve reCAPTCHA (mock/stub) and submit.
  8. Assert success text ("Thanks, you're all set" / "We have received your request").
  9. Close via ESC or "Close modal" button.
- **Inputs / fields:** service dropdown (`select*`; options: Store Speed Optimization, Shopify Store, Website, Mobile App, Custom SaaS, E-commerce Site, UI/UX Design, Digital Marketing); `placeholder='Full Name'`; `placeholder='Email'` (type=email); phone (`Mobile number (optional)`); textarea (`Message (optional)`); reCAPTCHA; submit.
- **Candidate selectors / text:**
  ```
  text=Chat with Us   [aria-label="Open Get a Free Quote"]
  [role=dialog]   [data-modal-root]   text=Get a Free Quote   text=I want   text=select*
  placeholder=Full Name   placeholder=Email
  button:has-text('Lets Work Together')
  text=Please select a service.   text=Please enter your full name.   text=Please enter your email.
  text=Thanks, you're all set   [aria-label='Close modal']
  ```

### Flow 3 — Job application (careers → job detail → apply)
- **Entry route:** `/careers`
- **Steps:**
  1. Load `/careers`.
  2. Find a job card (e.g. "Marketing Manager", "Sales Intern", "CRO Specialist") and click its apply control.
  3. Router pushes to `/careers/applyJob/{id}` (ids `1,2,3,4,5`).
  4. Click **Apply Now** to scroll to `#applicationForm` / `.join-team-section`.
  5. Fill the JoinTeam form (Name, Email Address, Mobile number, Current Location).
  6. Click **Attach your CV/Resume** and upload a `.pdf/.doc/.docx` file.
  7. Submit empty/partial → assert errors ("Name is required.", "Email is required.", "Please attach your resume.", "Mobile number should be at least 8 digits.").
  8. Solve reCAPTCHA, click **Send**.
  9. Assert success "Thank you {name} for your job application!".
  10. Also test `/careers/applyJob/999` → Next `notFound()` 404.
- **Inputs / fields:** `name`, `email` (Email Address), phone (`Mobile number (optional)`), `currentLocation`, `qualification` (optional), experience CustomSelect, notice period CustomSelect, `referredBy` (optional), file input `resume` (`.pdf,.doc,.docx`), reCAPTCHA, submit "Send".
- **Candidate selectors / text:**
  ```
  text=Marketing Manager   button:has-text('Apply Now')   url contains /careers/applyJob/
  #applicationForm   .join-team-section / #joinTeamForm
  placeholder=Name   placeholder=Email Address   placeholder=Current Location
  text=Attach your CV/Resume   button:has-text('Send')
  text=Name is required.   text=Please attach your resume.   text=Thank you
  ```

### Flow 4 — Become a Partner / partner-member submission
- **Entry route:** `/partners`
- **Steps:**
  1. Load `/partners`.
  2. Scroll to Become a Partner section (`#become-a-partner`, heading "Become a Partner").
  3. Submit empty → assert "Name is required" / "Email is required" (errors appear after blur/touch).
  4. Fill Name, Email Address, optional Mobile number, optional Your Message.
  5. For the NewMember variant, solve the dark-theme reCAPTCHA.
  6. Click **Submit**.
  7. Assert success "Thank You for connecting with us!".
- **Inputs / fields:** `name`, `email` (Email Address), phone (`Mobile number (optional)`), `message` (Your Message), reCAPTCHA (NewMember only), submit "Submit".
- **Candidate selectors / text:**
  ```
  #become-a-partner   text=Become a Partner
  placeholder=Name   placeholder=Email Address   placeholder=Your Message
  button:has-text('Submit')
  text=Name is required   text=Email is required   text=Thank You for connecting with us!
  ```

---

## 6. Notes for the Playwright Test Author

- **reCAPTCHA must be stubbed/mocked** — the v2 checkbox blocks Free Quote, job application, and NewMember/partner submissions. Either route-mock the Google reCAPTCHA script, inject a fake `g-recaptcha-response`, or assert up to the reCAPTCHA gate.
- **Submissions hit external hosts** (`bitpastel.org/api/*`, `www.bitpastel.com/api/*`) — intercept/mock these network calls with `page.route(...)` so tests don't send real leads; assert the request payload instead.
- **Third-party `ipapi.co` GET** runs on form mount to set the default phone country — mock it for determinism.
- **Dev server runs on port 4028** (`npm run dev` → `http://localhost:4028`); set `baseURL` accordingly.
- **Redirects:** `/home` → `/` and `/horizon` → `/shopify` are **308**; account for them in navigation assertions.
- **The Free Quote modal can be opened directly** via `/free-quote`, `/careers/free-quote`, `/culture/free-quote`, `/shopify/free-quote` (each dispatches `bp:open-free-quote`) — useful to deep-link straight into the modal.
- **Unknown job ids 404** via `notFound()` (e.g. `/careers/applyJob/999`).
- **Mobile vs desktop split:** the desktop "Chat with Us" button and the mobile FloatingFooter "Contact" button are separate DOM nodes gated by viewport — set `viewport` explicitly per test (the nav is `lg` breakpoint–dependent).
- **Validation errors appear on submit/blur**, not before — drive them by submitting empty or touching fields, then asserting the exact error strings listed per flow.
