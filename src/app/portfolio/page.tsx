import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects and work by Perry Bailes - AI consulting and web development.",
};

const projects = [
  {
    title: "Support Forge",
    description:
      "AI-powered support automation platform. Streamlines customer service workflows with intelligent routing, automated responses, and analytics dashboards.",
    tags: ["AI", "Automation", "Customer Support", "Analytics"],
    demo: "https://support-forge.com",
    featured: true,
  },
  {
    title: "Sweet Meadow Bakery",
    description:
      "Modern e-commerce website for a local bakery. Features online ordering, menu management, and customer engagement tools.",
    tags: ["Next.js", "E-commerce", "Web Design", "Local Business"],
    demo: "https://sweetmeadow-bakery.com",
    featured: true,
  },
  {
    title: "me.jbailes.com",
    description:
      "Personal portfolio and professional website. Built with Next.js, Tailwind CSS, and deployed on AWS. Features dark mode, responsive design, and contact form integration.",
    tags: ["Next.js", "Tailwind CSS", "AWS", "Portfolio"],
    demo: "https://me.jbailes.com",
    featured: true,
  },
  {
    title: "AI Agent Implementations",
    description:
      "Custom AI agents built for various clients to automate workflows, handle customer interactions, and streamline operations using LLMs and MCP servers.",
    tags: ["AI Agents", "LLM", "MCP", "Automation"],
    featured: false,
  },
  {
    title: "CRM & Salesforce Integrations",
    description:
      "Enterprise CRM implementations and Salesforce customizations for improved sales tracking, customer analytics, and team performance dashboards.",
    tags: ["Salesforce", "CRM", "Analytics", "Enterprise"],
    featured: false,
  },
  {
    title: "Custom Workflow Automation",
    description:
      "Automated business processes and workflows for clients, connecting various tools and eliminating repetitive manual tasks through intelligent automation.",
    tags: ["Automation", "Workflows", "Integration", "Efficiency"],
    featured: false,
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
            A selection of projects showcasing AI solutions, web development, and automation work.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700"
              >
                <div className="mb-4">
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

        {/* Other Projects */}
        <div>
          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">Other Work</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
            Interested in working together?
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Let&apos;s discuss how I can help with your next project.
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
