import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar, GraduationCap, Briefcase, Zap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Perry Bailes - AI Consultant, Technology Leader, and IT Director.",
};

const experience = [
  {
    title: "AI Consultant & Founder",
    company: "SupportForge",
    period: "2025 - Present",
    description: "Building AI-enabled infrastructure for businesses. End-to-end technology advisement, AI agent systems design with MCP protocol orchestration, AI readiness audits, and low-code/no-code workflow automation.",
  },
  {
    title: "Director of IT and Technical Operations",
    company: "TheVets",
    period: "2024 - Present",
    description: "Created a culture of accountability and leadership. Implemented AI solutions for management systems and managed technical infrastructure and budget.",
  },
  {
    title: "Director of Technology",
    company: "BetterVet",
    period: "2021 - 2024",
    description: "Expanded operations across 27 US cities. Oversaw CRM and AI initiatives, recruited and trained technical staff.",
  },
  {
    title: "Manager, Technical Support",
    company: "LogMeIn",
    period: "2006 - 2014",
    description: "Directed 24x7 global support operations. Improved satisfaction metrics and generated $2.5M in support-to-sales conversions.",
  },
];

const aiCapabilities = [
  "MCP Server Orchestration with Claude",
  "Multi-Tool Integration (GitHub, AWS, Kubernetes, Playwright, Fathom)",
  "AI Readiness Assessment Frameworks for SMBs",
  "Workflow Automation with Low-Code/No-Code Platforms",
  "AI-Assisted Rapid Development",
  "QA Testing & Automation Systems",
];

const education = [
  {
    degree: "BBA in Business and Information Systems",
    school: "University",
    year: "2002",
  },
  {
    degree: "BA in History and Asian Studies",
    school: "Georgia Southern University",
    year: "1996",
  },
];

const certifications = [
  {
    name: "Design Prompts for Everyday Work Tasks",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "FNUULEVE1870",
  },
  {
    name: "Discover the Art of Prompting",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "KEI6NAJEEVOQ",
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "Dec 2025",
    credentialId: "FTYOSKAZWYUF",
  },
  {
    name: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "Dec 2025",
    credentialId: "1B5KMUW7UI91",
  },
  {
    name: "Maximize Productivity With AI Tools",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "NIRZWYH338TP",
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud",
    date: "Dec 2025",
    credentialId: "DZYAYWG6W5QH",
  },
  {
    name: "Speed Up Data Analysis and Presentation Building",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "CVYBRNOPCFEB",
  },
  {
    name: "Start Writing Prompts like a Pro",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "QUXR6YQIS75R",
  },
  {
    name: "Use AI Responsibly",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "NIRZWYH338TP",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header with Photo */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start">
          <Image
            src="/selfie2.png"
            alt="Perry Bailes"
            width={200}
            height={200}
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              About Me
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              AI Consultant & Technology Leader actively building AI-enabled infrastructure.
            </p>
            <div className="mt-4 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Boston, MA / North Shore</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I&apos;m Perry Bailes, an AI consultant and technology leader based in Boston, MA and the North Shore area.
              I&apos;m actively building AI-enabled infrastructure that empowers businesses to leverage autonomous agent systems,
              MCP server orchestration, and workflow automation platforms—without requiring deep technical expertise.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              With 15+ years of technology leadership experience, I specialize in democratizing AI for business leaders.
              My focus is on AI-assisted development, cloud infrastructure, enterprise integrations, and end-to-end automation solutions
              that deliver real business value quickly.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I combine hands-on AI agent development with strategic technology advisement, helping SMBs evaluate
              and implement AI solutions through comprehensive readiness assessments and custom automation frameworks.
              I balance being a student with serving as a teacher and mentor to those around me.
            </p>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">AI Agent Architecture & Business Enablement</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <Zap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">{capability}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative border-l-2 border-slate-200 pl-6 dark:border-slate-700"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-emerald-600 bg-white dark:border-emerald-400 dark:bg-slate-950" />
                <h3 className="font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                <p className="text-emerald-600 dark:text-emerald-400">{job.company}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-emerald-600 dark:text-emerald-400">{edu.school}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                    <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-tight text-slate-900 dark:text-white">{cert.name}</h3>
                    <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">{cert.issuer}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
