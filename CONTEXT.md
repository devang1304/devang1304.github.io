# Resume Context — Devang Dhanuka

> **Purpose:** Use this document as context when tailoring resumes for specific job descriptions. Contains comprehensive details about experience, projects, publications, skills, and education.

---

## Personal Information

| Field         | Value                                                                 |
| ------------- | --------------------------------------------------------------------- |
| **Name**      | Devang Dhanuka                                                        |
| **Phone**     | +1 (908) 935-8654                                                     |
| **Email**     | [devangdhanuka@gmail.com](mailto:devangdhanuka@gmail.com)             |
| **Portfolio** | [devang1304.github.io](https://devang1304.github.io)                  |
| **LinkedIn**  | [linkedin.com/in/devang1304](https://www.linkedin.com/in/devang1304/) |
| **GitHub**    | [github.com/devang1304](https://github.com/devang1304)                |
| **Location**  | Rochester, NY (open to relocation)                                    |

---

## Education

### Master of Science in Data Science

- **Institution:** Rochester Institute of Technology (RIT)
- **Location:** Rochester, NY
- **Duration:** August 2023 – December 2025
- **Key Coursework:** Machine Learning, Deep Learning, Natural Language Processing, Big Data Analytics, Statistical Learning, Database Design, Data Visualization
- **GPA:** Available upon request

### Bachelor of Computer Applications (BCA)

- **Institution:** Amity University
- **Location:** Noida, India
- **Duration:** July 2017 – June 2020
- **Key Coursework:** Data Structures, Algorithms, Database Management, Software Engineering, Computer Networks, Operating Systems

---

## Professional Experience

### Graduate Research Assistant — AI in Cybersecurity

**Rochester Institute of Technology** | Rochester, NY  
**Duration:** October 2024 – December 2025  
**Advisor:** Prof. Nidhi Rastogi

#### Key Responsibilities & Achievements:

- **Explainability Framework Development:** Developed a novel explainability framework for Temporal Graph Neural Networks (TGNNs) using DARPA Trusted Computing (TC) datasets (CADETS, THEIA, TRACE), improving transparency and trust in cybersecurity alert systems.
- **Explainer Implementation:** Implemented and benchmarked multiple explainability methods:
  - **GNNExplainer:** Gradient-based attribution for static graph explanations
  - **GraphMask:** Learned edge masking for interpretable predictions
  - **VA-TGExplainer (Proposed):** Variational Autoencoder-based Temporal Graph Explainer — a novel method handling temporal dynamics with uncertainty quantification
- **Metrics & Evaluation:** Analyzed explainer performance using fidelity, stability, sparsity, and accuracy metrics; evaluated out-of-distribution (OOD) robustness and attribution consistency.
- **SOC Dashboard:** Built interactive Streamlit dashboards for Security Operations Center (SOC) analysts, integrating real-time predictions, attribution maps, temporal visualizations, and LLM-generated narrative reports.
- **Research Output:** Co-authored 3 publications (see Publications section).

#### Technical Details:

- **Frameworks:** PyTorch, PyTorch Geometric (PyG), TensorFlow, Hugging Face Transformers
- **Data:** DARPA TC datasets (provenance graphs with millions of edges), temporal event sequences
- **Methods:** TGNNs (TGN, TGAT), attention mechanisms, variational inference, edge importance scoring
- **Advanced Techniques:** Multi-step temporal forecasting, context-slice modeling, attention trajectory analysis, uncertainty propagation for sequential predictions
- **Tools:** Streamlit, Plotly, NetworkX, LiteLLM, Vertex AI

---

### Senior Engineer — Cloud Infrastructure & Security

**Netwoven Inc.** | Kolkata, India  
**Duration:** August 2020 – June 2023

#### Key Responsibilities & Achievements:

##### Azure Cloud Infrastructure Management

- Managed Azure cloud infrastructure for enterprise-scale deployments across multiple global clients
- Implemented comprehensive **governance frameworks**: resource tagging, cost allocation, budget alerts, and policy enforcement
- Achieved **20-30% reduction in cloud spend** while maintaining performance through optimization strategies
- Designed and deployed hybrid cloud architectures integrating on-premises and Azure resources

##### Microsoft 365 Enterprise Migrations

- Led **Microsoft 365 tenant migrations for 5,000+ users** with 99.9% uptime
- Implemented enterprise security controls:
  - **Microsoft Information Protection (MIP):** Data classification and labeling
  - **Data Loss Prevention (DLP):** Policy enforcement for sensitive data
  - **Microsoft Intune MDM:** Mobile device management and compliance
  - **Conditional Access:** Context-aware access policies
  - **Multi-Factor Authentication (MFA):** Identity protection
- Established **zero-trust security posture** across global organizations

##### Automation & DevOps

- Developed **automation frameworks** using **PowerShell** and **Power Automate**
- Achieved **40% reduction in manual operations** through automation
- Automated workflows: identity provisioning, license management, compliance reporting, incident response

##### Govern365 Data Governance Platform

- Served as technical analyst for **Govern365** data governance platform
- Conducted Proof-of-Concepts (PoCs), production deployments, and client training
- Automated compliance reporting and data classification across Microsoft 365 environments

#### Technical Details:

- **Cloud Platforms:** Azure (primary), AWS, GCP
- **Identity & Security:** Azure AD, Conditional Access, MFA, PIM, DLP, MIP, Intune
- **Automation:** PowerShell, Power Automate, Azure Functions, Logic Apps
- **DevOps:** Azure DevOps, CI/CD pipelines, ARM templates, Terraform
- **Microsoft 365:** Exchange Online, SharePoint, Teams, OneDrive, Compliance Center

---

## Projects

### Threat Synthesis — Multi-LLM Security Benchmark

**Duration:** September 2025 – December 2025  
**Technologies:** Python, LiteLLM, Vertex AI, Streamlit, Google Cloud

#### Description:

Built a comprehensive evaluation framework benchmarking Large Language Models (LLMs) on cybersecurity analysis tasks.

#### Key Features:

- Benchmarked **Gemini, GPT-4, GPT-3.5, Llama 3** on 8 cybersecurity tasks:
  - MITRE ATT&CK technique mapping
  - Indicator of Compromise (IOC) extraction
  - CVSS scoring
  - Threat intelligence summarization
  - Vulnerability assessment
  - Malware classification
  - Attack chain reconstruction
  - Security recommendation generation
- **Multi-stage inference pipeline:** Parallel API calls, response normalization, majority voting, score averaging
- **Task-specific evaluation metrics:** F1 score, Mean Absolute Error (MAE), Jaccard similarity, BLEU, ROUGE
- **Extended metrics:** Accuracy, hallucination rates, information extraction quality, latency, cost analysis
- **Interactive Streamlit dashboard** for result visualization and model comparison
- Ground truth datasets curated from public threat intelligence sources
- **Multi-provider support:** OpenAI, Anthropic, Google, open-source models via unified API

#### Technical Details:

- **LLM Integration:** LiteLLM for unified API, Vertex AI for Gemini models
- **Evaluation:** Custom scoring functions, statistical significance testing, reproducible experiment tracking
- **Visualization:** Streamlit, Plotly, comparative charts and tables

---

### Financial Management Hub — Serverless AWS Application

**Duration:** February 2025 – April 2025  
**Technologies:** AWS (Amplify, Lambda, DynamoDB, API Gateway), Terraform, Docker, GitHub Actions, Plaid API, OpenAI API

#### Description:

Developed a serverless financial tracking application with automated expense insights.

#### Key Features:

- **Serverless architecture** using AWS Amplify, Lambda, and DynamoDB
- **Plaid API integration** for secure bank account linking and transaction retrieval
- **OpenAI API integration** for natural language expense categorization and insights
- **99.99% availability** through auto-scaling infrastructure
- **Infrastructure-as-Code** using Terraform for reproducible deployments
- **CI/CD pipeline** with Docker containerization and GitHub Actions

#### Technical Details:

- **AWS Services:** Amplify, Lambda, DynamoDB, API Gateway, CloudWatch, S3
- **Authentication:** AWS Cognito
- **Infrastructure:** Terraform, Docker, GitHub Actions
- **APIs:** Plaid (financial data), OpenAI (NLP)

---

### Travel Itinerary Planner — Google ADK Multi-Agent System

**Duration:** May 2025 – June 2025  
**Technologies:** Google ADK (Agent Development Kit), Vertex AI, BigQuery, LangChain

#### Description:

Built an intelligent multi-agent planning system for automated travel itinerary generation.

#### Key Features:

- **Multi-agent architecture** using Google ADK for agent orchestration
- **Specialized agents:**
  - **Preference Agent:** Ingests user preferences and constraints
  - **Attraction Ranker:** Ranks destinations based on interests and reviews
  - **Route Optimizer:** Generates optimal day-by-day itineraries
  - **Budget Tracker:** Monitors and optimizes trip costs
- **Serverless, event-driven architecture** for cost-efficiency and scalability
- **BigQuery integration** for historical travel data analysis
- **Vertex AI** for LLM-powered decision making
- **Modular orchestration:** Graph-based agent coordination for retrieval, ranking, inference, and planning
- **Dynamic constraint handling** and experiment loop management

#### Technical Details:

- **Agent Framework:** Google ADK, LangChain
- **LLM Backend:** Vertex AI (Gemini)
- **Data:** BigQuery, Google Places API
- **Architecture:** Event-driven, serverless, modular graph-based orchestration

---

## Publications

### 1. Survey Perspective: The Role of Explainable AI in Threat Intelligence

- **Authors:** Nidhi Rastogi, Devang Dhanuka, et al.
- **Link:** [arXiv:2503.02065v1](https://www.arxiv.org/abs/2503.02065v1)
- **Summary:** Comprehensive survey study on integrating Explainable AI (XAI) methodologies into Security Operations Center (SOC) workflows. Analyzes current XAI techniques, their applicability to threat detection, and provides recommendations for improving analyst trust through transparency.

### 2. Too Much to Trust? Measuring the Security and Cognitive Impacts of Explainability in AI-Driven SOCs

- **Authors:** Nidhi Rastogi, Devang Dhanuka, et al.
- **Link:** [arXiv:2503.02065](https://arxiv.org/abs/2503.02065)
- **Summary:** Evaluates the impact of explainability methods on analyst trust, decision-making efficiency, and cognitive load in AI-driven Security Operations Centers. Presents empirical findings on how different explanation types affect human factors in cybersecurity.

### 3. Impact of LLMs on Team Collaboration in Software Development

- **Authors:** Devang Dhanuka
- **Link:** [arXiv:2510.08612](https://arxiv.org/abs/2510.08612)
- **Summary:** Investigates how Large Language Models affect team dynamics, code quality, and collaboration patterns in software development environments.

### 4. PROVEX: Enhancing SOC Analyst Trust with Explainable Provenance-Based IDS

- **Authors:** Devang Dhanuka, Nidhi Rastogi
- **Link:** [arXiv:2507.08351](https://arxiv.org/submit/7083516/view)
- **Code:** [github.com/devang1304/provex](https://github.com/devang1304/provex.git)
- **Summary:** Presents a comprehensive XAI framework for temporal graph-based intrusion detection systems (IDS), implementing post-hoc explanations on KAIROS. Adapts three GNN explanation methods (GraphMask, GNNExplainer, VA-TGExplainer) to temporal provenance context, producing human-interpretable representations of anomalous behavior with 3-5 seconds average explanation overhead per event.

---

## Technical Skills

### Machine Learning & AI

| Category            | Skills                                                                               |
| ------------------- | ------------------------------------------------------------------------------------ |
| **Deep Learning**   | Neural Networks, CNNs, RNNs, LSTMs, Transformers, Attention Mechanisms               |
| **Graph ML**        | Graph Neural Networks, Temporal GNNs (TGN, TGAT), Message Passing, PyTorch Geometric |
| **NLP**             | Transformers, BERT, GPT, LLMs, Text Classification, NER, Summarization               |
| **Explainability**  | GNNExplainer, GraphMask, SHAP, LIME, Attention Visualization, Attribution Methods    |
| **ML Ops**          | Model Training, Hyperparameter Tuning, Experiment Tracking, A/B Testing              |
| **Specializations** | Temporal Modeling, Sequence Learning, Uncertainty Quantification, OOD Detection      |

### Frameworks & Libraries

| Category            | Tools                                                           |
| ------------------- | --------------------------------------------------------------- |
| **ML Frameworks**   | PyTorch, TensorFlow, Keras, scikit-learn, PyTorch Geometric     |
| **LLM Tools**       | Hugging Face Transformers, LangChain, LiteLLM, vLLM, OpenAI API |
| **Data Processing** | Pandas, NumPy, Dask, Apache Spark                               |
| **Visualization**   | Matplotlib, Seaborn, Plotly, Streamlit, Power BI                |
| **Web Frameworks**  | FastAPI, Flask, React.js                                        |

### Cloud & Infrastructure

| Platform   | Services & Tools                                                           |
| ---------- | -------------------------------------------------------------------------- |
| **AWS**    | Lambda, DynamoDB, S3, API Gateway, Amplify, SageMaker, CloudWatch, Cognito |
| **GCP**    | Vertex AI, BigQuery, Cloud Functions, Cloud Run, GKE                       |
| **Azure**  | Azure AD, Functions, Logic Apps, DevOps, VMs, Storage, Blob                |
| **DevOps** | Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, Azure DevOps), Helm  |

### Programming Languages

| Language                | Proficiency  | Use Cases                                    |
| ----------------------- | ------------ | -------------------------------------------- |
| **Python**              | Expert       | ML/AI, Data Science, Automation, Backend     |
| **PowerShell**          | Advanced     | Windows Automation, Azure/M365 Management    |
| **Java**                | Intermediate | Backend Development, Android                 |
| **JavaScript/React.js** | Intermediate | Frontend Development, Web Applications       |
| **SQL**                 | Advanced     | Database Design, Data Analysis, Optimization |

### Data Engineering & Databases

| Category          | Technologies                                   |
| ----------------- | ---------------------------------------------- |
| **Relational**    | MySQL, PostgreSQL, SQL Server                  |
| **NoSQL**         | MongoDB, DynamoDB, Redis                       |
| **Big Data**      | Apache Spark, Dask, BigQuery                   |
| **ETL/Pipelines** | Apache Airflow, Pandas, distributed processing |

---

## Certifications & Training

_(Add relevant certifications here)_

---

## Key Strengths & Differentiators

### Research & Technical

- **End-to-end ML pipeline development** from data preprocessing to production deployment
- **Novel algorithm implementation** — developed VA-TGExplainer for temporal graph explainability
- **Cross-domain expertise** spanning ML research, cloud infrastructure, and security
- **Publication record** demonstrating ability to contribute to academic discourse

### Professional

- **Enterprise-scale experience** working with 5,000+ user environments
- **Proven cost optimization** achieving 20-30% cloud spend reduction
- **Automation mindset** reducing manual operations by 40%
- **Client-facing skills** through PoCs, deployments, and training

### Soft Skills

- Strong written and verbal communication (research publications, technical documentation)
- Cross-functional collaboration experience
- Project leadership and mentorship
- Adaptability across research and industry environments

---

## Tailoring Guidelines

When customizing for specific roles, emphasize:

| Role Type                  | Emphasize                                                             |
| -------------------------- | --------------------------------------------------------------------- |
| **ML Engineer**            | PyTorch/TensorFlow, model training, MLOps, production pipelines       |
| **Data Scientist**         | Statistical analysis, experimentation, visualization, business impact |
| **Research Scientist**     | Publications, novel methods, experimental design, benchmarking        |
| **Cloud/DevOps Engineer**  | Azure/AWS/GCP, Terraform, CI/CD, automation, infrastructure           |
| **Security/Cybersecurity** | DARPA TC datasets, threat detection, SOC dashboards, XAI in security  |
| **LLM/GenAI Engineer**     | LangChain, LiteLLM, Vertex AI, agent systems, evaluation frameworks   |

---

## Availability

- **Graduation:** December 2025
- **Work Authorization:** F-1 OPT eligible (STEM extension available)
- **Open to:** Full-time, Internship
- **Location Preference:** Open to relocation; remote-friendly

---

_Last Updated: December 2025_
