import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, technology, and more.",
};

const posts = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to build performant and scalable web applications using Next.js 14 with the App Router, Server Components, and modern best practices.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Performance"],
    slug: "building-scalable-nextjs-apps",
  },
  {
    title: "TypeScript Best Practices in 2024",
    excerpt:
      "A comprehensive guide to writing clean, maintainable TypeScript code. Covers type safety, generics, and advanced patterns.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    slug: "typescript-best-practices-2024",
  },
  {
    title: "Introduction to AWS for Developers",
    excerpt:
      "Getting started with Amazon Web Services. Learn about EC2, S3, Lambda, and how to deploy your first application to the cloud.",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["AWS", "Cloud", "DevOps"],
    slug: "intro-to-aws-for-developers",
  },
  {
    title: "The Art of Code Review",
    excerpt:
      "How to give and receive effective code reviews. Tips for improving code quality and team collaboration through better review practices.",
    date: "2023-12-10",
    readTime: "5 min read",
    tags: ["Code Review", "Team", "Best Practices"],
    slug: "art-of-code-review",
  },
  {
    title: "Setting Up a Modern Development Environment",
    excerpt:
      "A guide to setting up a productive development environment with VS Code, terminal customization, and essential tools.",
    date: "2023-11-28",
    readTime: "7 min read",
    tags: ["Tools", "Productivity", "Setup"],
    slug: "modern-dev-environment",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Blog</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Thoughts on software development, technology, and lessons learned along the way.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
