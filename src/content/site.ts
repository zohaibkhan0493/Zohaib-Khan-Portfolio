export const site = {
  name: "Zohaib Khan",
  title: "Senior Software Consultant",
  tagline: "Web Developer & Azure Architect",
  location: "Lahore District, Pakistan",
  email: "ZohaibKhan0493@gmail.com",
  phone: "+92 346 4333201",
  phoneHref: "tel:+923464333201",
  linkedin: "https://linkedin.com/in/zohaibkhan0493",
  resumePath: "/resume/ZohaibKhan_Resume.pdf",
  summary:
    "Software Engineer with 10+ years designing and maintaining mission-critical .NET systems for healthcare and fintech. Proven expertise in scaling distributed architectures from monolith to event-driven microservices. Azure-certified architect (AZ-305) who leads technical strategies and balances innovation with operational excellence.",
  pitch:
    "Scaling healthcare & fintech systems with .NET, Azure, and event-driven microservices — proven 20–40% cloud cost cuts and 99.95% uptime.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const education = {
  degree: "M.Sc. Computer Science",
  school: "Punjab University College of Information Technology, Lahore",
  period: "2013 – 2015",
  location: "Lahore, Pakistan",
} as const;

export const skills = [
  { category: "Backend", items: [".NET Core", "ASP.NET", ".NET Framework", "WCF", "REST APIs"] },
  { category: "Architecture", items: ["Microservices", "Event-driven systems", "MVVM", "Distributed systems"] },
  { category: "Cloud & DevOps", items: ["Azure", "Azure DevOps", "CI/CD", "Nginx", "TFS"] },
  { category: "Data", items: ["SQL Server", "Redis", "Elasticsearch", "ORM", "Cosmos DB"] },
  { category: "Frontend", items: ["WPF", "XAML", "React-ready APIs"] },
  { category: "Domains", items: ["Healthcare", "Fintech", "Insurance", "Enterprise systems"] },
] as const;
