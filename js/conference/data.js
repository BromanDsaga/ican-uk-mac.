// data.js - ICAN UK Conference 2026 - Central Data Model
// All content is editable here. Replace placeholders with real ICAN UK data when available.
// IMPORTANT: Do not present placeholder statistics as factual. Update with real values.

export const conferenceData = {
  year: 2026,
  title: "ICAN UK & District Society Conference",
  shortTitle: "CONFERENCE 2026",
  theme: "Navigating the Future of Global Finance",
  tagline: "Heritage • Knowledge • Conversation • Opportunity",
  dates: {
    start: "2026-11-18",
    end: "2026-11-19",
    display: "18–19 NOVEMBER 2026",
    startTime: "09:00",
    endTime: "18:00",
  },
  venue: {
    name: "[VENUE NAME]",
    address: "[VENUE ADDRESS, LONDON]",
    city: "London",
    country: "United Kingdom",
    postcode: "[POSTCODE]",
    nearestTube: "[NEAREST TUBE]",
    nearestTrain: "[NEAREST TRAIN]",
    parking: "[PARKING INFO]",
    accessibility:
      "Step-free access available. Contact us for specific requirements.",
  },
  format: "In-person + Virtual",
  cpdHours: 12,
  delegatesExpected: 500,
  registration: {
    earlyBirdDeadline: "2026-09-30T23:59:59Z",
    tickets: [
      {
        id: "member",
        type: "ICAN MEMBER",
        earlyBird: 150,
        standard: 200,
        currency: "£",
        recommended: true,
        benefits: [
          "Full conference access",
          "Gala dinner",
          "CPD certificate",
          "Networking sessions",
          "Digital resources",
        ],
      },
      {
        id: "non-member",
        type: "NON-MEMBER",
        earlyBird: 200,
        standard: 250,
        currency: "£",
        recommended: false,
        benefits: [
          "Full conference access",
          "Gala dinner",
          "CPD certificate",
          "Networking sessions",
        ],
      },
      {
        id: "student",
        type: "STUDENT / ASSOCIATE",
        earlyBird: 75,
        standard: 100,
        currency: "£",
        recommended: false,
        benefits: [
          "Full conference access",
          "CPD certificate",
          "Student networking",
        ],
      },
      {
        id: "virtual",
        type: "VIRTUAL",
        earlyBird: 50,
        standard: 75,
        currency: "£",
        recommended: false,
        benefits: [
          "Live stream access",
          "On-demand recordings (30 days)",
          "Digital CPD certificate",
        ],
      },
    ],
  },
  themes: [
    "AI & ACCOUNTING",
    "GLOBAL TAX",
    "REGULATION & COMPLIANCE",
    "FINTECH & INNOVATION",
    "LEADERSHIP",
    "FUTURE OF WORK",
    "SUSTAINABILITY REPORTING",
    "RISK & RESILIENCE",
  ],
  audience: [
    {
      id: "accountants",
      label: "ACCOUNTANTS",
      desc: "Chartered Accountants across practice and industry seeking technical depth and CPD.",
    },
    {
      id: "cfos",
      label: "CFOs",
      desc: "Finance leaders shaping strategy, governance and performance.",
    },
    {
      id: "finance-leaders",
      label: "FINANCE LEADERS",
      desc: "Finance Directors, Controllers and senior managers driving transformation.",
    },
    {
      id: "business-leaders",
      label: "BUSINESS LEADERS",
      desc: "Entrepreneurs and executives navigating finance, growth and regulation.",
    },
    {
      id: "members",
      label: "MEMBERS",
      desc: "ICAN members and Fellows from across the UK district.",
    },
    {
      id: "non-members",
      label: "NON-MEMBERS",
      desc: "Professionals exploring ICAN standards, community and development.",
    },
    {
      id: "students",
      label: "STUDENTS",
      desc: "Students and recent qualifiers building career foundations.",
    },
    {
      id: "associates",
      label: "ASSOCIATES",
      desc: "Associates seeking pathways to full qualification and network.",
    },
  ],
  whyAttend: [
    {
      num: "01",
      title: "INSIGHT",
      text: "Understand the forces reshaping global finance — from AI and regulation to tax and sustainability.",
    },
    {
      num: "02",
      title: "CPD",
      text: "Earn professional development credit through expert-led sessions, panels and workshops.",
    },
    {
      num: "03",
      title: "NETWORK",
      text: "Build meaningful relationships with professionals across industries, firms and borders.",
    },
    {
      num: "04",
      title: "OPPORTUNITY",
      text: "Discover partnerships, ideas and professional opportunities that extend beyond the event.",
    },
  ],
  previousConference: {
    year: 2025,
    theme: "[2025 THEME]",
    stats: [
      { value: "550+", label: "DELEGATES", desc: "From across UK and Nigeria" },
      {
        value: "18",
        label: "EXPERT SPEAKERS",
        desc: "Leaders from Big Four, industry and regulation",
      },
      {
        value: "12",
        label: "CPD HOURS",
        desc: "Accredited professional development",
      },
      {
        value: "92%",
        label: "SATISFACTION",
        desc: "Attendee satisfaction rate",
      },
    ],
    outcomes: [
      "Practical insight",
      "Professional connections",
      "Industry knowledge",
      "New opportunities",
      "CPD development",
      "Community belonging",
    ],
    gallery: [
      {
        id: "main",
        label: "Main hall",
        placeholder: "Previous conference main stage",
      },
      {
        id: "speaker",
        label: "Keynote",
        placeholder: "Speaker delivering keynote",
      },
      {
        id: "networking",
        label: "Networking",
        placeholder: "Delegates networking",
      },
      { id: "gala", label: "Gala dinner", placeholder: "Gala dinner moment" },
    ],
  },
};

