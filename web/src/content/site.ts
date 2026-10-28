export type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  email: string;
  phone: { display: string; tel: string; whatsapp: string };
  linkedin: string;
};

const ahmed: Person = {
  id: 'ahmed',
  name: 'Muhammad Ahmed',
  role: 'AI Engineer',
  bio: 'Builds AI agents, RAG systems and automation, and takes them from prototype to deployment.',
  highlights: [
    'Agentic AI and multi-agent systems',
    'RAG and SQL agents',
    'Full-stack with Next.js and Node.js',
  ],
  email: 'tensortopology@gmail.com',
  phone: {
    display: '0307 5298122',
    tel: '+923075298122',
    whatsapp: 'https://wa.me/923075298122',
  },
  linkedin: 'https://www.linkedin.com/in/muhammad-ahmed-375b12378',
};

const najam: Person = {
  id: 'najam',
  name: 'Najam',
  role: 'Networking Engineer',
  bio: 'Installs and secures office networks, CCTV, Wi-Fi, attendance systems and servers, and keeps them running.',
  highlights: [
    'Office networks and structured cabling',
    'MikroTik, firewalls and VPN',
    'CCTV, servers and IT support',
  ],
  email: 'najamdanialdanialmasih@gmail.com',
  phone: {
    display: '0349 5710923',
    tel: '+923495710923',
    whatsapp: 'https://wa.me/923495710923',
  },
  linkedin: 'https://www.linkedin.com/in/najam-sandhu-03ab87441',
};

export const team: Person[] = [ahmed, najam];

export const site = {
  name: 'TensorTopology',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  tagline: 'AI and networking, built by two engineers.',
  description:
    'TensorTopology is a two-person team: an AI engineer and a networking engineer. AI agents, RAG and automation, plus network, CCTV and IT infrastructure installation.',
  hero: {
    headline: 'One of us builds the AI. The other builds the network it runs on.',
    left: 'Agents, RAG and automation that do real work.',
    right: 'Networks, security and infrastructure that stay up.',
  },
  contact: {
    aiEmail: ahmed.email,
    networkEmail: najam.email,
  },
};
