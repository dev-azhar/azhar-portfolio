import { FaGithub, FaArrowUpRightFromSquare, FaPuzzlePiece } from "react-icons/fa6";
import "./styles/GitProjects.css";

const projects = [
  {
    name: "Nexus Exchange",
    description:
      "Production-style crypto exchange with order matching, real-time market data, orderbook visualization, and trading UI. Reference design covering API gateway, event streaming, double-entry ledger, and liquidation patterns.",
    stack: [
      "FastAPI",
      "Python",
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "WebSockets",
      "gRPC",
      "Docker",
      "Kubernetes",
      "Azure AKS",
      "Prometheus",
      "Grafana",
      "Microservices",
    ],
    github: "https://github.com/dev-azhar/nexus-exchange",
    live: "https://nexus-exchange-mu.vercel.app/",
    featured: true,
  },
  {
    name: "AgentExecOS",
    description:
      "Deterministic execution layer that turns LLM plans into safe, verifiable, production-ready code changes. Executes in a Docker sandbox and returns structured diffs, test reports, and audit logs.",
    stack: ["FastAPI", "Celery + Redis", "PostgreSQL + pgvector", "Docker SDK", "LangChain", "Ollama", "Prometheus"],
    github: "https://github.com/dev-azhar/AgentExecOS",
    marketplace: "https://open-vsx.org/extension/dev-azhar/agentexecos",
  },
  {
    name: "ClaimGPT",
    description:
      "LLM-assisted claims processing — applying generative AI to claims intake, triage, and response drafting. Explores retrieval-augmented workflows with structured claim data pipelines.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI / LLM APIs",
      "RAG",
      "PostgreSQL + pgvector",
      "Redis",
      "Celery",
      "Docker",
      "NLP",
    ],
    github: "https://github.com/dev-azhar/ClaimGPT",
  },
  {
    name: "eINP",
    description:
      "Vue-based enterprise platform — single-page application built with Vue's reactive model and component architecture. Focused on structured form workflows and state management.",
    stack: [
      "Vue 3",
      "Vuex / Pinia",
      "Vue Router",
      "TypeScript",
      "Vite",
      "SCSS",
      "REST APIs",
      "SPA",
    ],
    github: "https://github.com/dev-azhar/eINP",
  },
  {
    name: "BrokerOS",
    description:
      "Brokerage operating system — modular trading and account-management platform covering order routing, risk checks, position keeping, and back-office workflows.",
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "WebSockets",
      "Docker",
      "i18n",
      "Vercel",
    ],
    github: "https://github.com/dev-azhar/broker_os",
    live: "https://broker-os-web-seven.vercel.app/en",
  },
  {
    name: "Agent Platform",
    description:
      "Multi-agent orchestration platform — coordinates LLM agents with tool use, task routing, and shared memory. Backbone for building autonomous, composable agent workflows.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "OpenAI / Ollama",
      "PostgreSQL + pgvector",
      "Redis",
      "Celery",
      "Docker",
      "AsyncIO",
    ],
    github: "https://github.com/dev-azhar/agent-platform",
  },
  {
    name: "Sentinel",
    description:
      "Self-hosted AI code review & autonomous debugging — your code, your models, your rules. Runs locally with pluggable LLM backends to keep source code and reviews fully private.",
    stack: [
      "Python",
      "FastAPI",
      "Ollama",
      "LangChain",
      "Tree-sitter",
      "Git",
      "Docker",
      "Static Analysis",
      "Self-hosted",
    ],
    github: "https://github.com/dev-azhar/sentinel",
  },
  {
    name: "LegalChain",
    description:
      "Blockchain-backed legal document platform — verifiable contract lifecycle, tamper-proof audit trails, and on-chain attestation for legal artifacts and signatures.",
    stack: [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Next.js",
      "TypeScript",
      "IPFS",
      "PostgreSQL",
      "Web3",
    ],
    github: "https://github.com/dev-azhar/legalchain",
  },
  {
    name: "Personal Portfolio",
    description:
      "Personal portfolio showcasing technical work, project history, and writing. Built with TypeScript and deployed on Vercel edge infrastructure with a focus on performance, accessibility, and responsive design.",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "ScrollTrigger",
      "CSS Modules",
      "Vercel",
    ],
    github: "https://github.com/dev-azhar/azhar-portfolio",
    live: "https://azhar-portfolio-gamma.vercel.app/",
  },
];

const GitProjects = () => {
  return (
    <div className="gitprojects-section" id="gitprojects">
      <div className="gitprojects-container section-container">
        <div className="gitprojects-label">
          <span className="gitprojects-label-dot"></span>
          <span>OPEN SOURCE</span>
        </div>
        <h2>
          GitHub <span>Projects</span>
        </h2>

        <div className="gitprojects-grid">
          {projects.map((project, index) => (
            <div
              className={`gitproject-card${project.featured ? " gitproject-featured" : ""}`}
              key={index}
            >
              <div className="gitproject-header">
                <FaGithub className="gitproject-icon" />
                <div className="gitproject-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gitproject-link"
                    data-cursor="disable"
                  >
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gitproject-link"
                      data-cursor="disable"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}
                  {project.marketplace && (
                    <a
                      href={project.marketplace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gitproject-link gitproject-link-ext"
                      data-cursor="disable"
                      title="VS Code Extension"
                    >
                      <FaPuzzlePiece />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="gitproject-name">{project.name}</h3>
              <p className="gitproject-desc">{project.description}</p>
              <div className="gitproject-stack">
                {project.stack.map((tech, i) => (
                  <span className="gitproject-tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.live && (
                <div className="gitproject-vercel">
                  <FaArrowUpRightFromSquare className="gitproject-vercel-icon" />
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                  >
                    {project.live.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
              {project.marketplace && (
                <div className="gitproject-vercel">
                  <FaPuzzlePiece className="gitproject-vercel-icon" />
                  <a
                    href={project.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                  >
                    {project.marketplace.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="gitprojects-footer">
          <a
            href="https://github.com/dev-azhar"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            <FaGithub />
            <span>View all repositories on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitProjects;
