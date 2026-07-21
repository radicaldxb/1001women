/** Primary public domain. Sitemap, robots, and metadata use this when env still points at Netlify. */
export const productionSiteUrl = "https://1001women.org";

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const netlifyPrimary = process.env.URL?.replace(/\/$/, "");

  if (netlifyPrimary && !netlifyPrimary.includes("netlify.app")) {
    return netlifyPrimary;
  }
  if (configured && !configured.includes("netlify.app")) {
    return configured;
  }
  if (configured) return configured;
  if (netlifyPrimary) return netlifyPrimary;
  return productionSiteUrl;
}

export const siteUrl = resolveSiteUrl();

export const site = {
  name: "1001 Women",
  title: "The Forgotten Legacy of Muslim Civilisation",
  invitation: "Take Part",
  description:
    "Help answer a question too often left unanswered: what was the role of women pioneers in Muslim civilisation? Rediscover overlooked women of science, medicine, learning, arts, leadership and public life — and bring their stories to children, classrooms, museums and online audiences around the world.",
  shortDescription:
    "1001 Women is the world’s first global initiative restoring awareness of overlooked women from Muslim civilisation — through educational campaigns, books, exhibitions and digital media.",
  heroLead: [
    "1001 Women is the world’s first global initiative to restore awareness of the overlooked contributions of more than 300 women from Muslim civilisation to science, medicine, learning, arts, leadership and public life.",
    "Join us and take part in bringing their stories into mainstream public awareness through educational campaigns, books, exhibitions and digital media.",
  ],
  statement: "A lasting answer. A shared memory. A new generation inspired.",
  contactEmail: "ahmed@1001inventions.com",
  formRecipient: "ahmed@1001inventions.com",
  companyName: "1001 Foundation (UK)",
  companyNumber: "11321847",
  attribution:
    "1001 Women is an initiative of 1001 Foundation (UK), the producer of 1001 Inventions. Research foundation by FSTC.",
} as const;

export const navLinks = [
  { href: "#stories", label: "The Legacy" },
  { href: "#about", label: "Why It Matters" },
  { href: "#creating", label: "Programmes" },
  { href: "#behind", label: "Who Are We" },
] as const;

export const orgLinks = {
  foundation: "https://1001foundation.com/",
  inventions: "https://www.1001inventions.com/",
  fstc: "https://www.fstc.org.uk/",
  ahmedSalim: "https://en.wikipedia.org/wiki/Ahmed_Salim",
} as const;

export const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/1001Inventions",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/1001inventions/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/1001inventions",
  },
] as const;

export const credibility = [
  {
    label: "An initiative of",
    value: "1001 Foundation",
    href: orgLinks.foundation,
  },
  {
    label: "The producer of",
    value: "1001 Inventions",
    href: orgLinks.inventions,
  },
  {
    label: "Produced and led by",
    value: "Ahmed Salim",
    href: orgLinks.ahmedSalim,
  },
] as const;

export const producerRoles = [
  {
    name: "1001 Foundation",
    logo: "/images/logos/1001-Foundation.webp",
    href: orgLinks.foundation,
    description:
      "The producer of 1001 Inventions and the organisation developing the wider movement, exhibition and public resources.",
  },
  {
    name: "1001 Inventions",
    logo: "/images/logos/1001-inventions.webp",
    href: orgLinks.inventions,
    description:
      "The global books, exhibitions and educational programmes that 1001 Women builds on.",
  },
] as const;

export const bookFacts = [
  {
    title: "Who it is for",
    text: "Children aged around 8–12, families, teachers and reading groups.",
  },
  {
    title: "Format",
    text: "Planned as a beautifully illustrated print book, with digital extras for families and educators.",
  },
  {
    title: "Stories",
    text: "A focused selection of around 40–50 women told in clear, age-appropriate language.",
  },
  {
    title: "Wider discovery",
    text: "Maps, timelines and short profiles will help readers discover many more women from the wider research.",
  },
] as const;

export const bookIncludes = [
  {
    title: "Illustrated stories of women pioneers",
    image: "/images/icons/woman.png",
    imageAlt: "Women pioneers",
  },
  {
    title: "Short “more to discover” profiles",
    image: "/images/icons/profile.png",
    imageAlt: "Story profiles",
  },
  {
    title: "Glossary of helpful words",
    image: "/images/icons/glossary.png",
    imageAlt: "Glossary",
  },
  {
    title: "Simple maps and timelines",
    image: "/images/icons/map.png",
    imageAlt: "Maps and timelines",
  },
  {
    title: "Parent and teacher discussion prompts",
    image: "/images/icons/parent.png",
    imageAlt: "Parent and teacher prompts",
  },
  {
    title: "Activities for classrooms and homes",
    image: "/images/icons/activities.png",
    imageAlt: "Classroom and home activities",
  },
] as const;

export const preorderTiers = [
  {
    id: "one-copy",
    title: "One Copy",
    description: "For your child, family or home library.",
    icon: "one-copy",
  },
  {
    id: "gift-pack",
    title: "Gift Pack",
    description: "Order extra copies to share with family and friends.",
    icon: "gift-pack",
  },
  {
    id: "school-pack",
    title: "School Pack",
    description: "For classrooms, libraries, madrasahs and reading groups.",
    icon: "school-pack",
  },
  {
    id: "sponsor-copies",
    title: "Sponsor Copies",
    description: "Help place books in schools and communities.",
    icon: "sponsor-copies",
  },
] as const;

