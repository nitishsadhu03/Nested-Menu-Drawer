import {
  Home,
  Package,
  Building2,
  Users,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Leaf,
  TrendingUp,
  Mail,
  Server,
} from "lucide-react";

export const menuData = {
  id: "root",
  items: [
    {
      id: "home",
      label: "Home",
      description: "Welcome to our comprehensive platform",
      icon: Home,
    },
    {
      id: "products",
      label: "Products & Services",
      description: "Explore our comprehensive offerings",
      icon: Package,
      submenu: {
        id: "products-sub",
        items: [
          {
            id: "software-solutions",
            label: "Software Solutions",
            description: "Custom software development and deployment",
            icon: Server,
            submenu: {
              id: "software-solutions-sub",
              items: [
                {
                  id: "web-apps",
                  label: "Web Applications",
                  description: "SPA/MPA, dashboards, internal tools",
                  icon: Server,
                  submenu: {
                    id: "web-apps-sub",
                    items: [
                      {
                        id: "react-stack",
                        label: "React Stack",
                        description: "Next.js, SSR, CSR",
                        icon: Server,
                      },
                      {
                        id: "enterprise-portals",
                        label: "Enterprise Portals",
                        description: "RBAC, audit, SSO",
                        icon: Server,
                      },
                    ],
                  },
                },
                {
                  id: "mobile-apps",
                  label: "Mobile Applications",
                  description: "iOS, Android, cross-platform",
                  icon: Server,
                  submenu: {
                    id: "mobile-apps-sub",
                    items: [
                      {
                        id: "native",
                        label: "Native",
                        description: "Swift, Kotlin",
                        icon: Server,
                      },
                      {
                        id: "cross-platform",
                        label: "Cross-Platform",
                        description: "React Native, Flutter",
                        icon: Server,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            id: "cloud-infra",
            label: "Cloud & Infrastructure",
            description: "Scalable cloud solutions and infrastructure",
            icon: Server,
            submenu: {
              id: "cloud-infra-sub",
              items: [
                {
                  id: "platforms",
                  label: "Platforms",
                  description: "AWS, Azure, GCP",
                  icon: Server,
                  submenu: {
                    id: "platforms-sub",
                    items: [
                      {
                        id: "aws",
                        label: "AWS",
                        description: "EKS, ECS, Lambda",
                        icon: Server,
                      },
                      {
                        id: "azure",
                        label: "Azure",
                        description: "AKS, Functions",
                        icon: Server,
                      },
                      {
                        id: "gcp",
                        label: "GCP",
                        description: "GKE, Cloud Run",
                        icon: Server,
                      },
                    ],
                  },
                },
                {
                  id: "ops",
                  label: "Operations",
                  description: "DevOps, SRE, FinOps",
                  icon: Server,
                  submenu: {
                    id: "ops-sub",
                    items: [
                      {
                        id: "ci-cd",
                        label: "CI/CD",
                        description: "Pipelines, artifacts",
                        icon: Server,
                      },
                      {
                        id: "observability",
                        label: "Observability",
                        description: "Metrics, logs, tracing",
                        icon: Server,
                      },
                      {
                        id: "cost-optimization",
                        label: "Cost Optimization",
                        description: "Rightsizing, savings plans",
                        icon: Server,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            id: "consulting-services",
            label: "Consulting Services",
            description: "Expert guidance and strategic support",
            icon: Server,
            submenu: {
              id: "consulting-services-sub",
              items: [
                {
                  id: "technical-consulting",
                  label: "Technical Consulting",
                  description: "Architecture and implementation guidance",
                  icon: Server,
                  submenu: {
                    id: "technical-consulting-sub",
                    items: [
                      {
                        id: "architecture-reviews",
                        label: "Architecture Reviews",
                        description: "ADR, trade-offs",
                        icon: Server,
                      },
                      {
                        id: "performance-tuning",
                        label: "Performance Tuning",
                        description: "Profiling, caching",
                        icon: Server,
                      },
                    ],
                  },
                },
                {
                  id: "strategy-consulting",
                  label: "Strategy Consulting",
                  description: "Roadmaps, product strategy",
                  icon: Server,
                  submenu: {
                    id: "strategy-consulting-sub",
                    items: [
                      {
                        id: "discovery",
                        label: "Discovery & Research",
                        description: "User & market research",
                        icon: Server,
                      },
                      {
                        id: "gtm",
                        label: "Go-to-Market",
                        description: "Positioning, pricing",
                        icon: Server,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "industry",
      label: "Industry Solutions",
      description: "Specialized solutions for different industries",
      icon: Building2,
      submenu: {
        id: "industry-sub",
        items: [
          {
            id: "healthcare",
            label: "Healthcare",
            description: "EMR, telemedicine, compliance",
            icon: Building2,
            submenu: {
              id: "healthcare-sub",
              items: [
                {
                  id: "patient-engagement",
                  label: "Patient Engagement",
                  description: "Portals, reminders",
                  icon: Building2,
                },
                {
                  id: "claims",
                  label: "Claims Processing",
                  description: "Adjudication, EDI",
                  icon: Building2,
                },
              ],
            },
          },
          {
            id: "finance",
            label: "Financial Services",
            description: "Payments, risk, compliance",
            icon: Building2,
            submenu: {
              id: "finance-sub",
              items: [
                {
                  id: "payments",
                  label: "Payments",
                  description: "Gateways, reconciliation",
                  icon: Building2,
                },
                {
                  id: "risk-analytics",
                  label: "Risk & Analytics",
                  description: "Fraud, scoring",
                  icon: Building2,
                },
              ],
            },
          },
          {
            id: "retail",
            label: "Retail & E-commerce",
            description: "Omnichannel, merchandising",
            icon: Building2,
            submenu: {
              id: "retail-sub",
              items: [
                {
                  id: "catalog",
                  label: "Catalog & PIM",
                  description: "SKUs, variants",
                  icon: Building2,
                },
                {
                  id: "personalization",
                  label: "Personalization",
                  description: "Recommendations, A/B",
                  icon: Building2,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "company",
      label: "Company",
      description: "Learn about our organization and culture",
      icon: Users,
      submenu: {
        id: "company-sub",
        items: [
          {
            id: "about-us",
            label: "About Us",
            description: "Mission, vision, leadership",
            icon: Users,
            submenu: {
              id: "about-us-sub",
              items: [
                {
                  id: "leadership",
                  label: "Leadership",
                  description: "Team & advisors",
                  icon: Users,
                },
                {
                  id: "culture",
                  label: "Culture & Values",
                  description: "Principles we follow",
                  icon: Users,
                },
              ],
            },
          },
          {
            id: "careers",
            label: "Careers",
            description: "Open roles and hiring",
            icon: Users,
            submenu: {
              id: "careers-sub",
              items: [
                {
                  id: "engineering-roles",
                  label: "Engineering",
                  description: "Frontend, backend, infra",
                  icon: Users,
                },
                {
                  id: "design-roles",
                  label: "Design",
                  description: "Product, brand, UX",
                  icon: Users,
                },
                {
                  id: "sales-roles",
                  label: "Sales & Success",
                  description: "AE, CSM",
                  icon: Users,
                },
              ],
            },
          },
          {
            id: "newsroom",
            label: "Newsroom",
            description: "Press releases & media",
            icon: Users,
            submenu: {
              id: "newsroom-sub",
              items: [
                {
                  id: "press-releases",
                  label: "Press Releases",
                  description: "Latest announcements",
                  icon: Users,
                },
                {
                  id: "media-kit",
                  label: "Media Kit",
                  description: "Logos & assets",
                  icon: Users,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "resources",
      label: "Resources",
      description: "Knowledge base, tools, and learning materials",
      icon: BookOpen,
      submenu: {
        id: "resources-sub",
        items: [
          {
            id: "documentation",
            label: "Documentation",
            description: "API & product docs",
            icon: BookOpen,
            submenu: {
              id: "documentation-sub",
              items: [
                {
                  id: "api-ref",
                  label: "API Reference",
                  description: "Endpoints & schemas",
                  icon: BookOpen,
                },
                {
                  id: "guides",
                  label: "Guides",
                  description: "How-tos and recipes",
                  icon: BookOpen,
                },
              ],
            },
          },
          {
            id: "tutorials",
            label: "Tutorials",
            description: "Step-by-step learning paths",
            icon: BookOpen,
            submenu: {
              id: "tutorials-sub",
              items: [
                {
                  id: "beginner",
                  label: "Beginner",
                  description: "Get started fast",
                  icon: BookOpen,
                },
                {
                  id: "advanced",
                  label: "Advanced",
                  description: "Best practices",
                  icon: BookOpen,
                },
              ],
            },
          },
          {
            id: "developer-tools",
            label: "Developer Tools",
            description: "SDKs, CLIs, templates",
            icon: BookOpen,
            submenu: {
              id: "developer-tools-sub",
              items: [
                {
                  id: "sdks",
                  label: "SDKs",
                  description: "JS, Python, Java",
                  icon: BookOpen,
                },
                {
                  id: "cli",
                  label: "CLI",
                  description: "Automation & scripts",
                  icon: BookOpen,
                },
                {
                  id: "templates",
                  label: "Templates",
                  description: "Starter kits",
                  icon: BookOpen,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "support",
      label: "Support",
      description: "Get help and support when you need it",
      icon: HelpCircle,
      submenu: {
        id: "support-sub",
        items: [
          {
            id: "help-center",
            label: "Help Center",
            description: "FAQs and troubleshooting",
            icon: HelpCircle,
            submenu: {
              id: "help-center-sub",
              items: [
                {
                  id: "account",
                  label: "Account & Billing",
                  description: "Subscriptions, invoices",
                  icon: HelpCircle,
                },
                {
                  id: "technical",
                  label: "Technical Issues",
                  description: "Errors, outages",
                  icon: HelpCircle,
                },
              ],
            },
          },
          {
            id: "status",
            label: "System Status",
            description: "Uptime and incident history",
            icon: HelpCircle,
            submenu: {
              id: "status-sub",
              items: [
                {
                  id: "current-status",
                  label: "Current Status",
                  description: "Live components",
                  icon: HelpCircle,
                },
                {
                  id: "incidents",
                  label: "Incident History",
                  description: "Postmortems",
                  icon: HelpCircle,
                },
              ],
            },
          },
          {
            id: "support-plans",
            label: "Support Plans",
            description: "Standard, Premier, Enterprise",
            icon: HelpCircle,
            submenu: {
              id: "support-plans-sub",
              items: [
                {
                  id: "standard",
                  label: "Standard",
                  description: "Email support",
                  icon: HelpCircle,
                },
                {
                  id: "premier",
                  label: "Premier",
                  description: "Priority response",
                  icon: HelpCircle,
                },
                {
                  id: "enterprise",
                  label: "Enterprise",
                  description: "24/7 & TAM",
                  icon: HelpCircle,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "research",
      label: "Research & Innovation",
      description: "Cutting-edge research and innovation initiatives",
      icon: Lightbulb,
      submenu: {
        id: "research-sub",
        items: [
          {
            id: "ai-ml",
            label: "AI/ML",
            description: "Models, data, MLOps",
            icon: Lightbulb,
            submenu: {
              id: "ai-ml-sub",
              items: [
                {
                  id: "nlp",
                  label: "NLP",
                  description: "LLMs, RAG, agents",
                  icon: Lightbulb,
                },
                {
                  id: "cv",
                  label: "Computer Vision",
                  description: "Detection, OCR",
                  icon: Lightbulb,
                },
              ],
            },
          },
          {
            id: "labs",
            label: "Labs",
            description: "Prototypes & experiments",
            icon: Lightbulb,
            submenu: {
              id: "labs-sub",
              items: [
                {
                  id: "incubator",
                  label: "Incubator",
                  description: "PoCs & pilots",
                  icon: Lightbulb,
                },
                {
                  id: "open-source",
                  label: "Open Source",
                  description: "Repos & RFCs",
                  icon: Lightbulb,
                },
              ],
            },
          },
          {
            id: "publications",
            label: "Publications",
            description: "Papers, talks & patents",
            icon: Lightbulb,
            submenu: {
              id: "publications-sub",
              items: [
                {
                  id: "papers",
                  label: "Papers",
                  description: "ArXiv & journals",
                  icon: Lightbulb,
                },
                {
                  id: "talks",
                  label: "Talks",
                  description: "Conferences & meetups",
                  icon: Lightbulb,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "sustainability",
      label: "Sustainability",
      description: "Environmental responsibility and sustainable technology",
      icon: Leaf,
      submenu: {
        id: "sustainability-sub",
        items: [
          {
            id: "esg",
            label: "ESG",
            description: "Environment, social, governance",
            icon: Leaf,
            submenu: {
              id: "esg-sub",
              items: [
                {
                  id: "environment",
                  label: "Environment",
                  description: "Emissions, energy",
                  icon: Leaf,
                },
                {
                  id: "social",
                  label: "Social",
                  description: "Community, DEI",
                  icon: Leaf,
                },
                {
                  id: "governance",
                  label: "Governance",
                  description: "Policies, oversight",
                  icon: Leaf,
                },
              ],
            },
          },
          {
            id: "green-cloud",
            label: "Green Cloud",
            description: "Sustainable architectures",
            icon: Leaf,
            submenu: {
              id: "green-cloud-sub",
              items: [
                {
                  id: "carbon-aware",
                  label: "Carbon-Aware Compute",
                  description: "Region & timing shifts",
                  icon: Leaf,
                },
                {
                  id: "efficient-design",
                  label: "Efficient Design",
                  description: "Right-sizing, caching",
                  icon: Leaf,
                },
              ],
            },
          },
          {
            id: "reports",
            label: "Reports",
            description: "Annual & quarterly disclosures",
            icon: Leaf,
            submenu: {
              id: "reports-sub",
              items: [
                {
                  id: "fy2025",
                  label: "FY 2025",
                  description: "Latest sustainability report",
                  icon: Leaf,
                },
                {
                  id: "archive",
                  label: "Archive",
                  description: "Previous years",
                  icon: Leaf,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "investor",
      label: "Investor Relations",
      description: "Financial information and investor resources",
      icon: TrendingUp,
      submenu: {
        id: "investor-sub",
        items: [
          {
            id: "financials",
            label: "Financials",
            description: "Earnings, filings",
            icon: TrendingUp,
            submenu: {
              id: "financials-sub",
              items: [
                {
                  id: "quarterly",
                  label: "Quarterly Results",
                  description: "Q1–Q4 performance",
                  icon: TrendingUp,
                },
                {
                  id: "sec-filings",
                  label: "Filings",
                  description: "10-K, 10-Q",
                  icon: TrendingUp,
                },
              ],
            },
          },
          {
            id: "governance",
            label: "Corporate Governance",
            description: "Board & policies",
            icon: TrendingUp,
            submenu: {
              id: "governance-sub",
              items: [
                {
                  id: "board",
                  label: "Board of Directors",
                  description: "Committees & charters",
                  icon: TrendingUp,
                },
                {
                  id: "policies",
                  label: "Policies",
                  description: "Code of conduct",
                  icon: TrendingUp,
                },
              ],
            },
          },
          {
            id: "events",
            label: "Events",
            description: "Earnings calls & roadshows",
            icon: TrendingUp,
            submenu: {
              id: "events-sub",
              items: [
                {
                  id: "earnings-call",
                  label: "Earnings Calls",
                  description: "Webcasts & transcripts",
                  icon: TrendingUp,
                },
                {
                  id: "investor-day",
                  label: "Investor Day",
                  description: "Decks & Q&A",
                  icon: TrendingUp,
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "contact",
      label: "Contact",
      description: "Get in touch with our team",
      icon: Mail,
    },
  ],
};
