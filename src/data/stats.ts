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
  { id: 'research', value: '14000+',      label: 'Research Publications' },
  { id: 'bca-rank', value: 'No. 1',       label: 'in BCA (India Today Ranking)' },
  { id: 'bca-aicte',value: 'AICTE',       label: 'Approved for BCA Programme' },
];
