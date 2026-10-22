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
    chips: [
      { figure: '2nd of 9', text: 'CFA Research Challenge' },
      { figure: '700+', text: 'records a month at 98% accuracy' },
      { figure: '3.74', text: 'GPA · Dean’s List' },
    ],
  },

  about: {
    intro: (
      <>
        I'm a senior at <strong>Augustana College</strong> studying{' '}
        <strong>Accounting, Business Intelligence, and Business Finance</strong>. I graduate in{' '}
        <strong>May 2027</strong> and I'm <em>CPA eligible</em>.
      </>
    ),
    body: [
      <>
        I like the point where <strong>accuracy meets insight</strong>: reconciling the details until
        the numbers are right, then explaining what they mean. I spent two years in{' '}
        <strong>Oracle ERP</strong> at the Research Foundation for SUNY, and I've built{' '}
        <strong>DCF valuations, credit analyses, and equity research</strong> in class and competitions.
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
      summary:
        'Reconciled invoices and supplier records in Oracle ERP, built Excel audit workbooks, and supported grant administration.',
      stats: [
        { figure: '700+', text: 'records reconciled a month at 98% accuracy' },
        { figure: '15%', text: 'higher payment accuracy, fewer vendor disputes' },
        { figure: '30%', text: 'faster document retrieval for month-end close' },
      ],
    },
    {
      dates: 'May 2025 – Aug 2025',
      org: 'Augustana College',
      role: 'Summer Conference Assistant',
      summary: 'Ran check-in and logistics for summer conferences and resolved facility issues on the spot.',
      stats: [
        { figure: '1,000+', text: 'guests across 14 conferences' },
        { figure: '20%', text: 'faster check-in' },
        { figure: '50+', text: 'facility issues resolved' },
      ],
    },
    {
      dates: 'Sep 2023 – Present',
      org: 'Augustana College',
      role: 'Campus Employment: barista, concessions, dining services',
      summary: 'Held campus jobs continuously since my first year, alongside a full course load.',
      stats: [{ figure: '10+', text: 'hours a week while a full-time student' }],
    },
  ],

  featured: {
    meta: 'Oct 2025 – Feb 2026 · Hosted by CFA Society Iowa',
    title: 'CFA Institute Research Challenge:',
    titleAccent: "O'Reilly Automotive (ORLY)",
    role: 'Industry and valuation lead, 4-person team',
    result:
      '2nd of 9 universities. Our BUY recommendation set a $117.34 target, 24.5% above the Dec 9, 2025 price, built on a DCF and relative valuation.',
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
      summary: 'Pitch buy/hold/sell calls on 3+ utilities stocks for a student-managed fund of about $282K.',
    },
    {
      dates: 'Aug 2025 – Present',
      title: 'Innovation Competition',
      role: 'Finance Research Analyst',
      summary: 'Built a data-backed launch strategy from Nielsen data and earned recognition from the judges.',
    },
    {
      dates: 'Mar 2026 – Present',
      title: 'EY Expedition Program',
      role: 'Selected participant (top 10%)',
      summary: 'Learned how EY approaches audit, assurance, and advisory work.',
    },
    {
      dates: '2025',
      title: 'Goldman Sachs Virtual Insight Series',
      role: 'Participant',
      summary: 'Earned a Certificate of Achievement (June 2025).',
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

  projectsIntro: 'Class projects, cases, and research papers. Links open the full PDF.',

  projects: [
    {
      kind: 'Equity research',
      title: 'Meta Platforms',
      titleAccent: '(META)',
      role: 'Valuation lead · 4-person team · Sep 2026',
      result:
        'SELL with a $530 target, 28% below the $738.79 price, because planned AI capex pushes free cash flow below zero.',
      link: { href: '/files/META-Equity-Research-Slides.pdf', label: 'Slides (PDF)', ariaLabel: 'Meta Platforms equity research slides (PDF)' },
    },
    {
      kind: 'Commercial credit analysis',
      title: 'Polaris',
      titleAccent: 'Inc.',
      role: 'Individual analyst · Oct 2025',
      result:
        'Recommended a conditional secured credit line; fixed-charge coverage of 0.26x sits well below the 1.0x–1.25x threshold.',
      link: { href: '/files/Polaris-Credit-Analysis.pdf', label: 'Credit analysis (PDF)', ariaLabel: 'Polaris credit analysis (PDF)' },
    },
    {
      kind: 'Tax research paper',
      title: 'Cancellation of',
      titleAccent: 'Debt Income',
      role: 'Author · Nov 2025',
      result:
        'Designed the T.O.D.R. Framework and estimated about $2.88B of taxable COD income a year from consumer debt settlements.',
      link: { href: '/files/COD-Income-Tax-Paper.pdf', label: 'Paper (PDF)', ariaLabel: 'Cancellation of debt income tax paper (PDF)' },
    },
    {
      kind: 'Tax return preparation',
      title: 'Forms 1040',
      titleAccent: 'and 1120',
      role: 'Preparer · Tax course project',
      result: 'Calculated full federal tax liability for an individual (1040) and a C corporation (1120).',
    },
    {
      kind: 'Forensic investigation',
      title: '“Who Took',
      titleAccent: 'the Money?”',
      role: 'Analyst · May 2025',
      result: 'Identified the employee behind a $10,000 theft, traced $10,500 in total, and laid out the control lessons.',
      link: { href: '/files/Who-Took-the-Money-Case-Analysis.pdf', label: 'Case analysis (PDF)', ariaLabel: 'Who Took the Money case analysis (PDF)' },
    },
    {
      kind: 'Fraud case',
      title: 'Rita Crundwell',
      titleAccent: "(All the Queen's Horses)",
      role: 'Co-author · Group paper',
      result: 'Analyzed a $53M+ embezzlement and recommended five controls that would have prevented or caught it.',
      link: { href: '/files/Crundwell-Fraud-Case-Paper.pdf', label: 'Paper (PDF)', ariaLabel: 'Rita Crundwell fraud case paper (PDF)' },
    },
    {
      kind: 'Managerial accounting',
      title: 'Flexible Budget',
      titleAccent: 'Variance Analysis',
      role: 'Analyst · Apr 2025',
      result: 'Flagged three variances over 10%, led by direct labor ($4,150 unfavorable), in a memo to the CFO.',
      link: { href: '/files/Variance-Analysis-Memo.pdf', label: 'Memo (PDF)', ariaLabel: 'Flexible budget variance analysis memo (PDF)' },
    },
    {
      kind: 'Data analytics capstone',
      title: 'Supply',
      titleAccent: 'Planning',
      role: 'Analyst · Data analytics course',
      result: 'Recommended adding 41 days to the ordering cycle, based on 200 supplier orders and a 15.4-day mean delay.',
      link: { href: '/files/Candy-Supply-Capstone-Presentation.pdf', label: 'Presentation (PDF)', ariaLabel: 'Supply planning capstone presentation (PDF)' },
    },
    {
      // To show this project: write a real result below, then delete the `hidden: true` line.
      kind: 'Revenue recognition',
      title: 'Revenue Recognition',
      titleAccent: 'Case (ASC 606)',
      role: 'Team member · ACCT 322 group presentation',
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
      'Auditing',
      'Tax Accounting',
      'Advanced Tax',
      'Accounting Information Systems (ERP)',
      'Financial Management',
      'Business Analytics & Regression',
    ],
  },

  skills: [
    {
      title: 'Accounting',
      items: ['Account reconciliation', 'Accounts payable', 'Internal controls', 'GAAP', 'Individual and corporate tax'],
    },
    {
      title: 'Finance',
      items: ['DCF and comparable-company valuation', 'Three-statement modeling', 'Credit analysis', 'Equity research'],
    },
    {
      title: 'Data and tools',
      items: ['Oracle ERP', 'Advanced Excel', 'Power BI', 'Tableau', 'Regression and forecasting'],
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
