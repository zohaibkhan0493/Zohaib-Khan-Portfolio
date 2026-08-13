export type ProjectCategory =
  | "All"
  | "Healthcare"
  | "Pharmacy"
  | "Fintech"
  | "Verification";

export type Project = {
  name: string;
  url: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
};

export const projectCategories: ProjectCategory[] = [
  "All",
  "Healthcare",
  "Pharmacy",
  "Fintech",
  "Verification",
];

export const projects: Project[] = [
  {
    name: "ezVerify",
    url: "https://app.ezverify.me/",
    category: "Verification",
    description: "Identity and eligibility verification platform for healthcare workflows.",
  },
  {
    name: "Memorial Healthcare System",
    url: "https://www.mhs.net/",
    category: "Healthcare",
    description: "Large-scale healthcare system integrations and automation support.",
  },
  {
    name: "Broward Health",
    url: "https://www.browardhealth.org/",
    category: "Healthcare",
    description: "Healthcare delivery platform contributions for a major Florida health system.",
  },
  {
    name: "Advanced RX",
    url: "https://www.advanced-rx.com/",
    category: "Pharmacy",
    description: "Pharmacy technology solutions for dispensing and operations.",
  },
  {
    name: "ezDispense by Advanced RX",
    url: "https://ezdispense.com/",
    category: "Pharmacy",
    description: "Automated pharmacy dispensing platform for high-volume workflows.",
  },
  {
    name: "Network Health Plan (WI)",
    url: "https://networkhealth.com/",
    category: "Healthcare",
    description: "Health plan systems for insurance and member services.",
  },
  {
    name: "ASSURE by NHP",
    url: "https://networkhealth.com/employer/plans/assure",
    category: "Healthcare",
    description: "Employer health plan product built on Network Health infrastructure.",
  },
  {
    name: "QualCare Inc.",
    url: "https://www.qualcareipa.com/",
    category: "Healthcare",
    description: "IPA and managed care platform support for provider networks.",
  },
  {
    name: "Paramount Health Care",
    url: "https://www.paramounthealthcare.com/",
    category: "Healthcare",
    description: "Healthcare insurance modules and backend service delivery.",
  },
  {
    name: "CIGNA Health Care",
    url: "https://www.cigna.com/",
    category: "Healthcare",
    description: "Enterprise healthcare system work for a global insurer.",
  },
  {
    name: "South Carolina Medical Association",
    url: "https://www.scmedical.org/",
    category: "Healthcare",
    description: "Medical association platform and healthcare workflow support.",
  },
  {
    name: "NFS Ascent by NETSOL",
    url: "https://marketplace.microsoft.com/en-us/product/saas/netsoltech.nfsascent?tab=overview",
    category: "Fintech",
    description: "Enterprise asset finance SaaS on the Microsoft Marketplace.",
  },
];
