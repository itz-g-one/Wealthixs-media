import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wealthixs — AI Knowledge Base Agency | Your Knowledge. Compounded.",
  description:
    "We build custom AI knowledge bases that organize your files, notes, chats, and documents into a structured wiki your team can query anytime. Trusted by researchers, consultants, and founders across India.",
  keywords: [
    "AI knowledge base service India",
    "custom knowledge base builder",
    "second brain for business",
    "AI wiki builder",
    "internal knowledge management system",
    "AI-powered research assistant",
    "business knowledge management India",
  ],
  openGraph: {
    title: "Wealthixs — Your Knowledge. Compounded.",
    description:
      "We build custom AI knowledge systems for knowledge-intensive professionals. Turn scattered business knowledge into a searchable AI memory system.",
    type: "website",
    locale: "en_IN",
    siteName: "Wealthixs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealthixs — AI Knowledge Base Agency",
    description:
      "Turn scattered business knowledge into a searchable AI memory system.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
