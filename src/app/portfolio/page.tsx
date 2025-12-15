import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects and work by Perry Bailes - AI consulting, agent development, and workflow automation.",
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
    title: "Sweet Meadow Bakery",
    description:
      "Modern e-commerce website for a local bakery. Features online ordering, menu management, and customer engagement tools built with Next.js.",
    tags: ["Next.js", "E-commerce", "Web Design", "Local Business"],
    demo: "https://sweetmeadow-bakery.com",
    featured: true,
  },
  {
    title: "me.jbailes.com",
    description:
      "Personal portfolio and professional website. Built with Next.js 14, Tailwind CSS, and deployed on AWS Amplify. Features dark mode, responsive design, and contact form integration.",
    tags: ["Next.js", "Tailwind CSS", "AWS", "Portfolio"],
    demo: "https://me.jbailes.com",
    featured: true,
  },
];

const services = [
  {
    title: "AI Agent Systems Design",
    description:
      "Building autonomous agent systems with MCP protocol orchestration. Multi-tool integration with GitHub, AWS, Kubernetes, Playwright, and more.",
    tags: ["AI Agents", "MCP", "Claude AI", "Multi-Tool Integration"],
  },
  {
    title: "AI Readiness Assessments",
    description:
      "Comprehensive AI readiness frameworks for SMBs. Evaluating current systems, identifying opportunities, and creating implementation roadmaps.",
    tags: ["AI Consultation", "Business Analysis", "Strategy"],
  },
  {
    title: "Workflow Automation Platforms",
    description:
      "Scalable automation solutions using low-code platforms and AI-assisted development. Rapid prototyping for quick iteration and business value delivery.",
    tags: ["Automation", "Low-Code", "Rapid Development", "Rapid Prototyping"],
  },
  {
    title: "QA Testing & Automation",
    description:
      "Implementing comprehensive QA testing frameworks with AI-assisted automation. Ensuring quality across development lifecycles.",
    tags: ["QA Testing", "Automation", "AI-Assisted", "Quality Assurance"],
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
            AI agent development, workflow automation, and web projects showcasing hands-on implementation.
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
            Ready to Build Your AI Infrastructure?
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Let&apos;s discuss how autonomous agents, MCP orchestration, and workflow automation can transform your business.
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
