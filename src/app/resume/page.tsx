import { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin, Globe, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Perry Bailes - Director of IT and Technical Operations Resume",
};

const experience = [
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
    title: "Manager, Account Review and Coaching",
    company: "Constant Contact",
    location: "Waltham, MA",
    period: "2014 - 2017",
    responsibilities: [
      "Developed high-performing email marketing teams",
      "Built Salesforce dashboards and analytics for performance tracking",
      "Enhanced customer education programs improving retention",
      "Implemented coaching frameworks for team development",
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
  leadership: ["Team Management", "Mentoring", "Strategic Planning", "Change Management", "Performance Optimization"],
  technical: ["CRM Implementation", "System Administration", "Cloud Infrastructure", "DevOps", "IT Operations"],
  innovation: ["AI Solutions", "Process Automation", "Data Analytics", "Digital Transformation"],
  business: ["Budget Management", "Vendor Relations", "Project Management", "Cross-functional Collaboration"],
};

const education = [
  {
    degree: "BBA in Business and Information Systems",
    school: "University",
    location: "",
    year: "2002",
    highlights: ["Business Administration", "Information Systems"],
  },
  {
    degree: "BA in History and Asian Studies",
    school: "Georgia Southern University",
    location: "Statesboro, GA",
    year: "1996",
    highlights: ["History Major", "Asian Studies"],
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
              Director of IT and Technical Operations
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Boston, MA / North Shore</span>
              </div>
              <Link
                href="mailto:perry.bailes@gmail.com"
                className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Mail className="h-4 w-4" />
                <span>perry.bailes@gmail.com</span>
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
                href="https://linkedin.com/in/perrybailes"
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
            Experienced technology leader with 15+ years of experience building and leading high-performing teams.
            Proven track record in IT operations, CRM implementation, AI solutions, and driving digital transformation.
            Passionate about creating cultures of accountability, mentoring teams, and delivering exceptional results
            through innovative technology solutions.
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
                  {category}
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
