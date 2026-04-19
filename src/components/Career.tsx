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
              Built web and Windows applications using ASP.NET MVC, WPF, and
              Entity Framework. Developed n-tier payment processing applications
              and service-oriented architectures using WCF and Web API.
              Integrated MQSeries for batch queue processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>ADP</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Built presentation layer with ASP.NET Web Forms and MVC using
              Razor engine. Created and consumed WCF and RESTful Web API
              services under SOA architecture. Integrated SSRS reporting
              with ASP.NET applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>HCL</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Delivered applications under Agile Scrum with TDD. Built SOA
              integration using WCF and REST services. Designed N-tier
              architecture with Entity Framework and Web API. Developed SSRS
              reports and multi-stage SSIS transformations.
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
              Led system specification workshops and requirements analysis.
              Built Angular 14 SPAs with Kendo components. Implemented SOA
              integration and drove microservices adoption. Owned CI/CD via
              Azure DevOps with SonarQube and Fortify quality gates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>Microsoft</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting and optimizing APIs in .NET Core, integrated with
              Python/Flask microservices. Building SPAs in Angular 16 with
              TypeScript and Kendo UI. Implementing Azure-native capabilities
              including Functions, Key Vault, Logic Apps, and AKS. Owning
              CI/CD pipelines via Azure DevOps + Docker.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
