export type Story = {
  name: string;
  summary: string;
  tag: string;
  image?: string;
};

/**
 * Optional field icons for story cards.
 * Flaticon classes, or "svg:pharmacy-symbol" for custom shapes
 * not available in the open-source Uicons pack.
 */
export const storyTagIcons: Record<string, string> = {
  Astronomy: "fi fi-tr-constellation",
  Mathematics: "fi fi-tr-total",
  Medicine: "fi fi-tr-mortar-pestle",
  Literature: "fi fi-tr-catalog-magazine",
  Calligraphy: "fi fi-tr-attribution-pen",
  "Public works": "fi fi-tr-government-flag",
  Nursing: "fi fi-tr-user-nurse",
  Midwifery: "fi fi-tr-baby",
  Education: "fi fi-tr-graduation-cap",
  Scholarship: "fi fi-tr-e-learning",
  Jurisprudence: "fi fi-tr-equality",
  Leadership: "fi fi-tr-driver-woman",
  Poetry: "fi fi-tr-quill-pen-story",
  "Public life": "fi fi-tr-woman-head",
};

/** Featured portraits for the horizontal story scroller */
export const featuredStories: Story[] = [
  {
    name: "‘Aishah bint al-Jayyar",
    summary:
      "A physician of northern Morocco known for her knowledge of medicines and treatments.",
    tag: "Medicine",
    image: "/images/stories/medicine-2.webp",
  },
  {
    name: "Fatimah al-Fihriyyah",
    summary:
      "A philanthropist remembered for her role in establishing a major centre of learning in Fez.",
    tag: "Education",
    image: "/images/stories/education-2.webp",
  },
  {
    name: "Walladah bint al-Mustakfi",
    summary:
      "A poet-princess of Córdoba remembered for poetry and literary gatherings.",
    tag: "Literature",
    image: "/images/stories/literature-2.webp",
  },
  {
    name: "Fatimah al-Samarqandiyyah",
    summary:
      "A jurist and legal authority whose judgement was sought by scholars and rulers.",
    tag: "Jurisprudence",
    image: "/images/stories/jurisprudence-2.webp",
  },
];

export const stories: Story[] = [
  {
    name: "Maryam al-‘Ijliyyah",
    summary:
      "An astrolabe maker connected to the scientific culture of medieval Aleppo.",
    tag: "Astronomy",
  },
  {
    name: "Lubna of Córdoba",
    summary:
      "A mathematician, secretary and scholar associated with the intellectual world of Al-Andalus.",
    tag: "Mathematics",
  },
  {
    name: "Al-Shifa’ bint ‘Abdillah",
    summary:
      "A healer, teacher and early figure in public administration in Medina.",
    tag: "Public life",
  },
  {
    name: "Fatimah al-Fihriyyah",
    summary:
      "A philanthropist remembered for her role in establishing a major centre of learning in Fez.",
    tag: "Education",
  },
  {
    name: "Shuhdah bint al-Ibari",
    summary:
      "A scholar and calligrapher whose teaching connected generations of students.",
    tag: "Scholarship",
  },
  {
    name: "Zubaydah bint Ja‘far",
    summary: "A patron remembered for major public works and philanthropy.",
    tag: "Public works",
  },
  {
    name: "Sutaytah al-Mahamali",
    summary:
      "A Baghdadi jurist remembered for her knowledge of mathematics and inheritance calculations.",
    tag: "Mathematics",
  },
  {
    name: "Bijeh al-Kermaniyyah",
    summary:
      "A learned woman of Kerman associated with astronomy, mathematics and poetry.",
    tag: "Astronomy",
  },
  {
    name: "Umm al-Hasan bint Abi Ja‘far",
    summary: "A physician, poet and Qur’an reciter from the region of Granada.",
    tag: "Medicine",
  },
  {
    name: "Zaynab of Banu Awd",
    summary: "A physician remembered for treating wounds and eye conditions.",
    tag: "Medicine",
  },
  {
    name: "Nusaybah bint al-Harith",
    summary:
      "A companion remembered for caring for the sick and wounded during early Muslim expeditions.",
    tag: "Nursing",
  },
  {
    name: "Umm Asiyah",
    summary: "A skilled midwife who served the Tulunid royal household in Egypt.",
    tag: "Midwifery",
  },
  {
    name: "Fatimah al-Samarqandiyyah",
    summary:
      "A jurist and legal authority whose judgement was sought by scholars and rulers.",
    tag: "Jurisprudence",
  },
  {
    name: "Karimah al-Marwaziyyah",
    summary:
      "A renowned Hadith scholar in Makkah whose students travelled from far away to study with her.",
    tag: "Scholarship",
  },
  {
    name: "Nafisah bint al-Hasan",
    summary:
      "A respected scholar and philanthropist whose learning attracted leading figures of her time.",
    tag: "Scholarship",
  },
  {
    name: "Khadijah bint Sahnun",
    summary:
      "A jurist and mufti of Qayrawan whose legal opinions were widely sought.",
    tag: "Jurisprudence",
  },
  {
    name: "Zaynab bint al-Kamal",
    summary:
      "A major Hadith scholar in Damascus who taught generations of prominent students.",
    tag: "Scholarship",
  },
  {
    name: "Walladah bint al-Mustakfi",
    summary:
      "A poet-princess of Córdoba remembered for poetry and literary gatherings.",
    tag: "Literature",
  },
  {
    name: "Al-Khansa’",
    summary: "One of the most celebrated poets of early Arabic literature.",
    tag: "Poetry",
  },
  {
    name: "Arwa bint Ahmad al-Sulayhiyyah",
    summary:
      "A ruler of Yemen remembered for political leadership and public patronage.",
    tag: "Leadership",
  },
  {
    name: "Shajarat al-Durr",
    summary: "A major political figure who ruled Egypt during a pivotal period.",
    tag: "Leadership",
  },
  {
    name: "Fatimah bint al-Aqra’",
    summary:
      "A distinguished Baghdadi calligrapher trusted to write important diplomatic correspondence.",
    tag: "Calligraphy",
  },
  {
    name: "Padishah Khatun",
    summary:
      "A ruler of Kerman who was also associated with poetry and calligraphy.",
    tag: "Leadership",
  },
  {
    name: "‘Aishah al-Ba‘uniyyah",
    summary:
      "A scholar, author and poet whose works explored spirituality, knowledge and devotion.",
    tag: "Literature",
  },
  {
    name: "‘Aishah bint al-Jayyar",
    summary:
      "A physician of northern Morocco known for her knowledge of medicines and treatments.",
    tag: "Medicine",
  },
  {
    name: "Umm al-Darda’ al-Sughra",
    summary:
      "A respected jurist, teacher and Hadith scholar associated with Damascus and Jerusalem.",
    tag: "Scholarship",
  },
];

export const storyTags = [
  "All",
  ...Array.from(new Set(stories.map((s) => s.tag))).sort(),
] as const;
