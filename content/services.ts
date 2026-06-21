export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string; // Map to lucide icon in component
  benefits: string[];
  process: { step: string; description: string }[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "it-consulting",
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Strategic technology planning and digital transformation roadmaps.",
    icon: "ShieldQuestion",
    benefits: ["Aligned IT and Business Strategy", "Cost Optimization", "Risk Mitigation", "Scalable Architectures"],
    process: [
      { step: "Assessment", description: "Evaluate existing infrastructure and processes." },
      { step: "Strategy Development", description: "Formulate a tailored IT strategy." },
      { step: "Roadmapping", description: "Create an actionable implementation plan." }
    ],
    technologies: ["Enterprise Architecture", "Cloud Platforms", "Data Analytics"]
  },
  {
    id: "software-development",
    title: "Software Development",
    slug: "software-development",
    description: "Custom enterprise software solutions built for scale and performance.",
    icon: "Code",
    benefits: ["Custom Solutions", "High Performance", "Secure Architecture", "Seamless Integration"],
    process: [
      { step: "Requirements Analysis", description: "Understand business needs and technical requirements." },
      { step: "Design & Architecture", description: "Design system architecture and UI/UX." },
      { step: "Development & Testing", description: "Agile development with continuous testing." },
      { step: "Deployment", description: "Secure and scalable deployment." }
    ],
    technologies: ["Node.js", "Python", "Java", ".NET", "React", "Angular"]
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    slug: "cloud-services",
    description: "Cloud migration, management, and optimization across AWS, Azure, and GCP.",
    icon: "Cloud",
    benefits: ["Scalability", "Cost Efficiency", "High Availability", "Disaster Recovery"],
    process: [
      { step: "Cloud Assessment", description: "Analyze readiness for cloud migration." },
      { step: "Migration Planning", description: "Develop a secure migration strategy." },
      { step: "Execution", description: "Migrate infrastructure and applications." },
      { step: "Management", description: "Ongoing optimization and monitoring." }
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"]
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description: "Intelligent automation, predictive analytics, and generative AI solutions.",
    icon: "Brain",
    benefits: ["Process Automation", "Data-Driven Insights", "Enhanced Customer Experience", "Competitive Advantage"],
    process: [
      { step: "Data Exploration", description: "Identify data sources and quality." },
      { step: "Model Development", description: "Build and train ML models." },
      { step: "Integration", description: "Deploy models into business applications." },
      { step: "Monitoring", description: "Continuous model optimization." }
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-Learn"]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    slug: "data-engineering",
    description: "Robust data pipelines, warehousing, and analytics infrastructure.",
    icon: "Database",
    benefits: ["Data Quality", "Real-time Access", "Scalable Infrastructure", "Actionable Intelligence"],
    process: [
      { step: "Data Architecture", description: "Design robust data models." },
      { step: "Pipeline Engineering", description: "Build scalable ETL pipelines." },
      { step: "Data Warehousing", description: "Centralize data for reporting." },
      { step: "Analytics", description: "Implement business intelligence tools." }
    ],
    technologies: ["Snowflake", "Databricks", "Apache Spark", "Airflow", "dbt"]
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    description: "Scale your team with top-tier developers and IT professionals.",
    icon: "Users",
    benefits: ["Rapid Scaling", "Access to Top Talent", "Cost Reduction", "Flexible Engagement"],
    process: [
      { step: "Requirement Gathering", description: "Understand project and skill needs." },
      { step: "Candidate Selection", description: "Screen and select the best fit." },
      { step: "Onboarding", description: "Seamless integration into your team." },
      { step: "Management", description: "Ongoing support and performance tracking." }
    ],
    technologies: ["All Major Tech Stacks"]
  }
];
