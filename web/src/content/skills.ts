export type Skill = { name: string; detail: string };

export type SkillGroup = {
  id: string;
  track: 'ai' | 'network';
  title: string;
  blurb: string;
  skills: Skill[];
};

// ================================================================ AI & AUTOMATION

export const aiGroups: SkillGroup[] = [
  {
    id: 'ai-ml',
    track: 'ai',
    title: 'AI & Machine Learning',
    blurb: 'Agents, retrieval and models that work inside real applications.',
    skills: [
      {
        name: 'Agentic AI & AI Agents',
        detail:
          'Designing and developing autonomous AI agents capable of reasoning, decision-making, and executing task-specific workflows.',
      },
      {
        name: 'RAG (Retrieval-Augmented Generation)',
        detail:
          'Building RAG systems that combine LLMs with external knowledge sources for accurate, context-aware responses.',
      },
      {
        name: 'Multi-Agent Systems',
        detail:
          'Developing multi-agent architectures where specialized AI agents collaborate to complete complex workflows.',
      },
      {
        name: 'SQL Agents',
        detail:
          'Developing AI-powered SQL agents that understand natural-language queries and interact with databases to retrieve and analyze data.',
      },
      {
        name: 'AI Sales Support Agents',
        detail:
          'Developing AI agents for customer communication, requirement gathering, pricing, negotiation, payment processing, and workflow automation.',
      },
      {
        name: 'LLM & Model Integration',
        detail:
          'Working with Large Language Models and integrating AI models into real-world applications and automated workflows.',
      },
      {
        name: 'Model Training & Fine-Tuning',
        detail:
          'Training and integrating machine learning and deep learning models for application-specific requirements.',
      },
      {
        name: 'AI Pipelines',
        detail:
          'Designing AI/ML pipelines covering data processing, model development, evaluation, integration, and deployment.',
      },
      {
        name: 'Microsoft Azure AI',
        detail:
          'Working with Microsoft Azure AI services for building, integrating, and deploying AI-powered solutions.',
      },
      {
        name: 'AI Deployment',
        detail:
          'Deploying AI and machine learning applications and integrating models into production-ready systems.',
      },
    ],
  },
  {
    id: 'software',
    track: 'ai',
    title: 'Software Development',
    blurb: 'Full-stack web applications that connect AI to the people using it.',
    skills: [
      {
        name: 'Frontend Development',
        detail: 'Building user interfaces with React.js and Next.js.',
      },
      {
        name: 'Backend Development',
        detail: 'Building server-side applications with Node.js and Python.',
      },
      {
        name: 'API Development & Integration',
        detail: 'Designing, developing, integrating, and testing REST APIs.',
      },
      {
        name: 'Full-Stack Development',
        detail: 'Building web applications with modern frontend and backend technologies.',
      },
      {
        name: 'Database Integration',
        detail: 'Connecting applications and AI systems with databases and data services.',
      },
    ],
  },
  {
    id: 'automation-testing',
    track: 'ai',
    title: 'Automation & Testing',
    blurb: 'Repetitive work handled by scripts, browsers and APIs.',
    skills: [
      {
        name: 'Web Automation',
        detail: 'Automating browser-based workflows and repetitive web tasks.',
      },
      {
        name: 'Selenium',
        detail: 'Developing automated browser testing and web automation solutions using Selenium.',
      },
      {
        name: 'API Testing',
        detail: 'Testing and validating APIs for functionality, reliability, and expected responses.',
      },
      {
        name: 'Workflow Automation',
        detail:
          'Automating application and business workflows using APIs, scripts, and AI-powered systems.',
      },
    ],
  },
  {
    id: 'devops-deployment',
    track: 'ai',
    title: 'DevOps & Deployment',
    blurb: 'From a Git commit to a running service.',
    skills: [
      {
        name: 'Git & GitHub',
        detail: 'Version control, collaborative development, repository management, and code management.',
      },
      {
        name: 'GitHub Actions',
        detail:
          'Building CI/CD workflows for automated testing, deployment, and development processes.',
      },
      {
        name: 'Application Deployment',
        detail:
          'Deploying web applications, APIs, and AI solutions to cloud and hosting environments.',
      },
      {
        name: 'Cloud & Azure',
        detail:
          'Working with Microsoft Azure services for application hosting, AI integration, and deployment.',
      },
    ],
  },
];

// ================================================================ NETWORKING

