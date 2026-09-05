import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { ThemeProvider, themeBootScript } from "@/lib/theme";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Baron Aerial Media";

function publicShareHost(): string {
  const raw = String(import.meta.env.VITE_PUBLIC_HOSTNAME ?? "").trim();
  const host = raw.split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
  if (!host || !host.includes(".") || !/^[a-z0-9.-]+$/.test(host)) return "";
  if (host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com")) {
    return "";
  }
  return host;
}

export const Route = createRootRoute({
  head: () => {
    const host = publicShareHost();
    const xBanner = host ? `https://${host}/x-banner.jpg` : undefined;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: APP_NAME },
        {
          name: "description",
          content:
            "FAA Part 107 aerial imaging, mapping, inspection, and property documentation. Owner-operated out of Newark, New Jersey.",
        },
        { name: "theme-color", content: "#0A0E0A" },
        ...(xBanner ? [{ property: "x:game:image", content: xBanner }] : []),
      ],
      links: [
        { rel: "icon", type: "image/png", href: "/brand/favicon-32.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/brand/apple-touch.png" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap",
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: AppErrorComponent,
  component: RootDocument,
});

function NotFound() {
  return (
    <PageShell tone="light">
      <section className="site-container grid min-h-[70vh] place-content-center gap-4 py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="text-5xl">That page isn’t on the flight plan.</h1>
        <p className="lead mx-auto">The URL doesn’t match a published page. Head home or open the work gallery.</p>
        <div className="mt-4 flex justify-center gap-3">
          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/work">Work</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeProvider>
            <Outlet />
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
