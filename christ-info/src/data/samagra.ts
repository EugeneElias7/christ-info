export interface Wing {
  id: string;
  name: string;
  domain: string;
  tagline: string;
  icon: string; // lucide icon name as string
}

export const wings: Wing[] = [
  {
    id: 'vault-vortex',
    name: 'Vault Vortex',
    domain: 'Fin-tech & Innovation',
    tagline: 'Fin-tech innovation hub ',
    icon: 'Vault',
  },
  {
    id: 'shield',
    name: 'Shield',
    domain: 'Cyber Security & Ethical Hacking',
    tagline: 'Defend. Detect. Disrupt.',
    icon: 'Shield',
  },
  {
    id: 'vizerion',
    name: 'Vizerion',
    domain: 'E Sports & Competitive Gaming',
    tagline: 'E Sports, redefined',
    icon: 'Brain',
  },
  {
    id: 'off-topic',
    name: 'Off Topic',
    domain: 'Creativity & Quirky',
    tagline: 'Where ideas roam free',
    icon: 'Sparkles',
  },
  {
    id: 'csc-soc',
    name: 'CSC Soc',
    domain: 'Computer Science Community',
    tagline: 'Code. Connect. Collaborate.',
    icon: 'Code2',
  },
  {
    id: 'wist',
    name: 'WIST',
    domain: 'Women in Software & Technology',
    tagline: 'Empowering women in tech',
    icon: 'Users',
  },
];
