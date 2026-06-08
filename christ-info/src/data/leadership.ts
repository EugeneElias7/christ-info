import rawData from './faculty-data.json';

export interface Leader {
  id: string;
  name: string;
  title: string;
  designation: string;
  email: string;
  emailLink: string;
  linkedin: string;
  profileUrl: string;
  imagePlaceholder: string;
  imageUrl?: string;
  isLeadership?: boolean;
  excludeFromFaculty?: boolean;
}

function initials(name: string): string {
  return name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function facultyByName(name: string) {
  return rawData.faculty.find(f => f.name.toLowerCase() === name.toLowerCase());
}

// Director and Dean are campus-level (from JSON leadership array)
const rawLeadership = rawData.leadership
  .filter(l => l.id !== 'hod') // hod created separately from faculty data to avoid duplication
  .map((l) => {
    const facultyMatch = facultyByName(l.name);
    return {
      id: l.id,
      name: l.name,
      title: l.designation,
      designation: l.designation,
      email: facultyMatch?.email || l.email,
      emailLink: facultyMatch?.emailLink || l.emailLink,
      linkedin: facultyMatch?.linkedin || l.linkedin,
      profileUrl: facultyMatch?.christProfile || l.christProfile,
      imagePlaceholder: initials(l.name),
      imageUrl: facultyMatch?.image || l.image || undefined,
      isLeadership: true,
      excludeFromFaculty: true,
    };
  });

// HOD and Associate HOD are department-level (appear in both leadership + faculty)
const hodRaw = rawData.faculty.find(f => f.roles.includes('hod'));
const hod = hodRaw ? {
  id: 'hod',
  name: hodRaw.name,
  title: 'Head of Department',
  designation: 'Head of Department',
  email: hodRaw.email,
  emailLink: hodRaw.emailLink,
  linkedin: hodRaw.linkedin,
  profileUrl: hodRaw.christProfile,
  imagePlaceholder: initials(hodRaw.name),
  imageUrl: hodRaw.image || undefined,
  isLeadership: true,
  excludeFromFaculty: false,
} : null;

const assocHodRaw = rawData.faculty.find(f => f.roles.includes('assochod'));
const assocHod = assocHodRaw ? {
  id: 'assoc-hod',
  name: assocHodRaw.name,
  title: 'Associate HOD',
  designation: 'Associate Head of Department',
  email: assocHodRaw.email,
  emailLink: assocHodRaw.emailLink,
  linkedin: assocHodRaw.linkedin,
  profileUrl: assocHodRaw.christProfile,
  imagePlaceholder: initials(assocHodRaw.name),
  imageUrl: assocHodRaw.image || undefined,
  isLeadership: true,
  excludeFromFaculty: false,
} : null;

// All other faculty (excluding those already handled)
const leadershipNames = rawData.leadership.map(l => l.name.toLowerCase());
const specialRoles = ['hod', 'assochod'];
const otherFaculty = rawData.faculty.filter(f =>
  !leadershipNames.includes(f.name.toLowerCase()) &&
  !f.roles.some(r => specialRoles.includes(r))
).map(f => ({
  id: `faculty-${f.facultyId}`,
  name: f.name,
  title: f.designation,
  designation: f.designation,
  email: f.email,
  emailLink: f.emailLink,
  linkedin: f.linkedin,
  profileUrl: f.christProfile,
  imagePlaceholder: initials(f.name),
  imageUrl: f.image || undefined,
  isLeadership: false,
  excludeFromFaculty: false,
}));

export const leaders: Leader[] = [
  ...rawLeadership,
  ...(hod ? [hod] : []),
  ...(assocHod ? [assocHod] : []),
  ...otherFaculty,
];

export const leadershipTeam = leaders.filter(l => l.isLeadership);
export const facultyOnly = leaders.filter(l => !l.excludeFromFaculty);
