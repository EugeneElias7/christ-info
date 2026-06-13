export interface ProgrammeSection {
  name: string;
  roomNo: string;
  classTeacher: string;
  strength?: number;
  floor?: string;
}

export interface UniversityLink {
  name: string;
  url: string;
  subItems?: string[];
}

export interface HighlightItem {
  text: string;
  universities?: UniversityLink[];
}

export interface HighlightGroup {
  title: string;
  items: HighlightItem[];
}

export interface Programme {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  durationHons?: string;
  description: string;
  icon: string;
  exploreUrl: string;
  sections: ProgrammeSection[];
  highlights?: HighlightGroup[];
}

export const programmes: Programme[] = [
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications',
    shortName: 'BCA',
    duration: '3 Years (6 Semesters)',
    durationHons: 'BCA (Hons / Hons with Research): 4 Years (8 Semesters)',
    description: 'Bachelor of Computer Applications (BCA) is an undergraduate program that focuses on building software professionals with strong practical and theoretical knowledge in Computer Science. The curriculum provides options for students to choose multiple electives depending on their interest of study. Interdisciplinary Courses on Mathematics, Statistics and Financial management enhance the breadth of domain knowledge.',
    icon: 'Code2',
    exploreUrl: 'https://christuniversity.in//courses/Nzc3',
    sections: [
      { name: '1 BCA A', roomNo: 'B202', classTeacher: 'Thontadari C', strength: 65, floor: 'Second Floor' },
      { name: '1 BCA B', roomNo: 'B203', classTeacher: 'Loveline Zeema', strength: 65, floor: 'Second Floor' },
    ],
    highlights: [
      {
        title: 'Student Exchange Programmes',
        items: [
          {
            text: 'Student Exchange Programmes with International Partner Universities',
            universities: [
              {
                name: 'THWS University, Germany',
                url: 'https://www.thws.de/',
                subItems: ['Semester Exchange Programme', 'Year Exchange Programme'],
              },
              {
                name: 'Edgehill University, UK',
                url: 'https://www.edgehill.ac.uk',
                subItems: ['Semester Exchange Programme', 'Year Exchange Programme'],
              },
            ],
          },
        ],
      },
      {
        title: 'Academic & Career Development',
        items: [
          { text: 'Industry-Relevant Curriculum' },
          { text: 'Fast Track Programme' },
          { text: 'Flexible Internship Pathways' },
        ],
      },
    ],
  },
  {
    id: 'mds',
    name: 'Master of Data Science',
    shortName: 'MDS',
    duration: '2 Years (4 Semesters)',
    description: 'Data Science is popular in all academia, business sectors, and research and development to make effective decision in day to day activities. MSc in Data Science is a two year programme with four semesters.',
    icon: 'BarChart3',
    exploreUrl: 'https://christuniversity.in//courses/NzQ5',
    sections: [
      { name: '1 MDS A', roomNo: 'B212', classTeacher: 'Gobinath R', strength: 65, floor: 'Second Floor' },
    ],
    highlights: [
      {
        title: 'Student Exchange Programmes',
        items: [
          {
            text: 'Student Exchange Programmes with International Universities',
            universities: [
              { name: 'Binghamton University', url: 'https://www.binghamton.edu/' },
              { name: 'Virginia Commonwealth University', url: 'https://www.vcu.edu/' },
            ],
          },
        ],
      },
      {
        title: 'Academic Opportunities',
        items: [
          { text: 'Advanced Data Analytics Curriculum' },
          { text: 'Industry Projects' },
          { text: 'Research-Oriented Learning' },
          { text: 'Internship Opportunities' },
          { text: 'Capstone Project Experience' },
        ],
      },
    ],
  },
  {
    id: 'msc-ai-cs',
    name: 'MSc Artificial Intelligence & Cyber Security',
    shortName: 'MSc AI & CS',
    duration: '2 Years (4 Semesters)',
    description: 'An advanced programme combining artificial intelligence, machine learning, and cybersecurity to address modern security challenges.',
    icon: 'Shield',
    exploreUrl: 'https://christuniversity.in//courses/NjM5',
    sections: [
      { name: '1 MSc AI & CS', roomNo: 'B219', classTeacher: 'Kavitha S', strength: 65, floor: 'Second Floor' },
    ],
    highlights: [
      {
        title: 'Student Exchange Programmes',
        items: [
          {
            text: 'Student Exchange Programmes with International Universities',
            universities: [
              { name: 'Binghamton University', url: 'https://www.binghamton.edu/' },
              { name: 'Virginia Commonwealth University', url: 'https://www.vcu.edu/' },
            ],
          },
        ],
      },
      {
        title: 'Academic Opportunities',
        items: [
          { text: 'Artificial Intelligence & Machine Learning Focus' },
          { text: 'Cyber Security Specialization' },
          { text: 'Industry-Aligned Curriculum' },
          { text: 'Research & Innovation Opportunities' },
          { text: 'Internship Opportunities' },
          { text: 'Hands-on Laboratory Experience' },
        ],
      },
    ],
  },
  {
    id: 'phd',
    name: 'Doctor of Philosophy (PhD) in Computer Science',
    shortName: 'PhD',
    duration: '3 – 5 Years',
    description: 'Doctor of Philosophy (PhD) in Computer Science is a research-oriented doctoral program designed to advance knowledge in specialized areas of computing, artificial intelligence, data science, and emerging technologies through rigorous academic inquiry and original contribution.',
    icon: 'GraduationCap',
    exploreUrl: 'https://christuniversity.in//courses/NzI3',
    sections: [],
  },
];
