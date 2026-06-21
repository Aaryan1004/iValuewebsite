import { ObjectConfig } from "@/content/siteConfig";

export const metadata = {
  title: `${ObjectConfig.name} - Enterprise IT Services & Solutions`,
  description: ObjectConfig.description,
};

export const jobs = [
  {
    id: "frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    experience: "5+ years",
    employmentType: "Full-time",
    description: "Join our core team to build enterprise web applications.",
    requirements: ["Expert in React and Next.js", "Strong TypeScript skills", "Experience with state management"],
    responsibilities: ["Architect frontend solutions", "Mentor junior developers", "Collaborate with design team"]
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    department: "Data Team",
    location: "New York, NY",
    experience: "3+ years",
    employmentType: "Full-time",
    description: "Design and build scalable data pipelines.",
    requirements: ["Python expertise", "Experience with Spark and Airflow", "SQL mastery"],
    responsibilities: ["Build ETL processes", "Optimize database performance", "Work with BI tools"]
  }
];
