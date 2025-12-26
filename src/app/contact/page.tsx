"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Send, Mail, MapPin, Linkedin, Github, Twitter, Loader2 } from "lucide-react";

const socialLinks = [
  { name: "Email", href: "mailto:perry.bailes@gmail.com", icon: Mail },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/perrybailes/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/PerryB-GIT", icon: Github },
  { name: "Twitter", href: "https://x.com/502ec709e531469", icon: Twitter },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                  placeholder="Your message..."
                />
              </div>

              {status === "success" && (
                <div className="rounded-lg bg-emerald-50 p-4 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Message sent successfully! I will get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Contact Information
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Feel free to reach out through the form or any of the channels below.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                    <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <a
                      href="mailto:perry.bailes@gmail.com"
                      className="text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
                    >
                      perry.bailes@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                    <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-slate-900 dark:text-white">Available Remotely</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Connect with me
                </p>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-700 dark:hover:text-emerald-400"
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
