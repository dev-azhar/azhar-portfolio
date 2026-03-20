import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-label">
          <span className="contact-label-dot"></span>
          <span>GET IN TOUCH</span>
        </div>
        <h3>Contact</h3>
        <div className="contact-glass">
          <div className="contact-flex">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:azhar.s786s@gmail.com" data-cursor="disable">
                  azhar.s786s@gmail.com
                </a>
              </p>
              <h4>Education</h4>
              <p>Bachelor of Engineering, MGM's COE, Nanded</p>
            </div>
            <div className="contact-box">
              <h2>
                Designed and Developed <br /> by <span>Shaikh Azhar</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
