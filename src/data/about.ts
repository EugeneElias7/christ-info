export interface AboutTab {
  id: string;
  label: string;
}

export const aboutTabs: AboutTab[] = [
  { id: 'vision-mission', label: 'Vision & Mission' },
  { id: 'founder', label: 'Founder Message' },
  { id: 'history', label: 'History' },
  { id: 'anthem', label: 'University Anthem' },
];

export const visionMission = {
  vision: 'Excellence and Service',
  mission: 'CHRIST (Deemed to be University) is a nurturing ground for an individual\'s holistic development to make effective contribution to society in a dynamic environment.',
  graduateAttributes: `The Graduate Attributes of CHRIST (Deemed to be University) are focused on 'Holistic Development' or 'whole person growth.' The holistic development of a Christite is attained through academic excellence, professional competence, personal, inter-personal and societal skills. Every Graduate of CHRIST (Deemed to be University) is desired to possess the following attributes:

The University actualizes the Graduate Attributes through curricula, courses on Personal, Interpersonal and Societal Skills, co-curricular and extra-curricular activities organised for holistic student experience and life, Student Council, centres and offices such as Centre for Social Action, Student Welfare Office, initiatives such as Peer Education Programme, and intra-University competitions.`,
};

export const founderMessage = {
  name: 'St. Kuriakose Elias Chavara',
  years: '1805 – 1871',
  title: 'Founder, Carmelites of Mary Immaculate (CMI)',
  message: 'Education is not merely the acquisition of knowledge but the formation of the whole person — mind, body, and spirit. A true educational institution is a sanctuary where character is forged, values are nurtured, and every individual is empowered to become a beacon of light in society.',
};

export const historyNarrative = {
  intro: 'CHRIST (Deemed to be University) was born out of the educational vision of St Kuriakose Elias Chavara, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, Carmelites of Mary Immaculate (CMI), in 1831 which administers CHRIST (Deemed to be University).',
  founding: '"CHRIST (Deemed to be University) was established as \'Christ College\' in 1969. It undertook path-breaking initiatives in Indian higher education with the introduction of innovative and modern curricula, insistence on academic discipline, imparting of Holistic Education and adoption of global higher education practices with the support of creative and dedicated staff."',
  growth: 'The University Grants Commission (UGC) of India conferred Autonomy to Christ College in 2004 and identified it as an Institution with Potential for Excellence in 2006. In 2008 under Section 3 of the UGC Act, 1956, the Ministry of Human Resource Development of the Government of India, declared the institution a Deemed to be University, in the name and style of Christ University. One of the first institutions in India to be accredited in 1998 by the National Assessment and Accreditation Council (NAAC), Government of India, and subsequently in 2004, 2016, 2022 CHRIST (Deemed to be University) is currently accredited with \'A+\' Grade. The University is ranked among top 100 universities in India at 63 in the NIRF India Ranking 2025 of Ministry of Education, Government of India.',
  present: 'The multi-disciplinary University which focuses on teaching, research and service offers Bachelor, Master and Doctoral programmes in humanities, social sciences, sciences, commerce, management, engineering, architecture, education, and law to about 40000+ students. The University offers its programmes at four campus locations in Bangalore in Karnataka, at Lavasa in Pune in Maharashtra, and Ghaziabad in Delhi NCR. The campus is a living example of harmonious multiculturalism with students from all the states and union territories and around 60 different countries. CHRIST (Deemed to be University) publishes six peer-reviewed research journals and has published more than 300 books in Kannada and English. A promoter of sports, music and literary activities, it is a nurturing ground for creative excellence.',
};

export const history = [
  { year: '1969', event: 'CHRIST College founded by the CMI congregation in Bangalore.', description: 'Inaugurated with a vision to provide value-based higher education.' },
  { year: '2004', event: 'Autonomy conferred by UGC.', description: 'Recognized for academic excellence and institutional maturity.' },
  { year: '2008', event: 'Declared as Deemed to be University.', description: 'Ministry of HRD confers deemed status under Section 3 of UGC Act.' },
  { year: '2013', event: 'NAAC re-accreditation with A+ grade.', description: 'Highest grade awarded, placing CHRIST among top institutions.' },
  { year: '2017', event: 'Land bought in Nagasandra, Tumkur Road, Bangalore, Karnataka.', description: 'Site acquired for future campus development.' },
  { year: '2022', event: 'Blessing and Inauguration of Bangalore Yeshwanthpur Campus.', description: 'New campus inaugurated to accommodate growing programmes in Computer Science.' },
  { year: '2023', event: 'University ranked 67th in NIRF among top 100 universities in India.', description: 'Consistent improvement in national rankings.' },
  { year: '2024', event: 'BCA programmes brought under AICTE.', description: 'Academic programmes aligned with AICTE standards.' },
  { year: '2026', event: 'Introduction of BCA Honors / Honors with Research.', description: 'Enhanced curriculum with research-oriented pathways for undergraduate students.' },
];

export const universityAnthem = {
  title: 'Christ University Anthem',
  videoPoster: 'https://christuniversity.in/uploads/userfiles/image/march%20on.jpg',
  videoSrc: 'https://christuniversity.in/uploads/userfiles/Christ University Anthem 2019(1).mp4',
  lyrics: [
    'March on Christites, march on\nWith heads held high and hearts so strong,\nMarch on Christites, march on\nWith a steady tread and a cheerful song,\nMarch on, Christites march on.',
    'With Excellence our goal\nWe walk the wheel of time\nStriving for the greatest\nIn body heart and mind.',
    'The flame we hold aloft\nA beacon shining bright,\nLeading by example,\nWhere darkness we bring light.',
    'Service is our Motto\nAs we strive to change the world,\nWe seek the book of knowledge,\nAs life begins to unfurl.',
    'As we go through life,\nThe star of Heaven our guide,\nAnd though we change with time,\nThe Christite spirit survives.',
  ],
};
