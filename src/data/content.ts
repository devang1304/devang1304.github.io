export const experienceData = [
  {
    role: "Graduate Research Assistant — AI in Cybersecurity",
    company: "Rochester Institute of Technology",
    period: "Oct 2024 -- Dec 2025",
    location: "Rochester, NY",
    details: [
      "Developed a novel explainability framework for Temporal Graph Neural Networks (TGNNs) using DARPA TC datasets (CADETS, THEIA, TRACE), improving transparency in cybersecurity alert systems.",
      "Implemented and benchmarked multiple explainability methods: GNNExplainer, GraphMask, and VA-TGExplainer (novel method with uncertainty quantification).",
      "Built interactive Streamlit dashboards for SOC analysts with real-time predictions, attribution maps, and LLM-generated narrative reports.",
      "Co-authored 4 publications on XAI in threat intelligence and provenance-based IDS.",
    ],
  },
  {
    role: "Senior Engineer — Cloud Infrastructure & Security",
    company: "Netwoven Inc.",
    period: "Aug 2020 -- Jun 2023",
    location: "Kolkata, India",
    details: [
      "Led Microsoft 365 tenant migrations for 5,000+ users with 99.9% uptime, implementing enterprise security controls (MIP, DLP, Intune, Conditional Access).",
      "Achieved 20-30% reduction in cloud spend through Azure cost optimization, governance frameworks, and resource tagging.",
      "Developed automation frameworks using PowerShell and Power Automate, reducing manual operations by 40%.",
      "Served as technical analyst for Govern365 data governance platform, conducting PoCs and client training.",
    ],
  },
];

export const educationData = [
  {
    degree: "MS Data Science",
    school: "Rochester Institute of Technology",
    period: "Aug 2023 -- Dec 2025",
    location: "Rochester, NY",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Amity University",
    period: "Jul 2017 -- Jun 2020",
    location: "Noida, India",
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
    link: "https://arxiv.org/submit/7083516/view",
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
