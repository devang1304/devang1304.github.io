export const experienceData = [
  {
    role: "Making AI Explain Its Dark Secrets",
    company: "Rochester Institute of Technology",
    period: "Oct 2024 -- Dec 2025",
    location: "Rochester, NY",
    note: "Building PROVEX — an XAI framework that makes intrusion detection systems actually explain WHY they flagged something as suspicious. Because 'trust me bro' isn't a valid security protocol. Working with temporal graphs, GNNs, and occasionally questioning if the AI is smarter than me.",
    details: [],
  },
  {
    role: "Cloud Whisperer & Security Guardian",
    company: "Netwoven Inc.",
    period: "Aug 2020 -- Jun 2023",
    location: "Kolkata, India",
    note: "Spent 3 years making sure 5,000+ users couldn't accidentally (or intentionally) break things. Built zero-trust architectures, automated security policies, and became the person everyone called at 2 AM when something went wrong. Spoiler: It was usually DNS.",
    details: [],
  },
];

export const educationData = [
  {
    degree: "MS in Data Science",
    school: "Rochester Institute of Technology",
    period: "Aug 2023 -- Dec 2025",
    location: "Rochester, NY",
    note: "Where I learned that 'data science' is 80% cleaning data and 20% convincing people that your model isn't just guessing. Currently surviving Rochester winters while building AI that explains itself. GPA: Caffeinated.",
  },
  {
    degree: "BCA — The Origin Story",
    school: "Amity University",
    period: "Jul 2017 -- Jun 2020",
    location: "Noida, India",
    note: "Where Hello World became Hello Career. Three years of algorithms, all-night hackathons, and discovering that Stack Overflow is a developer's best friend. First encountered Python here and never looked back.",
  },
];

export const projectsData = [
  {
    title: "PROVEX — Explainable Intrusion Detection",
    tech: "PyTorch, PyG, Streamlit, LiteLLM, Vertex AI",
    period: "Oct 2024 -- Dec 2025",
    link: "https://github.com/devang1304/provex",
    desc: "XAI framework for temporal graph-based IDS, adapting GNNExplainer, GraphMask, and VA-TGExplainer to provenance graphs with 3-5s explanation overhead per event.",
  },
  {
    title: "Threat Synthesis — Multi-LLM Security Benchmark",
    tech: "LiteLLM, Vertex AI, Streamlit, Google Cloud",
    period: "Sep 2025 -- Dec 2025",
    link: "https://github.com/devang1304/threat-synthesis",
    desc: "Built a comprehensive evaluation framework benchmarking LLMs (Gemini, GPT-4, Llama 3) on 8 cybersecurity tasks: MITRE ATT&CK mapping, IOC extraction, CVSS scoring, threat intel summarization.",
  },
  {
    title: "Financial Management Hub — Serverless AWS",
    tech: "AWS Amplify, Lambda, DynamoDB, Terraform, Plaid API",
    period: "Feb 2025 -- Apr 2025",
    link: "https://github.com/fiscai-labs/FiscAI",
    isPrivate: true,
    desc: "Developed a serverless financial tracking app with Plaid API for bank linking and OpenAI API for NLP expense insights. 99.99% availability with auto-scaling infrastructure.",
  },
  {
    title: "Travel Itinerary Planner — Google ADK Agents",
    tech: "Google ADK, Vertex AI, BigQuery, LangChain",
    period: "May 2025 -- Jun 2025",
    link: "https://github.com/devang1304/adk-travel-agent",
    desc: "Built intelligent multi-agent system with specialized agents for preference ingestion, attraction ranking, route optimization, and budget tracking using graph-based orchestration.",
  },
];

