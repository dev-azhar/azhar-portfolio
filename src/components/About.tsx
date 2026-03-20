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
          Technical Lead & AI Engineer with 9+ years of experience in
          full-stack development, AI/ML, and cloud architecture. Proficient in
          .NET Core, Angular, Azure, Python, and building intelligent systems
          with LLMs, agentic frameworks, and RAG pipelines. Skilled in
          delivering scalable enterprise applications and AI-powered solutions
          using modern methodologies.
        </p>
        <div className="about-glow"></div>
      </div>
    </div>
  );
};

export default About;
