// =========================================================================
// All the words on the site live in this file.
// To change a sentence, edit the text between the quotes and save.
// Inside <strong>…</strong> = bold. Inside <em>…</em> = italic accent color.
// =========================================================================

import type { SiteContent } from './types'

export const RESUME_URL = '/files/Alia-Phan-Resume.pdf'
export const EMAIL = 'phanthaolinh05@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/alia-phan'

export const content: SiteContent = {
  hero: {
    title: (
      <>
        It’s <em>Alia</em>, here
      </>
    ),
    tagline: 'Every number tells a story. I make sure it’s the right one.',
    meta: 'Aspiring CPA · Accounting, Business Intelligence & Finance',
    recently: [
      'Sponsored Programs Intern at the Research Foundation for SUNY',
      '2nd place, CFA Institute Research Challenge',
    ],
  },

  about: {
    intro: (
      <>
        I'm a senior at <strong>Augustana College</strong> studying{' '}
        <strong>Accounting, Business Intelligence, and Business Finance</strong>. I graduate in{' '}
        <strong>May 2027</strong>, I'm <em>CPA eligible</em>, and I'm working toward CPA licensure.
      </>
    ),
    body: [
      <>
        I like the point where <strong>accuracy meets insight</strong>: reconciling the details until
        the numbers are right, then using analysis to explain what they mean. At the{' '}
        <strong>Research Foundation for SUNY</strong>, I spent two years in <strong>Oracle ERP</strong>{' '}
        across accounts payable and grant administration. In class and in competitions, I've built{' '}
        <strong>DCF valuations, credit analyses, and equity research</strong> recommendations.
      </>,
      <>
        Outside of work, you'll find me behind the counter at our campus coffee shop, a job I've held
        since my first year. My Vietnamese background shaped how I{' '}
        <strong>work across cultures and teams</strong>.
      </>,
      <>
        I'm seeking full-time roles in <strong>audit, tax, advisory, and corporate finance</strong>.{' '}
        <strong>Chicago</strong> is my top choice.
      </>,
    ],
  },

  jobs: [
    {
      dates: 'Sep 2024 – Sep 2026',
      org: 'Research Foundation for SUNY',
      role: 'Financial Accounting Intern, Sponsored Programs',
      did: [
        'Processed and reconciled invoices, purchase orders, and supplier records in Oracle ERP, using daily audits to catch errors before payment',
        'Supported pre-award grant administration',
        'Built Excel reconciliation and audit workbooks for travel reimbursements, purchasing-card activity, tuition reimbursements, and grant budgets',
        'Standardized records across Accounts Payable, Purchasing, and Sponsored Programs',
        'Led weekly cross-functional process-improvement meetings and built shared templates for onboarding',
      ],
      result: {
        label: 'Results',
        highlights: [
          { figure: '700+', text: 'records reconciled each month at 98% accuracy, cutting AP rework by about 5 hours a month' },
          { figure: '15%', text: 'increase in payment accuracy, which reduced vendor disputes' },
          { figure: '30%', text: 'faster document retrieval, supporting month-end close and audit readiness' },
        ],
      },
    },
    {
      dates: 'May 2025 – Aug 2025',
      org: 'Augustana College',
      role: 'Summer Conference Assistant',
      did: 'Ran check-in, check-out, and logistics for summer conferences. I supported guests by email, phone, and in person, and resolved facility issues and last-minute requests.',
      result: {
        label: 'Results',
        text: 'Supported 1,000+ guests across 14 conferences. Improved check-in efficiency by 20% and resolved 50+ facility issues without disrupting event schedules.',
      },
    },
    {
      dates: 'Sep 2023 – Present',
      org: 'Augustana College',
      role: 'Campus Employment',
      subRoles: [
        { title: 'Barista at The Brew', dates: 'Oct 2023 – Present' },
        { title: 'Concessions team member', dates: 'Dec 2023 – Present' },
        { title: 'Dining services cashier', dates: 'Sep 2023 – Mar 2024' },
      ],
      did: 'Served customers, handled cash, and worked every station in dining services, from cooking to serving.',
      result: {
        text: 'Held campus jobs continuously since my first year, working 10+ hours a week alongside a full course load.',
      },
    },
  ],

  featured: {
    meta: 'Oct 2025 – Feb 2026 · Hosted by CFA Society Iowa',
    title: 'CFA Institute Research Challenge:',
    titleAccent: "O'Reilly Automotive (ORLY)",
    role: 'Industry and valuation lead, 4-person team',
    did: 'Led our industry and competitive positioning analysis. Built relative valuation models (P/E, EV/EBITDA, P/S) against AutoZone, Genuine Parts, and Advance Auto Parts, and checked our financial data against Koyfin. Co-wrote the equity research report and presented it to CFA charterholders and portfolio managers.',
    result: '2nd of 9 universities at the Iowa Sub-Regional. Our BUY recommendation set a 12-month target of $117.34, 24.5% above the $94.25 price on Dec 9, 2025. The target came from a 2025–2029 DCF, cross-checked with Monte Carlo simulation and relative valuation.',
    image: {
      src: '/images/cfa-team.jpg',
      alt: "Alia and three teammates in suits in front of their O'Reilly Automotive title slide at the CFA Institute Research Challenge",
      width: 1200,
      height: 960,
    },
    badge: { number: '2', suffix: 'nd' },
    primaryLink: { href: '/files/ORLY-Equity-Research-Report.pdf', label: 'Research report' },
    secondaryLink: { href: '/files/ORLY-Final-Presentation.pdf', label: 'Final presentation (PDF)' },
  },

  programs: [
    {
      dates: 'Sep 2023 – Present',
      title: 'Student Investment Fund',
      role: 'Sector Analyst, Utilities',
      did: 'I build DCF and comparable-company analyses on utilities stocks and pitch buy/hold/sell recommendations to a student-managed fund. I also set up a cloud-based document system for the team.',
      result: {
        text: 'Covered 3+ utilities equities for a fund with about $282K in assets. The document system cut version-control errors and improved team efficiency by about 10%.',
      },
    },
    {
      dates: 'Aug 2025 – Present',
      title: 'Innovation Competition',
      role: 'Finance Research Analyst',
      did: "Built a data-backed product launch strategy using Nielsen market data and competitor analysis, and delivered the team's financial analysis under tight deadlines.",
      result: { text: 'Earned recognition from the judges.' },
    },
    {
      dates: 'Mar 2026 – Present · Virtual',
      title: 'EY Expedition Program',
      role: 'Selected participant (top 10%)',
      did: 'Learned how EY approaches audit and assurance work, advisory services, and client communication.',
    },
    {
      dates: '2025 · Virtual',
      title: 'Goldman Sachs 2025 Virtual Insight Series',
      role: 'Participant',
      result: { text: 'Earned a Certificate of Achievement (June 2025).' },
      link: { href: '/files/2025-Virtual-Insight-Series.pdf', label: 'Certificate (PDF)' },
    },
  ],

  recognition: [
    "Dean's List",
    'GPA 3.74',
    'Academic Merit Scholarship',
    'J. Ingemanson Scholarship',
    'Friends of Accounting',
  ],

  projectsIntro:
    'Class projects, cases, and research papers. Where a document is available, the link opens the full PDF.',

  projects: [
    {
      kind: 'Equity research',
      title: 'Meta Platforms',
      titleAccent: '(META)',
      role: 'Valuation lead and presenter, 4-person team · BUSN 334 class project · Sep 2026',
      did: "Built the leverage analysis, DCF (with WACC, free cash flow, and working capital forecasts), and peer multiples valuation. I presented the valuation and our recommendation in the team's equity research presentation.",
      result: 'SELL recommendation with a $530 target price, 28% below the $738.79 share price as of Sep 10, 2026. The target blends the DCF ($269.50 per share) and multiples ($789.96 per share) 50/50. Our thesis: about $137B of planned 2026 AI capex pushes free cash flow below zero, so the price assumes the AI bet pays off fast.',
      link: { href: '/files/META-Equity-Research-Slides.pdf', label: 'Slides (PDF)', ariaLabel: 'Meta Platforms equity research slides (PDF)' },
    },
    {
      kind: 'Commercial credit analysis',
      title: 'Polaris',
      titleAccent: 'Inc.',
      role: 'Individual analyst · Commercial banking case · Oct 2025',
      did: "Used Polaris's 10-K and earnings presentation to decide whether a lender should extend more debt. I built a credit workbook (EBITDA, leverage, fixed-charge coverage) and a credit presentation covering the business, its competitive advantages, risks, and financial trends.",
      result: 'Recommended conditional approval of a secured credit line, with quarterly covenant tests, inventory monitoring, and dividend limits. Key metrics: leverage 1.90x, liquidity $1.1B, and a fixed-charge coverage ratio of 0.26x, well below the 1.0x–1.25x threshold.',
      link: { href: '/files/Polaris-Credit-Analysis.pdf', label: 'Credit analysis (PDF)', ariaLabel: 'Polaris credit analysis (PDF)' },
    },
    {
      kind: 'Tax research paper',
      title: 'Cancellation of',
      titleAccent: 'Debt Income',
      role: 'Author · Tax Accounting · Nov 2025',
      did: 'Researched how forgiven credit card debt becomes taxable income under IRC §61(a)(12) and §108. I designed the Tax-Optimal Debt Resolution (T.O.D.R.) Framework, which helps taxpayers avoid, minimize, or discharge Cancellation of Debt (COD) income.',
      result: 'Estimated that consumer debt settlements create about $2.88B of taxable COD income and $630M+ of federal tax each year.',
      link: { href: '/files/COD-Income-Tax-Paper.pdf', label: 'Paper (PDF)', ariaLabel: 'Cancellation of debt income tax paper (PDF)' },
    },
    {
      kind: 'Tax return preparation',
      title: 'Forms 1040',
      titleAccent: 'and 1120',
      role: 'Preparer · Tax course project',
      did: 'Prepared a Form 1040 for a fictional married couple with two dependents. It covers W-2 wages, Schedule C, Schedule E rental income, Schedule D capital gains, itemized deductions, and child credits. I also completed a Form 1120 for a fictional C corporation, reconciling book-to-tax differences, depreciation, charitable contribution limits, and NOL considerations.',
      result: 'Calculated full federal tax liability for both the individual and the corporate return.',
    },
    {
      kind: 'Forensic investigation',
      title: '“Who Took',
      titleAccent: 'the Money?”',
      role: 'Analyst · Auditing · May 2025',
      did: 'Analyzed a $10,000 cash theft at a microbrewery with $3.2M in annual sales. I evaluated forensic interviews of four employees, scored each answer as truthful or evasive, and explained how non-confrontational techniques led to a confession.',
      result: 'Identified the employee responsible and traced $10,500 in total theft. I then laid out the internal control lessons.',
      link: { href: '/files/Who-Took-the-Money-Case-Analysis.pdf', label: 'Case analysis (PDF)', ariaLabel: 'Who Took the Money case analysis (PDF)' },
    },
    {
      kind: 'Fraud case',
      title: 'Rita Crundwell',
      titleAccent: "(All the Queen's Horses)",
      role: 'Co-author · Group paper',
      did: 'Analyzed how a city comptroller embezzled $53M+ from Dixon, Illinois over 22 years. She controlled the mail, check signing, and bank reconciliations, and redirected bank statements to herself.',
      result: 'Recommended five controls that would have prevented or caught the fraud: segregation of duties, independent audits, fraud risk assessments, whistleblower channels, and active oversight by city officials.',
      link: { href: '/files/Crundwell-Fraud-Case-Paper.pdf', label: 'Paper (PDF)', ariaLabel: 'Rita Crundwell fraud case paper (PDF)' },
    },
    {
      kind: 'Managerial accounting',
      title: 'Flexible Budget',
      titleAccent: 'Variance Analysis',
      role: 'Analyst · Managerial Accounting · Apr 2025',
      did: 'Built a formula-driven master budget, flexible budget, and variance report in Excel, with IF-based flags and conditional formatting for management by exception. I then wrote a memo to the CFO with causes, recommendations, and charts.',
      result: 'Flagged three variances over the 10% threshold: direct labor ($4,150 unfavorable, 40.7%), advertising ($4,000 unfavorable, 40.0%), and variable overhead ($1,000 favorable, 16.8%).',
      link: { href: '/files/Variance-Analysis-Memo.pdf', label: 'Memo (PDF)', ariaLabel: 'Flexible budget variance analysis memo (PDF)' },
    },
    {
      kind: 'Data analytics capstone',
      title: 'Supply',
      titleAccent: 'Planning',
      role: 'Analyst · Data analytics course',
      did: 'Used Excel, Power BI, and Tableau to analyze 200 supplier orders for a distributor. I applied descriptive statistics, regression, and 12-month forecasts to delivery delays and order costs.',
      result: 'Recommended adding 41 days to the ordering cycle (the 95th percentile of delays, against a 15.4-day mean). Identified the slowest product and supplier, at about 16.6 days late each, and forecast delays falling 8.6% over the next year.',
      link: { href: '/files/Candy-Supply-Capstone-Presentation.pdf', label: 'Presentation (PDF)', ariaLabel: 'Supply planning capstone presentation (PDF)' },
    },
    {
      // To show this project: write a real result below, then delete the `hidden: true` line.
      kind: 'Revenue recognition',
      title: 'Revenue Recognition',
      titleAccent: 'Case (ASC 606)',
      role: 'Team member · ACCT 322 group presentation',
      did: 'Applied the five-step ASC 606 revenue recognition model to a case and presented our analysis.',
      result: 'WRITE ONE SPECIFIC OUTCOME HERE.',
      hidden: true,
    },
  ],

  education: {
    school: 'Augustana College',
    place: 'Rock Island, IL',
    degree: 'BA in Accounting, Business Intelligence, and Business Finance',
    facts: ['Expected May 2027', 'CPA eligible', 'GPA 3.74', "Dean's List"],
    coursework: [
      'Intermediate Accounting',
      'Auditing',
      'Tax Accounting',
      'Advanced Tax',
      'Accounting Information Systems (ERP)',
      'Financial Management',
      'Security Analysis & Portfolio Management',
      'Business Analytics & Regression',
    ],
  },

  skills: [
    {
      title: 'Accounting',
      items: [
        'Account reconciliation',
        'Accounts payable',
        'Internal controls',
        'Grant administration',
        'GAAP',
        'Variance analysis',
        'Individual and corporate tax (1040, 1120)',
      ],
    },
    {
      title: 'Finance',
      items: [
        'DCF and comparable-company valuation',
        'Three-statement modeling',
        'Credit analysis (leverage, FCCR)',
        'Equity research',
      ],
    },
    {
      title: 'Data and tools',
      items: [
        'Oracle ERP',
        'Advanced Excel (reconciliations, audit workbooks, PivotTables, XLOOKUP)',
        'Power BI',
        'Tableau',
        'Regression and forecasting',
        'Visio · Adobe Acrobat · Canva',
      ],
    },
    {
      title: 'Certifications',
      note: 'LinkedIn Learning',
      items: [
        { href: '/files/LinkedIn-Learning-Excel-Essential-Training.pdf', label: 'Excel Essential Training' },
        { href: '/files/LinkedIn-Learning-Power-BI-Essential-Training.pdf', label: 'Power BI Essential Training' },
        { href: '/files/LinkedIn-Learning-Tableau-Essential-Training.pdf', label: 'Tableau Essential Training' },
      ],
    },
  ],

  contact: {
    lede: "I'm always glad to talk about accounting, analytics, and opportunities.",
    links: [
      { label: 'Email', href: `mailto:${EMAIL}`, text: EMAIL, icon: 'email', external: false },
      { label: 'LinkedIn', href: LINKEDIN_URL, text: 'linkedin.com/in/alia-phan', icon: 'linkedin', external: true },
      { label: 'Résumé', href: RESUME_URL, text: 'Resume (PDF)', icon: 'resume', external: true },
    ],
  },
}
