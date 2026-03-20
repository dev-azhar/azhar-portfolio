import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Enterprise Platform",
    category: "Full-Stack Enterprise Application",
    tools: ".NET Core 8, Angular 16, Azure Services, Microservices, SQL Server",
    image: "/images/project-enterprise.svg",
  },
  {
    title: "AI-Powered RAG System",
    category: "Retrieval-Augmented Generation",
    tools: "Python, LangChain, LlamaIndex, OpenAI, Pinecone, FastAPI",
    image: "/images/project-rag.svg",
  },
  {
    title: "Multi-Agent Automation",
    category: "Agentic AI Workflows",
    tools: "CrewAI, AutoGen, LangGraph, Python, GPT-4, Tool Calling",
    image: "/images/project-agents.svg",
  },
  {
    title: "AI/ML Model Pipeline",
    category: "Machine Learning & Deep Learning",
    tools: "PyTorch, TensorFlow, Scikit-learn, HuggingFace, Pandas, NumPy",
    image: "/images/project-aiml.svg",
  },
  {
    title: "Cloud-Native Microservices",
    category: "Cloud Architecture & Migration",
    tools: ".NET Core, Python, Azure Functions, Cosmos DB, AKS, Docker",
    image: "/images/project-microservices.svg",
  },
  {
    title: "Azure Cloud Migration",
    category: "Infrastructure Modernization",
    tools: "Azure Functions, Cosmos DB, AKS, Logic Apps, Terraform",
    image: "/images/project-cloud.svg",
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack .NET Core Application",
    tools: ".NET Core 8, Angular 16, Stripe, SignalR, Redis, SQL Server",
    image: "/images/project-ecommerce.svg",
  },
  {
    title: "RESTful API Gateway",
    category: "API Architecture & Integration",
    tools: ".NET Core, Entity Framework Core, JWT Auth, Ocelot, Swagger",
    image: "/images/project-webapi.svg",
  },
  {
    title: "Building Own LLM",
    category: "Large Language Model from Scratch",
    tools: "PyTorch, Transformer Architecture, Custom Tokenizer, CUDA, DeepSpeed",
    image: "/images/project-ownllm.svg",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Auto-scroll every 4 seconds
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
      }
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => { isPaused.current = true; };
  const handleMouseLeave = () => { isPaused.current = false; };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-label">
          <span className="work-label-dot"></span>
          <span>PROJECTS</span>
        </div>
        <h2>
          My <span>Work</span>
        </h2>

        <div
          className="carousel-wrapper work-glass"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
