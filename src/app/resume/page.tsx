import { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin, Globe, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Perry Bailes - AI Consultant & Technology Leader Resume",
};

const experience = [
  {
    title: "AI Consultant & Founder",
    company: "SupportForge",
    location: "Remote",
    period: "2025 - Present",
    responsibilities: [
      "Building AI-enabled infrastructure for businesses using MCP protocol orchestration",
      "End-to-end technology advisement and AI integration strategy consulting",
      "Designing autonomous agent systems with multi-tool integration (GitHub, AWS, Kubernetes, Playwright)",
      "Conducting AI readiness audits to optimize business operations",
      "Developing low-code/no-code automation solutions for rapid deployment",
      "Rapid prototyping and iterative development for accelerated time-to-value",
    ],
  },
  {
    title: "Director of IT and Technical Operations",
    company: "TheVets",
    location: "Remote",
    period: "2024 - Present",
    responsibilities: [
      "Created a culture of accountability and leadership across technical teams",
      "Implemented AI solutions for management systems and operations",
      "Managed technical infrastructure and budget allocation",
      "Drive digital transformation initiatives across the organization",
    ],
  },
  {
    title: "Director of Technology",
    company: "BetterVet",
    location: "Remote",
    period: "2021 - 2024",
    responsibilities: [
      "Expanded operations across 27 US cities with scalable technology solutions",
      "Oversaw CRM and AI initiatives improving operational efficiency",
      "Recruited and trained technical staff building high-performing teams",
      "Led digital transformation strategy and implementation",
    ],
  },
  {
    title: "Manager, Technical Support",
    company: "LogMeIn",
    location: "Woburn, MA",
    period: "2006 - 2014",
    responsibilities: [
      "Directed 24x7 global support operations across multiple time zones",
      "Improved customer satisfaction metrics through process optimization",
      "Generated $2.5M in support-to-sales conversions",
      "Built and scaled technical support team from ground up",
    ],
  },
];

const skills = {
  aiAgent: ["MCP Server Orchestration", "Autonomous Agents", "Claude AI Systems", "Multi-Tool Integration", "AI Readiness Frameworks"],
  development: ["AI-Assisted Development", "Low-Code/No-Code", "AWS Infrastructure", "API Integrations", "QA Testing"],
  leadership: ["Team Management", "Mentoring", "Strategic Planning", "Change Management", "Performance Optimization"],
  business: ["AI Consultation", "Workflow Automation", "Budget Management", "Vendor Relations", "Cross-functional Collaboration"],
};

const education = [
  {
    degree: "BBA in Business and Information Systems",
    school: "Georgia Southern University",
    location: "Statesboro, GA",
    year: "2002",
    highlights: ["Business Administration", "Information Systems"],
  },
];

export default function ResumePage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Perry Bailes
            </h1>
            <p className="mt-2 text-xl text-emerald-600 dark:text-emerald-400">
              AI Consultant & Technology Leader
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Boston, MA / North Shore</span>
              </div>
              <Link
                href="mailto:{YOUR_EMAIL}"
                className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Mail className="h-4 w-4" />
                <span>{YOUR_EMAIL}</span>
              </Link>
              <Link
                href="https://me.jbailes.com"
                className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Globe className="h-4 w-4" />
                <span>me.jbailes.com</span>
              </Link>
            </div>
            <div className="mt-2 flex gap-4">
              <Link
                href="https://linkedin.com/in/{YOUR_HANDLE}"
                target="_blank"
                className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Summary</h2>
          <p className="text-slate-600 dark:text-slate-300">
            AI consultant and technology leader actively building AI-enabled infrastructure that empowers businesses
            to leverage autonomous agent systems, MCP server orchestration, and workflow automation platforms.
            15+ years of experience in IT leadership, specializing in democratizing AI for business leaders through
            AI-assisted development, cloud infrastructure, enterprise integrations, and end-to-end automation solutions.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-slate-200 pl-6 dark:border-slate-700">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{job.period}</span>
                </div>
                <p className="text-emerald-600 dark:text-emerald-400">
                  {job.company} {job.location && `- ${job.location}`}
                </p>
                <ul className="mt-3 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="text-emerald-600 dark:text-emerald-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-2 text-sm font-medium capitalize text-slate-700 dark:text-slate-300">
                  {category === "aiAgent" ? "AI Agent Architecture" : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-slate-200 pl-6 dark:border-slate-700">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{edu.year}</span>
                </div>
                <p className="text-emerald-600 dark:text-emerald-400">
                  {edu.school} {edu.location && `- ${edu.location}`}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
