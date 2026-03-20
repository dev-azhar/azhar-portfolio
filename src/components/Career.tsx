import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Application Development Analyst</h4>
                <h5>Accenture</h5>
              </div>
              <h3>2014</h3>
            </div>
            <p>
              Developed web and Windows applications using ASP.NET MVC, WPF,
              and Entity Framework. Built n-tier payment processing applications
              and service-oriented architectures using WCF and Web API.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>HCL</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Led development of SPAs using Angular and .NET Framework.
              Implemented SOA with WCF and REST services. Integrated early
              ML models for data-driven insights using Python and Scikit-learn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>Persistent</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Enhanced applications using Angular 14, MVC pattern, and Web API.
              Adopted microservices architecture with AI-driven automation.
              Built NLP pipelines using HuggingFace Transformers and deployed
              models via Azure ML. Implemented CI/CD using Azure DevOps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>WCT</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting full-stack and AI-native applications using .NET Core,
              Angular 16, and Azure. Building production LLM systems with
              LangChain, LlamaIndex, and RAG pipelines. Developing multi-agent
              workflows with CrewAI and AutoGen. Fine-tuning models with PyTorch
              and deploying via FastAPI on AKS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
