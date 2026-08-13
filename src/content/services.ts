import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Code2,
  GitBranch,
  HeartPulse,
  Layers,
  Gauge,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "Microservices & .NET",
    description:
      "Design and build scalable .NET Core / ASP.NET microservices — from monolith migration to event-driven architectures for mission-critical platforms.",
    icon: Layers,
  },
  {
    title: "Azure Architecture",
    description:
      "Azure Solutions Architect Expert (AZ-305) strategies that balance innovation with operational excellence across cloud-native workloads.",
    icon: Cloud,
  },
  {
    title: "APIs & Integrations",
    description:
      "Secure RESTful APIs, WCF services, Redis, Elasticsearch, and third-party integrations that keep healthcare and fintech systems in sync.",
    icon: Code2,
  },
  {
    title: "CI/CD & DevOps",
    description:
      "Azure DevOps and TFS pipelines, Nginx load balancing, and release processes that streamline deployments and improve stability.",
    icon: GitBranch,
  },
  {
    title: "Performance & Cost",
    description:
      "Proven track record cutting cloud costs 20–40%, improving load times, and sustaining 99.95% uptime on distributed systems.",
    icon: Gauge,
  },
  {
    title: "Healthcare & Fintech",
    description:
      "Deep domain experience in insurance, pharmacy, and financial modules — quoting, policy issuance, reporting, and high-volume transactions.",
    icon: HeartPulse,
  },
];
