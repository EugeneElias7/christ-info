export interface NavLink {
  label: string;
  href: string;
  path?: string;
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  href?: string;
  path?: string;
  description?: string;
  children?: NavChild[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', path: '/' },
  {
    label: 'Student Support',
    href: '#',
    children: [
      { label: 'Student Portal (KP)', href: 'https://kp.christuniversity.in/KnowledgePro/StudentLogin.do', description: 'Knowledge Pro student portal' },
      { label: 'Harmony', path: '/harmony', description: 'Student wellness initiative' },
      {
        label: 'Internship',
        children: [
          { label: 'Summer Internship' },
          { label: 'Flexible Internship' },
          { label: '6-Month Full-Fledged Internship' },
        ],
      },
      { label: 'Certifications', path: '/certifications', description: 'Professional certifications' },
    ],
  },
  {
    label: 'Programmes',
    href: '/programmes',
    path: '/programmes',
    children: [
      { label: 'BCA', href: '/programmes/bca', path: '/programmes/bca', description: 'Bachelor of Computer Applications' },
      { label: 'MDS', href: '/programmes/mds', path: '/programmes/mds', description: 'Master of Data Science' },
      { label: 'MSc AI & CS', href: '/programmes/msc-ai-cs', path: '/programmes/msc-ai-cs', description: 'MSc in AI & Cyber Security' },
      { label: 'PhD', href: '/programmes/phd', path: '/programmes/phd', description: 'Doctor of Philosophy' },
    ],
  },
  { label: 'Faculty', href: '/faculty', path: '/faculty' },
  {
    label: 'Facilities',
    href: '#',
    children: [
      { label: 'Labs', path: '/labs', description: 'Computer labs and research facilities' },
    ],
  },
  { label: 'Clubs & Associations', href: '/clubs-associations', path: '/clubs-associations' },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Programmes', href: '/programmes' },
      { label: 'Faculty', href: '/faculty' },
      { label: 'Labs', href: '/labs' },
      { label: 'Rules & Regulations', href: '/#rules' },
      { label: 'Rankings', href: '/#stats' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'BCA', href: 'https://christuniversity.in//courses/Nzc3' },
      { label: 'MDS', href: 'https://christuniversity.in//courses/NzQ5' },
      { label: 'MSc AI & CS', href: 'https://christuniversity.in//courses/NjM5' },
      { label: 'PhD', href: 'https://christuniversity.in//courses/NzI3' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'CHRIST University', href: 'https://christuniversity.in/' },
      { label: 'Yeshwantpur Campus', href: 'https://byc.christuniversity.in/' },
      { label: 'CS Department', href: 'https://christuniversity.in/departments/yeshwanthpur-campus/school-of-sciences/computer-science' },
      { label: 'Clubs & Associations', href: '/clubs-associations' },
    ],
  },
];
