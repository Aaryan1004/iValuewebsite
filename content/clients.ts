export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string;
  description: string;
  technologies: string[];
  caseStudyLink?: string;
}

export const clients: Client[] = [
  {
    id: "c1",
    name: "FinTech Innovators",
    industry: "Finance",
    logo: "Building2",
    description: "A leading financial technology firm focused on modernizing trading systems.",
    technologies: ["Node.js", "React", "AWS", "Kubernetes"],
    caseStudyLink: "/case-studies/fintech-innovators"
  },
  {
    id: "c2",
    name: "HealthCore Solutions",
    industry: "Healthcare",
    logo: "HeartPulse",
    description: "Healthcare provider modernizing patient record management.",
    technologies: ["Python", "Angular", "Azure", "SQL Server"],
    caseStudyLink: "/case-studies/healthcore"
  },
  {
    id: "c3",
    name: "Global Logistics Corp",
    industry: "Logistics",
    logo: "Truck",
    description: "Worldwide shipping and logistics handling millions of deliveries.",
    technologies: ["Java", "Spring Boot", "Kafka", "DataBricks"],
  },
  {
    id: "c4",
    name: "Retail Giants UI",
    industry: "Retail",
    logo: "ShoppingCart",
    description: "E-commerce platform scaling up to millions of daily requests.",
    technologies: ["Next.js", "Tailwind", "GCP", "MongoDB"],
  }
];