export const networkGroups: SkillGroup[] = [
  {
    id: 'network-infrastructure',
    track: 'network',
    title: 'Network Infrastructure',
    blurb: 'Offices cabled, switched and ready to grow.',
    skills: [
      { name: 'Complete Office Network Installation', detail: 'End-to-end network setup for business offices.' },
      { name: 'LAN/WAN Infrastructure', detail: 'Local and wide area network design and installation.' },
      { name: 'Structured Cabling (Cat6/Cat6A)', detail: 'Professional cable installation following industry standards.' },
      { name: 'Fiber Optic Network Installation', detail: 'High-speed fiber network deployment and termination.' },
      { name: 'Network Rack Installation', detail: 'Professional rack mounting and organization.' },
      { name: 'Patch Panel Installation & Dressing', detail: 'Clean patch panel setup with proper cable management.' },
      { name: 'Keystone & RJ45 Termination', detail: 'Precise termination of network cables and connectors.' },
      { name: 'Network Switch Installation & Configuration', detail: 'Enterprise switch deployment and VLAN configuration.' },
      { name: 'Core & Distribution Switch Setup', detail: 'Backbone network infrastructure for large deployments.' },
      { name: 'Network Expansion & Upgrades', detail: 'Scaling existing networks with minimal disruption.' },
      { name: 'Network Troubleshooting & Optimization', detail: 'Diagnosing and resolving network performance issues.' },
    ],
  },
  {
    id: 'firewall-security',
    track: 'network',
    title: 'Firewall, Router & Network Security',
    blurb: 'Traffic controlled, sites connected, networks hardened.',
    skills: [
      { name: 'MikroTik Router Configuration', detail: 'Advanced MikroTik router setup and management.' },
      { name: 'Firewall Installation & Configuration', detail: 'Network security through firewall rules and policies.' },
      { name: 'NAT & Port Forwarding', detail: 'Configuring network address translation and service exposure.' },
      { name: 'VPN Configuration', detail: 'Secure remote access and encrypted connections.' },
      { name: 'Site-to-Site VPN', detail: 'Connecting multiple office locations securely over the internet.' },
      { name: 'Remote Access VPN', detail: 'Secure remote worker connectivity to office resources.' },
      { name: 'Multi-WAN / ISP Failover', detail: 'Redundant internet connections for business continuity.' },
      { name: 'Load Balancing', detail: 'Distributing traffic across multiple connections for performance.' },
      { name: 'Bandwidth Management', detail: 'Controlling and prioritizing network traffic and applications.' },
      { name: 'DHCP & DNS Configuration', detail: 'Network address and name resolution services.' },
      { name: 'Network Segmentation', detail: 'Isolating network zones for security and performance.' },
      { name: 'Network Security Hardening', detail: 'Implementing security best practices and access controls.' },
    ],
  },
  {
    id: 'cctv',
    track: 'network',
    title: 'CCTV & Surveillance',
    blurb: 'Cameras installed, recorded and viewable from anywhere.',
    skills: [
      { name: 'IP CCTV Installation', detail: 'Network-based surveillance camera deployment.' },
      { name: 'Analog CCTV Installation', detail: 'Traditional CCTV system setup and configuration.' },
      { name: 'Wi-Fi Camera Installation', detail: 'Wireless surveillance camera deployment.' },
      { name: 'NVR/DVR Installation & Configuration', detail: 'Video recording system setup and storage management.' },
      { name: 'CCTV Network Configuration', detail: 'Network infrastructure for camera systems.' },
      { name: 'Remote CCTV Viewing', detail: 'Mobile and web access to live and recorded footage.' },
      { name: 'Camera Storage & Recording Setup', detail: 'Video retention configuration and storage planning.' },
      { name: 'CCTV Maintenance', detail: 'Regular system checks and preventive maintenance.' },
      { name: 'Camera Replacement & Upgrades', detail: 'System expansion and technology upgrades.' },
      { name: 'CCTV Cabling & Testing', detail: 'Professional cabling with signal verification.' },
      { name: 'CCTV System Expansion', detail: 'Adding cameras and storage to existing systems.' },
    ],
  },
  {
    id: 'wifi',
    track: 'network',
    title: 'Wi-Fi & Wireless',
    blurb: 'Coverage planned properly, guests kept separate.',
    skills: [
      { name: 'Enterprise Wi-Fi Installation', detail: 'Business-grade wireless network deployment.' },
      { name: 'Access Point Installation', detail: 'Strategic placement of wireless access points.' },
      { name: 'Wi-Fi Coverage Planning', detail: 'Site survey and coverage optimization.' },
      { name: 'Guest Wi-Fi', detail: 'Separate network for visitors with limited access.' },
      { name: 'Secure Corporate Wi-Fi', detail: 'Enterprise authentication and encryption.' },
      { name: 'Wireless Network Optimization', detail: 'Channel planning and interference mitigation.' },
      { name: 'Point-to-Point Wireless Links', detail: 'Building-to-building wireless connectivity.' },
      { name: 'Outdoor Wi-Fi', detail: 'Weather-resistant wireless coverage for outdoor spaces.' },
      { name: 'Wi-Fi Troubleshooting', detail: 'Resolving connectivity and performance issues.' },
    ],
  },
  {
    id: 'servers',
    track: 'network',
    title: 'Server & Data Infrastructure',
    blurb: 'Servers, storage and backups set up and maintained.',
    skills: [
      { name: 'Windows Server Installation', detail: 'Enterprise server operating system deployment.' },
      { name: 'Active Directory Deployment', detail: 'Centralized user and computer management.' },
      { name: 'Domain Controller Setup', detail: 'Network authentication and directory services.' },
      { name: 'DNS/DHCP Server', detail: 'Network services for name resolution and IP management.' },
      { name: 'File Server', detail: 'Centralized file storage and sharing for organizations.' },
      { name: 'NAS Installation', detail: 'Network-attached storage for backup and file sharing.' },
      { name: 'Backup Server', detail: 'Automated backup solutions and disaster recovery.' },
      { name: 'Storage Configuration', detail: 'RAID, SAN, and storage optimization.' },
      { name: 'Server Room Setup', detail: 'Physical infrastructure for server hosting.' },
      { name: 'Server Rack Installation', detail: 'Professional rack mounting and cable management.' },
      { name: 'Server Migration', detail: 'Moving workloads to new hardware or platforms.' },
      { name: 'Server Maintenance', detail: 'Regular updates, patches, and health monitoring.' },
    ],
  },
  {
    id: 'biometric',
    track: 'network',
    title: 'Biometric & Attendance',
    blurb: 'Attendance tracked across one office or many branches.',
    skills: [
      { name: 'Fingerprint Attendance Systems', detail: 'Biometric time and attendance with fingerprint readers.' },
      { name: 'Face Recognition Systems', detail: 'Contactless attendance with facial recognition.' },
      { name: 'Biometric Device Installation', detail: 'Physical installation and network setup of devices.' },
      { name: 'Attendance Software Installation', detail: 'Software deployment and database configuration.' },
      { name: 'Employee Enrollment', detail: 'Biometric template registration and user management.' },
      { name: 'Shift & Schedule Configuration', detail: 'Work hours, overtime, and leave management.' },
      { name: 'Attendance Device Networking', detail: 'Connecting devices to office network and server.' },
      { name: 'Attendance System Troubleshooting', detail: 'Resolving hardware and software issues.' },
      { name: 'Multiple-Branch Attendance Setup', detail: 'Centralized attendance across multiple locations.' },
    ],
  },
  {
    id: 'access-control',
    track: 'network',
    title: 'Access Control & Door Security',
    blurb: 'Doors that know who is allowed through.',
    skills: [
      { name: 'Door Access Control', detail: 'Electronic door locks with user authentication.' },
      { name: 'Magnetic Door Locks', detail: 'Electromagnetic lock installation and wiring.' },
      { name: 'Electric Locks', detail: 'Motorized lock systems for controlled access.' },
      { name: 'RFID Card Systems', detail: 'Proximity card readers and access cards.' },
      { name: 'Fingerprint Door Access', detail: 'Biometric door entry systems.' },
      { name: 'Face Recognition Access', detail: 'Facial recognition for secure door entry.' },
      { name: 'Exit Button Installation', detail: 'Push-to-exit buttons and request-to-exit sensors.' },
      { name: 'Door Sensor Installation', detail: 'Magnetic sensors for door status monitoring.' },
      { name: 'Access Controller Configuration', detail: 'Access control panel setup and user management.' },
      { name: 'Access Logs & User Management', detail: 'Tracking entry/exit and managing permissions.' },
      { name: 'Multi-Door Access Control', detail: 'Centralized control of multiple access points.' },
    ],
  },
  {
    id: 'voip',
    track: 'network',
    title: 'VoIP & Telephone Systems',
    blurb: 'Office and call-centre phone systems on your own network.',
    skills: [
      { name: 'IP Phone Installation', detail: 'Network-based telephone handset deployment.' },
      { name: 'VoIP Network Setup', detail: 'Quality of service and voice VLAN configuration.' },
      { name: 'IP PBX Installation', detail: 'Private branch exchange for office phone systems.' },
      { name: 'Extension Configuration', detail: 'User extensions, call routing, and voicemail.' },
      { name: 'Telephone Cabling', detail: 'Structured cabling for phone system deployment.' },
      { name: 'SIP Configuration', detail: 'Session Initiation Protocol for VoIP services.' },
      { name: 'Call Center VoIP Infrastructure', detail: 'High-capacity phone systems for call centers.' },
      { name: 'VoIP Troubleshooting', detail: 'Diagnosing call quality and connectivity issues.' },
    ],
  },
  {
    id: 'office-it',
    track: 'network',
    title: 'Office IT Infrastructure',
    blurb: 'Computers, printers and accounts ready on day one.',
    skills: [
      { name: 'Computer & Laptop Deployment', detail: 'Workstation setup and configuration for employees.' },
      { name: 'Printer/Scanner Networking', detail: 'Network printer setup and driver installation.' },
      { name: 'Network Printer Configuration', detail: 'Centralized print management and user access.' },
      { name: 'Windows Installation', detail: 'Operating system deployment and activation.' },
      { name: 'Software Deployment', detail: 'Application installation and license management.' },
      { name: 'User Account Setup', detail: 'Creating user accounts and assigning permissions.' },
      { name: 'IT Workstation Setup', detail: 'Complete desk setup with computer, phone, and peripherals.' },
      { name: 'Office Relocation & IT Setup', detail: 'Moving IT infrastructure to a new location.' },
    ],
  },
  {
    id: 'monitoring',
    track: 'network',
    title: 'Monitoring & IT Management',
    blurb: 'Problems seen early, everything documented.',
    skills: [
      { name: 'Network Monitoring', detail: 'Real-time monitoring of network devices and traffic.' },
      { name: 'Server Monitoring', detail: 'CPU, memory, disk, and service health monitoring.' },
      { name: 'Internet/ISP Monitoring', detail: 'Uptime and performance tracking of internet connections.' },
      { name: 'Bandwidth Monitoring', detail: 'Traffic analysis and usage reporting.' },
      { name: 'Device Monitoring', detail: 'Health checks for switches, routers, and access points.' },
      { name: 'Network Performance Monitoring', detail: 'Latency, packet loss, and throughput analysis.' },
      { name: 'IT Asset Inventory', detail: 'Tracking hardware, software, and licenses.' },
      { name: 'Network Documentation', detail: 'Network diagrams, IP addressing, and configuration records.' },
      { name: 'Infrastructure Auditing', detail: 'Reviewing security, performance, and compliance.' },
    ],
  },
  {
    id: 'fiber-physical',
    track: 'network',
    title: 'Fiber & Physical Infrastructure',
    blurb: 'Clean cabling that is easy to trace and maintain.',
    skills: [
      { name: 'Fiber Optic Cabling', detail: 'Single-mode and multi-mode fiber installation.' },
      { name: 'Fiber Termination', detail: 'Fusion splicing and connector installation.' },
      { name: 'Fiber Testing', detail: 'OTDR testing and loss measurement.' },
      { name: 'SFP Installation', detail: 'Small form-factor pluggable transceiver installation.' },
      { name: 'Uplink Configuration', detail: 'High-speed interconnects between network devices.' },
      { name: 'Outdoor Network Cabling', detail: 'Weather-resistant cabling for external runs.' },
      { name: 'Cable Tray & Duct Installation', detail: 'Cable management infrastructure.' },
      { name: 'Cable Labeling', detail: 'Professional labeling for easy identification and maintenance.' },
      { name: 'Professional Cable Management', detail: 'Clean, organized cabling following best practices.' },
    ],
  },
  {
    id: 'power-server-room',
    track: 'network',
    title: 'Power & Server Room',
    blurb: 'Power planned and racks organised.',
    skills: [
      { name: 'UPS Installation', detail: 'Uninterruptible power supply for critical equipment.' },
      { name: 'Network Equipment Power Planning', detail: 'Power requirements and distribution design.' },
      { name: 'Server Rack Power Distribution', detail: 'PDU installation and load balancing.' },
      { name: 'Network Rack Organization', detail: 'Structured layout of equipment in racks.' },
      { name: 'Cable Management', detail: 'Organizing cables for airflow and accessibility.' },
      { name: 'Server Room Organization', detail: 'Efficient use of space and equipment placement.' },
      { name: 'Equipment Relocation', detail: 'Moving network equipment with minimal downtime.' },
    ],
  },
  {
    id: 'it-support',
    track: 'network',
    title: 'IT Support & Maintenance',
    blurb: 'On-site, remote and emergency support for the whole setup.',
    skills: [
      { name: 'Preventive IT Maintenance', detail: 'Regular maintenance to prevent issues before they occur.' },
      { name: 'Network Troubleshooting', detail: 'Diagnosing and resolving network connectivity and performance issues.' },
      { name: 'Hardware Troubleshooting', detail: 'Repairing and replacing faulty equipment.' },
      { name: 'Software Troubleshooting', detail: 'Resolving application and operating system issues.' },
      { name: 'On-Site IT Support', detail: 'In-person technical support at your location.' },
      { name: 'Remote IT Support', detail: 'Remote diagnosis and problem resolution.' },
      { name: 'Emergency IT Support', detail: 'Rapid response for critical system failures.' },
      { name: 'AMC / Annual Maintenance Contracts', detail: 'Yearly contracts for ongoing IT support and maintenance.' },
      { name: 'Infrastructure Health Checks', detail: 'Regular assessments of IT infrastructure.' },
      { name: 'Server Troubleshooting', detail: 'Resolving server hardware and software issues.' },
      { name: 'Router & Firewall Support', detail: 'Configuration and troubleshooting of network security devices.' },
      { name: 'MikroTik Support', detail: 'Specialized support for MikroTik router platforms.' },
      { name: 'CCTV Troubleshooting', detail: 'Resolving camera and recording system issues.' },
      { name: 'NVR/DVR Support', detail: 'Video recording system maintenance and repair.' },
      { name: 'Biometric System Support', detail: 'Attendance system troubleshooting and maintenance.' },
      { name: 'Door Access Control Support', detail: 'Resolving access control system issues.' },
      { name: 'Printer & Scanner Support', detail: 'Printer connectivity and driver troubleshooting.' },
      { name: 'Computer & Laptop Support', detail: 'Hardware and software support for end-user devices.' },
      { name: 'Windows & Software Support', detail: 'Operating system and application support.' },
      { name: 'Network Performance Troubleshooting', detail: 'Identifying and resolving slow network issues.' },
      { name: 'Internet/ISP Troubleshooting', detail: 'Resolving internet connectivity problems.' },
      { name: 'VPN Support', detail: 'Remote access troubleshooting and configuration.' },
      { name: 'VoIP/IP Phone Support', detail: 'Phone system troubleshooting and maintenance.' },
      { name: 'Backup & Storage Support', detail: 'Ensuring reliable data backup and recovery.' },
      { name: 'Server & NAS Support', detail: 'File server and storage system maintenance.' },
      { name: 'Hardware Replacement & Upgrades', detail: 'Component replacement and system upgrades.' },
      { name: 'Network Equipment Replacement', detail: 'Replacing failed switches, routers, and access points.' },
      { name: 'Remote Monitoring & Support', detail: 'Proactive monitoring with remote intervention.' },
      { name: 'System Updates & Configuration', detail: 'Keeping systems up to date and properly configured.' },
      { name: 'IT Asset Support', detail: 'Managing and maintaining IT inventory.' },
      { name: 'User Account & Access Support', detail: 'Managing user permissions and password resets.' },
      { name: 'Network Documentation & Updates', detail: 'Maintaining accurate network documentation.' },
      { name: 'Monthly IT Support Contracts', detail: 'Ongoing monthly support agreements.' },
    ],
  },
];

export const supportPlans = [
  {
    name: 'Basic Support',
    summary: 'Remote support and troubleshooting.',
  },
  {
    name: 'Business Support',
    summary: 'Remote and on-site support plus preventive maintenance.',
  },
  {
    name: 'Enterprise Support',
    summary: 'Complete IT infrastructure management, monitoring, priority support and AMC.',
  },
];
