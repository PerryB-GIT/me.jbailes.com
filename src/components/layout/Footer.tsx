import Link from "next/link";
import { Linkedin, Mail, Github, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/PerryB-GIT", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/perrybailes/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/502ec709e531469", icon: Twitter },
  { name: "Email", href: "mailto:perry.bailes@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Perry Bailes. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
