export interface WingCoordinator {
  name: string;
  email: string;
}

export interface WingDetail {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  description: string;
  facultyCoordinators: WingCoordinator[];
  studentCoordinators?: WingCoordinator[];
  focusAreas?: string[];
}

export interface AfterHourWing {
  id: string;
  name: string;
  tagline: string;
  description: string;
  performanceHighlights: string[];
  facultyCoordinator: WingCoordinator;
}

export const samagraLeadership = {
  facultyCoordinators: [
    { name: 'Gayathry S Warrier', email: 'gayathry.warrier@christuniversity.in' },
    { name: 'Kokilavani T', email: 'kokilavani.t@christuniversity.in' },
    { name: 'Stephen R', email: 'stephen.r@christuniversity.in' },
  ],
  description:
    'Samagra serves as the official Computer Science Association of CHRIST (Deemed to be University), Bangalore Yeshwanthpur Campus. Through academic, technical, cultural, and professional initiatives, the association fosters leadership, collaboration, innovation, and holistic student development.',
}

export const samagraWings: WingDetail[] = [
  {
    id: 'csc-soc',
    name: 'CSC SOC',
    tagline: 'Communication \u2022 Critical Thinking \u2022 Meaningful Discussion',
    domain: 'Computer Science Community',
    description:
      'CSC SOC (Computer Society) is a discussion and engagement forum that encourages students to participate in debates, contemporary discussions, public speaking, and analytical conversations. The wing focuses on improving communication skills, confidence, leadership, and critical thinking.',
    facultyCoordinators: [{ name: 'Mithun D\'Souza', email: 'mithun.dsouza@christuniversity.in' }],
    focusAreas: ['Debates & Discussions', 'Public Speaking', 'Critical Analysis', 'Leadership Development'],
  },
  {
    id: 'wist',
    name: 'WIST',
    tagline: 'Women in Science & Technology',
    domain: 'Women in Software & Technology',
    description:
      'WIST promotes participation, leadership, and professional growth among women in technology. The wing conducts awareness programmes, technical sessions, mentoring initiatives, and collaborative events that encourage diversity and inclusion within computing disciplines.',
    facultyCoordinators: [
      { name: 'Kousalya R', email: 'kousalya.r@christuniversity.in' },
      { name: 'Jayadurga R', email: 'jayadurga.r@christuniversity.in' },
    ],
    focusAreas: ['Diversity & Inclusion', 'Technical Sessions', 'Mentoring', 'Awareness Programmes'],
  },
  {
    id: 'off-topic',
    name: 'Off Topic',
    tagline: 'Creativity Beyond the Classroom',
    domain: 'Creativity & Quirky',
    description:
      'OFF TOPIC serves as a creative platform for students to explore storytelling, podcasting, communication, and innovative content creation. The wing encourages unconventional thinking and meaningful expression beyond academic boundaries.',
    facultyCoordinators: [{ name: 'Umamaheswari D', email: 'umamaheswari.d@christuniversity.in' }],
    focusAreas: ['Storytelling', 'Podcasting', 'Creative Writing', 'Content Creation'],
  },
  {
    id: 'vizerion',
    name: 'Vizerion',
    tagline: 'E-Sports & Competitive Gaming',
    domain: 'E Sports & Competitive Gaming',
    description:
      'VIZERION provides a structured platform for competitive gaming, e-sports activities, strategy development, and team-based competitions. The wing promotes collaboration, discipline, sportsmanship, and digital engagement.',
    facultyCoordinators: [{ name: 'Rajasekaran N', email: 'rajasekaran.n@christuniversity.in' }],
    focusAreas: ['Competitive Gaming', 'Strategy Development', 'Team Competitions', 'E-Sports Events'],
  },
  {
    id: 'shield',
    name: 'Shield',
    tagline: 'Cyber Security & Ethical Hacking',
    domain: 'Cyber Security & Ethical Hacking',
    description:
      'S.H.I.E.L.D focuses on cyber security awareness, ethical hacking, digital safety, and emerging security technologies. Students gain exposure to security concepts through workshops, challenges, and technical events.',
    facultyCoordinators: [{ name: 'Jayapriya J', email: 'jayapriya.j@christuniversity.in' }],
    focusAreas: ['Cyber Security', 'Ethical Hacking', 'Digital Safety', 'Security Workshops'],
  },
  {
    id: 'vault-vortex',
    name: 'Vault Vortex',
    tagline: 'FinTech & Innovation',
    domain: 'Fin-tech & Innovation',
    description:
      'Vault Vortex explores financial technologies, innovation, entrepreneurship, and emerging digital business ecosystems. The wing encourages students to understand modern financial systems and technology-driven innovation.',
    facultyCoordinators: [{ name: 'Praveen V P', email: 'praveen.vp@christuniversity.in' }],
    focusAreas: ['FinTech', 'Innovation', 'Entrepreneurship', 'Digital Business'],
  },
  {
    id: 'tech-revamp',
    name: 'Tech Revamp',
    tagline: 'Technology Innovation & Emerging Trends',
    domain: 'Tech Innovation',
    description:
      'Tech Revamp focuses on emerging technologies, innovation, product development, and future industry trends. The wing organizes sessions and activities that help students remain updated with rapidly evolving technological landscapes.',
    facultyCoordinators: [{ name: 'Suganthi J', email: 'suganthi.j@christuniversity.in' }],
    focusAreas: ['Emerging Technologies', 'Innovation', 'Product Development', 'Industry Trends'],
  },
]

