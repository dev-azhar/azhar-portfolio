import "./styles/Domains.css";

const domains = [
  {
    title: "Fintech",
    description: "Payment gateways, trading platforms & banking solutions",
    icon: "/images/domain-fintech.svg",
  },
  {
    title: "Health & Life Science",
    description: "Clinical data systems, patient portals & health analytics",
    icon: "/images/domain-health.svg",
  },
  {
    title: "eCommerce",
    description: "Scalable storefronts, checkout flows & inventory management",
    icon: "/images/domain-ecommerce.svg",
  },
  {
    title: "Natural Gas & Energy",
    description: "Pipeline monitoring, energy trading & resource optimization",
    icon: "/images/domain-energy.svg",
  },
  {
    title: "Insurance",
    description: "Claims processing, underwriting engines & policy management",
    icon: "/images/domain-insurance.svg",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Warehouse automation, route optimization & shipment tracking",
    icon: "/images/domain-logistics.svg",
  },
  {
    title: "Telecom",
    description: "Network analytics, subscriber platforms & billing systems",
    icon: "/images/domain-telecom.svg",
  },
  {
    title: "Retail",
    description: "POS systems, omnichannel platforms & customer analytics",
    icon: "/images/domain-retail.svg",
  },
];

const Domains = () => {
  return (
    <div className="domains-section" id="domains">
      <div className="domains-container section-container">
        <div className="domains-label">
          <span className="domains-label-dot"></span>
          <span>INDUSTRY EXPERIENCE</span>
        </div>
        <h2>
          Domains I&apos;ve <span>Worked In</span>
        </h2>

        <div className="domains-grid">
          {domains.map((domain, index) => (
            <div className="domain-card" key={index}>
              <div className="domain-icon">
                <img src={domain.icon} alt={domain.title} />
              </div>
              <h4>{domain.title}</h4>
              <p>{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
