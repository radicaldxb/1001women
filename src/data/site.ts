export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://1001women.netlify.app"
).replace(/\/$/, "");

export const site = {
  name: "1001 Women",
  title: "The Forgotten Legacy of Muslim Civilisation",
  invitation: "Join the Movement",
  description:
    "Help answer a question too often left unanswered: what was the role of women pioneers in Muslim civilisation? Rediscover overlooked women of science, medicine, learning, arts, leadership and public life — and bring their stories to children, classrooms, museums and online audiences around the world.",
  shortDescription:
    "Join the movement rediscovering overlooked women of science, medicine, scholarship, arts, leadership and public life from Muslim civilisation.",
  heroLead:
    "Discover overlooked women of science, medicine, learning, arts, leadership and public life, and bring their stories to children, classrooms, museums and online audiences around the world.",
  statement: "A lasting answer. A shared memory. A new generation inspired.",
  contactEmail: "ahmed@1001inventions.com",
  formRecipient: "ahmed@1001inventions.com",
  attribution:
    "1001 Women is an initiative of 1001 Foundation, the producer of 1001 Inventions. Produced and led by Ahmed Salim. Research foundation by FSTC.",
} as const;

export const navLinks = [
  { href: "#about", label: "Why It Matters" },
  { href: "#behind", label: "Who Are We" },
  { href: "#kids-book", label: "Children’s Book" },
  { href: "#creating", label: "Exhibition & Guides" },
  { href: "#take-part", label: "Get Involved" },
] as const;

export const orgLinks = {
  foundation: "https://1001foundation.com/",
  inventions: "https://www.1001inventions.com/",
  fstc: "https://www.fstc.org.uk/",
  ahmedSalim: "https://en.wikipedia.org/wiki/Ahmed_Salim",
} as const;

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
  {
    name: "FSTC",
    logo: "/images/logos/FSTC.webp",
    href: orgLinks.fstc,
    description:
      "Historical research and source material behind the 1001 Women initiative.",
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
    icon: "stories",
  },
  {
    title: "Simple maps and timelines",
    icon: "maps",
  },
  {
    title: "Short “more to discover” profiles",
    icon: "profiles",
  },
  {
    title: "Parent and teacher discussion prompts",
    icon: "discussion",
  },
  {
    title: "Glossary of helpful words",
    icon: "glossary",
  },
  {
    title: "Activities for classrooms and homes",
    icon: "activities",
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
    icon: "exhibition",
    title: "Immersive Exhibition",
    description:
      "A touring experience for museums, festivals, cultural centres and schools, using storytelling, media, maps, timelines and interactive moments.",
    href: "#join",
    linkLabel: "Bring it to your city",
  },
  {
    icon: "stories",
    title: "Children’s Book",
    description:
      "A beautifully illustrated book for families and schools, introducing children to inspiring women through clear, age-appropriate stories.",
    href: "#kids-book",
    linkLabel: "Register your interest",
  },
  {
    icon: "school-pack",
    title: "Educator Guide",
    description:
      "Lesson ideas, assemblies, classroom activities, discussion questions and reading prompts for teachers, homeschoolers and community educators.",
    href: "#join",
    linkLabel: "Get teaching resources",
  },
  {
    icon: "creator",
    title: "Content Creator Guide",
    description:
      "Short stories, captions, scripts, images and guidance so creators can share the movement clearly, responsibly and confidently.",
    href: "#join",
    linkLabel: "Create with us",
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

export const interestRoles = [
  "Children’s book updates",
  "Families / book updates",
  "School / educator resources",
  "Host exhibition / museum / festival",
  "Content creator",
  "Sponsor / patron",
  "Publisher / translator",
] as const;
