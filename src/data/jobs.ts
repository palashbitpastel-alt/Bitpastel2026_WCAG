// Single source of truth for open positions.
//
// Consumed by:
//   - src/components/career/JobCard.tsx        (the cards on /careers)
//   - src/app/careers/applyJob/[id]/page.tsx   (detail page + its metadata)
//   - src/app/sitemap.ts                       (so job URLs stay in the sitemap)
//
// Adding or removing an entry here updates all three, including the static
// params Next.js pre-renders for /careers/applyJob/[id]. Closed roles are kept
// commented out below so they can be re-opened without rewriting them.

export interface JobListing {
  id: string;
  title: string;
  hashtags: string[];
  experience: string;
  gradientColors: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  location?: string;
  softSkills?: string[];
  desiredCandidateProfile?: string[];
  naukriLink?: string;
}

export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Marketing Manager',
    hashtags: [
      '#Upwork',
      '#Freelancer',
      '#OnlineBidding',
      '#Leadership',
      '#Itservice',
      '#Itsales',
    ],
    experience: '2 - 6 Years',
    gradientColors: 'linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))',
    description:
      'We are looking for a Marketing Manager with strong communication skills and experience in online bidding, client handling, and business development across international markets.',
    responsibilities: [
      'Write proposals, estimate costs, and negotiate on platforms like Upwork and Freelancer',
      'Handle international clients (US, UK, EU) effectively',
      'Understand and adapt to general IT outsourcing business needs',
      'Collaborate with project managers and technical teams for project planning',
    ],
    requirements: [
      'Very strong communication skills',
      'Fluent in English (written and spoken)',
      'Understanding of general IT outsourcing business',
      'Experienced in working with different bidding sites - Upwork, Freelancer, etc',
      'Experienced in handling international clients (US, UK, EU)',
      'Writing proposals, deciding costing, estimation, online bidding and negotiations',
      'Strong presentation and business analysis skills',
      "Basic awareness of web and app development (you don't need to be a coder)",
      'Ability to liaise with project managers and technical team leaders',
    ],
    location: 'Kolkata',
    softSkills: [
      'Very good Team player',
      'Delivery Oriented',
      'Adaptable to challenges',
      'Problem solver',
    ],
    desiredCandidateProfile: [
      'Must have experience in bidding or working on online marketplaces like Upwork / Freelancer',
      'Freshers can also apply',
      'Must have worked with international clients (UK, US, EU)',
      'Fluent in English (written and spoken)',
    ],
    naukriLink: 'https://www.naukri.com/bidding-jobs-in-kolkata?expJD=true',
  },
  {
    id: '2',
    title: 'Email & LinkedIn Sales Executive',
    hashtags: ['#Hiring', '#KolkataJobs', '#SalesExecutive', '#Bitpastel', '#LinkedInEmails'],
    experience: '1 - 3 Years',
    gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
    description: 'We are seeking a skilled Email & LinkedIn Sales Executive.',
    responsibilities: [
      'Cold outbound lead generation',
      'Run & optimize email campaigns (Mailchimp, SendGrid, etc.)',
      'Manage CRM & track campaign metrics',
    ],
    requirements: [
      'Strong written & persuasive communication',
      'Experience with LinkedIn Sales Navigator & CRM tools',
      'Target-driven & self-motivated',
    ],
    location: 'Kolkata',
    softSkills: [
      'Excellent problem-solving and analytical thinking abilities',
      'Strong communication skills and a proactive approach to collaboration',
      'Delivery-focused with attention to detail',
      'Creative mindset and ability to innovate on the go',
      'Comfortable working in fast-paced, dynamic environments',
    ],
    desiredCandidateProfile: ['Interested to learn & work with latest/upcoming technologies'],
    naukriLink: '',
  },
  {
    id: '3',
    title: 'Sales Intern',
    hashtags: [
      '#Hiring',
      '#SalesIntern',
      '##InternshipOpportunity',
      '#CareerGrowth',
      '#WeAreHiring',
    ],
    experience: 'Fresher',
    gradientColors: 'linear-gradient(-45deg, rgb(15, 134, 178), rgb(7, 62, 152))',
    description:
      'Join our team as a Sales Intern and kick-start your career with hands on industry exposure.',
    responsibilities: [
      'Assist in lead generation and client outreach',
      'Support the sales team in follow-ups and documentation',
      'Maintain CRM and sales reports',
    ],
    requirements: [
      'Strong communication & interpersonal skills',
      'Willingness to learn and take initiative',
      'Basic understanding of sales/marketing is a plus',
    ],
    location: 'Kolkata',
    softSkills: [
      'Excellent problem-solving and analytical thinking abilities',
      'Strong communication skills and a proactive approach to collaboration',
      'Delivery-focused with attention to detail',
      'Creative mindset and ability to innovate on the go',
      'Comfortable working in fast-paced, dynamic environments',
    ],
    desiredCandidateProfile: ['Interested to learn & work with latest/upcoming technologies'],
    naukriLink: '',
  },
  {
    id: '4',
    title: 'Affiliate PR and Link Acquisition Specialist',
    hashtags: ['#Shopify', '#AffiliateMarketing', '#SEO', '#DigitalMedia', '#PRCampaigns'],
    experience: '2 - 4 Years',
    gradientColors: 'linear-gradient(-45deg, rgb(0,103,183), rgb(140, 13,99))',
    description:
      'We are looking for a results-driven Affiliate PR and Link Acquisition Specialist to strengthen our brand presence through strategic partnerships, digital PR outreach, and high-quality backlink acquisition. The ideal candidate will build relationships with publishers, bloggers, influencers, and affiliate partners to drive traffic, improve SEO rankings, and increase affiliate revenue.',
    responsibilities: [
      'Develop and execute affiliate PR and link-building strategies to improve domain authority and organic visibility.',
      'Identify and reach out to relevant websites, bloggers, influencers, and media outlets for collaboration opportunities.',
      'Secure high-quality backlinks and affiliate placements on authoritative platforms.',
      'Manage and grow affiliate partnerships with publishers and content creators.',
      'Pitch brand stories, products, and content to digital media and industry publications.',
      'Collaborate with the content and SEO teams to create link-worthy campaigns and outreach materials.',
      'Monitor and analyze link-building performance, referral traffic, and affiliate revenue.',
      'Maintain a database of outreach contacts and partnerships.',
      'Monitor competitor backlink profiles and identify new link opportunities.',
    ],
    softSkills: [
      'Strong communication & interpersonal skills',
      'Willingness to learn and take initiative',
      'Basic understanding of sales/marketing is a plus',
    ],
    location: 'Kolkata',
    requirements: [
      '2–4 years of experience in SEO, digital PR, link building, or affiliate marketing.',
      'Strong knowledge of SEO and backlink acquisition strategies.',
      'Experience with outreach and relationship management.',
      'Familiarity with tools such as Ahrefs, SEMrush, Moz, BuzzStream, or Pitchbox.',
      'Understanding of affiliate marketing platforms (CJ, ShareASale, Impact, etc.).',
      'Excellent communication, negotiation, and networking skills.',
      'Strong analytical skills to measure campaign performance.',
    ],
    desiredCandidateProfile: ['Interested to learn & work with latest/upcoming technologies'],
    naukriLink: '',
  },
  {
    id: '5',
    title: 'CRO Specialist',
    hashtags: ['#CRO', '#BusinessIntelligence&Analytics', '##SQLFundamentals', '#Shopify'],
    experience: '2 - 4 Years',
    gradientColors: 'linear-gradient(-45deg, rgb(108, 50, 182), rgb(29, 160, 163))',
    description:
      'We are looking for a data-driven CRO Specialist to optimize website and campaign performance by improving user experience and increasing conversion rates across digital touchpoints. The role focuses on turning traffic into customers through testing, insights, and continuous optimization.',
    responsibilities: [
      'Plan, execute, and analyze A/B and multivariate experiments across websites and landing pages with statistically valid outcomes.',
      'Identify conversion bottlenecks using funnel analysis, behavioral analytics, and AI-assisted insights.',
      'Improve conversion performance across landing pages, product pages, lead forms, and checkout journeys.',
      'Leverage heatmaps, session recordings, and event-level tracking to diagnose UX and friction issues.',
      'Monitor and report CRO KPIs including conversion rate, experiment lift, statistical confidence, and engagement metrics.',
      'Collaborate with design, development, and growth teams to implement, QA, and scale winning experiments.',
      'Drive continuous optimization using structured experimentation frameworks and iterative testing cycles.',
      'Maintain website content accuracy and consistency aligned with UX and conversion goals.',
      'Document experiments, learnings, and insights to build a scalable CRO knowledge base.',
    ],
    softSkills: [
      'Strong communication & interpersonal skills',
      'Willingness to learn and take initiative',
      'Basic understanding of sales/marketing is a plus',
    ],
    location: 'Kolkata',
    requirements: [
      '3+ years of hands-on experience in CRO, experimentation, growth marketing, eCommerce, or website optimization.',
      '3+ years of working experience with HTML and CSS; ability to review and implement frontend changes.',
      'Proven experience designing experiments, defining success metrics, and interpreting statistical results.',
      'AI-Powered Analytics: Amplitude AI, Mixpanel Signal, Heap Illuminate',
      'Session Replay & DX: FullStory, Content square',
      'Personalization & AI Testing: Dynamic Yield, Mutiny, Adobe Target',
      'Data & Experiment QA: Looker Studio, BigQuery (basic exposure), SQL fundamentals',
      'AI-assisted UX & Copy tools exposure for experimentation and personalization',
      'Strong analytical and statistical thinking with a test-and-learn mindset.',
      'Ability to use AI-driven insights without blindly trusting automation.',
      'Solid understanding of UX, behavioral psychology, and conversion frameworks.',
      'Clear communicator with strong ownership and execution focus.',
      'Comfortable operating in fast-paced, data-heavy environments.',
      'CRO Tools: Optimizely, VWO, AB Tasty, Convert, Analytics & Tracking: GA4, Google Tag Manager (GTM), Hotjar, Microsoft Clarity, GA4 predictive metrics, automated insights, AI-based funnel analysis tools, Shopify, Sitefinity',
      'Project Management: Wrike, Jira, ClickUp',
    ],
    desiredCandidateProfile: ['Interested to learn & work with latest/upcoming technologies'],
    naukriLink: '',
  },

  // ---------------------------------------------------------------------------
  // Currently closed. Re-open by moving an entry above this line — the card,
  // the detail page, and the sitemap all pick it up automatically.
  //
  //   Back End Developer          (#PHP #MySQL #CodeIgniter #Laravel, 2 - 5 Years)
  //   Shopify Developer           (#Shopify #RubyonRails, 2 - 6 Years)
  //   Senior WordPress Developer  (#WordPress #WooCommerce #PHP, 2 - 6 Years)
  //   Full Stack Developer        (#FrontEndDeveloper #BackEndDeveloper, 2 - 5 Years)
  //   PHP Development - Internship (#PHP #MySQL #JavaScript, Fresher)
  //   UI/UX Designer Intern       (#WebDesign #AppDesign #UI #UX, Fresher)
  //   Mobile App Developer        (#ReactNative #Android #iOS, 1 - 3 Years)
  //
  // Full copy for these roles is in git history:
  //   git show bcb5c5f -- "src/app/careers/applyJob/[id]/page.tsx"
  // ---------------------------------------------------------------------------
];

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find(job => job.id === id);
}