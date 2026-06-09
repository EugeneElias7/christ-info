export interface HarmonyCoordinator {
  name: string
  title: string
  email: string
}

export interface HarmonyWing {
  id: string
  name: string
  tagline: string
  color: string
}

export const harmonyStats = [
  { id: 'mentors', value: '20+', label: 'Industry Mentors' },
  { id: 'impacted', value: '100+', label: 'Students Impacted' },
  { id: 'certifications', value: '431+', label: 'Certifications Completed' },
  { id: 'exchange', value: 'Global', label: 'International Exchange Opportunities' },
]

export const harmonyCoordinators: HarmonyCoordinator[] = [
  { name: 'Dr. Vinay M', title: 'Head of Department', email: 'vinay.m@christuniversity.in' },
  { name: 'Dr. Balakrishnan C', title: 'Associate HOD', email: 'balakrishnan.c@christuniversity.in' },
  { name: 'Dr. Jayapriya J', title: 'Associate Professor', email: 'jayapriya.j@christuniversity.in' },
]

export const harmonyWings: HarmonyWing[] = [
  { id: 'inheritance', name: 'Inheritance', tagline: 'Industry Mentorship', color: 'from-maroon to-maroon-dark' },
  { id: 'archive', name: 'ARCHive', tagline: 'Research Hub for Guidance and Collaboration', color: 'from-gold/80 to-gold' },
  { id: 'skills', name: 'Skills Development', tagline: 'Certifications, Projects and Internships', color: 'from-charcoal to-charcoal-mid' },
  { id: 'international', name: 'International Collaborations', tagline: 'Student Exchange and Global Learning', color: 'from-maroon-dark to-charcoal' },
]

export const inheritanceOutcomes = [
  'Industry Readiness',
  'Professional Networking',
  'Internship Opportunities',
  'Career Guidance',
  'Industry-Aligned Skill Development',
  'Exposure to Emerging Technologies',
]

export const archiveHighlights = [
  { year: 'Research Guidance', desc: 'Faculty-led research mentoring for students across all programmes' },
  { year: 'Faculty Collaboration', desc: 'Collaborative research projects with internal and external experts' },
  { year: 'Project Development', desc: 'End-to-end support from ideation to prototype and publication' },
  { year: 'Innovation Culture', desc: 'Hackathons, ideathons, and innovation challenges throughout the year' },
  { year: 'Academic Publications', desc: 'Guidance for publishing in journals, conferences, and symposia' },
  { year: 'Interdisciplinary Exploration', desc: 'Cross-domain research opportunities beyond computer science' },
]

export const certificationProviders = [
  { name: 'Infosys Springboard', url: 'https://infyspringboard.onwingspan.com/', logo: 'https://logo.clearbit.com/infosys.com' },
  { name: 'NASSCOM FutureSkills Prime', url: 'https://futureskillsprime.in/', logo: 'https://logo.clearbit.com/nasscom.in' },
  { name: 'IBM SkillsBuild', url: 'https://skillsbuild.org/', logo: 'https://logo.clearbit.com/ibm.com' },
  { name: 'Coursera', url: 'https://www.coursera.org/', logo: 'https://logo.clearbit.com/coursera.org' },
  { name: 'L&T EduTech', url: 'https://www.lntedutech.com/', logo: 'https://logo.clearbit.com/lntedutech.com' },
]

export const skillsCategories = [
  { label: 'Projects', value: '50+', desc: 'Student-driven projects completed' },
  { label: 'Summer Internships', value: '30+', desc: 'Industry summer internship placements' },
  { label: 'Flexible Internships', value: '20+', desc: 'Semester-long flexible internship roles' },
  { label: 'Full-time Internships', value: '15+', desc: 'Full-fledged industry internship positions' },
]

export const internationalHighlights = [
  'Student Exchange Opportunities',
  'International Academic Exposure',
  'Expert Sessions',
  'Global Networking',
  'Cultural Exchange',
]

export const harmonyResources = [
  {
    title: 'Google Drive Repository',
    url: 'https://drive.google.com/drive/folders/1N3xUv7orAVVofi6anJg26gKRwQGciQyb',
    description: 'Access curated learning materials, guides, and resources',
  },
  {
    title: 'LinkedIn Activity Highlights',
    url: 'https://www.linkedin.com/posts/jayapriya-j-50054848_dcs-byc-christuniversity-activity-7188886900642836481-u-Uy?utm_source=share&utm_medium=member_desktop',
    description: 'Follow our journey and latest updates on LinkedIn',
  },
]
