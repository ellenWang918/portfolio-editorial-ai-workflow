export type Project = {
  id: string;
  index: string;
  year: string;
  title: string;
  summary: string;
  tags: string[];
  mediaLabel: string;
  mediaMeta: string;
  mediaTone: "inverse" | "outline";
  href: string;
};

export const projects: Project[] = [
  {
    id: "project-01",
    index: "PROJECT_01",
    year: "2025",
    title: "Enterprise Travel Platform",
    summary:
      "Rebuilt design-system foundations and delivery governance for a 6,000+ monthly-user responsive platform.",
    tags: ["Design system", "Governance", "Design QA"],
    mediaLabel: "ENTERPRISE TRAVEL / GOVERNED DELIVERY SYSTEM",
    mediaMeta: "SYSTEM AUDIT / GOVERNANCE / DELIVERY",
    mediaTone: "inverse",
    href: "/work/enterprise-travel-platform/",
  },
  {
    id: "project-02",
    index: "PROJECT_02",
    year: "2025",
    title: "Continuous Improvement Platform",
    summary:
      "Turned observed spreadsheet-based Kanban behaviour into a feasible MVP understood across four usability sessions.",
    tags: ["User research", "MVP scoping", "Interaction design"],
    mediaLabel: "CONTINUOUS IMPROVEMENT / ACTION-BOARD HYPOTHESIS",
    mediaMeta: "OBSERVATION / FEASIBILITY / USABILITY",
    mediaTone: "outline",
    href: "#project-02",
  },
  {
    id: "project-03",
    index: "PROJECT_03",
    year: "2024",
    title: "Digital Checklist Discovery",
    summary:
      "Synthesised 16 interviews across eight business groups into a technically validated service blueprint.",
    tags: ["Service design", "Research synthesis", "Systems thinking"],
    mediaLabel: "DIGITAL CHECKLIST / CROSS-FUNCTIONAL BLUEPRINT",
    mediaMeta: "INTERVIEWS / SERVICE BLUEPRINT / SYSTEM MAP",
    mediaTone: "outline",
    href: "#project-03",
  },
];
