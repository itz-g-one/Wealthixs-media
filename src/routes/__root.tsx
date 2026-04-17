import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            err.404
          </p>
          <h1 className="mt-3 font-display text-7xl tracking-tight">Lost in the wiki.</h1>
          <p className="mt-4 font-hand text-2xl text-muted-foreground">
            this page isn't indexed.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:shadow-sketch-sm"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wealthixs — Your knowledge. Compounded." },
      {
        name: "description",
        content:
          "We build custom AI knowledge bases that turn your scattered files, notes, and chats into a searchable wiki your team can query anytime.",
      },
      { name: "author", content: "Wealthixs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@wealthixs" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
