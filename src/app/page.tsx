import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Bot, Workflow, Sparkles, MessageSquare, Zap, Code, Briefcase } from "lucide-react";

const skills = [
  { name: "AI Agent Architecture", icon: Bot, items: ["MCP Server Orchestration", "Autonomous Agents", "Multi-Tool Integration", "Claude AI Systems"] },
  { name: "Rapid Development", icon: Code, items: ["Vibe-Coding", "Low-Code/No-Code", "AWS Infrastructure", "API Integrations"] },
  { name: "Business Enablement", icon: Users, items: ["AI Readiness Audits", "Workflow Automation", "QA Testing", "Team Leadership"] },
];

const services = [
  {
    title: "AI Agent Systems Design",
    description: "Building autonomous agent systems with MCP protocol orchestration. Multi-tool integration with GitHub, AWS, Kubernetes, Playwright, and more.",
    icon: Bot,
  },
  {
    title: "AI Readiness & Strategy",
    description: "Comprehensive AI readiness assessments for SMBs. Empowering business leaders to leverage AI without deep technical expertise.",
    icon: Sparkles,
  },
  {
    title: "MCP & API Integration",
    description: "Orchestrating MCP servers with Claude for seamless tool integration. Connecting your existing systems into unified AI-powered workflows.",
    icon: MessageSquare,
  },
  {
    title: "Workflow Automation Platforms",
    description: "Building low-code/no-code automation solutions. Vibe-coding as a rapid prototyping methodology for fast business value delivery.",
    icon: Workflow,
  },
];

const aiAchievements = [
  { title: "MCP Server Orchestration", description: "Building and orchestrating MCP servers with Claude for multi-tool AI agent systems" },
  { title: "Multi-Tool Integration", description: "GitHub, AWS, Kubernetes, Playwright, filesystem, Fathom analytics, and custom APIs" },
  { title: "AI Readiness Frameworks", description: "Developing assessment frameworks to help SMBs evaluate and implement AI solutions" },
  { title: "Low-Code Automation", description: "Creating workflow automation platforms using low-code/no-code methodologies" },
  { title: "Vibe-Coding Prototyping", description: "Rapid prototyping methodology for quick iteration and business value delivery" },
  { title: "QA & Testing Systems", description: "Implementing comprehensive QA testing frameworks with AI-assisted automation" },
];

const companies = [
  { name: "SupportForge", logo: "/supportforge.png", url: "https://support-forge.com" },
  { name: "TheVets", logo: "/thevets.png", url: "https://thevets.com" },
  { name: "BetterVet", logo: "/betterVet.png", url: "https://bettervet.com" },
  { name: "Constant Contact", logo: "/cc.png", url: "https://constantcontact.com" },
  { name: "LogMeIn", logo: "/logmein.png", url: "https://logmein.com" },
];

const experience = [
  {
    company: "SupportForge",
    role: "AI Consultant & Founder",
    period: "2025 - Present",
    description: "Building AI-enabled infrastructure for businesses. End-to-end technology advisement, AI agent systems design with MCP protocol orchestration, and workflow automation.",
    tags: ["AI Agents", "MCP", "Automation", "Consulting"],
  },
  {
    company: "TheVets",
    role: "Director of IT and Technical Operations",
    period: "2024 - Present",
    description: "Leading technical infrastructure, implementing AI solutions, and creating a culture of accountability.",
    tags: ["Leadership", "AI", "Infrastructure"],
  },
  {
    company: "BetterVet",
    role: "Director of Technology",
    period: "2021 - 2024",
    description: "Expanded operations across 27 US cities, overseeing CRM and AI initiatives.",
    tags: ["CRM", "AI", "Scaling"],
  },
  {
    company: "LogMeIn",
    role: "Manager, Technical Support",
    period: "2006 - 2014",
    description: "Directed 24x7 global support operations, generating $2.5M in support-to-sales conversions.",
    tags: ["Global Operations", "Support", "Revenue Growth"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start gap-6 lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <Briefcase className="h-4 w-4" />
                AI Consultant & Technology Leader
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Hi, I&apos;m <span className="text-emerald-600 dark:text-emerald-400">Perry Bailes</span>
              </h1>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                I&apos;m actively building AI-enabled infrastructure that empowers businesses to leverage autonomous agent systems,
                MCP server orchestration, and workflow automation platforms—without requiring deep technical expertise.
              </p>
              <p className="text-base leading-7 text-slate-500 dark:text-slate-400">
                Specializing in vibe-coding, low-code/no-code solutions, AWS setup, QA testing, and MCP/API integrations.
                Based in Boston, MA. Available for consulting engagements.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/resume" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                  View Experience
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/selfie2.png"
                alt="Perry Bailes"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">Companies & Projects</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company) => (
              <Link key={company.name} href={company.url} target="_blank" rel="noopener noreferrer" className="grayscale transition-all hover:grayscale-0">
                <Image src={company.logo} alt={company.name} width={120} height={40} className="h-10 w-auto object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">AI Agent & Automation Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            Democratizing AI—empowering business leaders to leverage cutting-edge technology without deep technical expertise.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                    <service.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Achievements Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">AI Agent Architecture & Business Enablement</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            Currently building and deploying AI infrastructure that delivers real business value.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiAchievements.map((achievement) => (
              <div key={achievement.title} className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                  <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{achievement.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Core Competencies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            15+ years of technology leadership combined with hands-on AI agent development.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                    <skill.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Career Highlights</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Building AI-enabled infrastructure and leading technology teams.</p>
            </div>
            <Link href="/resume" className="hidden items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 sm:flex">
              Full resume
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {experience.map((job) => (
              <div key={job.company} className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{job.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{job.period}</p>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{job.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 dark:bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Build Your AI Infrastructure?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            Let&apos;s discuss how autonomous agents, MCP orchestration, and workflow automation can transform your business—no deep technical expertise required.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  );
}
