export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 'naac',     value: 'A+',          label: 'NAAC' },
  { id: 'nirf',     value: 'Top 60',      label: 'NIRF' },
  { id: 'wuri',     value: '681–700',     label: 'WURI' },
  { id: 'qs',       value: 'Top 150',     label: 'QS Asia' },
  { id: 'research', value: '100+',        label: 'Research Publications' },
];