export const regions = [
  "United Kingdom",
  "Europe",
  "North America",
  "Middle East",
  "South Asia",
  "Southeast Asia",
  "Africa",
  "Other region",
] as const;

export const expressions = [
  {
    title: "Children’s Book",
    description:
      "A beautifully illustrated book for families and schools, introducing children to inspiring women through clear, age-appropriate stories.",
    href: "#join",
    linkLabel: "Take part",
    image: "/images/expressions/childrens-book-card.webp",
    imageAlt: "1001 Women children’s book cover",
    tone: "blend",
    imageFit: "cover",
  },
  {
    title: "Immersive Exhibition",
    description:
      "A 1001 Women touring experience for museums, festivals, cultural centres and schools, using storytelling, media, maps, timelines and interactive moments.",
    href: "#join",
    linkLabel: "Bring it to your city",
    image: "/images/expressions/exhibition-card.webp",
    imageAlt: "Immersive exhibition gallery visual",
    tone: "plum",
    imageFit: "cover",
  },
  {
    title: "Educator Guide",
    description:
      "1001 Women lesson ideas, assemblies, classroom activities, discussion questions and reading prompts for teachers, homeschoolers and community educators.",
    href: "#join",
    linkLabel: "Get teaching resources",
    image: "/images/stories/education-2.webp",
    imageAlt: "Education story visual",
    tone: "navy",
    imageFit: "cover",
  },
  {
    title: "Content Creator Guide",
    description:
      "Short stories, captions, scripts, images and guidance so creators can share 1001 Women clearly, responsibly and confidently.",
    href: "#join",
    linkLabel: "Create with us",
    image: "/images/expressions/creator-card.webp",
    imageAlt: "Content creator writing mosaic visual",
    tone: "amber",
    imageFit: "cover",
  },
] as const;

export const audiences = [
  {
    title: "Families & readers",
    description:
      "Join the list for children’s book news, sample stories and preorder updates.",
    href: "#join",
    linkLabel: "Get book updates",
    role: "Families / book updates",
  },
  {
    title: "Schools & educators",
    description:
      "Request teaching resources and ideas for classrooms, assemblies and reading groups.",
    href: "#join",
    linkLabel: "Request resources",
    role: "School / educator resources",
  },
  {
    title: "Museums & festivals",
    description:
      "Register interest in hosting the exhibition, talks, screenings or live experiences.",
    href: "#join",
    linkLabel: "Host the exhibition",
    role: "Host exhibition / museum / festival",
  },
  {
    title: "Content creators",
    description:
      "Receive ready-to-share stories, visuals, scripts and creator opportunities.",
    href: "#join",
    linkLabel: "Join creator list",
    role: "Content creator",
  },
  {
    title: "Sponsors & patrons",
    description:
      "Support children’s books, school resources, translations and exhibition development.",
    href: "#join",
    linkLabel: "Support the movement",
    role: "Sponsor / patron",
  },
  {
    title: "Publishers & translators",
    description:
      "Discuss language editions, regional publishing and responsible rights partnerships.",
    href: "#join",
    linkLabel: "Discuss partnership",
    role: "Publisher / translator",
  },
] as const;

export const faqItems = [
  {
    question: "What is 1001 Women?",
    answer:
      "1001 Women is a global initiative restoring awareness of overlooked women from Muslim civilisation — through educational campaigns, books, exhibitions and digital media. It builds on the work of 1001 Inventions and research partners including FSTC.",
  },
  {
    question: "Who is behind 1001 Women?",
    answer:
      "1001 Women is an initiative of 1001 Foundation (UK), the producer of 1001 Inventions. The initiative is produced and led by Ahmed Salim. Historical research is grounded in work by the Foundation for Science, Technology and Civilisation (FSTC).",
  },
  {
    question: "How can I take part?",
    answer:
      "Use the Take Part form on the home page to register your interest. You can join as a family, educator, museum, creator, sponsor, or publishing partner. We will be in touch by email with relevant updates.",
  },
  {
    question: "Is the children’s book available to buy yet?",
    answer:
      "Not yet. The illustrated children’s book is in development. Interest registered on this site is not a completed purchase — final pricing, fulfilment and payment will follow through a separate process when the book is published.",
  },
  {
    question: "What programmes are planned?",
    answer:
      "Plans include a children’s book, immersive exhibitions, educator guides, digital storytelling and wider public programmes — all designed to bring overlooked women from Muslim civilisation into classrooms, museums, homes and public memory.",
  },
  {
    question: "How many women does the initiative cover?",
    answer:
      "The movement draws on research into more than 300 overlooked women from Muslim civilisation. The children’s book will introduce a focused selection of around 40–50 stories, with wider discovery supported through maps, timelines and profiles.",
  },
  {
    question: "How do I contact the team?",
    answer:
      "For take part registrations and general movement interest, use the form on the home page. For press or partnership enquiries, email ahmed@1001inventions.com. For privacy matters, see the contact details on the Privacy Policy page.",
  },
  {
    question: "Where can AI systems read about this site?",
    answer:
      "This site provides a machine-readable summary at /llms.txt and a human-readable overview at /llm. Both describe the initiative, key pages, and how to take part.",
  },
] as const;

export const publicPages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/llm", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
] as const;

export const interestRoles = [
  "Children’s book updates",
  "Families / book updates",
  "School / educator resources",
  "Host exhibition / museum / festival",
  "Content creator",
  "Sponsor / patron",
  "Publisher / translator",
] as const;
