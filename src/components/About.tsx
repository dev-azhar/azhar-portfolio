import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me glass-card">
        <div className="about-label">
          <span className="about-label-dot"></span>
          <span>ABOUT</span>
        </div>
        <h3 className="title about-title">About Me</h3>
        <p className="para about-para">
          Technical Lead with 9+ years designing, building, and shipping
          enterprise applications across the Microsoft and Python ecosystems.
          Deep hands-on experience in .NET Core, Python/FastAPI, Angular, and
          Azure, with proven delivery across every phase of the SDLC — from
          requirements analysis through CI/CD and production support.
          Comfortable leading teams through Agile/Scrum, coordinating between
          customers, design, and engineering, and maintaining high code quality
          through TDD, SOLID design, and tools like SonarQube and Fortify.
        </p>
        <div className="about-glow"></div>
      </div>
    </div>
  );
};

export default About;
