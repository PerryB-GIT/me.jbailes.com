import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// This would typically come from MDX files or a CMS
const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "building-scalable-nextjs-apps": {
    title: "Building Scalable Web Applications with Next.js",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Performance"],
    content: `
      <p>Next.js has become the go-to framework for building modern web applications. With the introduction of the App Router and Server Components, it's now easier than ever to build performant, scalable applications.</p>

      <h2>Why Next.js?</h2>
      <p>Next.js provides an excellent developer experience with features like:</p>
      <ul>
        <li>Server-side rendering and static generation</li>
        <li>Automatic code splitting</li>
        <li>Built-in routing with the App Router</li>
        <li>API routes for backend functionality</li>
        <li>Excellent TypeScript support</li>
      </ul>

      <h2>Server Components</h2>
      <p>React Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client. This results in faster page loads and better performance.</p>

      <h2>Best Practices</h2>
      <p>When building scalable Next.js applications, consider these best practices:</p>
      <ol>
        <li>Use Server Components by default</li>
        <li>Implement proper caching strategies</li>
        <li>Optimize images with next/image</li>
        <li>Use dynamic imports for code splitting</li>
        <li>Implement proper error boundaries</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Next.js provides all the tools you need to build production-ready applications. By following best practices and leveraging its powerful features, you can create fast, scalable web applications that provide an excellent user experience.</p>
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} on Jake Bailes' blog.`,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Post Not Found</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <article className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
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
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-emerald-100 px-2 py-1 text-sm text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-emerald-600 prose-li:text-slate-600 dark:prose-headings:text-white dark:prose-p:text-slate-300 dark:prose-a:text-emerald-400 dark:prose-li:text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            Thanks for reading! If you have any questions or feedback, feel free to{" "}
            <Link href="/contact" className="text-emerald-600 hover:underline dark:text-emerald-400">
              get in touch
            </Link>
            .
          </p>
        </footer>
      </article>
    </div>
  );
}
