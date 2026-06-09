export interface NavLink {
  label: string;
  href: string;
  path?: string;
  children?: { label: string; href?: string; path?: string; description?: string }[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', path: '/' },
  {
    label: 'About University',
    href: '/about-university',
    path: '/about-university',
    children: [
      { label: 'Vision & Mission', href: '/about-university#vision-mission', path: '/about-university#vision-mission' },
      { label: 'Graduate Attributes', href: '/about-university#graduate-attributes', path: '/about-university#graduate-attributes' },
      { label: 'Founder Message', href: '/about-university#founder', path: '/about-university#founder' },
      { label: 'History', href: '/about-university#history', path: '/about-university#history' },
      { label: 'University Anthem', href: '/about-university#anthem', path: '/about-university#anthem' },
      { label: 'Rules & Regulations', href: '/about-university#rules', path: '/about-university#rules' },
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
  { label: 'Samagra Association', href: '/samagra', path: '/samagra' },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Programmes', href: '/programmes' },
      { label: 'Faculty', href: '/faculty' },
      { label: 'About University', href: '/about-university' },
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
      { label: 'Samagra Association', href: '/samagra' },
    ],
  },
];
