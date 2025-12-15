import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Perry Bailes - Technology Leader, AI Consultant, and IT Director.",
};

const experience = [
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
    title: "Manager, Account Review and Coaching",
    company: "Constant Contact",
    period: "2014 - 2017",
    description: "Developed high-performing email marketing teams. Built Salesforce dashboards and analytics, enhanced customer education.",
  },
  {
    title: "Manager, Technical Support",
    company: "LogMeIn",
    period: "2006 - 2014",
    description: "Directed 24x7 global support operations. Improved satisfaction metrics and generated $2.5M in support-to-sales conversions.",
  },
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
              Technology leader and AI consultant with a passion for delivering exceptional results.
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
              I&apos;m Perry Bailes, a technology leader and AI consultant based in Boston, MA and the North Shore area.
              With over 15 years of experience in IT leadership, I specialize in building high-performing
              teams, implementing innovative AI solutions, and driving digital transformation.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              My goals are to continue to grow my industry knowledge and leadership skills. To sow the
              seeds of innovation, to nurture new attitudes. I believe in developing strong relationships
              and building effective teams that deliver exceptional results.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Today, I combine my technology leadership experience with expertise in AI agents, LLM implementation,
              MCP integration, and custom workflow automation to help businesses transform their operations.
              I balance being a student with serving as a teacher and mentor to those around me.
            </p>
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
        <section>
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
      </div>
    </div>
  );
}
