export type ImageKind = 'screenshot' | 'photo' | 'illustration';

export type ProjectImage = {
  src: string; // path under /public, lowercase
  alt: string; // a full sentence describing what is visible
  width: number; // real pixel width of the file
  height: number; // real pixel height of the file
  kind: ImageKind; // 'illustration' images always show the "Illustrative image" label
};

export type Project = {
  id: string;
  track: 'ai' | 'network';
  title: string;
  eyebrow: string; // product name (AI) or client (network)
  summary: string;
  points: string[]; // "What it does" (AI) or "What we did" (network)
  tech: string[];
  year: string;
  owner: string;
  status: 'draft' | 'final';
  note?: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  // ---------------------------------------------------------------- AI & Automation
  {
    id: 'ai-multi-agent',
    track: 'ai',
    title: 'Multi-Agent System',
    eyebrow: 'AutoAgent',
    summary:
      'A web app where specialised AI agents work through a task together, with live progress and a document knowledge base.',
    points: [
      'Runs a task through agents and shows live progress and which agent is active',
      'Lets you choose the LLM provider and the output format, for example a report',
      'Stores uploaded PDFs as chunks in ChromaDB and answers questions about them (RAG)',
      'Includes a dashboard, memory explorer and session history',
    ],
    tech: ['Groq', 'ChromaDB', 'Python', 'LangChain'],
    year: '2026',
    owner: 'Muhammad Ahmed',
    status: 'draft',
    images: [
      {
        src: '/projects/ai/multi-agent-task-runner.webp',
        alt: 'AutoAgent task runner page showing a running task with a progress bar and the active agent name',
        width: 1276,
        height: 594,
        kind: 'screenshot',
      },
      {
        src: '/projects/ai/multi-agent-document-rag.webp',
        alt: 'AutoAgent document manager after a PDF upload, with a box to ask questions about the document',
        width: 1275,
        height: 588,
        kind: 'screenshot',
      },
    ],
  },
  {
    id: 'ai-rag',
    track: 'ai',
    title: 'RAG System',
    eyebrow: 'Movie recommendation assistant',
    summary:
      'A chat assistant that answers movie and TV questions and recommends titles, built on Azure OpenAI and Azure AI Search.',
    points: [
      'Answers questions in a chat window and recommends movies and shows',
      'Built on Azure: OpenAI, AI Search and a storage account in one resource group',
      'Shows the backend connection status inside the app',
    ],
    tech: ['Azure OpenAI', 'Azure AI Search', 'Azure Storage', 'Python'],
    year: '2026',
    owner: 'Muhammad Ahmed',
    status: 'draft',
    note: 'Independent demo. Not affiliated with Netflix.',
    images: [
      {
        src: '/projects/ai/rag-movie-assistant.webp',
        alt: 'Movie recommendation chat asking for the best movies, with a list of recommended titles and a send box',
        width: 1432,
        height: 586,
        kind: 'screenshot',
      },
      {
        src: '/projects/ai/rag-azure-resources.webp',
        alt: 'Azure portal resource group named rag-demo listing a search service, an Azure OpenAI resource and a storage account',
        width: 1428,
        height: 601,
        kind: 'screenshot',
      },
    ],
  },
  {
    id: 'ai-sql-agent',
    track: 'ai',
    title: 'SQL Agent',
    eyebrow: 'DataPulse',
    summary: 'Ask a question in plain English and get a SQL query you can review, edit and run.',
    points: [
      'Turns a plain-language question into a SQL query',
      'Shows the query in an editable box so you can check it before running',
      'Includes a database explorer that previews a table, the first 20 rows or all rows',
    ],
    tech: ['Streamlit', 'Python', 'SQL'],
    year: '2026',
    owner: 'Muhammad Ahmed',
    status: 'draft',
    images: [
      {
        src: '/projects/ai/sql-agent-query.webp',
        alt: 'DataPulse query screen where the question "give me first 5 order items" is turned into an editable SQL query',
        width: 1432,
        height: 667,
        kind: 'screenshot',
      },
      {
        src: '/projects/ai/sql-agent-explorer.webp',
        alt: 'DataPulse database explorer previewing the customers table with sample rows',
        width: 1432,
        height: 670,
        kind: 'screenshot',
      },
    ],
  },
  {
    id: 'ai-expense-tracker',
    track: 'ai',
    title: 'WhatsApp Expense Tracker',
    eyebrow: 'WhatsApp AI Expense Tracker',
    summary: 'Track spending by sending a normal WhatsApp message, then ask for a monthly report.',
    points: [
      'Understands messages like "Spend 500 on lunch" and saves the amount, category and date',
      'Replies with the running total for that category this month',
      'Creates a monthly report with category percentages, the total and the number of transactions',
    ],
    tech: ['WhatsApp Business API', 'Python', 'NLP'],
    year: '2026',
    owner: 'Muhammad Ahmed',
    status: 'draft',
    images: [
      {
        src: '/projects/ai/expense-tracker-chat.webp',
        alt: 'WhatsApp chat where the user sends "Spend 500 on lunch" and the bot replies Saved with category Food and Dining',
        width: 999,
        height: 697,
        kind: 'screenshot',
      },
      {
        src: '/projects/ai/expense-tracker-report.webp',
        alt: 'WhatsApp chat showing a May 2026 monthly report with category percentages, a total and five transactions',
        width: 994,
        height: 684,
        kind: 'screenshot',
      },
    ],
  },

  // ---------------------------------------------------------------- Networking (Quick Shop)
  {
    id: 'net-quickshop-cctv',
    track: 'network',
    title: 'CCTV and NVR monitoring',
    eyebrow: 'Quick Shop Private Limited, Islamabad',
    summary:
      'Store-wide video surveillance for a cash and carry store, watched from one NVR screen.',
    points: [
      'Installed 16 IP cameras for store-wide coverage',
      'Installed 2 Wi-Fi cameras for wireless monitoring',
      'Set up the NVR monitoring display and tested the camera views',
    ],
    tech: ['IP cameras', 'Wi-Fi cameras', 'NVR'],
    year: '2026',
    owner: 'Najam',
    status: 'draft',
    images: [
      {
        src: '/projects/network/quickshop-cctv-nvr.jpg',
        alt: 'CCTV NVR monitoring screen displaying 9 camera views of Quick Shop Private Limited store including checkout counter, shopping aisles, produce section, entrance, and parking area',
        width: 1024,
        height: 683,
        kind: 'photo',
      },
    ],
  },
  {
    id: 'net-quickshop-biometric',
    track: 'network',
    title: 'Biometric attendance terminal',
    eyebrow: 'Quick Shop Private Limited, Islamabad',
    summary: 'Staff attendance recorded on a ZKTeco SenseFace T3 terminal.',
    points: [
      'Installed the ZKTeco SenseFace T3 biometric attendance terminal',
      'Configured the device and tested it before handover',
    ],
    tech: ['ZKTeco SenseFace T3'],
    year: '2026',
    owner: 'Najam',
    status: 'draft',
    images: [
      {
        src: '/projects/network/quickshop-biometric-illustrative.webp',
        alt: 'Illustration of a white ZKTeco biometric attendance terminal with a small screen and keypad mounted on a wall',
        width: 895,
        height: 508,
        kind: 'illustration',
      },
    ],
  },
  {
    id: 'net-quickshop-pos',
    track: 'network',
    title: 'PCs, POS and IP printing',
    eyebrow: 'Quick Shop Private Limited, Islamabad',
    summary:
      'Workstations, checkout systems and network printers set up for daily store operations.',
    points: [
      'Installed and configured 4 PCs for store operations',
      'Configured the POS systems for retail checkout',
      'Installed 2 IP printers and set up network printing',
    ],
    tech: ['POS', 'IP printers'],
    year: '2026',
    owner: 'Najam',
    status: 'draft',
    images: [
      {
        src: '/projects/network/quickshop-pos-illustrative.webp',
        alt: 'Illustration of a retail checkout workstation with a monitor, keyboard, receipt printer and barcode scanner',
        width: 951,
        height: 607,
        kind: 'illustration',
      },
    ],
  },
  {
    id: 'net-quickshop-wifi',
    track: 'network',
    title: 'Wi-Fi and networking',
    eyebrow: 'Quick Shop Private Limited, Islamabad',
    summary: 'Wireless coverage for the store with a TP-Link Wi-Fi device.',
    points: [
      'Installed and configured a TP-Link Wi-Fi device',
      'Tested connectivity as part of the final device checks',
    ],
    tech: ['TP-Link'],
    year: '2026',
    owner: 'Najam',
    status: 'draft',
    images: [
      {
        src: '/projects/network/quickshop-wifi-illustrative.webp',
        alt: 'Illustration of a white ceiling Wi-Fi access point above a network switch with blue cables',
        width: 775,
        height: 637,
        kind: 'illustration',
      },
    ],
  },
];

export const quickShop = {
  client: 'Quick Shop Private Limited',
  place: 'Islamabad, Pakistan',
  blurb: 'Cash & carry store: IT, security and attendance setup.',
  stats: [
    { value: 16, label: 'IP cameras' },
    { value: 2, label: 'Wi-Fi cameras' },
    { value: 4, label: 'PCs' },
    { value: 2, label: 'IP printers' },
    { value: 1, label: 'TP-Link Wi-Fi device' },
    { value: 1, label: 'Biometric terminal' },
  ],
};
