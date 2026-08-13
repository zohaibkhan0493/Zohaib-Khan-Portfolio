export type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Software Consultant",
    company: "OZ",
    companyUrl: "https://followoz.com/",
    period: "04/2021 – Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Designed and implemented scalable microservices using .NET Core and ASP.NET for healthcare automation platforms, improving system efficiency.",
      "Developed secure RESTful APIs; integrated Redis caching and Elasticsearch to enhance real-time search, data retrieval, and performance.",
      "Configured and optimized Nginx for load balancing, reverse proxy, and secure traffic management, improving system stability.",
      "Managed CI/CD pipelines and source control with Azure DevOps and TFS, streamlining deployments.",
      "Participated in architecture discussions and system design reviews, ensuring loosely coupled, cohesive software layers.",
      "Collaborated in Agile teams on sprint planning, backlog refinement, and task estimation.",
      "Provided technical documentation and customer-facing support, resolving complex integration challenges.",
    ],
  },
  {
    title: "Software Engineer",
    company: "NETSOL Technologies",
    companyUrl: "https://www.netsoltech.com/",
    period: "01/2020 – 04/2021",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed enterprise-grade financial modules using .NET Framework, WPF, XAML, and MVVM architecture.",
      "Designed and implemented WCF services and APIs to support high-volume financial transactions.",
      "Performed advanced SQL Server database design, ORM implementation, and performance tuning.",
      "Conducted impact analysis and resolved production issues within mission-critical financial systems.",
      "Collaborated with architects to enhance system scalability and maintainability.",
      "Executed unit testing and followed modern software engineering best practices.",
      "Provided client support and coordinated with cross-functional teams for feature enhancements.",
    ],
  },
  {
    title: "Software Engineer",
    company: "JET Health Solutions",
    companyUrl: "https://www.jethealthsolutions.com/",
    period: "08/2015 – 01/2020",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed and maintained large-scale healthcare insurance modules using ASP.NET and SQL Server.",
      "Designed and implemented backend services for insurance quoting, policy issuance, and reporting.",
      "Created reporting solutions and optimized database queries for performance.",
      "Participated in system architecture discussions and database modeling.",
      "Managed client tickets, production support, and system enhancements.",
      "Contributed to document generation systems and integrated business workflows.",
      "Worked in Agile environments to ensure iterative delivery and quality standards.",
    ],
  },
];
