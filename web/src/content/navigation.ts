export type NavItem = {
  name: string;
  href: string;
  description?: string;
};

export type NavCategory = {
  title: string;
  color: string;
  href?: string;
  items: NavItem[];
};

export const servicesNav: NavCategory[] = [
  {
    title: 'AI & Automation',
    color: '#FF1CF7',
    items: [
      { name: 'AI & Machine Learning', href: '/services/ai-ml', description: 'Intelligent systems and models' },
      { name: 'Software Development', href: '/services/software-dev', description: 'Custom applications and solutions' },
      { name: 'Automation & Testing', href: '/services/automation', description: 'Workflow automation and QA' },
      { name: 'RAG Systems', href: '/services/rag', description: 'Document intelligence solutions' },
    ],
  },
  {
    title: 'Networking',
    color: '#FF6B35',
    items: [
      { name: 'Firewall Configuration', href: '/services/firewall', description: 'Network security solutions' },
      { name: 'Switch Configuration', href: '/services/switches', description: 'Network infrastructure' },
      { name: 'Wireless Solutions', href: '/services/wireless', description: 'Wi-Fi and access points' },
      { name: 'VPN & Remote Access', href: '/services/vpn', description: 'Secure connectivity' },
    ],
  },
  {
    title: 'IT Infrastructure',
    color: '#00D9FF',
    items: [
      { name: 'Server Configuration', href: '/services/servers', description: 'Windows & Linux servers' },
      { name: 'Structured Cabling', href: '/services/cabling', description: 'Network infrastructure' },
      { name: 'CCTV Installation', href: '/services/cctv', description: 'Surveillance systems' },
      { name: 'Biometric Access', href: '/services/biometric', description: 'Access control systems' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: '#7B2BFF',
    items: [
      { name: 'Cloud Services', href: '/services/cloud', description: 'Cloud infrastructure' },
      { name: 'DevOps Solutions', href: '/services/devops', description: 'CI/CD and automation' },
      { name: 'Remote IT Support', href: '/services/remote-support', description: 'Online technical assistance' },
      { name: 'Monitoring & Maintenance', href: '/services/monitoring', description: 'Zabbix and GLPI' },
    ],
  },
];

export const productsNav: NavCategory[] = [
  {
    title: 'AI & Automation',
    color: '#FF1CF7',
    href: '/products#ai-automation',
    items: [
      { name: 'Multi-Agent System', href: '/products/ai-multi-agent' },
      { name: 'RAG System', href: '/products/ai-rag' },
      { name: 'SQL AI Agent', href: '/products/ai-sql-agent' },
      { name: 'WhatsApp Expense Tracker', href: '/products/ai-expense-tracker' },
    ],
  },
  {
    title: 'IT Infrastructure',
    color: '#00D9FF',
    href: '/products#it-infrastructure',
    items: [
      { name: 'Quick Shop - CCTV & NVR', href: '/products/net-quickshop-cctv' },
      { name: 'Quick Shop - Biometric', href: '/products/net-quickshop-biometric' },
      { name: 'Quick Shop - POS & Printers', href: '/products/net-quickshop-pos' },
      { name: 'Quick Shop - Wi-Fi', href: '/products/net-quickshop-wifi' },
    ],
  },
];

export const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'What We Do', href: '#', hasDropdown: true, dropdown: 'services' },
  { name: 'Products', href: '#', hasDropdown: true, dropdown: 'products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
