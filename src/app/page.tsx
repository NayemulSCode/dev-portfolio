import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  // title: {
  //   default: "Developer Portfolio",
  //   template: "%s | Dev Portfolio",
  // },
  description: "Showcase of my work and projects",
  keywords: [
    "developer",
    "portfolio",
    "projects",
    "web development",
    "full-stack",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Dev Saheb", url: "https://devsaheb.com" }],
  creator: "Dev Saheb",
  openGraph: {
    title: "Developer Portfolio",
    description: "Showcase of my work and projects",
    url: "https://devsaheb.com",
    siteName: "Dev Portfolio",
    images: [
      {
        url: "https://devsaheb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description: "Showcase of my work and projects",
    images: ["https://devsaheb.com/og-image.jpg"],
    creator: "@devsaheb",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}
