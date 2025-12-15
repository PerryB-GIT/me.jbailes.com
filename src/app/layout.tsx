import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Perry Bailes | Technology Leader & AI Consultant",
    template: "%s | Perry Bailes",
  },
  description: "Technology leader and AI consultant specializing in LLM implementation, AI agents, MCP integration, custom workflows, and digital transformation.",
  keywords: ["AI consultant", "LLM", "AI agents", "MCP", "automation", "vibe coding", "technology leader", "digital transformation", "custom workflows"],
  authors: [{ name: "Perry Bailes" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://me.jbailes.com",
    siteName: "Perry Bailes",
    title: "Perry Bailes | Technology Leader & AI Consultant",
    description: "Technology leader and AI consultant specializing in LLM implementation, AI agents, MCP integration, custom workflows, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perry Bailes | Technology Leader & AI Consultant",
    description: "Technology leader and AI consultant specializing in LLM implementation, AI agents, MCP integration, custom workflows, and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