export const afterHourInfo = {
  logo: '',
  instagram: 'https://www.instagram.com/afterhours.productions/',
  category: 'School of Sciences Cultural Club',
  title: 'After Hour Productions',
  description:
    'After Hour Productions is a cultural theatre collective functioning under the School of Sciences at CHRIST (Deemed to be University), Bangalore Yeshwanthpur Campus. The club provides students with opportunities to explore theatre, performance arts, storytelling, stagecraft, and creative expression while representing the institution across various cultural platforms.',
  about: [
    'Official theatre team of the School of Sciences.',
    'Functioning successfully for the past 4 years.',
    'Participates in fests across multiple states including Karnataka, Maharashtra, and Tamil Nadu.',
    'Has performed in events hosted in cities such as Tumkur, Mumbai, and Chennai.',
    'Has represented CHRIST University in festivals organized by IITs, IIMs, and other reputed educational institutions.',
    'Promotes creativity, confidence, teamwork, communication, and stage presence.',
  ],
}

export const afterHourWings: AfterHourWing[] = [
  {
    id: 'street',
    name: 'Street',
    tagline: 'Street Theatre & Public Performance',
    description:
      'The Street wing of After Hour Productions specializes in street theatre, public performances, and socially relevant dramatic presentations. The team engages audiences through impactful storytelling in open spaces, addressing contemporary themes and social issues.',
    performanceHighlights: [
      'Street plays at inter-collegiate fests across Karnataka',
      'Social awareness performances in public spaces',
      'Improv theatre showcases at campus events',
    ],
    facultyCoordinator: { name: 'Faculty Coordinator', email: '' },
  },
  {
    id: 'proscenium',
    name: 'Proscenium',
    tagline: 'Stage Theatre & Dramatic Arts',
    description:
      'The Proscenium wing focuses on stage theatre, elaborate productions, and dramatic arts. The team works on scriptwriting, direction, set design, and full-stage performances, delivering compelling theatrical experiences.',
    performanceHighlights: [
      'Full-stage productions at university cultural fests',
      'Participation in IIT and IIM cultural festivals',
      'Annual theatre productions at CHRIST University',
    ],
    facultyCoordinator: { name: 'Faculty Coordinator', email: '' },
  },
  {
    id: 'mime',
    name: 'Mime',
    tagline: 'Silent Expression & Mime Art',
    description:
      'The Mime wing explores the art of silent expression through body language, gestures, and facial expressions. The team creates powerful visual narratives without spoken words, captivating audiences with their physical storytelling.',
    performanceHighlights: [
      'Mime performances at national-level cultural events',
      'Competitions and showcases in Mumbai and Chennai',
      'Workshops on mime techniques and body language',
    ],
    facultyCoordinator: { name: 'Faculty Coordinator', email: '' },
  },
]

export type ModalWing = WingDetail | (AfterHourWing & { type: 'after-hour' })
