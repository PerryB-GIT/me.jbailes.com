import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Enterprise AI projects and corporate consulting by Perry Bailes - AI agent systems, RAG implementations, automation platforms, and digital transformation.",
};

const projects = [
  {
    title: "Support Forge",
    description:
      "AI-powered support automation platform built with MCP protocol orchestration. Features intelligent routing, automated responses powered by Claude AI, and analytics dashboards for support teams.",
    tags: ["AI Agents", "MCP", "Automation", "Customer Support"],
    demo: "https://support-forge.com",
    logo: "/supportforge.png",
    featured: true,
  },
  {
    title: "Enterprise AI Integration Suite",
    description:
      "Multi-agent system deployment for a Fortune 500 logistics company. Implemented Claude-powered document processing, automated compliance checking, and intelligent workflow routing. Reduced manual review time by 73%.",
    tags: ["Enterprise AI", "Document Processing", "Compliance", "Multi-Agent"],
    featured: true,
  },
  {
    title: "Corporate Knowledge Base AI",
    description:
      "RAG-based knowledge retrieval system for a consulting firm. Built custom embeddings pipeline, vector search infrastructure, and conversational interface for 50,000+ internal documents.",
    tags: ["RAG", "Vector Search", "LLM", "Knowledge Management"],
    featured: true,
  },
  {
    title: "AI Sales Assistant Platform",
    description:
      "Autonomous sales agent system for B2B SaaS company. Integrated with CRM, email, and calendar APIs. Handles lead qualification, meeting scheduling, and follow-up automation using Claude AI.",
    tags: ["Sales Automation", "CRM Integration", "AI Agents", "B2B"],
    featured: true,
  },
  {
    title: "Manufacturing QA Vision System",
    description:
      "Computer vision quality assurance system for electronics manufacturer. Real-time defect detection with 99.2% accuracy, integrated reporting, and automated production line alerts.",
    tags: ["Computer Vision", "Manufacturing", "Quality Assurance", "ML"],
    featured: true,
  },
  {
    title: "Sweet Meadow Bakery",
    description:
      "Modern e-commerce website for a local bakery. Features online ordering, menu management, and customer engagement tools built with Next.js.",
    tags: ["Next.js", "E-commerce", "Web Design", "Local Business"],
    demo: "https://sweetmeadow-bakery.com",
    featured: false,
  },
  {
    title: "Witch's Broom Cleaning",
    description:
      "Professional cleaning service website with online booking, service packages, and customer testimonials. Static site optimized for local SEO and fast performance.",
    tags: ["Static Site", "Local Business", "S3", "CloudFront"],
    demo: "https://witchsbroomcleaning.com",
    featured: false,
  },
];

const services = [
  {
    title: "Enterprise AI Strategy & Implementation",
    description:
      "End-to-end AI transformation for enterprises. From C-suite strategy sessions to production deployment. ROI-focused roadmaps with measurable KPIs and change management support.",
    tags: ["Enterprise", "AI Strategy", "Digital Transformation", "Executive Advisory"],
  },
  {
    title: "AI Agent Systems Architecture",
    description:
      "Building autonomous agent systems with MCP protocol orchestration. Multi-tool integration with GitHub, AWS, Kubernetes, Playwright, CRM, and ERP systems.",
    tags: ["AI Agents", "MCP", "Claude AI", "System Architecture"],
  },
  {
    title: "RAG & Knowledge Management Systems",
    description:
      "Custom retrieval-augmented generation pipelines for enterprise knowledge bases. Vector databases, embeddings optimization, and conversational interfaces.",
    tags: ["RAG", "Vector Search", "Knowledge Management", "LLM"],
  },
  {
    title: "AI Readiness Assessments",
    description:
      "Comprehensive AI readiness frameworks for SMBs and enterprises. Gap analysis, opportunity identification, implementation roadmaps, and vendor evaluation.",
    tags: ["AI Consultation", "Business Analysis", "Strategy", "Assessment"],
  },
  {
    title: "Process Automation & Integration",
    description:
      "Scalable automation solutions connecting AI with existing business systems. ERP, CRM, HRIS, and custom integrations with intelligent workflow orchestration.",
    tags: ["Automation", "Integration", "n8n", "Zapier", "Custom APIs"],
  },
  {
    title: "AI-Powered Quality Assurance",
    description:
      "Implementing AI-assisted QA frameworks including automated testing, computer vision inspection, and intelligent defect detection systems.",
    tags: ["QA Testing", "Computer Vision", "Automation", "Manufacturing"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Portfolio
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Enterprise AI implementations, autonomous agent systems, and corporate digital transformation projects.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">AI & Enterprise Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700"
              >
                <div className="mb-4 flex items-center gap-3">
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {project.title}
                  </h3>
                </div>
                <p className="mb-4 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Site
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">Consulting Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-slate-50 p-8 text-center dark:bg-slate-800">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            From enterprise AI strategy to production-ready agent systems. Let&apos;s discuss how intelligent automation can drive measurable results for your organization.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
