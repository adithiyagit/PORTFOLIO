/**
 * ADITHIYA B VINU - PORTFOLIO CONTENT DATA STORE
 * Single source of truth mirroring the official resume:
 * Junior Project Manager | ERP Software Functional | QA & UAT
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Adithiya B Vinu",
    title: "Junior Project Manager | ERP Software Functional | QA & UAT",
    subtitle: "Odoo Implementation & Business Process Delivery",
    email: "adithiyavinu.b@gmail.com",
    phone: "+91 96337 83038",
    phoneFormatted: "+91 96337 83038",
    location: "Kochi, Kerala, India",
    linkedinUrl: "https://linkedin.com/in/adithiya-b-vinu",
    linkedinHandle: "linkedin.com/in/adithiya-b-vinu",
    githubUrl: "https://github.com/adithiyagit",
    githubHandle: "github.com/adithiyagit",
    resumePdf: "assets/docs/Adithiya_B_Vinu_Resume.pdf",
    relocationStatus: "Open to Relocation (India & UAE / GCC)",
    availability: "Immediate",
    nationality: "Indian"
  },

  summary: "ERP professional with hands-on experience across the full implementation lifecycle — functional testing, UAT, BRD/FRD documentation, and change control — on a live, multi-module Odoo rollout. Skilled at analyzing business processes against system capabilities, identifying gaps, and translating requirements into validated configurations, while bridging business users, developers, and vendors. Seeking structured ERP Functional, Business Analyst, or Project Manager roles.",

  metrics: [
    { value: "9", label: "Retail Stores", subtext: "Live multi-module Odoo rollout" },
    { value: "Full SDLC", label: "Delivery Cycle", subtext: "Requirements → Deploy" },
    { value: "100%", label: "UAT Ownership", subtext: "Defect logging & sign-off" },
    { value: "Immediate", label: "Availability", subtext: "Ready for relocation" }
  ],

  competencies: [
    {
      title: "Project Delivery & Change Control",
      summary: "SDLC governance from requirements through deployment, change request (CR) scoping & tracking, risk/issue logging, status reporting, SLA adherence.",
      tools: ["SDLC", "Change Control", "Jira", "Trello", "SLA Adherence"]
    },
    {
      title: "Stakeholder & Vendor Coordination",
      summary: "Functional liaison between business users, developers, and third-party vendors. Meeting facilitation, minutes of meeting (MoM) & action item tracking.",
      tools: ["Vendor Liaison", "Meeting Facilitation", "Action Tracking", "Cross-Team Alignment"]
    },
    {
      title: "Business Analysis & Mapping",
      summary: "BRD & FRD authoring, requirement gathering, gap analysis against standard system capabilities, process mapping, and workflow documentation.",
      tools: ["BRD", "FRD", "Gap Analysis", "Process Mapping", "Workflows"]
    },
    {
      title: "Quality & Functional Testing",
      summary: "Test case design & structured execution, UAT coordination & sign-off documentation, defect logging & tracking, regression testing, hypercare support.",
      tools: ["UAT Coordination", "Test Case Design", "Defect Triage", "Regression Testing"]
    },
    {
      title: "Documentation & Training",
      summary: "Standard Operating Procedures (SOPs), process flowcharts, technical handovers, rotational batch end-user training & enablement across multi-branch teams.",
      tools: ["SOP Authoring", "Process Flowcharts", "User Enablement", "Handover Notes"]
    },
    {
      title: "Enterprise Tools & Platforms",
      summary: "Hands-on functional knowledge of enterprise ERP environments, structured spreadsheet reconciliation, and agile task tracking boards.",
      tools: ["Odoo", "ERPNext / Frappe", "MS Excel", "Jira", "Trello"]
    }
  ],

  experience: [
    {
      role: "Junior Project Manager",
      company: "Empire AE IT Services",
      location: "Kochi, Kerala, India",
      period: "Jan 2026 – Present",
      bullets: [
        "Test and validate end-to-end Odoo workflows across CRM, Sales, Purchase, Inventory, Accounts, Manufacturing, and HR modules, ensuring functional accuracy before deployment.",
        "Design and execute structured test cases; log defects and coordinate with developers for resolution and regression testing after updates, functioning as the coordination point between business stakeholders and the technical team.",
        "Analyze client business processes against Odoo capabilities, identify gaps, and author BRD/FRD-aligned SOPs and approval-authority workflows across six business functions, converting requirements into validated system configurations.",
        "Lead UAT planning and execution, authoring test plans and defect reports and securing sign-off documentation to ensure on-time, on-spec deployment.",
        "Deliver end-user training across nine store locations using a rotational batch rollout plan, reducing post-go-live support load during hypercare."
      ]
    },
    {
      role: "Python / ERPNext Developer — Intern",
      company: "Turqosoft Solutions",
      location: "Kochi, Kerala, India",
      period: "Nov 2025 – Jan 2026",
      bullets: [
        "Managed change requests end-to-end using Jira — scoping requirements, sprint planning, and delivering documented handovers to the SysAdmin team within agreed SLAs.",
        "Translated client requirements into ERPNext workflows following structured SDLC phases; authored SOPs and led knowledge-sharing sessions."
      ]
    }
  ],

  projects: [
    {
      title: "Jewellery Retail ERP Implementation",
      platform: "Odoo",
      year: "2026",
      scope: "Live Multi-Module Rollout across 9 Retail Stores",
      highlight: "Coordinated a live multi-module Odoo rollout across nine retail locations — requirements gathering, change control, BRD/FRD-aligned SOPs, UAT, and end-user training.",
      tags: ["Odoo", "9 Store Locations", "UAT Sign-off", "SOP Library", "Change Control"]
    },
    {
      title: "Fleet Management System",
      platform: "ERPNext",
      year: "2025 – 2026",
      scope: "End-to-End Enterprise Requirements to Deployment Workflow",
      highlight: "Self-directed project covering vehicle tracking, maintenance scheduling, and fuel logging, built to practice requirements-to-deployment workflow end to end.",
      tags: ["ERPNext / Frappe", "Fleet Logistics", "Maintenance Triggers", "DocType Configuration"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Marian College Kuttikanam, MG University, Kerala",
      period: "2024 – 2026"
    },
    {
      degree: "Bachelor of Science — Botany (BSc)",
      institution: "Bharata Mata College, MG University, Kerala",
      period: "2020 – 2023"
    }
  ],

  personalInfo: {
    nationality: "Indian",
    availability: "Immediate",
    mobility: "Open to Relocation (India & UAE / GCC)",
    languages: [
      { name: "English", level: "Professional" },
      { name: "Malayalam", level: "Native" },
      { name: "Tamil", level: "Conversational" },
      { name: "Hindi", level: "Conversational" }
    ]
  }
};