export const publicationsData = [
  {
    title:
      "Survey Perspective: The Role of Explainable AI in Threat Intelligence",
    authors: "Nidhi Rastogi, Devang Dhanuka, et al.",
    link: "https://www.arxiv.org/abs/2503.02065v1",
    desc: "Comprehensive survey on integrating XAI methodologies into SOC workflows for improved analyst trust.",
  },
  {
    title:
      "Too Much to Trust? Measuring Security Impacts of Explainability in AI-Driven SOCs",
    authors: "Nidhi Rastogi, Devang Dhanuka, et al.",
    link: "https://arxiv.org/abs/2503.02065",
    desc: "Evaluates how different explanation types affect analyst trust and decision-making efficiency.",
  },
  {
    title: "Impact of LLMs on Team Collaboration in Software Development",
    authors: "Devang Dhanuka",
    link: "https://arxiv.org/abs/2510.08612",
    desc: "Investigates how LLMs affect team dynamics and code quality in software development.",
  },
  {
    title:
      "PROVEX: Enhancing SOC Analyst Trust with Explainable Provenance-Based IDS",
    authors: "Devang Dhanuka, Nidhi Rastogi",
    link: "https://arxiv.org/abs/2512.18199",
    desc: "XAI framework for temporal graph-based IDS with 3-5s average explanation overhead per event.",
  },
];

export const importantSkills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "PyG",
  "LangChain",
  "LiteLLM",
  "Hugging Face",
  "Streamlit",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "GCP",
  "Azure",
  "SQL",
  "FastAPI",
];

export const personalData = [
  {
    title: "Living the F1 Dream at Silverstone",
    category: "Motorsports",
    date: "Sep 2025",
    location: "Milton Keynes & Silverstone, UK",
    note: "Walked through the RedBull Racing factory where championship-winning cars are born, then strapped into a Formula 4 car at Silverstone. Hit speeds that made my heart race faster than the engine. The helmet hair was worth every second!",
    media: {
      type: "image",
      src: "/factory.jpeg",
    },
  },
  {
    title: "100,000 Stars at Wembley",
    category: "Concert",
    date: "Aug 2025",
    location: "Wembley Stadium, London",
    note: "Coldplay's Music of the Spheres tour at the legendary Wembley Stadium. When 'A Sky Full of Stars' played and 100,000 wristbands lit up in sync, I forgot how to breathe. Bucket list: checked.",
    media: {
      type: "image",
      src: "/concert.jpeg",
    },
  },
  {
    title: "Caribbean Reset Button",
    category: "Travel",
    date: "Dec 2024",
    location: "Tulum, Mexico",
    note: "Escaped the Rochester winter for Tulum's turquoise waters. Days spent exploring cenotes and Mayan ruins, nights watching the sunset with a piña colada in hand. The ultimate year-end escape.",
    media: {
      type: "image",
      src: "/mexico.jpeg",
    },
  },
  {
    title: "Chasing Pacific Sunsets",
    category: "Road Trip",
    date: "Summer 2024",
    location: "Portland to San Francisco",
    note: "1,000 miles down the Pacific Coast with the windows down and zero schedule. Oregon's rugged coastline, towering redwoods, and finally crossing the Golden Gate at sunset. Pure freedom on Highway 101.",
    media: {
      type: "image",
      src: "/bridge.jpeg",
    },
  },
  {
    title: "Into the World's Largest Cave",
    category: "Adventure",
    date: "Jul 2023",
    location: "Quang Binh, Vietnam",
    note: "4-day expedition into Hang Son Doong — a cave so massive it has its own weather system and jungle. Rappelled cliffs, crossed underground rivers, and camped in cathedral-sized chambers. Met bats. Lots of bats.",
    media: {
      type: "image",
      src: "/cave.jpeg",
    },
  },
  {
    title: "THAT Abu Dhabi GP Final Lap",
    category: "Event",
    date: "Dec 2021",
    location: "Yas Marina Circuit, UAE",
    note: "Witnessed THE most controversial F1 finale in history. That last lap, those emotions, the roar of the crowd when Max crossed the line — whether you're Team Lewis or Team Max, you can't deny: we watched history being made. Still get goosebumps.",
    media: {
      type: "image",
      src: "/f1.jpeg",
    },
  },
];
