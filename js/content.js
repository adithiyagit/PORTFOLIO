/**
 * PORTFOLIO CONTENT DATA STORE
 * Single source of truth for Adithiya B Vinu's portfolio website.
 * Edit this file to update copy, contact links, metrics, or case studies
 * without modifying the HTML structure or styling.
 */

window.PORTFOLIO_DATA = {
  meta: {
    name: "Adithiya B Vinu",
    title: "Adithiya B Vinu | ERP Functional Consultant | Project Coordinator | QA & UAT",
    description: "Portfolio of Adithiya B Vinu - ERP Functional Consultant & Project Coordinator specializing in Odoo, ERPNext, BRD/FRD documentation, UAT execution, SOP libraries, and multi-location retail rollouts.",
    canonicalUrl: "https://adithiyagit.github.io/PORTFOLIO/",
    siteUrl: "https://adithiyagit.github.io/PORTFOLIO/",
    locale: "en_US",
    themeColorLight: "#f8fafc",
    themeColorDark: "#0a192f"
  },

  hero: {
    statusBadge: "Open to Opportunities • India & UAE / GCC Relocation Ready",
    name: "Adithiya B Vinu",
    positioning: "ERP Functional Consultant | Project Coordinator | QA & UAT",
    tagline: "The functional bridge between business operations and technical engineering. Delivering seamless Odoo & ERPNext implementations through structured BRD/FRD documentation, rigorous UAT test execution, comprehensive SOP libraries, and multi-location user training.",
    metrics: [
      {
        value: "9 Stores",
        label: "Retail Locations Trained",
        subtext: "End-to-end salesman & accountant onboarding"
      },
      {
        value: "6 Modules",
        label: "Enterprise ERP Rollout",
        subtext: "CRM, Sales, Purchase, Inventory, Accounts, HR"
      },
      {
        value: "100%",
        label: "UAT Sign-off Rate",
        subtext: "Zero critical blockers on scheduled cutovers"
      },
      {
        value: "4 Languages",
        label: "Multilingual Enablement",
        subtext: "English, Malayalam, Tamil, Hindi"
      }
    ],
    primaryCTA: {
      text: "Download Resume",
      href: "assets/docs/Adithiya_B_Vinu_Resume.pdf",
      download: true
    },
    secondaryCTA: {
      text: "Explore Case Studies",
      href: "#case-studies"
    },
    recruiterCTA: {
      text: "Contact & Availability",
      href: "#contact"
    }
  },

  about: {
    sectionTitle: "About Me",
    sectionSubtitle: "Functional Acumen Rooted in Technical Comprehension",
    leadParagraph: "I am an early-career ERP Functional Consultant and Project Coordinator who operates at the intersection of enterprise business processes and technical architecture. With hands-on experience driving ERP operations at Empire AE IT Services and building custom workflows in ERPNext, I specialize in translating complex operational requirements into clear, testable, and adopted systems.",
    bodyParagraphs: [
      "My core strength lies in eliminating the costly friction between business stakeholders and software developers. Rather than treating an ERP rollout as purely a software install, I focus on the people and process layer: documenting exhaustive BRDs and FRDs, designing approval authority matrices, executing edge-case scenario UAT, and crafting step-by-step SOPs that frontline staff actually follow.",
      "Having coordinated training across 9 retail store locations for a high-value jewellery retail group, I understand how change management dictates project success. Whether aligning accounting workflows with tax statutory requirements or standardizing Old Gold scrap valuation, I ensure business integrity at every step."
    ],
    currentRole: {
      title: "Odoo Project Operations Assistant",
      company: "Empire AE IT Services",
      location: "Kochi, Kerala, India",
      period: "May 2026 – Present",
      description: "Driving functional analysis, Odoo client requirement gathering, UAT test execution, multi-store rollout coordination, and operational SOP authoring for retail and wholesale clients."
    },
    priorRole: {
      title: "Python / ERPNext Developer Intern",
      company: "Turqosoft Solutions",
      location: "Kochi, Kerala, India",
      period: "Nov 2025 – Mar 2026",
      description: "Engineered an end-to-end Fleet Management ERP solution on ERPNext and Frappe framework. Configured custom DocTypes, automated dispatch triggers, and gained foundational code-level comprehension that enriches functional consulting."
    },
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Marian College Kuttikanam (Autonomous), MG University",
        year: "Graduating 2026",
        focus: "Enterprise Systems, Software Engineering, Business Analytics"
      },
      {
        degree: "Bachelor of Science (BSc) in Botany",
        institution: "Bharata Mata College, MG University",
        year: "2024",
        focus: "Analytical observation, scientific methodology, structured documentation"
      }
    ],
    languages: [
      { name: "English", proficiency: "Professional Working Proficiency" },
      { name: "Malayalam", proficiency: "Native / Bilingual" },
      { name: "Tamil", proficiency: "Professional Working Proficiency" },
      { name: "Hindi", proficiency: "Working Proficiency" }
    ],
    relocation: {
      status: "Immediately Available & Relocation Ready",
      regions: ["India (Pan-India Travel & Relocation)", "UAE & GCC (Dubai, Abu Dhabi, Saudi Arabia, Qatar, Oman, Kuwait)"],
      visaStatus: "Eligible for immediate employment visa sponsorship; prompt travel availability"
    }
  },

  skills: {
    sectionTitle: "Core Competencies",
    sectionSubtitle: "The Functional Bridge Between Business Users and Technical Teams",
    groups: [
      {
        category: "ERP & Functional Consulting",
        icon: "erp",
        summary: "End-to-end domain analysis, standard module configuration, and lifecycle implementation.",
        skills: [
          { name: "Odoo ERP (v16/v17)", level: "Advanced", desc: "CRM, Sales, Purchase, Inventory, Invoicing, Point of Sale" },
          { name: "ERPNext & Frappe", level: "Proficient", desc: "DocType configuration, desk workflows, permissions, print formats" },
          { name: "Business Process Mapping (BPMN)", level: "Proficient", desc: "As-Is vs. To-Be process workflows, swimlane diagrams" },
          { name: "Gap Analysis & Scope Control", level: "Proficient", desc: "Mapping client requirements to standard vs. custom features" },
          { name: "Approval Authority Matrices", level: "Advanced", desc: "Tiered financial limits, discount rules, role delegations" }
        ]
      },
      {
        category: "Documentation & QA / UAT",
        icon: "doc",
        summary: "Audit-ready specifications, rigorous quality assurance, and step-by-step user documentation.",
        skills: [
          { name: "BRD & FRD Authoring", level: "Advanced", desc: "Business & Functional Requirements with traceability matrices" },
          { name: "UAT Test Planning & Execution", level: "Advanced", desc: "Scenario-based test scripts, edge cases, sign-off logs" },
          { name: "SOP Authoring (Standard Operating Procedures)", level: "Advanced", desc: "Illustrated user manuals, daily closing checklists" },
          { name: "Defect Logging & Triaging", level: "Proficient", desc: "Severity ranking, root-cause tagging, developer liaison" },
          { name: "Regulatory & Workflow Validation", level: "Proficient", desc: "Tax invoices, scrap handling, bank reconciliation rules" }
        ]
      },
      {
        category: "Project Coordination & Change Management",
        icon: "coordination",
        summary: "Orchestrating multi-stakeholder alignments, rollout logistics, and user adoption.",
        skills: [
          { name: "Multi-Location Store Rollouts", level: "Advanced", desc: "Coordinating 9-branch parallel training & cutover schedules" },
          { name: "End-User Training & Onboarding", level: "Advanced", desc: "Role-specific training for showroom sales & branch accountants" },
          { name: "Agile & Scrum Sprints", level: "Proficient", desc: "Daily standups, backlog grooming, sprint validation" },
          { name: "Functional Bridge (Biz ↔ Tech)", level: "Expert", desc: "Translating store-floor bottlenecks into technical user stories" },
          { name: "Go-Live Support & Cutover", level: "Advanced", desc: "Hypercare coverage, legacy data validation, adoption tracking" }
        ]
      },
      {
        category: "Data & Technical Enablement",
        icon: "data",
        summary: "Leveraging data tools and scripting to accelerate reconciliation and automation.",
        skills: [
          { name: "Advanced MS Excel", level: "Advanced", desc: "Large-dataset handling, XLOOKUP, Pivot Tables, Reconciliation" },
          { name: "UiPath RPA Fundamentals", level: "Certified", desc: "Automating repetitive data entry & reconciliations" },
          { name: "Python Basics (Technical Bridge)", level: "Proficient", desc: "Scripting, custom logic debugging, API understanding" },
          { name: "Data Migration & Cleansing", level: "Proficient", desc: "Preparing legacy balances for opening ERP imports" }
        ]
      }
    ]
  },

  caseStudies: {
    sectionTitle: "Featured Case Studies",
    sectionSubtitle: "Measurable Proof of Execution, Documentation Rigor, and Business Impact",

    // Featured Case Study: Multi-module 9-store Jewellery ERP Rollout
    featured: {
      id: "jewellery-erp-rollout",
      badge: "Flagship Enterprise Rollout",
      title: "Multi-Module ERP Rollout: Jewellery Retail Group (9 Stores)",
      client: "Jewellery Retail Group (9 Store Locations across South India)",
      clientAnonymizedNote: "Client name anonymized for non-disclosure agreement compliance",
      role: "ERP Functional Consultant & Rollout Coordinator",
      timeline: "6 Months (Implementation, UAT & Store Rollouts)",
      modules: ["CRM", "Sales (POS)", "Purchase", "Inventory", "Accounts", "HR & Payroll"],
      tools: ["Odoo ERP", "MS Excel (Large Datasets)", "Draw.io", "Agile Sprint Tracker"],

      context: "A prominent 9-store retail jewellery chain was hindered by legacy, decentralized software that prevented real-time inventory visibility across branches. Daily gold-rate fluctuations, complex customer Old Gold exchange scrap calculations, high-value Job Work tracking, and branch-level cash/bank reconciliations were managed on error-prone spreadsheets, creating significant reconciliation delays and audit vulnerabilities.",

      myRole: "Served as the primary functional bridge between store branch managers, central accounts leadership, and the offshore technical development team. Led requirement elicitation, authored the complete BRD/FRD repository, engineered the standard operating procedures (SOPs), directed UAT test cycles, and traveled across 9 store branches to execute hands-on training for showroom salesmen and branch accountants.",

      whatIDid: [
        {
          title: "Requirement Elicitation & BRD/FRD Authoring",
          detail: "Conducted process discovery workshops with showroom managers, head accountants, and merchandising teams. Documented 120+ pages of detailed functional specifications, mapping standard Odoo workflows to retail jewellery trade realities (purity tracking, stone weight deducts, making charges, hallmark tracking)."
        },
        {
          title: "SOP Library & Approval Authority Matrices",
          detail: "Built an exhaustive corporate SOP library containing 18 actionable operating manuals covering Purchase Inwarding, Sales POS operations, Old Gold trade-in verification, Job Work handovers, and Daily Bank Reconciliation. Established role-based authorization matrices preventing unauthorized store-floor discounts and managing scrap exchange limits."
        },
        {
          title: "Rigorous UAT Scenario Execution",
          detail: "Formulated and executed 160+ real-world business test cases across all 6 modules. Conducted simulated peak-hour billing stress tests, negative inventory tests, and multi-currency exchange scenarios, coordinating directly with developers to resolve all high-severity bugs prior to cutover."
        },
        {
          title: "9-Store Salesman & Accountant Training Program",
          detail: "Designed role-specific training modules in English and Malayalam/Tamil. Traveled to and trained over 70+ showroom sales representatives, cashiers, and branch accountants across all 9 locations, achieving 100% independent system operation upon branch cutover."
        }
      ],

      outcomes: [
        { stat: "9 / 9", label: "Stores Live on Single ERP", desc: "Unified central inventory and accounting across all locations" },
        { stat: "100%", label: "UAT Sign-off Achieved", desc: "Zero critical defects on go-live day across 6 core modules" },
        { stat: "70%", label: "Faster Daily Reconciliation", desc: "Automated POS-to-bank settlement replaced manual spreadsheets" },
        { stat: "0", label: "Unauthorized Discounts", desc: "Automated approval authority matrices strictly enforced at POS" }
      ],

      // Interactive artifacts for preview in-page and in modal
      artifacts: [
        {
          id: "sop-sample",
          title: "SOP: Old Gold & Scrap Purchase Verification",
          type: "Standard Operating Procedure (Excerpt)",
          summary: "Standardized 5-step verification process for receiving customer Old Gold, purity testing (Karatmeter), stone weight deduction, and automated credit voucher generation.",
          previewText: "Step 1: Receipt & Initial Weighing -> Step 2: Karatmeter Testing -> Step 3: Stone Weight Deduction -> Step 4: Branch Manager Approval (Threshold > ₹100,000) -> Step 5: System Inwarding & Exchange Credit Note Generation.",
          filename: "SOP-RET-04_Old_Gold_Verification.pdf",
          fileBadge: "SOP Documentation"
        },
        {
          id: "matrix-sample",
          title: "Approval Authority & Discount Matrix",
          type: "Governance & Control Artifact",
          summary: "Tiered financial authorization structure defining role-based limits for sales discounts, credit terms, and purchase order sign-offs across store managers, regional leads, and the CFO.",
          previewText: "Counter Salesman: Up to 3% on Making Charges | Store Manager: Up to 7% Making Charges, Credit limits up to ₹250k | Regional Head: Up to 12% | Managing Director: >12% or Net Value override.",
          filename: "GOV-02_Approval_Authority_Matrix.pdf",
          fileBadge: "Governance Policy"
        },
        {
          id: "uat-sample",
          title: "UAT Execution Matrix & Defect Log",
          type: "Quality Assurance Artifact",
          summary: "Comprehensive test scenario checklist tracking 160+ validation steps across Sales, Purchase, Inventory, and Financial Postings, including severity triage and re-test sign-offs.",
          previewText: "Test ID: UAT-POS-042 | Scenario: Barcode scan with custom weight override | Expected: System alerts if variance > 0.05g | Actual: Passed | Severity: Blocker | Status: Closed & Signed-off.",
          filename: "QA-UAT_MultiBranch_Signoff_Matrix.xlsx",
          fileBadge: "QA Test Matrix"
        },
        {
          id: "training-sample",
          title: "9-Store Training Curriculum & Rollout Schedule",
          type: "Change Management Artifact",
          summary: "Multi-phase training schedule covering train-the-trainer sessions, showroom floor simulations, cashier drill-downs, and Day-1 hypercare readiness assessments.",
          previewText: "Phase 1: Store Managers (Governance & Reports) | Phase 2: Cashiers & Accountants (Day Closing & Bank Rec) | Phase 3: Sales Representatives (Fast POS Billing & Customer CRM).",
          filename: "CHG-01_Store_Rollout_Curriculum.pdf",
          fileBadge: "Training Plan"
        }
      ]
    },

    // Case Study 2: Fleet Management ERP (ERPNext)
    secondary: {
      id: "fleet-management-erp",
      badge: "ERP Implementation & Functional Bridge",
      title: "Fleet Management ERP: End-to-End Implementation (ERPNext)",
      company: "Turqosoft Solutions",
      role: "Python / ERPNext Developer Intern (Functional & Config Lead)",
      timeline: "Nov 2025 – Mar 2026",
      modules: ["Fleet Logistics", "Vehicle Maintenance", "Fuel Auditing", "Driver Logs", "Accounts Integration"],
      tools: ["ERPNext", "Frappe Framework", "Python", "MariaDB", "MS Excel"],

      context: "A regional logistics and transport enterprise struggled with tracking vehicle lifecycles, fuel consumption discrepancies, missed preventive maintenance intervals, and untracked driver trip allowances across a commercial fleet.",

      myRole: "Operated as both functional analyst and system configurator. Mapped fleet operations, authored requirement blueprints, configured custom DocTypes within ERPNext/Frappe, and conducted end-to-end testing before client deployment.",

      whatIDid: [
        "Mapped operational dispatch workflows from initial booking to vehicle trip assignment, mileage logging, and post-trip return inspections.",
        "Engineered custom DocTypes: Vehicle Maintenance Schedule, Odometer Log, Driver Incident Report, and Automated Fuel Efficiency Tracker.",
        "Set up automated email and desk notifications for vehicle insurance renewals, road fitness certificates, and scheduled oil changes.",
        "Conducted comprehensive integration testing validating that fuel expense logs automatically posted correct journal entries into ERPNext general ledger accounts."
      ],

      outcomes: [
        { stat: "100%", label: "Digital Trip Logging", desc: "Eliminated paper logbooks across all vehicles" },
        { stat: "Automated", label: "Maintenance Alerts", desc: "Zero missed preventive service cycles" },
        { stat: "Real-Time", label: "Cost-Per-KM Tracking", desc: "Direct visibility into vehicle fuel efficiency" }
      ],

      artifact: {
        title: "Fleet Operations Architecture & Trip Workflow",
        type: "System Workflow Diagram",
        summary: "Visual blueprint detailing the state-machine transitions of a vehicle from 'Available' -> 'Dispatched' -> 'In Transit' -> 'Inspection' -> 'Scheduled Maintenance'.",
        filename: "ERPNext_Fleet_Workflow_Architecture.pdf"
      }
    },

    // Case Study 3: Applied AI & Analytical Systems
    aiProjects: {
      sectionTitle: "Intelligent Systems & Applied AI Projects",
      badge: "Applied AI & Analytical Acumen",
      summary: "Demonstrating technological literacy and analytical acumen: building practical intelligent tools that solve concrete domain problems.",
      projects: [
        {
          name: "NutriLogic",
          category: "HealthTech & Logic Engine",
          problem: "Individuals with overlapping chronic metabolic restrictions struggle to formulate safe daily dietary plans without conflicting nutrient risks.",
          solution: "Formulated a constraint-satisfaction logic engine that dynamically generates compliant dietary schedules balancing micro and macro nutrients.",
          tools: ["Python", "Constraint Logic", "Nutritional Data Sets"]
        },
        {
          name: "NutriTrack",
          category: "Dietary Analytics & Progress Tracking",
          problem: "Lack of granular adherence tracking leads to premature abandonment of clinical nutrition protocols.",
          solution: "Built a structured tracking application that logs caloric consumption, calculates weekly compliance trends, and flags deficit deviations.",
          tools: ["Python", "Data Modeling", "Streamlit / Analytics"]
        },
        {
          name: "Vitalize AI",
          category: "Predictive Wellness & Biometrics",
          problem: "Sporadic biometric checks fail to highlight subtle downward lifestyle and cardiovascular health trends.",
          solution: "Engineered a predictive risk-scoring model that correlates resting heart rate, sleep metrics, and activity indices to recommend preventive adjustments.",
          tools: ["Machine Learning", "Scikit-Learn", "Python"]
        },
        {
          name: "EcoSip",
          category: "Sustainability & Smart Hydration",
          problem: "Commercial establishments lack transparent visibility into single-use beverage waste footprints and hydration metrics.",
          solution: "Developed an analytical lifecycle model calculating cumulative plastic bottle avoidance and corporate hydration wellness scores.",
          tools: ["Python", "Environmental Impact Algorithms", "Data Visualization"]
        }
      ]
    }
  },

  certifications: {
    sectionTitle: "Professional Certifications",
    sectionSubtitle: "Continuous Investment in Enterprise Technology, Data & Automation",
    items: [
      {
        title: "Python for Data Science",
        issuer: "NPTEL / IIT Madras",
        badge: "IIT Certified",
        date: "2025",
        description: "Rigorous certification covering exploratory data analysis, NumPy, Pandas, linear regression, and data-driven business modeling.",
        skills: ["Data Analysis", "Python", "NumPy & Pandas", "Business Modeling"]
      },
      {
        title: "Machine Learning with Python",
        issuer: "IBM / Coursera",
        badge: "IBM Professional",
        date: "2025",
        description: "Hands-on certification in supervised & unsupervised algorithms, model validation, classification, and predictive metrics for decision support.",
        skills: ["Machine Learning", "Classification", "Regression", "Predictive Analytics"]
      },
      {
        title: "Prompt Engineering for ChatGPT",
        issuer: "DeepLearning.AI",
        badge: "DeepLearning.AI",
        date: "2025",
        description: "Mastery in structured prompt architecture, iterative query development, AI-assisted business documentation, and enterprise workflow prototyping.",
        skills: ["Prompt Architecture", "AI Automation", "Documentation Acceleration"]
      },
      {
        title: "UiPath Automation Developer Foundations",
        issuer: "UiPath Academy",
        badge: "RPA Accredited",
        date: "2025",
        description: "Foundational mastery in Robotic Process Automation (RPA), workflow orchestration, automated Excel data entry, and exception handling.",
        skills: ["Robotic Process Automation", "Workflow Automation", "Excel Automation"]
      }
    ]
  },

  resumeBanner: {
    title: "Need an Executive Summary for Your Hiring Team?",
    subtitle: "Download my complete CV with detailed project milestones, ERP module configurations, and reference contacts.",
    updatedText: "Updated November 2026 • Verified Functional Profile",
    downloadLink: "assets/docs/Adithiya_B_Vinu_Resume.pdf",
    highlights: [
      "9-Store Odoo ERP Training & Rollout Experience",
      "Full BRD/FRD Authoring & UAT Execution Track Record",
      "ERPNext Customization & Data Migration Acumen",
      "Immediate Pan-India & UAE/GCC Relocation Availability"
    ]
  },

  contact: {
    sectionTitle: "Recruiter Action Hub",
    sectionSubtitle: "Available for Immediate Opportunities in India and UAE / GCC",
    relocationStatus: {
      headline: "Open to Immediate Pan-India & UAE / GCC Relocation",
      description: "Based in Kochi, India. Prepared for immediate in-person or remote interviews, client on-site visits, and rapid employment visa processing for UAE, Saudi Arabia, Qatar, or wider GCC locations."
    },
    channels: [
      {
        type: "email",
        label: "Direct Email",
        value: "adithiyavinu.b@gmail.com",
        href: "mailto:adithiyavinu.b@gmail.com",
        icon: "email",
        actionText: "Send Email",
        canCopy: true
      },
      {
        type: "whatsapp",
        label: "WhatsApp Quick Chat",
        value: "+91 98765 43210", /* USER INPUT PLACEHOLDER */
        href: "https://wa.me/919876543210?text=Hi%20Adithiya,%20we%20reviewed%20your%20ERP%20portfolio%20and%20would%20like%20to%20connect.",
        icon: "whatsapp",
        actionText: "Chat on WhatsApp",
        target: "_blank"
      },
      {
        type: "linkedin",
        label: "LinkedIn Profile",
        value: "linkedin.com/in/adithiyabvinu", /* USER INPUT PLACEHOLDER */
        href: "https://www.linkedin.com/in/adithiyabvinu/",
        icon: "linkedin",
        actionText: "View LinkedIn",
        target: "_blank"
      },
      {
        type: "github",
        label: "GitHub Profile",
        value: "github.com/adithiyagit",
        href: "https://github.com/adithiyagit",
        icon: "github",
        actionText: "View GitHub",
        target: "_blank"
      }
    ],
    interviewNote: "Available for exploratory video interviews across Google Meet, Microsoft Teams, Zoom, or phone."
  },

  footer: {
    copyright: "© 2026 Adithiya B Vinu. All rights reserved.",
    tagline: "ERP Functional Consultant • Project Coordinator • QA & UAT",
    location: "Kochi, Kerala, India | Open to India & UAE/GCC Relocation"
  }
};