export const speakers = [
  {
    id: "speaker-01",
    name: "Dr. Amina Yusuf",
    creds: "FCA, PhD",
    role: "CFO",
    org: "Global Finance Group",
    session: "Navigating the Global Finance Landscape",
    bio: "Finance leader with 20+ years across FTSE 100 and African markets. Focus on governance, transformation and inclusive growth.",
    img: "images/speaker-1.jpg",
    linkedin: "#",
  },
  {
    id: "speaker-02",
    name: "James Okonkwo",
    creds: "FCA",
    role: "Partner, Risk Advisory",
    org: "Big Four Firm",
    session: "Regulation & the Future of Audit",
    bio: "Risk and regulation specialist advising UK and Nigerian financial institutions on compliance, resilience and assurance.",
    img: "images/executive/chairman.jpeg",
    linkedin: "#",
  },
  {
    id: "speaker-03",
    name: "Sarah Adeyemi",
    creds: "FCA, MBA",
    role: "Finance Director",
    org: "Fintech Unicorn",
    session: "AI & Accounting: Practical Implementation",
    bio: "Former Big Four, now scaling finance operations in high-growth technology businesses.",
    img: "images/executive/vice-chairman.jpeg",
    linkedin: "#",
  },
  {
    id: "speaker-04",
    name: "Prof. David Olatunji",
    creds: "PhD, FCA",
    role: "Professor of Accounting",
    org: "London Business School",
    session: "Future of Work for Finance Professionals",
    bio: "Academic and advisor on future skills, ethics and professional development in accounting.",
    img: "images/executive/technical-secretary.jpeg",
    linkedin: "#",
  },
  {
    id: "speaker-05",
    name: "Chiamaka Nnaji",
    creds: "FCA",
    role: "Group Tax Lead",
    org: "Multinational PLC",
    session: "Global Tax: What Changed in 2026",
    bio: "International tax strategist with deep expertise in UK-Nigeria cross-border structures.",
    img: "images/executive/treasurer.jpeg",
    linkedin: "#",
  },
  {
    id: "speaker-06",
    name: "Michael Thompson",
    creds: "FCA",
    role: "Former HMRC Policy Advisor",
    org: "Independent",
    session: "UK Regulatory Outlook",
    bio: "Former HMRC advisor now consulting on tax policy and regulatory change.",
    img: "images/executive/ex-officio-1.jpeg",
    linkedin: "#",
  },
];

export const conferenceSessions = [
  {
    id: "session-01",
    day: "day-1",
    date: "2026-11-18",
    startTime: "09:00",
    endTime: "09:45",
    type: "keynote",
    title: "Navigating the Global Finance Landscape",
    description:
      "Opening keynote exploring macro trends, regulation and technology reshaping finance. Sets the context for two days of insight and debate.",
    speakerIds: ["speaker-01"],
    format: "in-person",
    calendarEnabled: true,
  },
  {
    id: "session-02",
    day: "day-1",
    date: "2026-11-18",
    startTime: "10:00",
    endTime: "11:00",
    type: "panel",
    title: "AI & Accounting: From Hype to Implementation",
    description:
      "Panel of practitioners sharing real implementations, lessons learned and practical frameworks for AI adoption in finance teams.",
    speakerIds: ["speaker-03", "speaker-02"],
    format: "in-person",
    calendarEnabled: true,
  },
  {
    id: "session-03",
    day: "day-1",
    date: "2026-11-18",
    startTime: "11:30",
    endTime: "12:30",
    type: "workshop",
    title: "Global Tax Update 2026",
    description:
      "Deep dive into UK and international tax changes affecting cross-border businesses. Practical takeaways for compliance and planning.",
    speakerIds: ["speaker-05"],
    format: "in-person",
    calendarEnabled: true,
  },
  {
    id: "session-04",
    day: "day-1",
    date: "2026-11-18",
    startTime: "13:30",
    endTime: "14:30",
    type: "panel",
    title: "Regulation & the Future of Audit",
    description:
      "How assurance is evolving. Discussion on quality, ethics, technology and public trust.",
    speakerIds: ["speaker-02", "speaker-06"],
    format: "in-person",
    calendarEnabled: false,
  },
  {
    id: "session-05",
    day: "day-1",
    date: "2026-11-18",
    startTime: "15:00",
    endTime: "16:00",
    type: "networking",
    title: "Structured Networking: Build Your Board",
    description:
      "Facilitated networking to connect with peers across industries, experience levels and specialisms.",
    speakerIds: [],
    format: "in-person",
    calendarEnabled: false,
  },
  {
    id: "session-06",
    day: "day-2",
    date: "2026-11-19",
    startTime: "09:00",
    endTime: "10:00",
    type: "keynote",
    title: "Future of Work for Finance Professionals",
    description:
      "Skills, mindsets and pathways for the next decade of finance leadership.",
    speakerIds: ["speaker-04"],
    format: "in-person",
    calendarEnabled: true,
  },
  {
    id: "session-07",
    day: "day-2",
    date: "2026-11-19",
    startTime: "10:30",
    endTime: "11:30",
    type: "workshop",
    title: "Fintech Finance: Scaling with Control",
    description:
      "How high-growth businesses build robust finance functions without losing agility.",
    speakerIds: ["speaker-03"],
    format: "virtual",
    calendarEnabled: true,
  },
  {
    id: "session-08",
    day: "day-2",
    date: "2026-11-19",
    startTime: "12:00",
    endTime: "13:00",
    type: "panel",
    title: "Leadership & Inclusion in Finance",
    description:
      "CFOs and leaders discuss building high-performance, inclusive finance teams.",
    speakerIds: ["speaker-01", "speaker-04"],
    format: "in-person",
    calendarEnabled: true,
  },
];

export const sponsors = {
  platinum: [
    { name: "[PLATINUM SPONSOR 1]", logo: "" },
    { name: "[PLATINUM SPONSOR 2]", logo: "" },
  ],
  gold: [
    { name: "[GOLD SPONSOR 1]", logo: "" },
    { name: "[GOLD SPONSOR 2]", logo: "" },
    { name: "[GOLD SPONSOR 3]", logo: "" },
  ],
  silver: [
    { name: "[SILVER SPONSOR 1]", logo: "" },
    { name: "[SILVER SPONSOR 2]", logo: "" },
  ],
  exhibitors: [
    { name: "[EXHIBITOR 1]", logo: "" },
    { name: "[EXHIBITOR 2]", logo: "" },
  ],
};

export const faqs = [
  {
    q: "Who can attend?",
    a: "ICAN members, non-members, students, associates, and finance professionals across practice and industry. The conference is open to all with an interest in global finance.",
  },
  {
    q: "How many CPD hours are available?",
    a: "Up to 12 CPD hours for full in-person attendance. Virtual attendance offers up to 8 CPD hours. Certificates issued after the event.",
  },
  {
    q: "Can non-members attend?",
    a: "Yes. Non-members are welcome at non-member rates. This is an excellent opportunity to experience ICAN UK community and standards.",
  },
  {
    q: "Is there a virtual option?",
    a: "Yes. The conference is hybrid — in-person in London plus live stream and 30-day on-demand access for virtual ticket holders.",
  },
  {
    q: "What is included in the ticket?",
    a: "Depends on ticket type. In-person tickets typically include sessions, gala dinner, networking, CPD certificate and digital resources. See pricing section for details.",
  },
  {
    q: "Can I transfer my ticket?",
    a: "Ticket transfers are possible up to 7 days before the event. Contact members@icanuk.org.uk for assistance.",
  },
  {
    q: "Will I receive a CPD certificate?",
    a: "Yes. CPD certificates are issued digitally within 7 working days after the conference, subject to attendance verification.",
  },
  {
    q: "Are accommodation costs included?",
    a: "No. Accommodation is not included. We have negotiated rates with nearby hotels — see Travel & Accommodation section.",
  },
  {
    q: "How do I request a visa invitation letter?",
    a: "Registered delegates can request an invitation letter via the registration confirmation email. Letters are issued for visa purposes only and do not guarantee entry.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Full refund up to 30 days before, 50% up to 14 days, no refund within 14 days but ticket transfer allowed. See full T&Cs at registration.",
  },
];
